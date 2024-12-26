import { Schema, Document } from 'mongoose';
import { IAutismBehaviorChecklist } from 'src/features/autism-behavior-checklist/types/autismBehaviorChecklist';

export const autismBehaviorChecklistSchema = new Schema({
        patient: { type: Schema.Types.ObjectId, ref: "User" },
        dateBirth: { type: String, required: true },
        age: { type: Number, required: true },
        sex: { type: String, required: true },
        dateOfApplication: { type: String, required: true },
        evaluator: {type: Schema.Types.ObjectId, ref: "User"},
        autismBehaviorChecklistQuestions: {type: Schema.Types.Mixed, required: true},
        resultTotal: { type: Number, default: 0 }
    
    } , { timestamps: true });
export interface IAutismBehaviorChecklistEntity extends Omit<IAutismBehaviorChecklist, '_id'>, Document { }