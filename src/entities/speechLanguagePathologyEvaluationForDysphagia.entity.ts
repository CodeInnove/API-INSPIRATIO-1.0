import { Schema, Document } from 'mongoose';
import { ISlpefd } from 'src/features/speech-language-pathology-evaluation-for-dysphagia/types/slpefd';

export const SpeechLanguagePathologyEvaluationForDysphagiaSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificatioSlpefd: { type: Schema.Types.Mixed, required: true },
  initialPatientEvaluationSlpefd: { type: Schema.Types.Mixed, required: true },
  evaluationOfArticulatoryOrgansSlpefd: { type: Schema.Types.Mixed, required: true },
  functionalSwallowingEvaluationSlpefd: { type: Schema.Types.Mixed, required: true },
  patientEvaluationWithTracheostomyAndUseOfColoredDietSlpefd: { type: Schema.Types.Mixed, required: true },
  resultsSlpefd: { type: Schema.Types.Mixed, required: true },
  conductSlpefd: { type: Schema.Types.Mixed, required: true },
  observationsSlpefd: { type: Schema.Types.Mixed, required: true },
});

export interface ISpeechLanguagePathologyEvaluationForDysphagiaEntity extends Omit<ISlpefd, '_id'>, Document {}