import { Inject, Injectable } from "@nestjs/common";
import { UserOutputPort } from "../ports/user.output.port";
import { UserCreateDto, UserOutputDto, UserUpdateDto } from "../domain/dtos";
import { UserEntity } from "../domain/user.entity";
import { PrismaService } from "prisma/module/prisma.service";
import { PrismaException } from "prisma/module/prisma.exception";
import { Role } from "src/auth/adapters/authorization/rbac.policy";

@Injectable()
export class UserRepository implements UserOutputPort {
    
    constructor(private readonly orm: PrismaService,
                private readonly databaseException: PrismaException) {}

    async create(dto: UserCreateDto): Promise<UserEntity> {
        
        let response;
        try {
            response = await this.orm.user.create({
                data : {
                    email: dto.email,
                    password: dto.password,
                    roles: [Role.USER],
                }
            });
            
        } catch(e) {
           this.databaseException.throwException(e);
        }
        return response
    }

    async update(dto: UserUpdateDto): Promise<UserEntity> {
        let response;
        try {
            response = await this.orm.user.update({
                where : {
                    email: dto.email,
                },
                data : {
                    first_name: dto.first_name,
                    last_name: dto.last_name,
                    password: dto.password
                },
            });
        } catch(e) {
           this.databaseException.throwException(e);
        }
        return response;
    }
    
    async delete(email: string): Promise<void> {
        try {
            await this.orm.user.delete({
                where : {
                    email: email,
                }
            });
        } catch(e) {
           this.databaseException.throwException(e);
        }
    }

    async deleteAll(): Promise<void> {
        try {
            await this.orm.user.deleteMany();
        } catch(e) {
           this.databaseException.throwException(e);
        }
    }

    async findOne(email: string): Promise<UserEntity> {
        let response;
        try {
            response = await this.orm.user.findUniqueOrThrow({
                where : {
                    email: email,
                }
            });
        } catch(e) {
           this.databaseException.throwException(e);
        }
        return response;
    }

    async findAll(): Promise<UserEntity[]> {
        let response;
        try {
            response = await this.orm.user.findMany();
        } catch(e) {
            console.log(response);
           this.databaseException.throwException(e);
        }
        return response;
    }
}
