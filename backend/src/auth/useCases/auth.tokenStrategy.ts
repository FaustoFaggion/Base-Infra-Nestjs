import { Inject, Injectable } from "@nestjs/common";
import { AuthTokenStrategyPort } from "../ports/token.strategy.port";

@Injectable()
export class AuthTokenStrategy {

    constructor(@Inject('AuthTokenStrategyPort')
                private readonly authTokenStrategyPort: AuthTokenStrategyPort) {}

    async generate_access_token(user_id: string, user_email: string): Promise<string> | null {
        return this.authTokenStrategyPort.generate_access_token(user_id, user_email);
    }
}