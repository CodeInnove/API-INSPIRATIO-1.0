import { Schema, Document } from 'mongoose';
import { ISwq } from 'src/features/swal-qol/types/swq';

export const SwalQOLSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioSwalQOL: { type: Schema.Types.Mixed, required: true },
  generalSwalQOL: { type: Schema.Types.Mixed, required: true },
  eatingSwalQOL: { type: Schema.Types.Mixed, required: true },
  eatingTimeSwalQOL: { type: Schema.Types.Mixed, required: true },
  physicalIssuesSwalQOL: { type: Schema.Types.Mixed, required: true },
  foodChoicesSwalQOL: { type: Schema.Types.Mixed, required: true },
  communicationSwalQOL: { type: Schema.Types.Mixed, required: true },
  concernsSwalQOL: { type: Schema.Types.Mixed, required: true },
  emotionsSwalQOL: { type: Schema.Types.Mixed, required: true },
  socialLifeSwalQOL: { type: Schema.Types.Mixed, required: true },
  physicalSymptomsSwalQOL: { type: Schema.Types.Mixed, required: true },
  sleepIssuesSwalQOL: { type: Schema.Types.Mixed, required: true },
  scoreGlobalSwalQOL: { type: Schema.Types.Mixed, required: true },
 generalQuestionsSwalQOL:  { type: Schema.Types.Mixed, required: true },
});

export interface ISwalQOLEntity extends Omit<ISwq, '_id'>, Document {}