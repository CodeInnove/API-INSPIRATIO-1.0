import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GestationalHistoryDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  planning2WasDesiredOrNot: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  howDidItTranspire: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  relevantEvents: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  useOfMedications: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  generalPsychologicalState: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  generalHealth: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  childbirth: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  birthGeneralConditions: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  birthConditionsOfChild: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  didTheBabyCryRightAway: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  criedSoon: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  coloration: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  wasTheBabyInTheIncubator: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  howLongAndWhyInIncubator: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  didTheBabyHaveFeedingProblemsInitially: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  whichFeedingProblems: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  specialMedicalObservationsAndRecommendations: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  childsReleaseTimeAfterBirth: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  obsGestationalHistory: string;
}
