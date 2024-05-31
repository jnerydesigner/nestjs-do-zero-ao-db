import { Prisma } from '@prisma/client';
import { PrismaService } from '../client/prisma.service';
import {
  IGamesRepository,
  IPaginationGame,
} from '../interface/games-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesPrismaRepository implements IGamesRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findAllGames(
    page?: number,
    pageSize?: number,
    sort?: 'asc' | 'desc',
    search?: string,
  ): Promise<IPaginationGame> {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    let orderBy: Prisma.GamesOrderByWithRelationInput = {};

    if (search !== undefined && search === 'game_name') {
      orderBy = {
        game_name: sort,
      };
    }

    if (search !== undefined && search === 'system_full') {
      orderBy = {
        system_full: sort,
      };
    }

    if (search !== undefined && search === 'publisher') {
      orderBy = {
        publisher: sort,
      };
    }

    if (search !== undefined && search === 'developer') {
      orderBy = {
        developer: sort,
      };
    }

    if (search === undefined) {
      orderBy = {
        game_name: sort,
      };
    }

    const games = await this.prismaService.games.findMany({
      skip,
      take,
      orderBy,
    });

    const totalGames = await this.prismaService.games.count();

    return {
      totalGames,
      totalPages: Math.ceil(totalGames / pageSize),
      currentPage: page,
      games,
    };
  }
}
