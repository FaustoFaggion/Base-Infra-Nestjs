import { UserEntity } from "src/users/domain/user.entity";
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class LoginResponseDto {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    access_token: string;
    constructor(obj: UserEntity);
}
