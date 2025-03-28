import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieShowDto } from './create-movie-show.dto';

export class UpdateMovieShowDto extends PartialType(CreateMovieShowDto) {}
