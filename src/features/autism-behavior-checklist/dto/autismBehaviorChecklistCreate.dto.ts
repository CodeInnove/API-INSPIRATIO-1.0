import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerDTO {
    @IsNotEmpty()
    @ApiProperty()
    es: number;
  
    @IsNotEmpty()
    @ApiProperty()
    re: number;
  
    @IsNotEmpty()
    @ApiProperty()
    co: number;

    @IsNotEmpty()
    @ApiProperty()
    lg: number;

    @IsNotEmpty()
    @ApiProperty()
    ps: number;
  }

class QuestionsDTO {
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionOne: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwo: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThree: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFour: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFive: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionSix: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionSeven: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionEight: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionNine: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionEleven: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwelve: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFourteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFifteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionSixteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionSeventeen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionEighteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionNineteen: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwenty: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyOne: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyTwo: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyThree: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyFour: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyFive: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentySix: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentySeven: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyEight: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionTwentyNine: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirty: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyOne: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyTwo: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyThree: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyFour: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyFive: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtySix: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtySeven: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyEight: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionThirtyNine: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionForty: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyOne: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyTwo: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyThree: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyFour: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyFive: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortySix: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortySeven: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyEight: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFortyNine: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFifty: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftyOne: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftyTwo: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftyThree: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftyFour: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftyFive: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftySix: AnswerDTO;
    
    @ValidateNested()
    @Type(() => AnswerDTO)
    @ApiProperty({ type: AnswerDTO })
    questionFiftySeven: AnswerDTO;
}

class ScoreDTO {

    @IsNotEmpty()
    @ApiProperty()
    esScore: string;

    @IsNotEmpty()
    @ApiProperty()
    reScore: string;

    @IsNotEmpty()
    @ApiProperty()
    coScore: string;

    @IsNotEmpty()
    @ApiProperty()
    lgScore: string;
  
    @IsNotEmpty()
    @ApiProperty()
    psScore: string;
  
  }

  export class TotalResultDTO {

    @IsNotEmpty()
    @ApiProperty()
    resultTotal: string;

  }

export class CreateAutismBehaviorChecklistDto {
  @ValidateNested()
  @Type(() => QuestionsDTO)
  @ApiProperty({ type: QuestionsDTO })
  questions: QuestionsDTO;

}