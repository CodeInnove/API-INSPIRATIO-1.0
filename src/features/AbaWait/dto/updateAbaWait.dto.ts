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

class UpdateAtividadeWaitItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AF', 'DG', 'I'])
  @ApiProperty({ enum: ['AF', 'DG', 'I'], required: false, description: 'Atividade status' })
  status?: 'AF' | 'DG' | 'I';
}

export class UpdateAbaWaitDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaWait ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadeWaitItemDto)
  @ApiProperty({ type: [UpdateAtividadeWaitItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadeWaitItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}