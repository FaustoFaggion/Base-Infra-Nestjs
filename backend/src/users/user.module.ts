import { Module } from '@nestjs/common';
import { UserController } from './adapters/user.controller';
import { UserService } from './useCases/user.service';
import { UserRepository } from './adapters/user.repository';
import { PrismaModule } from 'prisma/module/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers:[UserController],
    providers: [UserService, UserRepository,
        {
            provide: 'UserInputPort',
            useExisting: UserService
        },
        {
            provide: 'UserOutputPort',
            useExisting: UserRepository
        }
    ],
    exports: ['UserOutputPort']
})
export class UserModule {}
