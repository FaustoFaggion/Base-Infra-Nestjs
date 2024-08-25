"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/module/prisma.service");
const prisma_exception_1 = require("../../../prisma/module/prisma.exception");
const rbac_policy_1 = require("../../auth/adapters/authorization/rbac.policy");
let UserRepository = class UserRepository {
    constructor(orm, databaseException) {
        this.orm = orm;
        this.databaseException = databaseException;
    }
    async create(dto) {
        let response;
        try {
            response = await this.orm.user.create({
                data: {
                    email: dto.email,
                    password: dto.password,
                    roles: [rbac_policy_1.Role.USER],
                }
            });
        }
        catch (e) {
            this.databaseException.throwException(e);
        }
        return response;
    }
    async update(dto) {
        let response;
        try {
            response = await this.orm.user.update({
                where: {
                    email: dto.email,
                },
                data: {
                    first_name: dto.first_name,
                    last_name: dto.last_name,
                    password: dto.password
                },
            });
        }
        catch (e) {
            this.databaseException.throwException(e);
        }
        return response;
    }
    async delete(email) {
        try {
            await this.orm.user.delete({
                where: {
                    email: email,
                }
            });
        }
        catch (e) {
            this.databaseException.throwException(e);
        }
    }
    async deleteAll() {
        try {
            await this.orm.user.deleteMany();
        }
        catch (e) {
            this.databaseException.throwException(e);
        }
    }
    async findOne(email) {
        let response;
        try {
            response = await this.orm.user.findUniqueOrThrow({
                where: {
                    email: email,
                }
            });
        }
        catch (e) {
            this.databaseException.throwException(e);
        }
        return response;
    }
    async findAll() {
        let response;
        try {
            response = await this.orm.user.findMany();
        }
        catch (e) {
            console.log(response);
            this.databaseException.throwException(e);
        }
        return response;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        prisma_exception_1.PrismaException])
], UserRepository);
//# sourceMappingURL=user.repository.js.map