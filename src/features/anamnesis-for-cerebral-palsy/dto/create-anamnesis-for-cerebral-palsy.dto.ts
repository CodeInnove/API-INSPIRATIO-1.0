import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DevelopmentMotorDto } from './create-anamnesis-development.dto';
import { FoodsDto } from './create-anamnesis-foods.dto';
import { GestationalHistoryDto } from './create-anamnesis-gestational-history.dto';

export class CreateAfcpDto {
  @ApiProperty({ type: GestationalHistoryDto })
  @IsOptional()
  howDidItTranspire?: GestationalHistoryDto;

  @ApiProperty({ type: DevelopmentMotorDto })
  @IsOptional()
  developmentMotor: DevelopmentMotorDto;

  @ApiProperty({ type: FoodsDto })
  @IsOptional()
  foods: FoodsDto;
}
