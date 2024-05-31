import { PrismaService } from '@infra/database/client/prisma.service';
import { GamesPrismaRepository } from '@infra/database/repository/games-prisma.repository';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: 'GAMES_REPOSITORY',
      useFactory: (prisma: PrismaService) => {
        return new GamesPrismaRepository(prisma);
      },
      inject: [PrismaService],
    },
  ],
  exports: [PrismaService, 'GAMES_REPOSITORY'],
})
export class DatabaseModule {}
