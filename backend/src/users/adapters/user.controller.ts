import { Body, Controller, Inject, Post, Put, Delete, Get, Param, UseGuards, Req } from '@nestjs/common';
import { UserInputPort } from '../ports/user.input.port';
import { UserCreateDto, UserOutputDto, UserUpdateDto } from '../domain/dtos';
import { Actions, Resources, Roles } from 'src/auth/adapters/authorization/rbac.policy';

@Controller('user')
export class UserController {

    constructor(@Inject('UserInputPort')
                private readonly userInputPort: UserInputPort) {}

    
    @Post("/create")
    async create(@Body() dto: UserCreateDto): Promise<UserOutputDto> {    
        return await this.userInputPort.create(dto);
    }
    
    @Put("/update")
    @Roles({
        resource: Resources.USER_DATA,
        action: Actions.UPDATE,
    })
    async update(@Body() dto: UserUpdateDto): Promise<UserOutputDto> {
        return await this.userInputPort.update(dto);
    }

    @Put("/update-me")
    @Roles({
        resource: Resources.USER_DATA,
        action: Actions.UPDATE_OWN,
    })
    async updateMe(@Req() request, @Body() dto: UserUpdateDto): Promise<UserOutputDto> {
        return await this.userInputPort.updateMe(request.user.userEmail, dto);
    }
    
    @Delete("/delete/:email")
    @Roles({
        resource: Resources.USER_DATA,
        action: Actions.DELETE,
    })
    async delete(@Param('email') email: string): Promise<void> {
        return await this.userInputPort.delete(email);
    }

    @Delete("/delete-all")
    async deleteAll(): Promise<void> {
        return await this.userInputPort.deleteAll();
    }
    
    @Get("/find-one/:email")
    async findOne(@Param('email') email: string): Promise<UserOutputDto> {
        return await this.userInputPort.findOne(email);
    }
    
    @Get("/find-all")
    async findAll(): Promise<UserOutputDto[]> {
        return await this.userInputPort.findAll();
    }
}
