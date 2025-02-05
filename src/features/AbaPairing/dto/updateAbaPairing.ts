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

class UpdateAtividadePairingItemDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'Atividade text' })
  atividade?: string;

  @IsOptional()
  @IsEnum(['AF', 'DG', 'I'])
  @ApiProperty({ enum: ['AF', 'DG', 'I'], required: false, description: 'Atividade status' })
  status?: 'AF' | 'DG' | 'I';
}

export class UpdateAbaPairingDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'AbaPairing ID', required: false })
  _id?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAtividadePairingItemDto)
  @ApiProperty({ type: [UpdateAtividadePairingItemDto], description: 'Array of activities to update', required: false })
  atividades?: UpdateAtividadePairingItemDto[];

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Patient ID', required: false })
  patient?: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ description: 'Doctor ID', required: false })
  doctor?: string;
}