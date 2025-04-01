import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { PrismaService } from 'src/primsa/prisma.service';
import { RecordStatus } from '@prisma/client';
import { reviewSelect } from 'src/primsa/query-select';
@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(input: CreateReviewDto) {
    if (input.rating < 1 || input.rating > 10) {
      throw new BadRequestException('Rating must be between 1 and 10');
    }
    const existingUser = await this.prisma.review.findFirst({
      where: {
        userId: input.userId,
        movieShowId: input.movieShowId,
      },
    });
    if (existingUser) {
      throw new BadRequestException('User already reviewed this movie');
    }
    const data = await this.prisma.review.create({
      data: {
        userId: input.userId,
        movieShowId: input.movieShowId,
        rating: input.rating,
        reviewContent: input.reviewContent,
      },
      select: reviewSelect,
    });
    return data;
  }

  async findAllReviews() {
    const data = await this.prisma.review.findMany({
      where: {
        User: {
          recordStatus: RecordStatus.ACTIVE,
        },
        MovieShow: {
          recordStatus: RecordStatus.ACTIVE,
        },
      },
      select: reviewSelect,
    });
    return data;
  }

  async findOneReview(id: string) {
    const data = await this.prisma.review.findUnique({
      where: {
        id,
        User: {
          recordStatus: RecordStatus.ACTIVE,
        },
        MovieShow: {
          recordStatus: RecordStatus.ACTIVE,
        },
      },
      select: reviewSelect,
    });
    if (!data) {
      throw new NotFoundException('Review not found');
    }
    return data;
  }

  // update(id: number, updateReviewDto: UpdateReviewDto) {
  //   return `This action updates a #${id} review`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} review`;
  // }
}
