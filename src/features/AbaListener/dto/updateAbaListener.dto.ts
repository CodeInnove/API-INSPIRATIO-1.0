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

class UpdateAtividadeListenerItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AG', 'NF', 'I'])
  @ApiProperty({ enum: ['AG', 'NF', 'I'], required: false, description: 'Atividade status' })
  status?: 'AG' | 'NF' | 'I';
}

export class UpdateAbaListenerDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaListener ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeListenerItemDto)
  @ApiProperty({ type: [UpdateAtividadeListenerItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeListenerItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}