import { PrismaClient } from '@prisma/client';
import { Role } from "../src/auth/adapters/authorization/rbac.policy";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Seeding data...");

    let joao = await prisma.user.create({
      data: {
        email: "adm@email.com",
        password: '123',
        first_name: 'adm',
        last_name: 'adm',
        roles: [Role.ADMIN]  // Ensure Role.ADMIN is defined and valid
      },
    });

    console.log("User created:", joao);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
