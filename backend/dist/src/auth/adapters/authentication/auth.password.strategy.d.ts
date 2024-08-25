import { AuthPasswordStrategyPort } from "../../ports/auth.password.port";
export declare class AuthPasswordStrategy implements AuthPasswordStrategyPort {
    encryptPassword(password: string): Promise<string>;
    verifyPassword(password_to_verify: string, hashed_password: string): Promise<boolean>;
}
