import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PercentageScoresDto {
  @ApiProperty({ type: 'integer' }) 
  @IsNumber()
  a: number;

  @ApiProperty({ type: 'integer' })
  @IsNumber()
  b: number;

  @ApiProperty({ type: 'integer' })
  @IsNumber()
  c: number;

  @ApiProperty({ type: 'integer' })
  @IsNumber()
  d: number;

  @ApiProperty({ type: 'integer' })
  @IsNumber()
  e: number;
}