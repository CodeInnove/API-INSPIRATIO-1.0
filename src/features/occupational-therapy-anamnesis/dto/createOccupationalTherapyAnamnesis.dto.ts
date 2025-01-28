import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

class GeneralObservationsDto {
  @ApiProperty()
  @IsString()
  consultationReason: string;

  @ApiProperty()
  @IsString()
  mainConcernOfResponsible: string;
}
class ClinicalHistoryDto {
  @ApiProperty()
  pregnancy: string;

  @ApiProperty()
  complicationsDuringPregnancy: string;

  @ApiProperty()
  childbirth: string;

  @ApiProperty()
  prematurity: string;

  @ApiProperty()
  gestationalWeeks: string;

  @ApiProperty()
  apgarAtBirth: string;

  @ApiProperty()
  neonatalHospitalization: string;

  @ApiProperty()
  hospitalizationTime: string;

  @ApiProperty()
  pastDiseasesOrHospitalizations: string;
}

class NeuropsychomotorDevelopmentDto {
  @ApiProperty()
  headControlMonths: string;

  @ApiProperty()
  sittingWithoutSupportMonths: string;

  @ApiProperty()
  crawlingMonths: string;

  @ApiProperty()
  walkingMonths: string;

  @ApiProperty()
  firstWordsMonths: string;

  @ApiProperty()
  sphincterControlYears: string;

  @ApiProperty()
  regressionOrLossOfSkills: string;
}

 class ActivitiesOfDailyLivingDto {
  @ApiProperty()
  feeding: string;

  @ApiProperty()
  feedingHelpDetails: string;

  @ApiProperty()
  aversionToCertainFoods: string;

  @ApiProperty()
  aversionFoodDetails: string;

  @ApiProperty()
  acceptsNewFoodsEasily: string;

  @ApiProperty()
  needsSpecificStrategiesForFeeding: string;

  @ApiProperty()
  feedingStrategies: string;

  @ApiProperty()
  prefersSpecificFoodConsistency: string;

  @ApiProperty()
  personalHygiene: string;

  @ApiProperty()
  hygieneDetails: string;

  @ApiProperty()
  bathing: string;

  @ApiProperty()
  bathSpecificDetails: string;

  @ApiProperty()
  dressing: string;

  @ApiProperty()
  dressingDifficultyDetails: string;

  @ApiProperty()
  sphincterControl: string;

  @ApiProperty()
  specificSituationsForDiaper: string;

  @ApiProperty()
  inToiletTraining: string;

  @ApiProperty()
  toiletTrainingDuration: string;

  @ApiProperty()
  strategiesUsedByCaregiversOrSchool: string;
}

 class SignsOfReadinessDto {
  @ApiProperty()
  signsOfReadiness: string;

  @ApiProperty()
  specificDifficultiesInToiletTraining: string;
}

class InstrumentalActivitiesOfDailyLivingDto {
  @ApiProperty()
  participatesInSchoolOrHomeTasks: string;

  @ApiProperty()
  taskDetails: string;
}

 class SchoolAndSocialRoutineDto {
  @ApiProperty()
  enrolledInSchool: string;

  @ApiProperty()
  enrolledInSchoolDetails: string;

  @ApiProperty()
  educationType: string;

  @ApiProperty()
  difficultiesReportedByTeachers: string;
}

 class TeacherReportedDifficultiesDto {
  @ApiProperty()
  participatesInGroupRecreationalActivities: string;

  @ApiProperty()
  interactionWithOtherChildrenAndAdults: string;
}

 class SensoryAndBehavioralAspectsDto {
  @ApiProperty()
  sensorySensitivities: string;

  @ApiProperty()
  taskDetailsSensitivities: string;

  @ApiProperty()
  repetitiveOrStereotypedBehaviors: string;

  @ApiProperty()
  repetitiveBehaviorsDescription: string;

  @ApiProperty()
  responsesToRoutineChanges: string;

  @ApiProperty()
  behaviorCrises: string;

  @ApiProperty()
  crisesDetails: string;
}

 class PlayAndLeisureAspectsDto {
  @ApiProperty()
  prefersStructuredOrFreePlay: string;

  @ApiProperty()
  favoriteToysOrActivities: string;

  @ApiProperty()
  difficultyStartingOrMaintainingPlay: string;
}

 class SupportNetworkAndPreviousTreatmentsDto {
  @ApiProperty()
  previousTherapies: string;

  @ApiProperty()
  previousTherapiesDetails: string;

  @ApiProperty()
  familyOrCaregiversInTherapies: string;
}

 class ResponsibleGeneralObservationsDto {
  @ApiProperty()
  essentialObservationsForTreatmentPlanning: string;

  @ApiProperty()
  responsibleObservations: string;
}

export class CreateOccupationalTherapyAnamnesisDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  doctor: string;

  @ApiProperty()
  patient: string;

  @ApiProperty()
  diagnoses: string;

  @ValidateNested()
  @Type(() => GeneralObservationsDto)
  @ApiProperty({ type: GeneralObservationsDto })
  generalObservations: GeneralObservationsDto;

   @ValidateNested()
  @Type(() => ClinicalHistoryDto)
  @ApiProperty({ type: ClinicalHistoryDto })
  clinicalHistory: ClinicalHistoryDto;

  @ValidateNested()
  @Type(() => NeuropsychomotorDevelopmentDto)
  @ApiProperty({ type: NeuropsychomotorDevelopmentDto })
  neuropsychomotorDevelopment: NeuropsychomotorDevelopmentDto;

  @ValidateNested()
  @Type(() => ActivitiesOfDailyLivingDto)
  @ApiProperty({ type: ActivitiesOfDailyLivingDto })
  activitiesOfDailyLiving: ActivitiesOfDailyLivingDto;

  @ValidateNested()
  @Type(() => SignsOfReadinessDto)
  @ApiProperty({ type: SignsOfReadinessDto })
  signsOfReadiness: SignsOfReadinessDto;

  @ValidateNested()
  @Type(() => InstrumentalActivitiesOfDailyLivingDto)
  @ApiProperty({ type: InstrumentalActivitiesOfDailyLivingDto })
  instrumentalActivitiesOfDailyLiving: InstrumentalActivitiesOfDailyLivingDto;

  @ValidateNested()
  @Type(() => SchoolAndSocialRoutineDto)
  @ApiProperty({ type: SchoolAndSocialRoutineDto })
  schoolAndSocialRoutine: SchoolAndSocialRoutineDto;

  @ValidateNested()
  @Type(() => TeacherReportedDifficultiesDto)
  @ApiProperty({ type: TeacherReportedDifficultiesDto })
  teacherReportedDifficulties: TeacherReportedDifficultiesDto;

  @ValidateNested()
  @Type(() => SensoryAndBehavioralAspectsDto)
  @ApiProperty({ type: SensoryAndBehavioralAspectsDto })
  sensoryAndBehavioralAspects: SensoryAndBehavioralAspectsDto;

  @ValidateNested()
  @Type(() => PlayAndLeisureAspectsDto)
  @ApiProperty({ type: PlayAndLeisureAspectsDto })
  playAndLeisureAspects: PlayAndLeisureAspectsDto;

  @ValidateNested()
  @Type(() => SupportNetworkAndPreviousTreatmentsDto)
  @ApiProperty({ type: SupportNetworkAndPreviousTreatmentsDto })
  supportNetworkAndPreviousTreatments: SupportNetworkAndPreviousTreatmentsDto;

  @ValidateNested()
  @Type(() => ResponsibleGeneralObservationsDto)
  @ApiProperty({ type: ResponsibleGeneralObservationsDto })
  responsibleGeneralObservations: ResponsibleGeneralObservationsDto;
}
