import { Schema, Document } from 'mongoose';
import { IIncomeTable } from 'src/features/income-table/types/incomeTable';


export const IncomeTableSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    GroupA:{
        recognizesAndIdentifiesLetters:{type: String, enum: ['yes', 'no', 'development']},
        recognizesAndIdentifiesNumbers:{type: String, enum: ['yes', 'no', 'development']},
        directedWriting:{ type: String, enum: ['yes', 'no', 'development']},
        spontaneousWriting:{type: String, enum: ['yes', 'no', 'development']},
        readingAndWriting:{type: String, enum: ['yes', 'no', 'development']},
        readingAndUnderstanding:{type: String, enum: ['yes', 'no', 'development']},
        textProductionRegistration:{type: String, enum: ['yes', 'no', 'development']},
        textualStructuring:{type: String, enum: ['yes', 'no', 'development']},
        oralTextProduction:{type: String, enum: ['yes', 'no', 'development']},
        largerNumbers:{type: String, enum: ['yes', 'no', 'development']},
        troubleshooting:{type: String, enum: ['yes', 'no', 'development']},
    },



    GroupB:{
        bodyScheme:{type: String, enum: ['yes', 'no', 'development']},
        sidePointing:{type: String, enum: ['yes', 'no', 'development']},
        position:{type: String, enum: ['yes', 'no', 'development']},
        direction:{type: String, enum: ['yes', 'no', 'development']},
        space:{type: String, enum: ['yes', 'no', 'development']},
        size:{type: String, enum: ['yes', 'no', 'development']},
        quantity:{type: String, enum: ['yes', 'no', 'development']},
        shape:{type: String, enum: ['yes', 'no', 'development']},
        visualDiscrimination:{type: String, enum: ['yes', 'no', 'development']},
        hearingDiscrimination:{type: String, enum: ['yes', 'no', 'development']},
        verbalizationOfWords:{type: String, enum: ['yes', 'no', 'development']},
        synthesisAnalysis:{type: String, enum: ['yes', 'no', 'development']},
        fineMotorCoordination:{type: String, enum: ['yes', 'no', 'development']}
    }

});

export interface IIncomeTableEntity extends Omit<IIncomeTable, '_id'>, Document { }