import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthTokenStrategyPort } from "../../ports/token.strategy.port";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy implements AuthTokenStrategyPort {

    constructor(private readonly jwtService: JwtService,
                private readonly config: ConfigService) {}
    
    async generate_access_token(user_id: string, user_email: string): Promise<string> {

        const payload = { sub: user_id, userEmail: user_email};
        const access_token = await this.jwtService.signAsync(payload);

        return access_token
    }

    async verify_access_token(req: Request, access_token: string): Promise<boolean> {
        
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