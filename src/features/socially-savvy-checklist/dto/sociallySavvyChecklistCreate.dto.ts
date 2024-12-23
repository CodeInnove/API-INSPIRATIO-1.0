import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseDTO {
    @IsNotEmpty()
    @ApiProperty()
    zeroScale: string;

    @IsNotEmpty()
    @ApiProperty()
    scaleOne: string;

    @IsNotEmpty()
    @ApiProperty()
    scaleTwo: string;

    @IsNotEmpty()
    @ApiProperty()
    scaleThree: string;

    @IsNotEmpty()
    @ApiProperty()
    notApplicable: string;
  }

  class JointAtentionDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEight: ChooseDTO;

}

class SocialPlayDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEight: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNine: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEleven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwelve: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThirteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFourteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFifteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSixteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeventeen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEighteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNineteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwenty: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyThree: ChooseDTO;

}

class SelfRegulationDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEight: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNine: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEleven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwelve: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThirteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFourteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFifteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSixteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeventeen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEighteen: ChooseDTO;
}

class SocialOurEmotionalDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;
}

class SocialLanguageDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEight: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNine: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEleven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwelve: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThirteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFourteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFifteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSixteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeventeen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEighteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNineteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwenty: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyFour: ChooseDTO;
}

class ClassroomOurGroupBehaviorDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEight: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNine: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEleven: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwelve: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThirteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFourteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFifteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSixteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSeventeen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionEighteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionNineteen: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwenty: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwentyThree: ChooseDTO;
}

class NonverbalSocialLanguageDTO {
    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionOne: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionTwo: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionThree: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFour: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionFive: ChooseDTO;

    @ValidateNested()
    @Type(() => ChooseDTO)
    @ApiProperty({ type: ChooseDTO })
    questionSix: ChooseDTO;
}



  export class CreateSociallySavvyChecklistDto {
    @ValidateNested()
    @Type(() => JointAtentionDTO)
    @ApiProperty({ type: JointAtentionDTO })
    jointAtention: JointAtentionDTO;
	
	@ValidateNested()
    @Type(() => SocialPlayDTO)
    @ApiProperty({ type: SocialPlayDTO })
    socialPlay: SocialPlayDTO;
	
	@ValidateNested()
    @Type(() => SelfRegulationDTO)
    @ApiProperty({ type: SelfRegulationDTO })
    selfRegulation: SelfRegulationDTO;
	
	@ValidateNested()
    @Type(() => SocialOurEmotionalDTO)
    @ApiProperty({ type: SocialOurEmotionalDTO })
    socialOurEmotional: SocialOurEmotionalDTO;
	
	@ValidateNested()
    @Type(() => SocialLanguageDTO)
    @ApiProperty({ type: SocialLanguageDTO })
    socialLanguage: SocialLanguageDTO;
	
	@ValidateNested()
    @Type(() => ClassroomOurGroupBehaviorDTO)
    @ApiProperty({ type: ClassroomOurGroupBehaviorDTO })
    classroomOurGroupBehavior: ClassroomOurGroupBehaviorDTO;
	
	@ValidateNested()
    @Type(() => NonverbalSocialLanguageDTO)
    @ApiProperty({ type: NonverbalSocialLanguageDTO })
    nonverbalSocialLanguage: NonverbalSocialLanguageDTO;
  
  }