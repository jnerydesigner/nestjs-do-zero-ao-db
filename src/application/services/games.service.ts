import { IGamesRepository } from '@infra/database/interface/games-repository.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindGamesUseCase {
  constructor(
    @Inject('GAMES_REPOSITORY')
    private readonly gamesRepository: IGamesRepository,
  ) {}
  getGames(
    page?: number,
    pageSize?: number,
    sort?: 'asc' | 'desc',
    search?: string,
  ) {
    return this.gamesRepository.findAllGames(page, pageSize, sort, search);
  }
}
