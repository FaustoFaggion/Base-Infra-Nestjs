import { UserInputPort } from '../ports/user.input.port';
import { UserCreateDto, UserOutputDto, UserUpdateDto } from '../domain/dtos';
export declare class UserController {
    private readonly userInputPort;
    constructor(userInputPort: UserInputPort);
    create(dto: UserCreateDto): Promise<UserOutputDto>;
    update(dto: UserUpdateDto): Promise<UserOutputDto>;
    updateMe(request: any, dto: UserUpdateDto): Promise<UserOutputDto>;
    delete(email: string): Promise<void>;
    deleteAll(): Promise<void>;
    findOne(email: string): Promise<UserOutputDto>;
    findAll(): Promise<UserOutputDto[]>;
}
