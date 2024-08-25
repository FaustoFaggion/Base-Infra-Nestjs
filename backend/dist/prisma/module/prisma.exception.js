"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaException = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
class PrismaException {
    constructor() {
        this.errorCodesStatusMapping = new Map([
            ["P2002", this.p2002],
            ["P2025", this.p2025],
            ["P2021", this.p2021]
        ]);
    }
    throwException(e) {
        if (e instanceof library_1.PrismaClientKnownRequestError) {
            let exception = this.errorCodesStatusMapping.get(e.code);
            if (exception) {
                exception(e);
            }
        }
        console.log(e.code);
    }
    p2002(e) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNAUTHORIZED,
            e: 'Data base error! Unique constraint failed.',
        }, common_1.HttpStatus.UNAUTHORIZED, {
            cause: e,
        });
    }
    p2025(e) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            e: 'Data Not Found!',
        }, common_1.HttpStatus.NOT_FOUND, {
            cause: e,
        });
    }
    p2021(e) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            e: 'The table does not exist in the current database!',
        }, common_1.HttpStatus.NOT_FOUND, {
            cause: e,
        });
    }
}
exports.PrismaException = PrismaException;
//# sourceMappingURL=prisma.exception.js.map