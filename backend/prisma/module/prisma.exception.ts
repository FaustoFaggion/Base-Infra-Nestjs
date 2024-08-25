import { HttpException, HttpStatus } from "@nestjs/common";
import { Prisma } from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class PrismaException {

    private errorCodesStatusMapping: Map<string, Function> = new Map ([
        ["P2002", this.p2002],
        ["P2025", this.p2025],
        ["P2021", this.p2021]
    ]);

    public throwException(e: any): void {
        if (e instanceof PrismaClientKnownRequestError) {
            let exception = this.errorCodesStatusMapping.get(e.code);
            if (exception) {
                exception(e);
            }
        }
        console.log(e.code);
    }
    
    private p2002(e: PrismaClientKnownRequestError): void {
        throw new HttpException({
            status: HttpStatus.UNAUTHORIZED,
            e: 'Data base error! Unique constraint failed.',
        }, HttpStatus.UNAUTHORIZED, {
            cause: e,
        });
    }

    private p2025(e: PrismaClientKnownRequestError): void {
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            e: 'Data Not Found!',
        }, HttpStatus.NOT_FOUND, {
            cause: e,
        });
    }

    private p2021(e: PrismaClientKnownRequestError): void {
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            e: 'The table does not exist in the current database!',
        }, HttpStatus.NOT_FOUND, {
            cause: e,
        });
    }

}