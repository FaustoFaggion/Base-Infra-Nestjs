import { UserCreateDto } from "src/users/domain/dtos";
import { AuthPort } from "../../ports/auth.port";
import { LoginDto, LoginResponseDto } from "../../domain/dtos";
export declare class AuthController {
    private readonly authPort;
    constructor(authPort: AuthPort);
    signin(dto: LoginDto): Promise<LoginResponseDto>;
    signup(dto: UserCreateDto): Promise<any>;
}
