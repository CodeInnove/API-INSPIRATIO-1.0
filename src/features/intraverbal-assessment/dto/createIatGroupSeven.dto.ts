import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class IMultipleQuestionsPartOne {
  @IsString()
  @IsOptional()
  @ApiProperty()
  whatMakesYouSad: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatMakesYouSadScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalHasAVeryLongNeck: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatAnimalHasAVeryLongNeckScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingThatIsNotForEating: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingThatIsNotForEatingScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatHelpsAFlowerGrow: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatHelpsAFlowerGrowScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouNotWear: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatCanYouNotWearScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouDoWithMoney: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatDoYouDoWithMoneyScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatNumberIsBetween6And8: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatNumberIsBetween6And8Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsInsideABalloon: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsInsideABalloonScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourLastName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  whatIsYourLastNameScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingSticky: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sayTheNameOfSomethingStickyScore: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group7: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other1Group7Score: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group7: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  other2Group7Score: string;


}
