export interface IGeneralObservations {
  consultationReason: string;
  mainConcernOfResponsible: string;
}

export interface IClinicalHistory {
  pregnancy: string;
  complicationsDuringPregnancy: string;
  childbirth: string;
  prematurity: string;
  gestationalWeeks: string;
  apgarAtBirth: string;
  neonatalHospitalization: string;
  hospitalizationTime: string;
  pastDiseasesOrHospitalizations: string;
}

export interface INeuropsychomotorDevelopment {
  headControlMonths: string;
  sittingWithoutSupportMonths: string;
  crawlingMonths: string;
  walkingMonths: string;
  firstWordsMonths: string;
  sphincterControlYears: string;
  regressionOrLossOfSkills: string;
}

export interface IActivitiesOfDailyLiving {
  feeding: string;
  feedingHelpDetails: string;
  aversionToCertainFoods: string;
  aversionFoodDetails: string;
  acceptsNewFoodsEasily: string;
  needsSpecificStrategiesForFeeding: string;
  feedingStrategies: string;
  prefersSpecificFoodConsistency: string;
  personalHygiene: string;
  hygieneDetails: string;
  bathing: string;
  bathSpecificDetails: string;
  dressing: string;
  dressingDifficultyDetails: string;
  sphincterControl: string;
  specificSituationsForDiaper: string;
  inToiletTraining: string;
  toiletTrainingDuration: string;
  strategiesUsedByCaregiversOrSchool: string;
}

export interface ISignsOfReadiness {
  signsOfReadiness: string;
  specificDifficultiesInToiletTraining: string;
}

export interface IInstrumentalActivitiesOfDailyLiving {
  participatesInSchoolOrHomeTasks: string;
  taskDetails: string;
}

export interface ISchoolAndSocialRoutine {
  enrolledInSchool: string;
  enrolledInSchoolDetails: string;
  educationType: string;
  difficultiesReportedByTeachers: string;
}

export interface ITeacherReportedDifficulties {
  participatesInGroupRecreationalActivities: string;
  interactionWithOtherChildrenAndAdults: string;
}

export interface ISensoryAndBehavioralAspects {
  sensorySensitivities: string;
  taskDetailsSensitivities: string;
  repetitiveOrStereotypedBehaviors: string;
  repetitiveBehaviorsDescription: string;
  responsesToRoutineChanges: string;
  behaviorCrises: string;
  crisesDetails: string;
}

export interface IPlayAndLeisureAspects {
  prefersStructuredOrFreePlay: string;
  favoriteToysOrActivities: string;
  difficultyStartingOrMaintainingPlay: string;
}

export interface ISupportNetworkAndPreviousTreatments {
  previousTherapies: string;
  previousTherapiesDetails: string;
  familyOrCaregiversInTherapies: string;
}

export interface IResponsibleGeneralObservations {
  essentialObservationsForTreatmentPlanning: string;
  responsibleObservations: string;
}
