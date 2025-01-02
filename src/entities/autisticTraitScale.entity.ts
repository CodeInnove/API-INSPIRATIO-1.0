import { Schema, Document } from 'mongoose';
import { IAts } from 'src/features/autistic-trait-scales/types/ats';  

export const AutisticTraitScalesSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patientId: { type: Schema.Types.ObjectId, required: true, ref: 'Patient' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'Patient'},
  date: { type: Date, required: true, },
  identificaion: { type: Schema.Types.Mixed, required: true },
  socialInteractionDifficulty: { type: Schema.Types.Mixed, required: true },
  environmentManipulation: { type: Schema.Types.Mixed, required: true },
  peopleUsage: { type: Schema.Types.Mixed, required: true },
  changeResistance: { type: Schema.Types.Mixed, required: true },
  rigidOrder: { type: Schema.Types.Mixed, required: true },
  lackOfEyeContact: { type: Schema.Types.Mixed, required: true },
  inexpressiveMimicry: { type: Schema.Types.Mixed, required: true },
  sleepDisorders: { type: Schema.Types.Mixed, required: true },
  eatingDisorders: { type: Schema.Types.Mixed, required: true },
  sphincterControlDifficulty: { type: Schema.Types.Mixed, required: true },
  objectExploration: { type: Schema.Types.Mixed, required: true },
  inappropriateObjectUse: { type: Schema.Types.Mixed, required: true },
  lackOfAttention: { type: Schema.Types.Mixed, required: true },
  lackOfInterestInLearning: { type: Schema.Types.Mixed, required: true },
  lackOfInitiative: { type: Schema.Types.Mixed, required: true },
  languageAndCommunicationDisorders: { type: Schema.Types.Mixed, required: true },
  lackOfSkillsManifestation: { type: Schema.Types.Mixed, required: true },
  inappropriateReactionsToFrustration: { type: Schema.Types.Mixed, required: true },
  lackOfResponsibility: { type: Schema.Types.Mixed, required: true },
  hyperactivityOrHypoactivity: { type: Schema.Types.Mixed, required: true },
  stereotypedAndRepetitiveMovements: { type: Schema.Types.Mixed, required: true },
  dangerIgnorance: { type: Schema.Types.Mixed, required: true },
});

export interface IAutisticTraitScalesEntity extends Omit<IAts, '_id'>, Document {}