import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserInputPort } from '../ports/user.input.port';
import { UserCreateDto, UserOutputDto, UserUpdateDto } from '../domain/dtos';
import { UserOutputPort } from '../ports/user.output.port';
import { response } from 'express';

@Injectable()
export class UserService implements UserInputPort {
    
    constructor(@Inject('UserOutputPort')
    private readonly userOutputPort: UserOutputPort) {}

    async create(dto: UserCreateDto): Promise<UserOutputDto> {
        
        let user = await this.userOutputPort.create(dto);
        let response: UserOutputDto = new UserOutputDto(user);
        
        return response; 
    }
    
    async update(dto: UserUpdateDto): Promise<UserOutputDto> {
        let user = await this.userOutputPort.update(dto);
        let response: UserOutputDto = new UserOutputDto(user);

        return response;
    }
    
    async updateMe(userEmail: string, dto: UserUpdateDto): Promise<UserOutputDto> {
        
        if (userEmail !== dto.email) {
            throw new UnauthorizedException;
        }
        
        let user = await this.userOutputPort.update(dto);
        let response: UserOutputDto = new UserOutputDto(user);

        return response;
    }

    async delete(email: string): Promise<void> {
        return this.userOutputPort.delete(email);
    }
    
    async deleteAll(): Promise<void> {
        return this.userOutputPort.deleteAll();
    }

    async findOne(email: string): Promise<UserOutputDto> {
        let user = await this.userOutputPort.findOne(email);
        let response: UserOutputDto = new UserOutputDto(user);
    
        return response;
    }
    
    async findAll(): Promise<UserOutputDto[]> {
        let userList = await this.userOutputPort.findAll();
        
        let response: UserOutputDto[] = [];
        userList.forEach(element => {
            response.push(new UserOutputDto(element));
        });

        return response;
    }

}
