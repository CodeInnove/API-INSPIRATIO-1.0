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

class AtividadeWaitItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AF', 'DG', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AF', 'DG', 'I'] })
  status: 'AF' | 'DG' | 'I';
}

export class CreateAbaWaitDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeWaitItemDto)
  @ApiProperty({ type: [AtividadeWaitItemDto] })
  atividades: AtividadeWaitItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}