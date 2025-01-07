import { Schema, Document } from 'mongoose';
import { IIncomeTable } from 'src/features/income-table/types/incomeTable';


export const IncomeTableSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    GroupA:{
        recognizesAndIdentifiesLetters:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        recognizesAndIdentifiesNumbers:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        directedWriting:{ type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        spontaneousWriting:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        readingAndWriting:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        readingAndUnderstanding:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        textProductionRegistration:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        textualStructuring:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        oralTextProduction:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        largerNumbers:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        troubleshooting:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
    },



    GroupB:{
        bodyScheme:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        sidePointing:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        position:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        direction:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        space:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        size:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        quantity:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        shape:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        visualDiscrimination:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        hearingDiscrimination:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        verbalizationOfWords:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        synthesisAnalysis:{type: String, enum: ['sim', 'nao', 'desenvolvimento']},
        fineMotorCoordination:{type: String, enum: ['sim', 'nao', 'desenvolvimento']}
    }

});

export interface IIncomeTableEntity extends Omit<IIncomeTable, '_id'>, Document { }