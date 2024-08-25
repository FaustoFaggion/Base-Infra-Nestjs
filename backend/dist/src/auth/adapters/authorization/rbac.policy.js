"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = exports.Actions = exports.Resources = exports.Role = exports.RBAC = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;
let RBAC = class RBAC {
    constructor() {
        this.roles = new Map();
        this.roles.set(Role.USER, [
            { resource: Resources.USER_DATA, action: Actions.UPDATE_OWN },
            { resource: Resources.USER_DATA, action: Actions.GET_OWN },
        ]);
        this.roles.set(Role.ADMIN, [
            { resource: Resources.USER_DATA, action: Actions.UPDATE },
            { resource: Resources.USER_DATA, action: Actions.UPDATE_OWN },
            { resource: Resources.USER_DATA, action: Actions.GET },
            { resource: Resources.USER_DATA, action: Actions.GET_OWN },
            { resource: Resources.USER_DATA, action: Actions.DELETE },
        ]);
    }
    async authorize(userRoles, auth) {
        for (const userRole of userRoles) {
            const permissions = this.roles.get(userRole);
            if (permissions) {
                if (auth.some(authItem => permissions.some(permission => permission.resource === authItem.resource && permission.action === authItem.action))) {
                    return true;
                }
            }
        }
        return false;
    }
};
exports.RBAC = RBAC;
exports.RBAC = RBAC = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RBAC);
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
var Resources;
(function (Resources) {
    Resources["USER_DATA"] = "USER_DATA";
})(Resources || (exports.Resources = Resources = {}));
var Actions;
(function (Actions) {
    Actions["CREATE"] = "CREATE";
    Actions["UPDATE"] = "UPDATE";
    Actions["UPDATE_OWN"] = "UPDATE_OWN";
    Actions["DELETE"] = "DELETE";
    Actions["GET"] = "GET";
    Actions["GET_OWN"] = "GET_OWN";
})(Actions || (exports.Actions = Actions = {}));
let RolesGuard = class RolesGuard {
    constructor(reflector, userOutputPort, rbacPolicy) {
        this.reflector = reflector;
        this.userOutputPort = userOutputPort;
        this.rbacPolicy = rbacPolicy;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride('roles', [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles) {
            console.log("No RequiredRole: ", requiredRoles);
            return true;
        }
        console.log("RequiredRole: ", requiredRoles);
        const requestInfo = context.switchToHttp().getRequest();
        let user = await this.userOutputPort.findOne(requestInfo.user.userEmail);
        let response = true;
        response = await this.rbacPolicy.authorize(user.roles, requiredRoles);
        return response;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('UserOutputPort')),
    __metadata("design:paramtypes", [core_1.Reflector, Object, RBAC])
], RolesGuard);
//# sourceMappingURL=rbac.policy.js.map