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

class AtividadeMotorImitationItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  atividade: string;

  @IsEnum(['AFT', 'AFP', 'I'])
  @IsNotEmpty()
  @ApiProperty({ enum: ['AFT', 'AFP', 'I'] })
  status: 'AFT' | 'AFP' | 'I';
}

export class CreateAbaMotorImitationDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtividadeMotorImitationItemDto)
  @ApiProperty({ type: [AtividadeMotorImitationItemDto] })
  atividades: AtividadeMotorImitationItemDto[];

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  doctor: string;
}