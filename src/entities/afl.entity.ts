import { Schema, Document } from 'mongoose';
import { IAfl } from 'src/features/afls/types/afl';

export const AflSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  basicLifeSkills: { type: Schema.Types.Mixed, required: true },
  communityLifeSkills: { type: Schema.Types.Mixed, required: true },
  domesticLifeSkills: { type: Schema.Types.Mixed, required: true },
  independentLifeSkills: { type: Schema.Types.Mixed, required: true },
  schoolLifeSkills: { type: Schema.Types.Mixed, required: true },
  vocationalLifeSkills: { type: Schema.Types.Mixed, required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export interface IAflEntity extends Omit<IAfl, '_id'>, Document {}