import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ActorModule } from './actor/actor.module';
import { MovieShowModule } from './movie-show/movie-show.module';
import { GenreModule } from './genre/genre.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [UserModule, ActorModule, MovieShowModule, GenreModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
