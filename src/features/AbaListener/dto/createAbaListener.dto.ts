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

class AtividadeListenerItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AG', 'NF', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AG', 'NF', 'I'] })
  status: 'AG' | 'NF' | 'I';
}

export class CreateAbaListenerDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeListenerItemDto)
  @ApiProperty({ type: [AtividadeListenerItemDto] })
  atividades: AtividadeListenerItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}