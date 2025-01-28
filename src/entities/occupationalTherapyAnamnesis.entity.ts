import { Schema, Document } from 'mongoose';
import { IOta } from 'src/features/occupational-therapy-anamnesis/types/ota';

export const OccupationalTherapyAnamnesisSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'User' },
  patient: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  diagnoses: { type: String },
  //responsable: { type: Schema.Types.ObjectId, ref: 'User' },
  generalObservations: {
    consultationReason: { type: String },
    mainConcernOfResponsible: { type: String },
  },
  clinicalHistory: {
    pregnancy: { type: String },
    complicationsDuringPregnancy: { type: String },
    childbirth: { type: String },
    prematurity: { type: String },
    gestationalWeeks: { type: String },
    apgarAtBirth: { type: String },
    neonatalHospitalization: { type: String },
    hospitalizationTime: { type: String },
    pastDiseasesOrHospitalizations: { type: String },
  },
  neuropsychomotorDevelopment: {
    headControlMonths: { type: String },
    sittingWithoutSupportMonths: { type: String },
    crawlingMonths: { type: String },
    walkingMonths: { type: String },
    firstWordsMonths: { type: String },
    sphincterControlYears: { type: String },
    regressionOrLossOfSkills: { type: String },
  },
  activitiesOfDailyLiving: {
    feeding: { type: String },
    feedingHelpDetails: { type: String },
    aversionToCertainFoods: { type: String },
    aversionFoodDetails: { type: String },
    acceptsNewFoodsEasily: { type: String },
    needsSpecificStrategiesForFeeding: { type: String },
    feedingStrategies: { type: String },
    prefersSpecificFoodConsistency: { type: String },
    personalHygiene: { type: String },
    hygieneDetails: { type: String },
    bathing: { type: String },
    bathSpecificDetails: { type: String },
    dressing: { type: String },
    dressingDifficultyDetails: { type: String },
    sphincterControl: { type: String },
    specificSituationsForDiaper: { type: String },
    inToiletTraining: { type: String },
    toiletTrainingDuration: { type: String },
    strategiesUsedByCaregiversOrSchool: { type: String },
  },
  signsOfReadiness: {
    signsOfReadiness: { type: String },
    specificDifficultiesInToiletTraining: { type: String },
  },
  instrumentalActivitiesOfDailyLiving: {
    participatesInSchoolOrHomeTasks: { type: String },
    taskDetails: { type: String },
  },
  schoolAndSocialRoutine: {
    enrolledInSchool: { type: String },
    educationType: { type: String },
    enrolledInSchoolDetails: { type: String },
    difficultiesReportedByTeachers: { type: String },
  },
  teacherReportedDifficulties: {
    participatesInGroupRecreationalActivities: { type: String },
    interactionWithOtherChildrenAndAdults: { type: String },
  },
  sensoryAndBehavioralAspects: {
    sensorySensitivities: { type: String },
    taskDetailsSensitivities: { type: String },
    repetitiveOrStereotypedBehaviors: { type: String },
    repetitiveBehaviorsDescription: { type: String },
    responsesToRoutineChanges: { type: String },
    behaviorCrises: { type: String },
    crisesDetails: { type: String },
  },
  playAndLeisureAspects: {
    prefersStructuredOrFreePlay: { type: String },
    favoriteToysOrActivities: { type: String },
    difficultyStartingOrMaintainingPlay: { type: String },
  },
  supportNetworkAndPreviousTreatments: {
    previousTherapies: { type: String },
    previousTherapiesDetails: { type: String },
    familyOrCaregiversInTherapies: { type: String },
  },
  responsibleGeneralObservations: {
    essentialObservationsForTreatmentPlanning: { type: String },
    responsibleObservations: { type: String },
  },
});

export interface IOccupationalTherapyAnamnesisEntity
  extends Omit<IOta, '_id'>,
    Document {}
