import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ISimpleQuestionsPartOne {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouDrink: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouDrinkScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanFly: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanFlyScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatNumbersDoYouKnow: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatNumbersDoYouKnowScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouSing: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouSingScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourFavoriteMovie: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourFavoriteMovieScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatColorsDoYouKnow: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatColorsDoYouKnowScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouRead: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouReadScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsOutThere: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsOutThereScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsIntheKitchen: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsIntheKitchenScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalsDoYouKnow: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalsDoYouKnowScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group3: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group3Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group3: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group3Score: string;

  @IsOptional()
  @ApiProperty()
  subtotalPointsGroup3: Number;
}
