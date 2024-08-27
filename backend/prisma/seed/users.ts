import { Role } from "../../src/auth/adapters/authorization/rbac.policy";

export const Users = [
    {
        email: "adm@email.com",
        password: '123',
        first_name: 'adm',
        last_name: 'adm',
        roles: [Role.ADMIN]
    },
    {
        email: "vc@email.com",
        password: '123',
        first_name: 'vcName',
        last_name: 'vcLastName',
        roles: [Role.USER]
    }
]
