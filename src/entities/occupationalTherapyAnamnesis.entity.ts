import { Schema, Document } from 'mongoose';
import { IOta } from 'src/features/occupational-therapy-anamnesis/types/ota';


export const OccupationalTherapyAnamnesisSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'User' },
  patient: { type: Schema.Types.ObjectId, ref: 'User'  },
  dateOfApplication: { type: Date, default: Date.now },
  //diagnoses: { type: String},
  //responsable: { type: Schema.Types.ObjectId, ref: 'User' },
  generalObservations: {
    consultationReason: { type: String},
    mainConcernOfResponsible: { type: String},
  },
  clinicalHistory: {
    pregnancy: {type: String},
    complicationsDuringPregnancy: { type: String},
    prematurity: {type: String, enum: ['Sim', 'Não']},
    gestationalWeeks: {type: Number},
    apgarAtBirth: {type: Number},
    neonatalHospitalization: {type: String, enum: ['Sim', 'Não']},
    hospitalizationTime: { type: String},
    pastDiseasesOrHospitalizations: { type: String},
  },
  neuropsychomotorDevelopment: {
    headControlMonths: {type: Number},
    sittingWithoutSupportMonths: {type: Number},
    crawlingMonths: {type: Number},
    walkingMonths: {type: Number},
    firstWordsMonths: {type: Number},
    sphincterControlYears: {type: Number},
    regressionOrLossOfSkills: { type: String},
  },
  activitiesOfDailyLiving: {
    feeding: {type: String, enum: ['Independente', 'Necessita de auxílio' , 'Alimentação por sonda']},
    feedingHelpDetails: { type: String},
    aversionToCertainFoods: {type: String, enum: ['Sim', 'Não']},
    aversionFoodDetails: { type: String},
    acceptsNewFoodsEasily: {type: String, enum: ['Sim', 'Não']},
    needsSpecificStrategiesForFeeding: {type: String, enum: ['Sim', 'Não']},
    feedingStrategies: { type: String},
    prefersSpecificFoodConsistency: { type: String},
    personalHygiene: {type: String, enum: ['Independente' , 'Com auxílio parcial' , 'Necessita de supervisão total']},
    hygieneDetails: { type: String},
    bathing: {type: String, enum: ['Independente' , 'Auxílio para partes específicas (especificar)' , 'Necessita de supervisão completa']},
    bathSpecificDetails: { type: String},
    dressing: {type: String, enum: ['Completa independência' , 'Dificuldade com botões, zíperes, etc' , 'Auxílio completo']},
    dressingDifficultyDetails: { type: String},
    sphincterControl: {type: String, enum: ['Total' , 'Parcial', 'Necessita de fralda o tempo todo']},
    specificSituationsForDiaper: { type: String},
    inToiletTraining: {type: String, enum: ['Sim', 'Não']},
    toiletTrainingDuration: { type: String},
    strategiesUsedByCaregiversOrSchool: { type: String},
  },
  signsOfReadiness: {
    signsOfReadiness: {type: String},
    specificDifficultiesInToiletTraining: { type: String},
  },
  instrumentalActivitiesOfDailyLiving: {
    participatesInSchoolOrHomeTasks: {type: String, enum: ['Sim', 'Não']},
    taskDetails: { type: String},
  },
  schoolAndSocialRoutine: {
    enrolledInSchool: {type: String, enum: ['Sim', 'Não']},
    educationType: {type: String, enum: [ 'Regular' , 'Regular com apoio' , 'Especial']},
    enrolledInSchoolDetails: { type: String},
    difficultiesReportedByTeachers: { type: String},
  },
  teacherReportedDifficulties: {
    participatesInGroupRecreationalActivities: {type: String, enum: ['Sim', 'Não']},
    interactionWithOtherChildrenAndAdults:  {type: String, enum: [ 'Busca interação' , 'Evita interação' , 'Prefere brincar sozinho']}, 
  },
  sensoryAndBehavioralAspects: {
    sensorySensitivities: {type: String, enum: ['Tátil' , 'Auditiva' , 'Visual' , 'Olfativa' , 'Outras']},
	  taskDetailsSensitivities: { type: String},
    repetitiveOrStereotypedBehaviors: {type: String, enum: ['Sim', 'Não']},
    repetitiveBehaviorsDescription: { type: String},
    responsesToRoutineChanges: {type: String, enum: ['Boa adaptação' ,'Dificuldade significativa']}, 
    behaviorCrises: {type: String, enum: ['Sim', 'Não']},
    crisesDetails: { type: String},
  },
  playAndLeisureAspects: {
    prefersStructuredOrFreePlay: {type: String}, 
    favoriteToysOrActivities: { type: String},
    difficultyStartingOrMaintainingPlay: {type: String},
  },
  supportNetworkAndPreviousTreatments: {
    previousTherapies: {type: String}, 
    previousTherapiesDetails: { type: String}, 
    familyOrCaregiversInTherapies: { type: String},
  },
  responsibleGeneralObservations: {
    essentialObservationsForTreatmentPlanning: {type: String, enum: ['Sim', 'Não']},
    responsibleObservations: { type: String},
  },
});

export interface IOccupationalTherapyAnamnesisEntity extends Omit<IOta, '_id'>, Document {}