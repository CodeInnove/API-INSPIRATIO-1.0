import { Schema, Document } from 'mongoose';
import { IScaleMchat } from 'src/features/scale-mchat/types/scaleMchat';

export const ScaleMchatSchema = new Schema({
    identification: {
        patient: { type: Schema.Types.ObjectId, ref: "User" },
        dateOfApplication: { type: String, required: true },
        evaluator: {type: Schema.Types.ObjectId, ref: "User"}
        },

    question1: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question2: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question3: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question4: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question5: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question6: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question7: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question8: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question9: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question10: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question11: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question12: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question13: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question14: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question15: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question16: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question17: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },

    question18: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question19: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question20: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question21: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question22: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    question23: {
        optionYes:{ type: String},
        optionNo:{ type: String},
    },
    
    totalOptions:{
        resultOptionYes:{type: Number},
        resultOptionNo:{type: Number},
    }
    
});

export interface IScaleMchatEntity extends Omit<IScaleMchat, '_id'>, Document {}