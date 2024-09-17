import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginDto, LoginResponseDto } from "../domain/dtos";
import { UserOutputPort } from "src/users/ports/user.output.port";
import { UserCreateDto } from "src/users/domain/dtos";
import { AuthPort } from "../ports/auth.port";
import { AuthTokenStrategy } from "./auth.tokenStrategy";
import { AuthPasswordStrategyPort } from "../ports/auth.password.port";

@Injectable()
export class AuthService implements AuthPort {

    constructor(@Inject('UserOutputPort')
                private readonly userRepositoryPort: UserOutputPort,
                private readonly authTokenStrategy: AuthTokenStrategy,
                @Inject('AuthPasswordStrategyPort')
                private readonly authPasswordStrategyPort: AuthPasswordStrategyPort) {}

    async signin(dto: LoginDto): Promise<LoginResponseDto> {

        const user = await this.userRepositoryPort.findOne(dto.email);
        if (!user) {
            throw new NotFoundException;
        }

        let pass: boolean = await this.authPasswordStrategyPort.verifyPassword(dto.password, user.password);
        if (!pass) {
            throw new UnauthorizedException;
        }

        let response = new LoginResponseDto(user);
        response.access_token = await this.authTokenStrategy.generate_auth_token('access', user.id, user.email);
        response.refresh_token = await this.authTokenStrategy.generate_auth_token('refresh', user.id, user.email);

        return response;
    }

    async signup(dto: UserCreateDto): Promise<LoginResponseDto> {
        
        let userDto = dto;
        userDto.password = await this.authPasswordStrategyPort.encryptPassword(dto.password);
        
        const user = await this.userRepositoryPort.create(userDto);
        let response = new LoginResponseDto(user);
        response.access_token = await this.authTokenStrategy.generate_auth_token('access', user.id, user.email);
        response.refresh_token = await this.authTokenStrategy.generate_auth_token('refresh', user.id, user.email);

        return response;
    }

}