export interface AuthPasswordStrategyPort {
    encryptPassword(password: string): Promise<string>;
    verifyPassword(password_to_verify: string, password: string): Promise<boolean>;
}
