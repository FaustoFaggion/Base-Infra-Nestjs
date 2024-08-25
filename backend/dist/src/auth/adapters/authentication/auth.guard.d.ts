import { NestMiddleware } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
export declare class AuthGuard implements NestMiddleware {
    private readonly jwtService;
    private readonly config;
    constructor(jwtService: JwtService, config: ConfigService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    private extractTokenFromHeader;
}
