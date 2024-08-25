import { UserCreateDto, UserOutputDto, UserUpdateDto } from "../domain/dtos";
export interface UserInputPort {
    create(dto: UserCreateDto): Promise<UserOutputDto>;
    update(dto: UserUpdateDto): Promise<UserOutputDto>;
    updateMe(userEmail: string, dto: UserUpdateDto): Promise<UserOutputDto>;
    delete(email: string): Promise<void>;
    deleteAll(): Promise<void>;
    findOne(email: string): Promise<UserOutputDto>;
    findAll(): Promise<UserOutputDto[]>;
}
