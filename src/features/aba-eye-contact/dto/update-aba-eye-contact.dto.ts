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

class UpdateAtividadeItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AF', 'DV', 'I'])
  @ApiProperty({ enum: ['AF', 'DV', 'I'], required: false, description: 'Atividade status' })
  status?: 'AF' | 'DV' | 'I';
}

export class UpdateAbaEyeContactDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaEyeContact ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeItemDto)
  @ApiProperty({ type: [UpdateAtividadeItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}