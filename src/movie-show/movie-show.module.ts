import { Module } from '@nestjs/common';
import { MovieShowService } from './movie-show.service';
import { MovieShowController } from './movie-show.controller';
import { PrismaService } from 'src/primsa/prisma.service';
@Module({
  controllers: [MovieShowController],
  providers: [MovieShowService, PrismaService],
})
export class MovieShowModule {}
