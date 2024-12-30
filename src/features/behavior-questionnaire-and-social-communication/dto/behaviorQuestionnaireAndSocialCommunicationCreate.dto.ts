import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';


class QuestionsAsqDTO{
 
  @ApiProperty()
@IsBoolean()
questionOne: boolean;

@ApiProperty()
@IsBoolean()
questionTwo: boolean;

@ApiProperty()
@IsBoolean()
questionThree: boolean;

@ApiProperty()
@IsBoolean()
questionFour: boolean;

@ApiProperty()
@IsBoolean()
questionFive: boolean;

@ApiProperty()
@IsBoolean()
questionSix: boolean;

@ApiProperty()
@IsBoolean()
questionSeven: boolean;

@ApiProperty()
@IsBoolean()
questionEight: boolean;

@ApiProperty()
@IsBoolean()
questionNine: boolean;

@ApiProperty()
@IsBoolean()
questionTen: boolean;

@ApiProperty()
@IsBoolean()
questionEleven: boolean;

@ApiProperty()
@IsBoolean()
questionTwelve: boolean;

@ApiProperty()
@IsBoolean()
questionThirteen: boolean;

@ApiProperty()
@IsBoolean()
questionFourteen: boolean;

@ApiProperty()
@IsBoolean()
questionFifteen: boolean;

@ApiProperty()
@IsBoolean()
questionSixteen: boolean;

@ApiProperty()
@IsBoolean()
questionSeventeen: boolean;

@ApiProperty()
@IsBoolean()
questionEighteen: boolean;

@ApiProperty()
@IsBoolean()
questionNineteen: boolean;

@ApiProperty()
@IsBoolean()
questionTwenty: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyOne: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyTwo: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyThree: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyFour: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyFive: boolean;

@ApiProperty()
@IsBoolean()
questionTwentySix: boolean;

@ApiProperty()
@IsBoolean()
questionTwentySeven: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyEight: boolean;

@ApiProperty()
@IsBoolean()
questionTwentyNine: boolean;

@ApiProperty()
@IsBoolean()
questionThirty: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyOne: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyTwo: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyThree: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyFour: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyFive: boolean;

@ApiProperty()
@IsBoolean()
questionThirtySix: boolean;

@ApiProperty()
@IsBoolean()
questionThirtySeven: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyEight: boolean;

@ApiProperty()
@IsBoolean()
questionThirtyNine: boolean;
  }

export class CreateBehaviorQuestionDto {
  @ValidateNested()
  @Type(() => QuestionsAsqDTO)
  @ApiProperty({ type: QuestionsAsqDTO })
  questions: QuestionsAsqDTO;


}