import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChooseYesOurNoPsychopedagogicalAnamnesisDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionYes: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionNo: string;
  }

class ChooseReadingLevelDTO {
    @IsNotEmpty()
    @ApiProperty()
    optionDoesNotRead: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionSyllableReading: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsNotEmpty()
    @ApiProperty()
    optionFluenReading: string; string;
}

class ChooseTextProductionDTO{
    @IsNotEmpty()
    @ApiProperty()
    optionDoesNotWrite: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionWritesSentences: string;

    @IsNotEmpty()
    @ApiProperty()
    optionFluenReading: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionProducesShortTexts: string;

    @IsNotEmpty()
    @ApiProperty()
    optionProducesTextWithoutContextualizations: string;

    @IsNotEmpty()
    @ApiProperty()
    optionProducesTextWithCohesion: string;
}

class ChoosePreSyllabicWritingLevelDTO{
    @IsNotEmpty()
    @ApiProperty()
    optionSyllabic: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionSyllabicOurAlphabetic: string;

    @IsNotEmpty()
    @ApiProperty()
    optionAlphabetic: string;
}

class ChooseLogicalReasoningDTO{
    @IsNotEmpty()
    @ApiProperty()
    optionAddition: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionSubtraction: string;

    @IsNotEmpty()
    @ApiProperty()
    optionMultiplication: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionDivision: string;
}

class ChooseInformationOfficerDTO{

    @IsNotEmpty()
    @ApiProperty()
    optionFather: string;

    @IsNotEmpty()
    @ApiProperty()
    optionMom: string;
    
    @IsNotEmpty()
    @ApiProperty()
    optionGrandMother: string;
}

class AnswerPsychopedagogicalAnamnesisDTO{
    @IsNotEmpty()
    @ApiProperty()
    answerInWriting: string;
  }

class IdentificationDTO{
    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    patient: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    dateOfApplication: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    dateBirth: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    age: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    teacherName: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    supportProfessional: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolName: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolPeriod:AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolYear: AnswerPsychopedagogicalAnamnesisDTO;
}

class FamilyLearningHistoryDTO {

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    fatherName: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    ageFather: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolingFather: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    difficultyFather: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    motherName: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    ageMother: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolingMother: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    difficultyMother: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    nameBrotherOne: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    ageBrotherOne: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolingBrotherOne: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    difficultyBrotherOne: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    nameBrotherTwo: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    ageBrotherTwo: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolingBrotherTwo: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    difficultyBrotherTwo: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    nameBrotherThree: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    ageBrotherThree: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolingBrotherThree: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    difficultyBrotherThree: AnswerPsychopedagogicalAnamnesisDTO;
}

class ObservationDTO {

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    bedtime: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    wakeUpTime: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    sportsActivitiesHeLikesTheMost: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    externalServiceActivities: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    doYouUseAdaptedActivitiesAtSchool: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatActivitiesAreAdapted: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    doYouHaveDifficultyInSocialInteraction: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatDifficultyInSocialInteraction: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    resistanceToRoutineChange: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatRoutineChange: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    eyeContact: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatEyeContact: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    interestInLearning: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatInterestInLearning: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    hyperactivity: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatHyperactivity: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    inattention: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatInattention: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    areYouLiterate: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatAreYouLiterate: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    changeInLanguageAndCommunication: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatLanguageAndCommunication: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    inappropriateReactionToFrustration: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatReactionToFrustration: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    crisisTypeCrisisTrigger: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatTypeCrisisTrigger: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    stereotypy: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatStereotypy: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    medication: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatMedication: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    allergy: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    whatAllergy: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    Diagnosis: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    schoolFamilyComplaint: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    outher: AnswerPsychopedagogicalAnamnesisDTO;

}
    
class LearningAssessmentDTO{

    @ValidateNested()
    @Type(() => ChooseReadingLevelDTO)
    @ApiProperty({ type: ChooseReadingLevelDTO })
    readingLevel: ChooseReadingLevelDTO;

    @ValidateNested()
    @Type(() => ChooseTextProductionDTO)
    @ApiProperty({ type: ChooseTextProductionDTO })
    textProduction: ChooseTextProductionDTO;

    @ValidateNested()
    @Type(() => ChoosePreSyllabicWritingLevelDTO)
    @ApiProperty({ type: ChoosePreSyllabicWritingLevelDTO })
    preSyllabicWritingLevel: ChoosePreSyllabicWritingLevelDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    logicalReasoning: AnswerPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    doYouRecognizeTheColors: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;
    
    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    difficultyRecognizeTheColors: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    doYouHaveDifficultyTracingTheNumerals: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;
          
    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    difficultyRecognizingNumbers: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseLogicalReasoningDTO)
    @ApiProperty({ type: ChooseLogicalReasoningDTO })
    doYouHaveAChangeWhenCarryingOutOperations: ChooseLogicalReasoningDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    difficultyCarryingOutOperations: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;

    @ValidateNested()
    @Type(() => ChooseYesOurNoPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: ChooseYesOurNoPsychopedagogicalAnamnesisDTO })
    doesItSolveProblemSituations: ChooseYesOurNoPsychopedagogicalAnamnesisDTO;
}

class FinishFormsDTO{

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    therapistInCharge: ChooseInformationOfficerDTO;

    @ValidateNested()
    @Type(() => AnswerPsychopedagogicalAnamnesisDTO)
    @ApiProperty({ type: AnswerPsychopedagogicalAnamnesisDTO })
    informationOfficer: ChooseInformationOfficerDTO;

    @ValidateNested()
    @Type(() => ChooseInformationOfficerDTO)
    @ApiProperty({ type: ChooseInformationOfficerDTO })
    choiseInformationOfficer: ChooseInformationOfficerDTO;

    }

export class CreatePsychopedagogicalAnamnesisDTO {
    @ValidateNested()
    @Type(() => IdentificationDTO)
    @ApiProperty({ type: IdentificationDTO })
    Identification: IdentificationDTO;
    
    @ValidateNested()
    @Type(() => FamilyLearningHistoryDTO)
    @ApiProperty({ type: FamilyLearningHistoryDTO })
    FamilyLearningHistory: FamilyLearningHistoryDTO;

    @ValidateNested()
    @Type(() => ObservationDTO)
    @ApiProperty({ type: ObservationDTO })
    Observation: ObservationDTO;

    @ValidateNested()
    @Type(() => LearningAssessmentDTO)
    @ApiProperty({ type: LearningAssessmentDTO })
    LearningAssessment: LearningAssessmentDTO;
  

    @ValidateNested()
    @Type(() => FinishFormsDTO)
    @ApiProperty({ type: FinishFormsDTO })
    FinishForms: FinishFormsDTO;
    }