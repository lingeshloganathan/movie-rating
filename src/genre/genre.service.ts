import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from 'src/primsa/prisma.service';
import { RecordStatus } from '@prisma/client';
import { genreSelect } from 'src/primsa/query-select';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  async createGenre(input: CreateGenreDto) {
    const data = await this.prisma.genre.create({
      data: {
        genreType: input.genreType,
      },
      select: genreSelect,
    });
    return data;
  }

  async findAllGenres() {
    const data = await this.prisma.genre.findMany({
      where: {
        recordStatus: RecordStatus.ACTIVE,
      },
      select: genreSelect,
    });
    return data;
  }

  async findGenreById(id: string) {
    const data = await this.prisma.genre.findUnique({
      where: { id },
      select: genreSelect,
    });
    return data;
  }

  async updateGenre(id: string, input: UpdateGenreDto) {
    const data = await this.prisma.genre.update({
      where: { id },
      data: input,
      select: genreSelect,
    });
    return data;
  }

  async removeGenre(id: string) {
    const data = await this.prisma.genre.delete({
      where: { id },
    });
    return data;
  }
}
