import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';



class FamilyLearningHistoryDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    fatherName: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ageFather: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolingFather: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyFather: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    motherName: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ageMother: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolingMother: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyMother: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    nameBrotherOne: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ageBrotherOne: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolingBrotherOne: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyBrotherOne: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    nameBrotherTwo: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ageBrotherTwo: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolingBrotherTwo: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyBrotherTwo: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    nameBrotherThree: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ageBrotherThree: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolingBrotherThree: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyBrotherThree: string;
}


class ObservationDto{
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    bedtime: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    wakeUpTime: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    sportsActivitiesHeLikesTheMost: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    externalServiceActivities: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    doYouUseAdaptedActivitiesAtSchool: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatActivitiesAreAdapted: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    doYouHaveDifficultyInSocialInteraction: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    whatDifficultyInSocialInteraction: boolean;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    resistanceToRoutineChange: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatResistanceToRoutineChange: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    eyeContact: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatEyeContact: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    interestInLearning: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatInterestInLearning: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    hyperactivity: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatHyperactivity: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    inattention: boolean;


    @ApiProperty()
    @IsString()
    @IsOptional()
    whatInattention: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    areYouLiterate: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatAreYouLiterate: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    changeInLanguageAndCommunication: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatLanguageAndCommunication: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    inappropriateReactionToFrustration: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatReactionToFrustration: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    crisisTypeCrisisTrigger: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatTypeCrisisTrigger: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    stereotypy: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatStereotypy: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    medication: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatMedication: string;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    allergy: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    whatAllergy: string;


    @ApiProperty()
    @IsString()
    @IsOptional()
    Diagnosis: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolFamilyComplaint: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    outher: string;

}

class LearningAssessmentDto{
    @ApiProperty()
    @IsString()
    @IsOptional()
    readingLevel: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    textProduction: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    preSyllabicWritingLevel: string;
        
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    doYouRecognizeTheColors: boolean;                                                                                                         

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    difficultyRecognizeTheColors: boolean;


    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    doYouHaveDifficultyTracingTheNumerals: boolean;
    
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    difficultyRecognizingNumbers: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    doYouHaveAChangeWhenCarryingOutOperations: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    difficultyCarryingOutOperations: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    doesItSolveProblemSituations:  boolean;
}

export class PsychopedagogicalAnamnesisCreateDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    patient: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    dateOfApplication: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    dateBirth: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    age: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    teacherName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    supportProfessional: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolPeriod: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    schoolYear: string;

    @ApiProperty()
    @ValidateNested()
    @Type(() => FamilyLearningHistoryDto)
    familyLearningHistory: FamilyLearningHistoryDto;

    @ApiProperty()
    @ValidateNested()
    @Type(() => ObservationDto)
    observation: ObservationDto;

    @ApiProperty()
    @ValidateNested()
    @Type(() => LearningAssessmentDto)
    learningAssessment: LearningAssessmentDto;
   
    @ApiProperty()
    @IsString()
    @IsOptional()
    therapistInCharge: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    informationOfficer: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    choiseInformationOfficer: string;
}
