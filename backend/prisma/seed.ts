import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {


	let joao = await prisma.user.create({
		data: {
		  login: "jopop",
		  email: "joao@42sp.com.br",
		  first_name: "João",
		  last_name: "Silva",
		  nickname: "Silvão",
		  avatar: "https://i.pinimg.com/originals/e7/3a/7c/e73a7c77c2430210674a0c0627d9ca76.jpg",
		  avatar_name: "Silvão", 
		  points: 7,
		},
	  });

}