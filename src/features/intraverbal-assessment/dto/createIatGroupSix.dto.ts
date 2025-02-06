import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class IAdjectives {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouWearOnYourHead: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouWearOnYourHeadScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouUseToEat: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouUseToEatScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalWalksVerySlowly: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalWalksVerySlowlyScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsOnTopOfTheHouse: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsOnTopOfTheHouseScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouWrite: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouWriteScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsInsideTheHouse: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsInsideTheHouseScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfThingsThatAreHot: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfThingsThatAreHotScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatGrowsOnYourHead: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatGrowsOnYourHeadScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsUnderABoat: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsUnderABoatScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouEat: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouEatScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group6: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group6Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group6: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group6Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  subtotalPointsGroup6: number;

 
}
