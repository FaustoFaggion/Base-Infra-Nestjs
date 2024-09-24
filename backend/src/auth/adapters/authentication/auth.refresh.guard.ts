import { CanActivate, ExecutionContext, Inject, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
import { AuthTokenStrategyPort } from "../../ports/token.strategy.port";

@Injectable()
export class AuthRefreshGuard implements CanActivate {
    
    constructor(private readonly jwtService: JwtService,
                private readonly config: ConfigService,
                /*@Inject('AuthTokenStrategyPort')
                private readonly authTokenStrategyPort: AuthTokenStrategyPort*/) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest();
        const refresh_token = this.extractTokenFromHeader(request); 
        
        if(!refresh_token) {
            throw new UnauthorizedException;
        }
        try {
            const payload = await this. jwtService.verifyAsync(refresh_token, {
                secret: this.config.get<string>('REFRESH_TOKEN_SECRET')
            });

            request['user'] = payload;
        } catch {
            throw new UnauthorizedException;
        }
        // await this.authTokenStrategyPort.verify_access_token(req, access_token);

        return true;
    }

    private extractTokenFromHeader(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        console.log('refresh token  ', request);
        return type === 'Refresh' ? token : undefined;
      }
    
}