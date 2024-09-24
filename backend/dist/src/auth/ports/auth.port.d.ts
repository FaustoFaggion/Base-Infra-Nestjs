import { UserCreateDto } from "src/users/domain/dtos";
import { LoginDto, LoginResponseDto } from "../domain/dtos";
export interface AuthPort {
    signin(dto: LoginDto): Promise<LoginResponseDto>;
    signup(dto: UserCreateDto): Promise<LoginResponseDto>;
    refreshToken(email: string): Promise<String>;
}
