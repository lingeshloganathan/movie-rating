import { Test, TestingModule } from '@nestjs/testing';
import { MovieShowController } from './movie-show.controller';
import { MovieShowService } from './movie-show.service';

describe('MovieShowController', () => {
  let controller: MovieShowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieShowController],
      providers: [MovieShowService],
    }).compile();

    controller = module.get<MovieShowController>(MovieShowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
