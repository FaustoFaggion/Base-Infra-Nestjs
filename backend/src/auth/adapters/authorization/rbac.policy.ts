import { CanActivate, ExecutionContext, Inject, Injectable, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserEntity } from "src/users/domain/user.entity";
import { UserOutputPort } from "src/users/ports/user.output.port";

export const Roles = (...roles: [{resource: Resources, action: Actions}]) => SetMetadata('roles', roles)

@Injectable()
export class RBAC {
    
    private roles: Map<Role, {resource: Resources, action: Actions}[]>; 
    // private paths: Map<string, Action[]>;
    constructor() {
        this.roles = new Map();
        
        this.roles.set(Role.USER, [
            {resource: Resources.USER_DATA, action: Actions.UPDATE_OWN},
            {resource: Resources.USER_DATA, action: Actions.GET_OWN},
        ]);

        this.roles.set(Role.ADMIN, [
            {resource: Resources.USER_DATA, action: Actions.UPDATE},
            {resource: Resources.USER_DATA, action: Actions.UPDATE_OWN},
            {resource: Resources.USER_DATA, action: Actions.GET},
            {resource: Resources.USER_DATA, action: Actions.GET_OWN},
            {resource: Resources.USER_DATA, action: Actions.DELETE},
        ])
    }
    
    async authorize(userRoles: Role[], auth: {resource: Resources, action: Actions}[]): Promise<boolean> {

        for(const userRole of userRoles) {
            const permissions = this.roles.get(userRole);
            if (permissions) {
                if (auth.some(authItem => 
                                permissions.some(permission =>
                                    permission.resource === authItem.resource && permission.action === authItem.action))) {
                    return true;
                }
            }
        }
        return false;
    }
    
}

/* VARIABLES USED IN A RBAC AUTHORIZATION */

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export enum Resources {
    USER_DATA = 'USER_DATA',   
}

export enum Actions {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    UPDATE_OWN = 'UPDATE_OWN',
    DELETE = 'DELETE',
    GET = 'GET',
    GET_OWN = 'GET_OWN',
}

/* GUARD LOGIC FOR THE DECORATOR. cAN ACCESS THE DECORATOR THROUGTH CLASS REFLECTOR */

@Injectable()
export class RolesGuard implements CanActivate {
    
    constructor(private reflector: Reflector,
                @Inject('UserOutputPort')        
                private readonly userOutputPort: UserOutputPort,
                private readonly rbacPolicy: RBAC,
                ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        /* WICH ARE THE REQUERIED ROLES */
        const requiredRoles = this.reflector.getAllAndOverride<[{resource: Resources, action: Actions}]>('roles', [
            context.getHandler(),
            context.getClass()
        ]);
        
        if (!requiredRoles) {
            console.log("No RequiredRole: ", requiredRoles);
            return true;
        }
        console.log("RequiredRole: ", requiredRoles);
        /* THE USER HAS THE REQUIRED ROLE */
        const requestInfo = context.switchToHttp().getRequest();
        // console.log("requestInfo", requestInfo);
        let user: UserEntity = await this.userOutputPort.findOne(requestInfo.user.userEmail)

        // let response = requiredRoles.some((role) => user.roles?.includes(role));
        let response = true;
        response = await this.rbacPolicy.authorize(user.roles, requiredRoles);

        return response;
    }
    
}