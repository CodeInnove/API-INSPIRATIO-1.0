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

class UpdateMotorImitationItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AFT', 'AFP', 'I'])
  @ApiProperty({ enum: ['AFT', 'AFP', 'I'], required: false, description: 'Atividade status' })
  status?: 'AFT' | 'AFP' | 'I';
}

export class UpdateAbaMotorImitationDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaMotorImitation ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateMotorImitationItemDto)
  @ApiProperty({ type: [UpdateMotorImitationItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateMotorImitationItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}