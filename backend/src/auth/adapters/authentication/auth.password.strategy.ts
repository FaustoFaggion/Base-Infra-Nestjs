import { UnauthorizedException } from "@nestjs/common";
import { AuthPasswordStrategyPort } from "../../ports/auth.password.port";
import * as bcrypt from 'bcrypt';

export class AuthPasswordStrategy implements AuthPasswordStrategyPort {
    async encryptPassword(password: string): Promise<string> {
        const saltOrRound = 8;
		const hashed_password = await bcrypt.hashSync(password, saltOrRound);
        
        return hashed_password;
    }

    async verifyPassword(password_to_verify: string, hashed_password: string): Promise<boolean> {
        
        if (!await bcrypt.compare(password_to_verify, hashed_password)) {
            throw new UnauthorizedException('Password incorrect')
        }
        return true;
    }
}