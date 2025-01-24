import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
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

class ObservationDto {
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
  @IsString()
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
