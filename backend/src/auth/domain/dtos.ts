import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/users/domain/user.entity";

export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    email:          string;

    @IsString()
    @IsNotEmpty()
    password:       string;
}

export class LoginResponseDto {

    @IsString()
    @IsNotEmpty()
    id:                 string;

    @IsNotEmpty()
    @IsEmail()
    email:              string;
    
    @IsNotEmpty()
    @IsString()
    first_name:         string;
    
    @IsNotEmpty()
    @IsString()
    last_name:          string;

    @IsNotEmpty()
    @IsString()
    access_token:       string;

    constructor(obj: UserEntity) {
        this.id = obj.id;
        this.email = obj.email;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.access_token = null;
    }
}