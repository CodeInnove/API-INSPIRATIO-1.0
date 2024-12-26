import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerIntraverbalAssessmentDTO {
    @IsNotEmpty()
    @ApiProperty()
    writtenAnswer: string;

    @IsNotEmpty()
    @ApiProperty()
    replyIndicated: number;
  }

  class GroupAnimalSoundsAndCompleteSongsDTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupNameAndCompletesAndAssociationsDTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupSimpleQuestions1DTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupSimpleQuestions2DTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupCateGoriesAndFunctionsAndCharacteristicsDTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupAdjectivesAndPrepositionsAndAdverbsDTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupIssuesWithMultipleParts1DTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

class GroupIssuesWithMultipleParts2DTO {
    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question1: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question2: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question3: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question4: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question5: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question6: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question7: AnswerIntraverbalAssessmentDTO;

    @ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question8: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question9: AnswerIntraverbalAssessmentDTO;
	
	@ValidateNested()
    @Type(() => AnswerIntraverbalAssessmentDTO)
    @ApiProperty({ type: AnswerIntraverbalAssessmentDTO })
    question10: AnswerIntraverbalAssessmentDTO;

}

  export class CreateIntraverbalAssessmentDto {
    @ValidateNested()
    @Type(() => GroupAnimalSoundsAndCompleteSongsDTO)
    @ApiProperty({ type: GroupAnimalSoundsAndCompleteSongsDTO })
    GroupAnimalSoundsAndCompleteSongs: GroupAnimalSoundsAndCompleteSongsDTO;
	
	@ValidateNested()
    @Type(() => GroupNameAndCompletesAndAssociationsDTO)
    @ApiProperty({ type: GroupNameAndCompletesAndAssociationsDTO })
    GroupNameAndCompletesAndAssociations: GroupNameAndCompletesAndAssociationsDTO;
	
	@ValidateNested()
    @Type(() => GroupSimpleQuestions1DTO)
    @ApiProperty({ type: GroupSimpleQuestions1DTO })
    GroupSimpleQuestions1: GroupSimpleQuestions1DTO;
	
	@ValidateNested()
    @Type(() => GroupSimpleQuestions2DTO)
    @ApiProperty({ type: GroupSimpleQuestions2DTO })
    GroupSimpleQuestions2: GroupSimpleQuestions2DTO;
	
	@ValidateNested()
    @Type(() => GroupCateGoriesAndFunctionsAndCharacteristicsDTO)
    @ApiProperty({ type: GroupCateGoriesAndFunctionsAndCharacteristicsDTO })
    GroupCateGoriesAndFunctionsAndCharacteristics: GroupCateGoriesAndFunctionsAndCharacteristicsDTO;
	
	@ValidateNested()
    @Type(() => GroupAdjectivesAndPrepositionsAndAdverbsDTO)
    @ApiProperty({ type: GroupAdjectivesAndPrepositionsAndAdverbsDTO })
    GroupAdjectivesAndPrepositionsAndAdverbs: GroupAdjectivesAndPrepositionsAndAdverbsDTO;
	
	@ValidateNested()
    @Type(() => GroupIssuesWithMultipleParts1DTO)
    @ApiProperty({ type: GroupIssuesWithMultipleParts1DTO })
    GroupIssuesWithMultipleParts1: GroupIssuesWithMultipleParts1DTO;
	
	@ValidateNested()
    @Type(() => GroupIssuesWithMultipleParts2DTO)
    @ApiProperty({ type: GroupIssuesWithMultipleParts2DTO })
    GroupIssuesWithMultipleParts2: GroupIssuesWithMultipleParts2DTO;
  
  }