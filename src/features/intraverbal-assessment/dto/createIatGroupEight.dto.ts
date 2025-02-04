import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class IMultipleQuestionsPartTwo {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouPutDirtyClothes: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whereDoYouPutDirtyClothesScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouTakeToABirthday: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouTakeToABirthdayScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDayIsToday: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDayIsTodayScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouSeeInTheField: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouSeeInTheFieldScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDayComesBeforeTuesday: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDayComesBeforeTuesdayScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whyDoPeopleWearGlasses: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whyDoPeopleWearGlassesScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whenDoYouSetTheTable: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whenDoYouSetTheTableScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoesTheCarHaveThatIsDifferentFromABicycle: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoesTheCarHaveThatIsDifferentFromABicycleScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  howDoYouKnowIfSomeoneIsSick: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  howDoYouKnowIfSomeoneIsSickScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDidYouDoTodayAtSchool: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDidYouDoTodayAtSchoolScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group8: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group8Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group8: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group8Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  subtotalPointsGroup8: string;


}
