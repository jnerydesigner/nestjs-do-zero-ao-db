import { FindGamesUseCase } from '@application/services/games.service';
import { Module } from '@nestjs/common';
import { GamesController } from '@presenters/controllers/games.controller';

@Module({
  controllers: [GamesController],
  providers: [FindGamesUseCase],
})
export class GamesModule {}
