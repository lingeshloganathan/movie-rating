import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MetaInputDto {
  @IsOptional()
  @IsString()
  cursorId?: string;

  @IsOptional()
  @IsNumber()
  perPage?: number;
}
