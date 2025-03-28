import { GenreType } from '@prisma/client';
import { ArrayMaxSize, IsArray, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateGenreDto {
  @IsArray()
  @IsNotEmpty()
  @ArrayMaxSize(3)
  @IsEnum(GenreType, { each: true })
  genreType: GenreType[];
}
