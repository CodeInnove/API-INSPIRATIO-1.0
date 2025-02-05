import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';

export class QueryAbaEyeContactDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Filter by atividade (case-insensitive)', required: false })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AF', 'DV', 'I'])
  @ApiProperty({ enum: ['AF', 'DV', 'I'], description: 'Filter by status', required: false })
  status?: 'AF' | 'DV' | 'I';

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