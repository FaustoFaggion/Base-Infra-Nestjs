"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./users/user.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("../config/configuration");
const auth_module_1 = require("./auth/auth.module");
const auth_guard_1 = require("./auth/adapters/authentication/auth.guard");
const jwt_1 = require("@nestjs/jwt");
const validation_1 = require("../config/validation");
const rbac_policy_1 = require("./auth/adapters/authorization/rbac.policy");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_guard_1.AuthGuard)
            .exclude({ path: 'auth/signin', method: common_1.RequestMethod.POST }, { path: 'auth/signup', method: common_1.RequestMethod.POST }, { path: 'user/create', method: common_1.RequestMethod.POST }, { path: 'auth/refresh-token', method: common_1.RequestMethod.GET })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
                load: [configuration_1.configuration],
                validationSchema: validation_1.validationSchema,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: rbac_policy_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map