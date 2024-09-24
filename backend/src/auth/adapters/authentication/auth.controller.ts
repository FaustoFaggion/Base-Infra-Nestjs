import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { UserCreateDto } from "src/users/domain/dtos";
import { AuthPort } from "../../ports/auth.port";
import { LoginDto, LoginResponseDto } from "../../domain/dtos";
import { AuthRefreshGuard } from "./auth.refresh.guard";

@Controller('auth')
export class AuthController {
    
    constructor(@Inject('AuthPort')
                private readonly authPort: AuthPort) {}

    @Post('signin')
    async signin(@Body() dto: LoginDto): Promise<LoginResponseDto> {
        return await this.authPort.signin(dto);
    }

    @Post('signup')
    async signup(@Body() dto: UserCreateDto): Promise<any> {
        return this.authPort.signup(dto);
    }

    @UseGuards(AuthRefreshGuard)
    @Get('refresh-token')
    async refreshToken(@Body() email: string) {
        return this.authPort.refreshToken(email);
    }
}