import { GamesPaginationDTO } from '@application/dtos/games-pagination.dto';
import { FindGamesUseCase } from '@application/services/games.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('games')
export class GamesController {
  constructor(private readonly findGamesUseCase: FindGamesUseCase) {}

  @Get()
  getGames(@Query() query: GamesPaginationDTO) {
    const skip = Number(query.page) || 1;
    const take = Number(query.pageSize) || 10;

    return this.findGamesUseCase.getGames(skip, take, query.sort, query.search);
  }
}
