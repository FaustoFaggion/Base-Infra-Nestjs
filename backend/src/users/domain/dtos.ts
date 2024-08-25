import { IsString, IsEmail, IsNotEmpty, IsEnum } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { UserEntity } from "./user.entity";
import { Role } from "src/auth/adapters/authorization/rbac.policy";

/* INPUT*/

export class UserCreateDto {

    @IsNotEmpty()
    @IsEmail()
    email:              string;
    
    @IsNotEmpty()
    @IsString()
    password:           string;

    roles:              string[];
}

export class UserUpdateDto extends PartialType(UserCreateDto) {

    @IsEmail()
    @IsNotEmpty()
    email:              string;

    @IsNotEmpty()
    @IsString()
    first_name:         string;

    @IsNotEmpty()
    @IsString()
    last_name:          string;

}

/* OUTPUT*/

export class UserOutputDto {

    email:              string;
    first_name:         string;
    last_name:          string;
    roles:              Role[];

    constructor(obj: UserEntity) {
        this.email = obj.email;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.roles = obj.roles
    }
}