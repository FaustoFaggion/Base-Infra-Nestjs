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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let JwtStrategy = class JwtStrategy {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
    }
    async generate_auth_token(type, user_id, user_email) {
        const payload = { sub: user_id, userEmail: user_email };
        let token;
        if (type.includes('access')) {
            token = await this.jwtService.signAsync(payload, {
                expiresIn: this.config.get('ACCESS_TOKEN_EXPIRES_IN'),
                secret: this.config.get('ACCESS_TOKEN_SECRET')
            });
        }
        if (type.includes('refresh')) {
            token = await this.jwtService.signAsync(payload, {
                expiresIn: this.config.get('REFRESH_TOKEN_EXPIRES_IN'),
                secret: this.config.get('REFRESH_TOKEN_SECRET')
            });
        }
        return token;
    }
    async verify_auth_token(req, access_token) {
        try {
            const payload = await this.jwtService.verifyAsync(access_token, {
                secret: this.config.get('JWT_SECRET')
            });
            req['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException;
        }
        return true;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map