import { Injectable } from '@nestjs/common';
import { CreateMovieShowDto } from './dto/create-movie-show.dto';
import { UpdateMovieShowDto } from './dto/update-movie-show.dto';
import { PrismaService } from 'src/primsa/prisma.service';
import { movieShowSelect } from 'src/primsa/query-select';
import { Prisma, RecordStatus } from '@prisma/client';
import { FilterMovieShowDto } from './dto/filter-movie-show.dto';
import { MetaInputDto } from 'src/base/types/common.dto';

@Injectable()
export class MovieShowService {
  constructor(private readonly prisma: PrismaService) {}

  async createMovieShow(input: CreateMovieShowDto) {
    const data = await this.prisma.movieShow.create({
      data: {
        ...input,
        actorId: input.actorId,
        genreId: input.genreId,
      },
      select: movieShowSelect,
    });
    return data;
  }

  async findAllMovieShows(filter: FilterMovieShowDto, input: MetaInputDto) {
    const { cursorId, perPage } = input;
    const args: Prisma.MovieShowFindManyArgs = {
      where: {
        type: filter.type,
        recordStatus: RecordStatus.ACTIVE,
      },
      select: movieShowSelect,
    };
    const data = await this.prisma.movieShow.findMany({
      ...args,
      cursor: cursorId ? { id: cursorId } : undefined,
      take: perPage || 2,
    });
    return data;
  }

  async findMovieShowById(id: string) {
    const data = await this.prisma.movieShow.findUnique({
      where: { id },
      select: movieShowSelect,
    });
    return data;
  }

  async updateMovieShow(id: string, input: UpdateMovieShowDto) {
    const data = await this.prisma.movieShow.update({
      where: { id },
      data: input,
      select: movieShowSelect,
    });
    return data;
  }

  async removeMovieShow(id: string) {
    const data = await this.prisma.movieShow.delete({
      where: { id },
    });
    return data;
  }
}
