import { Schema, Document } from 'mongoose';
import { IOta } from 'src/features/occupational-therapy-anamnesis/types/ota';

export const OccupationalTherapyAnamnesisSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioOta: { type: Schema.Types.Mixed, required: true },
  generalObservations: { type: Schema.Types.Mixed, required: true },
  clinicalHistory: { type: Schema.Types.Mixed, required: true },
  neuropsychomotorDevelopment: { type: Schema.Types.Mixed, required: true },
  activitiesOfDailyLiving: { type: Schema.Types.Mixed, required: true },
  signsOfReadiness: { type: Schema.Types.Mixed, required: true },
  instrumentalActivitiesOfDailyLiving: { type: Schema.Types.Mixed, required: true },
  schoolAndSocialRoutine: { type: Schema.Types.Mixed, required: true },
  teacherReportedDifficulties: { type: Schema.Types.Mixed, required: true },
  sensoryAndBehavioralAspects: { type: Schema.Types.Mixed, required: true },
  playAndLeisureAspects: { type: Schema.Types.Mixed, required: true },
  supportNetworkAndPreviousTreatments: { type: Schema.Types.Mixed, required: true },
  responsibleGeneralObservations: { type: Schema.Types.Mixed, required: true },
});

export interface IOccupationalTherapyAnamnesisEntity extends Omit<IOta, '_id'>, Document {}