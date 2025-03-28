import { MovieType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieShowDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  releaseDate: string;

  @IsEnum(MovieType)
  @IsNotEmpty()
  type: MovieType;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  actorId: string;

  @IsString()
  @IsNotEmpty()
  genreId: string;
}
