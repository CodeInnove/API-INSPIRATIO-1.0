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

class AtividadeCommandItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AFT', 'AFP', 'D', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AFT', 'AFP', 'D', 'I'] })
  status: 'AFT' | 'AFP' | 'D' | 'I';
}

export class CreateAbaCommandDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeCommandItemDto)
  @ApiProperty({ type: [AtividadeCommandItemDto] })
  atividades: AtividadeCommandItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}