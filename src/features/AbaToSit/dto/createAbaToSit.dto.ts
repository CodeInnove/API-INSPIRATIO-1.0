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

class AtividadeToSitItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AF', 'DV', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AF', 'DV', 'I'] })
  status: 'AF' | 'DV' | 'I';
}

export class CreateAbaToSitDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeToSitItemDto)
  @ApiProperty({ type: [AtividadeToSitItemDto] })
  atividades: AtividadeToSitItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}