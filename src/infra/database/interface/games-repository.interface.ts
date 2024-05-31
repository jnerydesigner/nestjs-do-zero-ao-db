export interface IGamesRepository {
  findAllGames(
    page?: number,
    pageSize?: number,
    sort?: 'asc' | 'desc',
    search?: string,
  ): Promise<IPaginationGame>;
}

export type IGameDto = {
  game_id?: string;
  game_name?: string;
  system_full?: string;
  publisher?: string;
  developer?: string;
  image_url?: string;
  release_date?: string;
};

export type IPaginationGame = {
  totalGames: number;
  totalPages: number;
  currentPage: number;
  games: IGameDto[];
};
