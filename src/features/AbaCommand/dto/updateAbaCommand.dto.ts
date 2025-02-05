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

class UpdateAtividadeCommandItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AFT', 'AFP', 'D', 'I'])
  @ApiProperty({ enum: ['AFT', 'AFP', 'D', 'I'], required: false, description: 'Atividade status' })
  status?: 'AFT' | 'AFP' | 'D' | 'I';
}

export class UpdateAbaCommandDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaCommand ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeCommandItemDto)
  @ApiProperty({ type: [UpdateAtividadeCommandItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeCommandItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}