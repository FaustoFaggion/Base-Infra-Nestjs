import { UserEntity } from "./user.entity";
import { Role } from "src/auth/adapters/authorization/rbac.policy";
export declare class UserCreateDto {
    email: string;
    password: string;
    roles: string[];
}
declare const UserUpdateDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserCreateDto>>;
export declare class UserUpdateDto extends UserUpdateDto_base {
    email: string;
    first_name: string;
    last_name: string;
}
export declare class UserOutputDto {
    email: string;
    first_name: string;
    last_name: string;
    roles: Role[];
    constructor(obj: UserEntity);
}
export {};
