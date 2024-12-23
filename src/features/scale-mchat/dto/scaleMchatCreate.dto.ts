import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseScaleMchatDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionYes: string;

    @IsNotEmpty()
    @ApiProperty()
    optionNo: string;
  }

  class QuestionsScaleMchatDTO {
    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question1: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question2: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question3: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question4: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question5: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question6: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question7: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question8: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question9: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question10: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question11: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question12: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question13: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question14: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question15: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question16: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question17: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question18: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question19: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question20: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question21: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question22: ChooseScaleMchatDTO;

    @ValidateNested()
    @Type(() => ChooseScaleMchatDTO)
    @ApiProperty({ type: ChooseScaleMchatDTO })
    question23: ChooseScaleMchatDTO;

  }
  export class CreateScaleMchatDTO {
    @ValidateNested()
    @Type(() => QuestionsScaleMchatDTO)
    @ApiProperty({ type: QuestionsScaleMchatDTO })
    QuestionsScaleMchat: QuestionsScaleMchatDTO;
  
  }