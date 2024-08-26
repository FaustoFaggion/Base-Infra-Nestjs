import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from 'config/configuration';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/adapters/authentication/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { validationSchema } from 'config/validation';
import { RolesGuard } from './auth/adapters/authorization/rbac.policy';
// import { UserRepository } from './users/adapters/user.repository';
// import { useResolvedPath } from 'react-router-dom';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      validationSchema,  

    }),
    UserModule,
    AuthModule,
    JwtModule  
  ],
  controllers: [],
  providers: [
              {
                provide: APP_GUARD,
                useClass: RolesGuard,
              },
            ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthGuard)
      .exclude({path: 'auth/signin', method: RequestMethod.POST},
      {path: 'auth/signup', method: RequestMethod.POST},
      {path: 'user/create', method: RequestMethod.POST}
      )
      .forRoutes('*');
  }
}

