import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserOutputPort } from "src/users/ports/user.output.port";
export declare const Roles: (roles_0: {
    resource: Resources;
    action: Actions;
}) => import("@nestjs/common").CustomDecorator<string>;
export declare class RBAC {
    private roles;
    constructor();
    authorize(userRoles: Role[], auth: {
        resource: Resources;
        action: Actions;
    }[]): Promise<boolean>;
}
export declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare enum Resources {
    USER_DATA = "USER_DATA"
}
export declare enum Actions {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    UPDATE_OWN = "UPDATE_OWN",
    DELETE = "DELETE",
    GET = "GET",
    GET_OWN = "GET_OWN"
}
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly userOutputPort;
    private readonly rbacPolicy;
    constructor(reflector: Reflector, userOutputPort: UserOutputPort, rbacPolicy: RBAC);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
