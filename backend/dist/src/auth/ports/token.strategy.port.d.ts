export interface AuthTokenStrategyPort {
    generate_access_token(user_id: string, user_email: string): Promise<string>;
    verify_access_token(req: Request, access_token: string): Promise<boolean>;
}
