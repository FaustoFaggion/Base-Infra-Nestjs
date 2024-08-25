import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "../../src/users/adapters/user.controller"
import { UserCreateDto, UserOutputDto, UserUpdateDto } from "src/users/domain/dtos"
import { UsersInputGateway } from "../../src/users/ports/user.input.port"


describe('UsersController', () => {

    let mockDto = {
        "email" : 'gra@gmail.com',
        "password" : '123',
        "first_name" : "gra",
        "last_name" : "oliveira"
    }

    let lstMockDto = [{"email" : 'gra@gmail.com', "password" : '123', "first_name" : "gra", "last_name" : "oliveira"},
            {"email" : 'tanner@gmail.com', "password" : '321', "first_name" : "Tanner", "last_name" : "Rodrigues"}
        ]

    let usersController: UsersController;
    let mockService: UsersInputGateway;

    class MockService implements UsersInputGateway {
        async createUser(dto: UserCreateDto): Promise<UserOutputDto> {
            return mockDto;
        }

        async updateUser(dto: UserUpdateDto): Promise<UserOutputDto> {
            return mockDto;
        }

        async deleteUser(email: string): Promise<void> {

        }

        async findOneUser(email: string): Promise<UserOutputDto> {
            return mockDto;
        }
        
        async findAllUser(): Promise<UserOutputDto[]> {
            return lstMockDto;
        }
    }

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [MockService,
                    {
                        provide: 'UsersInputGateway',
                        useExisting: MockService,
                    },
                ],
        }).compile();
        usersController = app.get<UsersController>(UsersController);
        mockService = app.get<UsersInputGateway>(MockService);
    });

    it('Should be defined', () => {
        expect(usersController).toBeDefined;
        expect(mockService).toBeDefined;
    });

    it('createUser should be called', async () => {
        expect(await usersController.createUser(mockDto)).toHaveBeenCalled
    });

    it('updateUser should be called', async () => {
        expect(await usersController.updateUser(mockDto)).toHaveBeenCalled;
    });

    it('deleteUser should be called', async () => {
        expect(await usersController.deleteUser('gra@gmail.com')).toHaveBeenCalled;
    });

    it('findOneUser should be called', async () => {
        expect(await usersController.findOneUser("gra@gmail.com")).toHaveBeenCalled;
    });

    it('findAllUser should be called', async () => {
        expect(await usersController.findAllUserBreed()).toHaveBeenCalled;
    });

})