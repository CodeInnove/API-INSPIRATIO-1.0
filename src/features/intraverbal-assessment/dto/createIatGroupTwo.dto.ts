import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class INames {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourNameScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youBrushYour: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youBrushYourScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  shoesAnd: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  shoesAndScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youRide: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youRideScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  afterUsingTheBathroomYouGive: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  afterUsingTheBathroomYouGiveScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youSitOnA: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youSitOnAScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youEat: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youEatScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  oneTwo: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  oneTwoScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youWashYour: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youWashYourScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youSleepInA: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  youSleepInAScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group2: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group2Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group2: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group2Score: string;

}
