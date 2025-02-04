import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ISimpleQuestionsPartTwo {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whoIsYourTeacher: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoIsYourTeacherScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouWashYourHands: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouWashYourHandsScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoLivesOnTheFarm: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoLivesOnTheFarmScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereIsTheRefrigerator: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereIsTheRefrigeratorScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoDrivesTheCar: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoDrivesTheCarScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouTakeABath: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouTakeABathScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  howOldAreYou: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  howOldAreYouScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereAreTheTrees: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereAreTheTreesScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoDoYouSeeOnTV: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whoDoYouSeeOnTVScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whyDoWeUseBandaid: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whyDoWeUseBandaidScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group4: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group4Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group4: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group4Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  subtotalPointsGroup4: number;


}
