import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(@Body() input: CreateGenreDto) {
    const data = await this.genreService.createGenre(input);
    return {
      message: 'Gerne created successfully',
      data,
    };
  }

  @Get('allGenres')
  async findAll() {
    const data = await this.genreService.findAllGenres();
    return {
      message: 'Genres fetched successfully',
      data,
    };
  }

  @Get('me/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.genreService.findGenreById(id);
    return {
      message: 'Genre fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateGenreDto) {
    const data = await this.genreService.updateGenre(id, input);
    return {
      message: 'Genre updated successfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.genreService.removeGenre(id);
    return {
      message: 'Genre deleted successfully',
      data,
    };
  }
}
