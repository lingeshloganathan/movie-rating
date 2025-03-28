import { Test, TestingModule } from '@nestjs/testing';
import { MovieShowService } from './movie-show.service';

describe('MovieShowService', () => {
  let service: MovieShowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieShowService],
    }).compile();

    service = module.get<MovieShowService>(MovieShowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
