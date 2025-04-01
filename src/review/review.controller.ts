import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Permissions } from 'src/base/guard/permission';
import { CREATE_REVIEW, READ_ALL_REVIEW } from 'script/const/permission.const';
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Permissions(CREATE_REVIEW)
  @Post()
  async create(@Body() input: CreateReviewDto) {
    const data = await this.reviewService.createReview(input);
    return {
      message: 'Review created successfully',
      data,
    };
  }
  @Permissions(READ_ALL_REVIEW)
  @Get('allReviews')
  async findAll() {
    const data = await this.reviewService.findAllReviews();
    return {
      message: 'Review fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.reviewService.findOneReview(id);
    return {
      message: 'Review fetched successfully',
      data,
    };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
  //   return this.reviewService.update(+id, updateReviewDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reviewService.remove(+id);
  // }
}
