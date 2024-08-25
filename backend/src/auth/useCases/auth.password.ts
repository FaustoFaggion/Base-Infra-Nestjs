import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AuthPassword {
    
    async savePassword(password: string): Promise<string> {
        return password;
    }

    async verifyPassword(password: string): Promise<boolean> {
        return true;
    }
}