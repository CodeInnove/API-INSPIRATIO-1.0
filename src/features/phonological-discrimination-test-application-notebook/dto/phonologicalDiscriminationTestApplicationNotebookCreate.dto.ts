import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChoosePhonologicalDiscriminationTestApplicationNotebookDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionFigure1: string;

    @IsNotEmpty()
    @ApiProperty()
    optionFigure2: string;

    @IsNotEmpty()
    @ApiProperty()
    score: number;
  }

  class QuestionsPhonologicalDiscriminationTestApplicationNotebookDTO {
    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question1: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question2: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question3: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question4: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question5: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question6: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question7: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question8: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question9: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question10: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question11: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question12: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question13: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question14: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question15: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question16: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question17: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question18: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question19: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question20: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question21: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question22: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;

    @ValidateNested()
    @Type(() => ChoosePhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO })
    question23: ChoosePhonologicalDiscriminationTestApplicationNotebookDTO;
}

  export class CreatePhonologicalDiscriminationTestApplicationNotebookDto {
    @ApiProperty()
    @IsString()
    patient: string;

    @ApiProperty()
    @IsString()
    dataOfApplication: string;

    @ApiProperty()
    @IsString()
    doctor: string;


    @ValidateNested()
    @Type(() => QuestionsPhonologicalDiscriminationTestApplicationNotebookDTO)
    @ApiProperty({ type: QuestionsPhonologicalDiscriminationTestApplicationNotebookDTO })
    QuestionsPhonologicalDiscriminationTestApplicationNotebook: QuestionsPhonologicalDiscriminationTestApplicationNotebookDTO;
  
  }