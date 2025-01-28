import { ApiProperty } from '@nestjs/swagger';

export class ClinicalHistoryDto {
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

export class NeuropsychomotorDevelopmentDto {
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

export class ActivitiesOfDailyLivingDto {
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

export class SignsOfReadinessDto {
  @ApiProperty()
  signsOfReadiness: string;

  @ApiProperty()
  specificDifficultiesInToiletTraining: string;
}

export class InstrumentalActivitiesOfDailyLivingDto {
  @ApiProperty()
  participatesInSchoolOrHomeTasks: string;

  @ApiProperty()
  taskDetails: string;
}

export class SchoolAndSocialRoutineDto {
  @ApiProperty()
  enrolledInSchool: string;

  @ApiProperty()
  enrolledInSchoolDetails: string;

  @ApiProperty()
  educationType: string;

  @ApiProperty()
  difficultiesReportedByTeachers: string;
}

export class TeacherReportedDifficultiesDto {
  @ApiProperty()
  participatesInGroupRecreationalActivities: string;

  @ApiProperty()
  interactionWithOtherChildrenAndAdults: string;
}

export class SensoryAndBehavioralAspectsDto {
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

export class PlayAndLeisureAspectsDto {
  @ApiProperty()
  prefersStructuredOrFreePlay: string;

  @ApiProperty()
  favoriteToysOrActivities: string;

  @ApiProperty()
  difficultyStartingOrMaintainingPlay: string;
}

export class SupportNetworkAndPreviousTreatmentsDto {
  @ApiProperty()
  previousTherapies: string;

  @ApiProperty()
  previousTherapiesDetails: string;

  @ApiProperty()
  familyOrCaregiversInTherapies: string;
}

export class ResponsibleGeneralObservationsDto {
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

  @ApiProperty()
  consultationReason: string;

  @ApiProperty()
  mainConcernOfResponsible: string;

  @ApiProperty()
  clinicalHistory: ClinicalHistoryDto;

  @ApiProperty()
  neuropsychomotorDevelopment: NeuropsychomotorDevelopmentDto;

  @ApiProperty()
  activitiesOfDailyLiving: ActivitiesOfDailyLivingDto;

  @ApiProperty()
  signsOfReadiness: SignsOfReadinessDto;

  @ApiProperty()
  instrumentalActivitiesOfDailyLiving: InstrumentalActivitiesOfDailyLivingDto;

  @ApiProperty()
  schoolAndSocialRoutine: SchoolAndSocialRoutineDto;

  @ApiProperty()
  teacherReportedDifficulties: TeacherReportedDifficultiesDto;

  @ApiProperty()
  sensoryAndBehavioralAspects: SensoryAndBehavioralAspectsDto;

  @ApiProperty()
  playAndLeisureAspects: PlayAndLeisureAspectsDto;

  @ApiProperty()
  supportNetworkAndPreviousTreatments: SupportNetworkAndPreviousTreatmentsDto;

  @ApiProperty()
  responsibleGeneralObservations: ResponsibleGeneralObservationsDto;
}
