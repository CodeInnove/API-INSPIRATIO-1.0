import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';

export class QueryAbaIntraverbalDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Filter by atividade (case-insensitive)', required: false })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AFT', 'NF', 'I'])
  @ApiProperty({ enum: ['AFT', 'NF', 'I'], description: 'Filter by status', required: false })
  status?: 'AFT' | 'NF' | 'I';

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Filter by patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Filter by doctor ID', required: false })
  doctor?: string;

  @IsOptional()
  @ApiProperty({ default: 1, description: 'Page number', required: false })
  page?: number = 1;

  @IsOptional()
  @ApiProperty({ default: 10, description: 'Items per page', required: false })
  limit?: number = 10;
}