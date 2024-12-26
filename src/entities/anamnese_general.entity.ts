import { Schema, Document } from 'mongoose';
import { IGeneralAnamnese } from 'src/features/anamnese_general/types/generalAnamnese';


export const generalAnamneseSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: "patient" },
    dateBirth: { type: String, required: true },
    age: { type: Number, required: true },
    maritalStatus: { type: String, required: true },
    sex: { type: String, required: true },
    naturalization: { type: String, required: true },
    nationality: { type: String, required: true },
    schoolName: { type: String , required: true },
    schoolPeriod: { type: String , required: true },
    affiliation: {type: Schema.Types.Mixed, required: true },
    address: {type: Schema.Types.Mixed, required: true },
    complaintAndDuration: {type: Schema.Types.Mixed, required: true },
    background: {type: Schema.Types.Mixed, required: true },
    development: {type: Schema.Types.Mixed, required: true },
    socioCultural: {type: Schema.Types.Mixed, required: true },

});

export interface IGeneralAnamneseEntity extends Omit<IGeneralAnamnese, '_id'>, Document { }