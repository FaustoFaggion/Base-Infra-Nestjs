import { PrismaClient } from '@prisma/client';
import { Users } from "./users";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  try {
    console.log("Seeding data...");

    for(let user of Users) {
      let response = await prisma.user.findUnique({
        where: {
          email: user.email
        }
      })
      if (response == undefined) {
        const saltOrRound = 8;
        const hashed_password = await bcrypt.hashSync(user.password, saltOrRound);
        user.password = hashed_password;
        await prisma.user.create({
          data: user
        })
      }
    }

    console.log("Finish seeding data...");

  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
