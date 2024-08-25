export declare class AuthPassword {
    savePassword(password: string): Promise<string>;
    verifyPassword(password: string): Promise<boolean>;
}
