import { MovieType } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { MetaInputDto } from 'src/base/types/common.dto';

export class FilterMovieShowDto extends MetaInputDto {
  @IsEnum(MovieType)
  @IsNotEmpty()
  type: MovieType;
}
