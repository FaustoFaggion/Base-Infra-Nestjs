import { Inject, Injectable } from "@nestjs/common";
import { AuthTokenStrategyPort } from "../ports/token.strategy.port";

@Injectable()
export class AuthTokenStrategy {

    constructor(@Inject('AuthTokenStrategyPort')
                private readonly authTokenStrategyPort: AuthTokenStrategyPort) {}

    async generate_auth_token(type: string, user_id: string, user_email: string): Promise<string> | null {
        return this.authTokenStrategyPort.generate_auth_token(type, user_id, user_email);
    }
}