import { Schema, Document } from 'mongoose';
import { ISpmsps } from 'src/features/sensory-processing-measure-school-preschool/types/spmsps';

export const SensoryProcessingMeasureSchoolPreSchoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioSpmsps: { type: Schema.Types.Mixed, required: true },
  participationSocialSpmsps: { type: Schema.Types.Mixed, required: true },
  visionSpmsps: { type: Schema.Types.Mixed, required: true },
  hearingSpmsps: { type: Schema.Types.Mixed, required: true },
  touchSpmsps: { type: Schema.Types.Mixed, required: true },
  smellAndTasteSpmsps: { type: Schema.Types.Mixed, required: true },
  bodyAwarenessSpmsps: { type: Schema.Types.Mixed, required: true },
  balanceAndMovementSpmsps: { type: Schema.Types.Mixed, required: true },
  planningAndIdeationSpmsps: { type: Schema.Types.Mixed, required: true },
});

export interface ISensoryProcessingMeasureSchoolPreSchoolEntity extends Omit<ISpmsps, '_id'>, Document {}