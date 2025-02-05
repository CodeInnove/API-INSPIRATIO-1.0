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

class AtividadePairingItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AF', 'DG', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AF', 'DG', 'I'] })
  status: 'AF' | 'DG' | 'I';
}

export class CreateAbaPairingDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadePairingItemDto)
  @ApiProperty({ type: [AtividadePairingItemDto] })
  atividades: AtividadePairingItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}