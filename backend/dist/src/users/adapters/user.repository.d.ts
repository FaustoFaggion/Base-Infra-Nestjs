import { UserOutputPort } from "../ports/user.output.port";
import { UserCreateDto, UserUpdateDto } from "../domain/dtos";
import { UserEntity } from "../domain/user.entity";
import { PrismaService } from "prisma/module/prisma.service";
import { PrismaException } from "prisma/module/prisma.exception";
export declare class UserRepository implements UserOutputPort {
    private readonly orm;
    private readonly databaseException;
    constructor(orm: PrismaService, databaseException: PrismaException);
    create(dto: UserCreateDto): Promise<UserEntity>;
    update(dto: UserUpdateDto): Promise<UserEntity>;
    delete(email: string): Promise<void>;
    deleteAll(): Promise<void>;
    findOne(email: string): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
}
