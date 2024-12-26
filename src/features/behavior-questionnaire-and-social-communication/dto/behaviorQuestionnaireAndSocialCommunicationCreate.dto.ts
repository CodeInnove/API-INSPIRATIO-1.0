import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerAsqDTO {
    @IsNotEmpty()
    @ApiProperty()
    yes: string;

    @IsNotEmpty()
    @ApiProperty()
    no: string;
  }

class QuestionsAsqDTO{
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionOne: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwo: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThree: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionFour: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionFive: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionSix: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionSeven: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionEight: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionNine: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionEleven: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwelve: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionFourteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionFifteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionSixteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionSeventeen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionEighteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionNineteen: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwenty: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyOne: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyTwo: AnswerAsqDTO;

    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyThree: AnswerAsqDTO;


    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyFour: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyFive: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentySix: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentySeven: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyEight: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionTwentyNine: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirty: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyOne: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyTwo: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyThree: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyFour: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyFive: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtySix: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtySeven: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyEight: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionThirtyNine: AnswerAsqDTO;
    
    @ValidateNested()
    @Type(() => AnswerAsqDTO)
    @ApiProperty({ type: AnswerAsqDTO })
    questionForty: AnswerAsqDTO;
  }

class ScoreAsqDTO {

    @IsNotEmpty()
    @ApiProperty()
    yesScore: number;

    @IsNotEmpty()
    @ApiProperty()
    noScore: number;

    }

    class TotalResultAsqDTO {

    @IsNotEmpty()
    @ApiProperty()
    resultTotalAsq: number;

}

export class CreateBehaviorQuestionnaireAndSocialCommunicationDto {
  @ValidateNested()
  @Type(() => QuestionsAsqDTO)
  @ApiProperty({ type: QuestionsAsqDTO })
  questions: QuestionsAsqDTO;

}