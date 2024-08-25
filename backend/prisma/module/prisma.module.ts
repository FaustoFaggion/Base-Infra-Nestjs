import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PrismaException } from "./prisma.exception";

@Module({
    imports: [],
    controllers: [],
providers: [PrismaService, PrismaException],
    exports: [PrismaService, PrismaException],
})
export class PrismaModule {}