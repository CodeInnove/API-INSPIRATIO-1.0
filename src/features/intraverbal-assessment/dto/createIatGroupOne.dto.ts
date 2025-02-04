import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class IAnimalSounds {
  @IsString()
  @IsOptional()
  @ApiProperty()
  theCatSays: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theCatSaysScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theFrogDoesntWashHisFeetHeDoesntWashBecauseHeDoesnt: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theFrogDoesntWashHisFeetHeDoesntWashBecauseHeDoesntScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readyAim: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readyAimScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  myLittleChickYellowFitsHereInMy: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  myLittleChickYellowFitsHereInMyScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cirandaCirandinhaLetUsAll: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cirandaCirandinhaLetUsAllScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theDogSays: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theDogSaysScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  ithrewAStickAtThe: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  ithrewAStickAtTheScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theSpiderClimbedUpThe: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  theSpiderClimbedUpTheScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  headShouldersKneesAnd: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  headShouldersKneesAndScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  happyBirthdayTo: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  happyBirthdayToScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group1: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group1Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group1: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group1Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  subtotalPointsGroup1: number;
}
