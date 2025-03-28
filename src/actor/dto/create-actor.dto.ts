import { Gender } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  MaxLength,
  IsEnum,
} from 'class-validator';

export class CreateActorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsDateString()
  @IsNotEmpty()
  dob: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  biography: string;
}
