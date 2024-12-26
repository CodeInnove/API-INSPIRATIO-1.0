import { Schema, Document } from 'mongoose';
import { IIncomeTable } from 'src/features/income-table/types/incomeTable';


export const IncomeTableSchema = new Schema({

    incomeTablesPartOne:{
        recognizesAndIdentifiesLetters:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        recognizesAndIdentifiesNumbers:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        directedWriting:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        spontaneousWriting:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        readingAndWriting:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        readingAndUnderstanding:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        textProductionRegistration:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        textualStructuring:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        oralTextProduction:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        largerNumbers:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        troubleshooting:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],

    },



    incomeTablesPartTwo:{
        bodyScheme:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        sidePointing:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        position:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        direction:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        space:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        size:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        quantity:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        shape:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        visualDiscrimination:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        hearingDiscrimination:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        verbalizationOfWords:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        synthesisAnalysis:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }],
        fineMotorCoordination:[{
            optionYes: {type: String},
            optionNo: {type: String},
            optinoInDevelopment: {type: String},
        }]
    }
});

export interface IIncomeTableEntity extends Omit<IIncomeTable, '_id'>, Document { }