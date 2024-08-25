import { Role } from "src/auth/adapters/authorization/rbac.policy";
export declare class UserEntity {
    id: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    roles: Role[];
}
