import { AuthTokenStrategyPort } from "../ports/token.strategy.port";
export declare class AuthTokenStrategy {
    private readonly authTokenStrategyPort;
    constructor(authTokenStrategyPort: AuthTokenStrategyPort);
    generate_auth_token(type: string, user_id: string, user_email: string): Promise<string> | null;
}
