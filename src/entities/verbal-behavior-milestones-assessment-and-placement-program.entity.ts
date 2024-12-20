import { Schema, Document } from 'mongoose';
import { IFunctionalIndependencyMetric } from "../features/graphics/functionalIndependencyMetrics/types/functionalIndependecyMetrics";

export const VbmappSchema = new Schema({
    // modo de usario para todos os graficos
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patient: { type: Schema.Types.ObjectId, ref: "User", },
  date1: { type: String, required: true },
  date2: { type: String, required: true },
  date3: { type: String, required: true },
  date4: { type: String, required: true },
  evaluator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  age1: { type: Number, required: true },
  age2: { type: Number, required: true },
  age3: { type: Number, required: true },
  age4: { type: Number, required: true },

  // av milestones
  levelOne: {
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    imitation: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    spontaneousVocalBehavior: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelOne: { type: Number, required: true, default: 0 },
  },

  //NÍVEL 2 (1 ano e 6 meses a 2 anos e 6 meses)
  levelTwo: {
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    imitation: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    intraverbal: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    classroomRoutineGroupSkills:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    linguisticStructure: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelTwo: { type: Number, required: true },

  },

  //NÍVEL 3 (2 anos e 6 meses a 4 anos)
  levelThree:{
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listenerResponseFunctioncharacteristicClass: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    intraverbal: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    classroomRoutineGroupSkills:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    linguisticStructure: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    reading: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    writing: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    math: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelThree: { type: Number, required: true },
  },

  //subteste ecoico
  //...



  



});

export interface IVbmappEntity extends Omit<IFunctionalIndependencyMetric, '_id'>, Document { }