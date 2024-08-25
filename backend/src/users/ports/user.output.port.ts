import { UserCreateDto, UserUpdateDto } from "../domain/dtos";
import { UserEntity } from "../domain/user.entity";

export interface UserOutputPort {
    
    create(dto: UserCreateDto): Promise<UserEntity>;

    update(dto: UserUpdateDto): Promise<UserEntity>;
    
    delete(breed: string): Promise<void>;
    
    deleteAll(): Promise<void>;
    
    findOne(breed: string): Promise<UserEntity>;
    
    findAll(): Promise<UserEntity[]>;
}