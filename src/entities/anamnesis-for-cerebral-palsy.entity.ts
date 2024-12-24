import { Schema, Document } from 'mongoose';
import { IAfcp } from 'src/features/anamnesis-for-cerebral-palsy/types/AFCP';  

export const AnamneseCerebralSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  Gestation: { type: Schema.Types.Mixed, required: true },
  development: { type: Schema.Types.Mixed, required: true },
  foods: { type: Schema.Types.Mixed, required: true },
});

export interface IAnamneseCerebralEntity extends Omit<IAfcp, '_id'>, Document {}