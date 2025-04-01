import { Gender } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';
import { IsString } from 'class-validator';
import { MetaInputDto } from 'src/base/types/common.dto';

export class FilterActorDto extends MetaInputDto {}
