import { LoginDto, LoginResponseDto } from "../domain/dtos";
import { UserOutputPort } from "src/users/ports/user.output.port";
import { UserCreateDto } from "src/users/domain/dtos";
import { AuthPort } from "../ports/auth.port";
import { AuthTokenStrategy } from "./auth.tokenStrategy";
import { AuthPasswordStrategyPort } from "../ports/auth.password.port";
export declare class AuthService implements AuthPort {
    private readonly userRepositoryPort;
    private readonly authTokenStrategy;
    private readonly authPasswordStrategyPort;
    constructor(userRepositoryPort: UserOutputPort, authTokenStrategy: AuthTokenStrategy, authPasswordStrategyPort: AuthPasswordStrategyPort);
    signin(dto: LoginDto): Promise<LoginResponseDto>;
    signup(dto: UserCreateDto): Promise<LoginResponseDto>;
    refreshToken(email: string): Promise<String>;
}
