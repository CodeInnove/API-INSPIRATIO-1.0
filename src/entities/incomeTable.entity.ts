import { Schema, Document } from 'mongoose';
import { IIncomeTable } from 'src/features/income-table/types/incomeTable';


export const IncomeTableSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    incomeTablesPartOne:{
        recognizesAndIdentifiesLetters:{type: String,},
        recognizesAndIdentifiesNumbers:{type: String,},
        directedWriting:{type: String,},
        spontaneousWriting:{type: String,},
        readingAndWriting:{type: String,},
        readingAndComprehension:{type: String,},
        textProductionRecord:{type: String,},
        textualStructuring:{type: String,},
        oralTextProduction:{type: String,},
        numbersGreaterMagnitude:{type: String,},
        problemSolving:{type: String,},
    },



    incomeTablesPartTwo:{
        bodyScheme:{type: String,},
        sidePointing:{type: String,},
        position:{type: String,},
        direction:{type: String,},
        space:{type: String,},
        size:{type: String,},
        quantity:{type: String,},
        shape:{type: String,},
        visualDiscrimination:{type: String,},
        hearingDiscrimination:{type: String,},
        verbalizationOfWords:{type: String,},
        synthesisAnalysis:{type: String,},
        fineMotorCoordination:{type: String,}
    }

});

export interface IIncomeTableEntity extends Omit<IIncomeTable, '_id'>, Document { }