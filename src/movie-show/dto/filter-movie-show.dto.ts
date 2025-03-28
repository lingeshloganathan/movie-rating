import { MovieType } from '@prisma/client';
import { IsEnum, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class FilterMovieShowDto {
  @IsEnum(MovieType)
  @IsNotEmpty()
  type: MovieType;
}
