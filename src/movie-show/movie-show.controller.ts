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

@Controller('movie-show')
export class MovieShowController {
  constructor(private readonly movieShowService: MovieShowService) {}

  @Post()
  async create(@Body() input: CreateMovieShowDto) {
    const data = await this.movieShowService.createMovieShow(input);
    console.log(data);
    return {
      message: 'Movie show created successfully',
      data,
    };
  }

  @Get('allMovieShows')
  async findAll(@Query() filter: FilterMovieShowDto) {
    const data = await this.movieShowService.findAllMovieShows(filter);
    return {
      message: 'Movie shows fetched successfully',
      data,
    };
  }

  @Get('me/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.movieShowService.findMovieShowById(id);
    return {
      message: 'Movie show fetched successfully',
      data,
    };
  }

  @Patch('updateMovieShow/:id')
  async update(@Param('id') id: string, @Body() input: UpdateMovieShowDto) {
    const data = await this.movieShowService.updateMovieShow(id, input);
    return {
      message: 'Movie show updated successfully',
      data,
    };
  }

  @Delete('deleteMovieShow/:id')
  async remove(@Param('id') id: string) {
    const data = await this.movieShowService.removeMovieShow(id);
    return {
      message: 'Movie show deleted successfully',
      data,
    };
  }
}
