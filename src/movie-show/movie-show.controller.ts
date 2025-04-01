import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MovieShowService } from './movie-show.service';
import { CreateMovieShowDto } from './dto/create-movie-show.dto';
import { UpdateMovieShowDto } from './dto/update-movie-show.dto';
import { FilterMovieShowDto } from './dto/filter-movie-show.dto';
import { Permissions } from 'src/base/guard/permission';
import {
  CREATE_MOVIE_SHOW,
  READ_ALL_MOVIE_SHOW,
  READ_MOVIE_SHOW,
  UPDATE_MOVIE_SHOW,
  DELETE_MOVIE_SHOW,
} from 'script/const/permission.const';
import { MetaInputDto } from 'src/base/types/common.dto';
@Controller('movie-show')
export class MovieShowController {
  constructor(private readonly movieShowService: MovieShowService) {}

  @Permissions(CREATE_MOVIE_SHOW)
  @Post()
  async create(@Body() input: CreateMovieShowDto) {
    const data = await this.movieShowService.createMovieShow(input);
    console.log(data);
    return {
      message: 'Movie show created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_MOVIE_SHOW)
  @Get('allMovieShows')
  async findAll(
    @Query() filter: FilterMovieShowDto,
    @Body() input: MetaInputDto,
  ) {
    const data = await this.movieShowService.findAllMovieShows(filter, input);
    return {
      message: 'Movie shows fetched successfully',
      data,
    };
  }

  @Permissions(READ_MOVIE_SHOW)
  @Get('me/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.movieShowService.findMovieShowById(id);
    return {
      message: 'Movie show fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_MOVIE_SHOW)
  @Patch('updateMovieShow/:id')
  async update(@Param('id') id: string, @Body() input: UpdateMovieShowDto) {
    const data = await this.movieShowService.updateMovieShow(id, input);
    return {
      message: 'Movie show updated successfully',
      data,
    };
  }

  @Permissions(DELETE_MOVIE_SHOW)
  @Delete('deleteMovieShow/:id')
  async remove(@Param('id') id: string) {
    const data = await this.movieShowService.removeMovieShow(id);
    return {
      message: 'Movie show deleted successfully',
      data,
    };
  }
}
