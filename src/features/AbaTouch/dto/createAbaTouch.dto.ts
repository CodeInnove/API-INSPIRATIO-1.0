import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class AtividadeTouchItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AFT', 'DG', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AFT', 'DG', 'I'] })
  status: 'AFT' | 'DG' | 'I';
}

export class CreateAbaTouchDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeTouchItemDto)
  @ApiProperty({ type: [AtividadeTouchItemDto] })
  atividades: AtividadeTouchItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}