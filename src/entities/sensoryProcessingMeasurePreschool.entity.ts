import { Schema, Document } from 'mongoose';
import { ISpmps } from 'src/features/sensory-processing-measure-preschool/types/spmps';

export const SensoryProcessingMeasurePreschoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioPreSchool: { type: Schema.Types.Mixed, required: true },
  participationSocialPreSchool: { type: Schema.Types.Mixed, required: true },
  visionPreSchool: { type: Schema.Types.Mixed, required: true },
  hearingPreSchool: { type: Schema.Types.Mixed, required: true },
  touchPreSchool: { type: Schema.Types.Mixed, required: true },
  smellAndTastePreSchool: { type: Schema.Types.Mixed, required: true },
  bodyAwarenessPreSchool: { type: Schema.Types.Mixed, required: true },
  balanceAndMovementPreSchool: { type: Schema.Types.Mixed, required: true },
  planningAndIdeationPreSchool: { type: Schema.Types.Mixed, required: true },
});

export interface ISensoryProcessingMeasurePreschoolEntity extends Omit<ISpmps, '_id'>, Document {}