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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../domain/dtos");
const auth_tokenStrategy_1 = require("./auth.tokenStrategy");
let AuthService = class AuthService {
    constructor(userRepositoryPort, authTokenStrategy, authPasswordStrategyPort) {
        this.userRepositoryPort = userRepositoryPort;
        this.authTokenStrategy = authTokenStrategy;
        this.authPasswordStrategyPort = authPasswordStrategyPort;
    }
    async signin(dto) {
        const user = await this.userRepositoryPort.findOne(dto.email);
        if (!user) {
            throw new common_1.NotFoundException;
        }
        let pass = await this.authPasswordStrategyPort.verifyPassword(dto.password, user.password);
        if (!pass) {
            throw new common_1.UnauthorizedException;
        }
        let response = new dtos_1.LoginResponseDto(user);
        response.access_token = await this.authTokenStrategy.generate_auth_token('access', user.id, user.email);
        response.refresh_token = await this.authTokenStrategy.generate_auth_token('refresh', user.id, user.email);
        return response;
    }
    async signup(dto) {
        let userDto = dto;
        userDto.password = await this.authPasswordStrategyPort.encryptPassword(dto.password);
        const user = await this.userRepositoryPort.create(userDto);
        let response = new dtos_1.LoginResponseDto(user);
        response.access_token = await this.authTokenStrategy.generate_auth_token('access', user.id, user.email);
        response.refresh_token = await this.authTokenStrategy.generate_auth_token('refresh', user.id, user.email);
        return response;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UserOutputPort')),
    __param(2, (0, common_1.Inject)('AuthPasswordStrategyPort')),
    __metadata("design:paramtypes", [Object, auth_tokenStrategy_1.AuthTokenStrategy, Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map