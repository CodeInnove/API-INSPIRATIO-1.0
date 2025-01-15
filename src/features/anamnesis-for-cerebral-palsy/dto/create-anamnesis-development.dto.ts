import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DevelopmentMotorDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  headControlPrevious?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  headControlCurrent?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  sittingPreviously?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  sittingCurrently?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  crawlingPrevious?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  crawlingCurrently?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  gettingOnAllFoursAndCrawlingPrevious?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  gettingOnAllFoursAndCrawlingCurrently?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  standingBalancePrevious?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  standingBalanceCurrent?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  walkingPrevious?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  walkingCurrently?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  coordinationOfMovementsInGrossAndFineMotorActivities?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  conditionsOfSelfStimulationAndExplorationOfTheEnvironmentAndObjects?: string;
}
