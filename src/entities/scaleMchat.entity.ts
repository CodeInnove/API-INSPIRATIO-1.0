import { Schema, Document } from 'mongoose';
import { IScaleMchat } from 'src/features/scale-mchat/types/scaleMchat';

export const ScaleMchatSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    evaluator: {type: Schema.Types.ObjectId, ref: "User"},
    scaleMchat: {type: Schema.Types.Mixed,}

    

});

export interface IScaleMchatEntity extends Omit<IScaleMchat, '_id'>, Document {}