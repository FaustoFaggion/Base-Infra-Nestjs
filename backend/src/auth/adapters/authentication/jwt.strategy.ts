import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthTokenStrategyPort } from "../../ports/token.strategy.port";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy implements AuthTokenStrategyPort {

    constructor(private readonly jwtService: JwtService,
                private readonly config: ConfigService) {}
    
    async generate_auth_token(type: string, user_id: string, user_email: string): Promise<string> {

        const payload = { sub: user_id, userEmail: user_email};
        let token;
        if (type.includes('access')) {

            token = await this.jwtService.signAsync(payload,
                {
                    expiresIn: this.config.get('ACCESS_TOKEN_EXPIRES_IN'),
                    secret: this.config.get('ACCESS_TOKEN_SECRET')
                }
            );
        }

        if (type.includes('refresh')) {

            token = await this.jwtService.signAsync(payload,
                {
                    expiresIn: this.config.get('REFRESH_TOKEN_EXPIRES_IN'),
                    secret: this.config.get('REFRESH_TOKEN_SECRET')
                }
            );
        }
            

        return token;
    }

    async verify_auth_token(req: Request, access_token: string): Promise<boolean> {
        
        try {
            const payload = await this. jwtService.verifyAsync(access_token, {
                secret: this.config.get<string>('JWT_SECRET')
            });

            req['user'] = payload;
        } catch {
            throw new UnauthorizedException;
        }
        return true;
    }
}