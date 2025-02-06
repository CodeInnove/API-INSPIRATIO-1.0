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

class AtividadeItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AF', 'DV', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AF', 'DV', 'I'] })
  status: 'AF' | 'DV' | 'I';
}

export class CreateAbaEyeContactDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeItemDto)
  @ApiProperty({ type: [AtividadeItemDto] })
  atividades: AtividadeItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}