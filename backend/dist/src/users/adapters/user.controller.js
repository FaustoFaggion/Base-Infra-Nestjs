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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../domain/dtos");
const rbac_policy_1 = require("../../auth/adapters/authorization/rbac.policy");
let UserController = class UserController {
    constructor(userInputPort) {
        this.userInputPort = userInputPort;
    }
    async create(dto) {
        return await this.userInputPort.create(dto);
    }
    async update(dto) {
        return await this.userInputPort.update(dto);
    }
    async updateMe(request, dto) {
        return await this.userInputPort.updateMe(request.user.userEmail, dto);
    }
    async delete(email) {
        return await this.userInputPort.delete(email);
    }
    async deleteAll() {
        return await this.userInputPort.deleteAll();
    }
    async findOne(email) {
        return await this.userInputPort.findOne(email);
    }
    async findAll() {
        return await this.userInputPort.findAll();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/update"),
    (0, rbac_policy_1.Roles)({
        resource: rbac_policy_1.Resources.USER_DATA,
        action: rbac_policy_1.Actions.UPDATE,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Put)("/update-me"),
    (0, rbac_policy_1.Roles)({
        resource: rbac_policy_1.Resources.USER_DATA,
        action: rbac_policy_1.Actions.UPDATE_OWN,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Delete)("/delete/:email"),
    (0, rbac_policy_1.Roles)({
        resource: rbac_policy_1.Resources.USER_DATA,
        action: rbac_policy_1.Actions.DELETE,
    }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)("/delete-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Get)("/find-one/:email"),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("/find-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(0, (0, common_1.Inject)('UserInputPort')),
    __metadata("design:paramtypes", [Object])
], UserController);
//# sourceMappingURL=user.controller.js.map