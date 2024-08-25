import { CanActivate, ExecutionContext, Inject, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
import { AuthTokenStrategyPort } from "../../ports/token.strategy.port";

@Injectable()
export class AuthGuard implements NestMiddleware {
    
    constructor(private readonly jwtService: JwtService,
                private readonly config: ConfigService,
                /*@Inject('AuthTokenStrategyPort')
                private readonly authTokenStrategyPort: AuthTokenStrategyPort*/) {}
    
    async use(req: Request, res: Response, next: NextFunction) {
        
        const access_token = this.extractTokenFromHeader(req); 
        
        if(!access_token) {
            throw new UnauthorizedException;
        }
        try {
            const payload = await this. jwtService.verifyAsync(access_token, {
                secret: this.config.get<string>('jwt.secret')
            });

            req['user'] = payload;
        } catch {
            throw new UnauthorizedException;
        }
        // await this.authTokenStrategyPort.verify_access_token(req, access_token);

        next();
    }

    private extractTokenFromHeader(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }
    
}