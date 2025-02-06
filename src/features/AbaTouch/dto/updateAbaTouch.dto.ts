import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class UpdateAtividadeTouchItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AFT', 'DG', 'I'])
  @ApiProperty({ enum: ['AFT', 'DG', 'I'], required: false, description: 'Atividade status' })
  status?: 'AFT' | 'DG' | 'I';
}

export class UpdateAbaTouchDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaTouch ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeTouchItemDto)
  @ApiProperty({ type: [UpdateAtividadeTouchItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeTouchItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}