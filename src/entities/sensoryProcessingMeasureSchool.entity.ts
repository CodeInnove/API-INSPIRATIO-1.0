import { Schema, Document } from 'mongoose';
import { ISpmSchool } from 'src/features/sensory-processing-measure-school/types/spmschool';  

export const SensoryProcessingMeasureSchoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificationSpmSchool: { type: Schema.Types.Mixed, required: true },
  participationSocialSchool: { type: Schema.Types.Mixed, required: true },
  visionSchool: { type: Schema.Types.Mixed, required: true },
  hearingSchool: { type: Schema.Types.Mixed, required: true },
  touchSchool: { type: Schema.Types.Mixed, required: true },
  smellAndTasteSchool: { type: Schema.Types.Mixed, required: true },
  bodyAwarenessSchool: { type: Schema.Types.Mixed, required: true },
  balanceAndMovementSchool: { type: Schema.Types.Mixed, required: true },
  planningAndIdeationSchool: { type: Schema.Types.Mixed, required: true },
});

export interface ISensoryProcessingMeasureSchoolEntity extends Omit<ISpmSchool, '_id'>, Document {}