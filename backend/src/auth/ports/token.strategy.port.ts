
export interface AuthTokenStrategyPort {

    generate_auth_token(type: string, user_id: string, user_email: string): Promise<string>;

    verify_auth_token(req: Request, access_token: string): Promise<boolean>;
}