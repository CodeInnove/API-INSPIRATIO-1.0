import { Schema, Document } from 'mongoose';
import { ISpm } from 'src/features/sensory-processing-measure/entities/spm'; 

export const SensoryProcessingMeasureSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  sensoryProcessingMeasure: { type: Schema.Types.Mixed, required: true },
  participationSocial: { type: Schema.Types.Mixed, required: true },
  vision: { type: Schema.Types.Mixed, required: true },
  hearing: { type: Schema.Types.Mixed, required: true },
  touch: { type: Schema.Types.Mixed, required: true },
  smellAndTaste: { type: Schema.Types.Mixed, required: true },
  bodyAwareness: { type: Schema.Types.Mixed, required: true },
  balanceAndMovement: { type: Schema.Types.Mixed, required: true },
  planningAndIdeation: { type: Schema.Types.Mixed, required: true },
});

export interface ISensoryProcessingMeasureEntity extends Omit<ISpm, '_id'>, Document {}