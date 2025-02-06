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

class AtividadeIntraverbalItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AFT', 'NF', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AFT', 'NF', 'I'] })
  status: 'AFT' | 'NF' | 'I';
}

export class CreateAbaIntraverbalDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeIntraverbalItemDto)
  @ApiProperty({ type: [AtividadeIntraverbalItemDto] })
  atividades: AtividadeIntraverbalItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}