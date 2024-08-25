"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPasswordStrategy = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
class AuthPasswordStrategy {
    async encryptPassword(password) {
        const saltOrRound = 8;
        const hashed_password = await bcrypt.hashSync(password, saltOrRound);
        return hashed_password;
    }
    async verifyPassword(password_to_verify, hashed_password) {
        if (!await bcrypt.compare(password_to_verify, hashed_password)) {
            throw new common_1.UnauthorizedException('Password incorrect');
        }
        return true;
    }
}
exports.AuthPasswordStrategy = AuthPasswordStrategy;
//# sourceMappingURL=auth.password.strategy.js.map