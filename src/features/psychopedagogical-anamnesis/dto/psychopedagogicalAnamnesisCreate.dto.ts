import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class schoolIdentification {
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
}
class FamilyLearningHistoryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  fatherName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ageFather: string;

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
  @IsString()
  @IsOptional()
  ageMother: string;

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
  @IsString()
  @IsOptional()
  ageBrotherOne: string;

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
  @IsString()
  @IsOptional()
  ageBrotherTwo: string;

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
  @IsString()
  @IsOptional()
  ageBrotherThree: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  schoolingBrotherThree: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  difficultyBrotherThree: string;
}

class ObservationsDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  bedtime: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  wakeUpTime: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  sportsActivitiesHeLikesTheMost: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  externalServiceActivities: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  doYouUseAdaptedActivitiesAtSchool: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatActivitiesAreAdapted: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  doYouHaveDifficultyInSocialInteraction: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatDifficultyInSocialInteraction: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  resistanceToRoutineChange: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatResistanceToRoutineChange: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  eyeContact: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatEyeContact: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  interestInLearning: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatInterestInLearning: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  hyperactivity: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatHyperactivity: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  inattention: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatInattention: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  areYouLiterate: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatAreYouLiterate: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  changeInLanguageAndCommunication: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatLanguageAndCommunication: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  inappropriateReactionToFrustration: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatReactionToFrustration: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  crisisTypeCrisisTrigger: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatTypeCrisisTrigger: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  stereotypy: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatStereotypy: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  medication: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatMedication: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  allergy: string;

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

class LearningAssessmentDto {
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
  @IsString()
  @IsOptional()
  doYouRecognizeTheColors: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  difficultyRecognizeTheColors: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  doYouHaveDifficultyTracingTheNumerals: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  difficultyRecognizingNumbers: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  doYouHaveAChangeWhenCarryingOutOperations: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  difficultyCarryingOutOperations: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  doesItSolveProblemSituations: string;
}

class ResponsibleForInformingDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  informationOfficer: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  choiseInformationOfficer: string;
}

export class PsychopedagogicalAnamnesisCreateDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  doctor: string;

  @ApiProperty()
  patient: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateBirth: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  age: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => schoolIdentification)
  schoolIdentification: schoolIdentification;

  @ApiProperty()
  @ValidateNested()
  @Type(() => FamilyLearningHistoryDto)
  familyLearningHistory: FamilyLearningHistoryDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ObservationsDto)
  observation: ObservationsDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => LearningAssessmentDto)
  learningAssessment: LearningAssessmentDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ResponsibleForInformingDto)
  responsibleForInforming: ResponsibleForInformingDto;
}
