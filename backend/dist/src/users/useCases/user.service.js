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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../domain/dtos");
let UserService = class UserService {
    constructor(userOutputPort) {
        this.userOutputPort = userOutputPort;
    }
    async create(dto) {
        let user = await this.userOutputPort.create(dto);
        let response = new dtos_1.UserOutputDto(user);
        return response;
    }
    async update(dto) {
        let user = await this.userOutputPort.update(dto);
        let response = new dtos_1.UserOutputDto(user);
        return response;
    }
    async updateMe(userEmail, dto) {
        if (userEmail !== dto.email) {
            throw new common_1.UnauthorizedException;
        }
        let user = await this.userOutputPort.update(dto);
        let response = new dtos_1.UserOutputDto(user);
        return response;
    }
    async delete(email) {
        return this.userOutputPort.delete(email);
    }
    async deleteAll() {
        return this.userOutputPort.deleteAll();
    }
    async findOne(email) {
        let user = await this.userOutputPort.findOne(email);
        let response = new dtos_1.UserOutputDto(user);
        return response;
    }
    async findAll() {
        let userList = await this.userOutputPort.findAll();
        let response = [];
        userList.forEach(element => {
            response.push(new dtos_1.UserOutputDto(element));
        });
        return response;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UserOutputPort')),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map