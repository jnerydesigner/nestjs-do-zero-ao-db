import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class GamesPaginationDTO {
  @IsOptional()
  @IsNumberString()
  page?: number;

  @IsOptional()
  @IsNumberString()
  pageSize?: number;

  @IsOptional()
  @IsIn(['desc', 'asc'])
  sort?: 'asc' | 'desc';

  @IsOptional()
  @IsString()
  search?: string;
}
