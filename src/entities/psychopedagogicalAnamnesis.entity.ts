import { Schema, Document } from 'mongoose';
import { IPsychopedagogicalAnamnesis } from 'src/features/psychopedagogical-anamnesis/types/psychopedagogicalAnamnesis';

export const PsychopedagogicalAnamnesisSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'User' },
  patient: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  dateBirth: { type: String, required: true },
  age: { type: String, required: true },

  schoolIdentification: { type: Schema.Types.Mixed, required: true },

  familyLearningHistory: { type: Schema.Types.Mixed, required: true },

  observations: { type: Schema.Types.Mixed, required: true },

  learningAssessment: { type: Schema.Types.Mixed, required: true },

  responsibleForInforming: { type: Schema.Types.Mixed, required: true },
});

export interface IPsychopedagogicalAnamnesisEntity
  extends Omit<IPsychopedagogicalAnamnesis, '_id'>,
    Document {}
