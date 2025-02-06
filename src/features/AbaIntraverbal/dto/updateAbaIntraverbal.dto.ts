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

class UpdateAtividadeIntraverbalItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AFT', 'NF', 'I'])
  @ApiProperty({ enum: ['AFT', 'NF', 'I'], required: false, description: 'Atividade status' })
  status?: 'AFT' | 'NF' | 'I';
}

export class UpdateAbaIntraverbalDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaIntraverbal ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeIntraverbalItemDto)
  @ApiProperty({ type: [UpdateAtividadeIntraverbalItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeIntraverbalItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}