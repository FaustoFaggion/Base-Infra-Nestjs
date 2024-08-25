import { UserInputPort } from '../ports/user.input.port';
import { UserCreateDto, UserOutputDto, UserUpdateDto } from '../domain/dtos';
import { UserOutputPort } from '../ports/user.output.port';
export declare class UserService implements UserInputPort {
    private readonly userOutputPort;
    constructor(userOutputPort: UserOutputPort);
    create(dto: UserCreateDto): Promise<UserOutputDto>;
    update(dto: UserUpdateDto): Promise<UserOutputDto>;
    updateMe(userEmail: string, dto: UserUpdateDto): Promise<UserOutputDto>;
    delete(email: string): Promise<void>;
    deleteAll(): Promise<void>;
    findOne(email: string): Promise<UserOutputDto>;
    findAll(): Promise<UserOutputDto[]>;
}
