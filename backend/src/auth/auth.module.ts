import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { AuthController } from "./adapters/authentication/auth.controller";
import { AuthService } from "./useCases/auth.service";
import { JwtStrategy } from "./adapters/authentication/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthTokenStrategy } from "./useCases/auth.tokenStrategy";
import { AuthPasswordStrategy } from "./adapters/authentication/auth.password.strategy";
import { RBAC } from "./adapters/authorization/rbac.policy";

@Module({
    imports: [JwtModule.registerAsync({
                imports: [ConfigModule],
                useFactory: async(configService: ConfigService) => ({
                    secret: configService.get<string>('jwt.secret'),
                    signOptions: { expiresIn: configService.get<string>('jwt.expiresIn')},
                    global: true,
                }),
                inject: [ConfigService],
            }),
            UserModule],
    controllers: [AuthController],
    providers: [RBAC, AuthService, AuthTokenStrategy, JwtStrategy, AuthPasswordStrategy,
                {
                    provide: 'AuthPort',
                    useExisting: AuthService
                },
                {
                    provide: 'AuthTokenStrategyPort',
                    useExisting: JwtStrategy
                },
                {
                    provide: 'AuthPasswordStrategyPort',
                    useExisting: AuthPasswordStrategy
                }
            ],
    exports: [RBAC, AuthPasswordStrategy]
})
export class AuthModule {}