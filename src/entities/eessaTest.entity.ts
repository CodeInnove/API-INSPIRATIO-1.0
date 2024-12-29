import { Schema, Document } from 'mongoose';
import { IEst } from 'src/features/eessa-test/types/est';

export const SensoryProcessingMeasureSchoolPreSchoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioEst: { type: Schema.Types.Mixed, required: true },
  simpleandDuplicatedSyllablesEst: { type: Schema.Types.Mixed, required: true },
  combinationOfTwoSyllablesEst: { type: Schema.Types.Mixed, required: true },
  combinationOfThreeSyllablesEst: { type: Schema.Types.Mixed, required: true },
  prosodySpokenPhrasesEst: { type: Schema.Types.Mixed, required: true },
  prosodyOtherContextsEst: { type: Schema.Types.Mixed, required: true },
});

export interface IEessaTestEntity extends Omit<IEst, '_id'>, Document {}