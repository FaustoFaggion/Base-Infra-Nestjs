import { JwtService } from "@nestjs/jwt";
import { AuthTokenStrategyPort } from "../../ports/token.strategy.port";
import { ConfigService } from "@nestjs/config";
export declare class JwtStrategy implements AuthTokenStrategyPort {
    private readonly jwtService;
    private readonly config;
    constructor(jwtService: JwtService, config: ConfigService);
    generate_auth_token(type: string, user_id: string, user_email: string): Promise<string>;
    verify_auth_token(req: Request, access_token: string): Promise<boolean>;
}
