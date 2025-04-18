import { Schema, Document } from 'mongoose';
import { Consultation } from "src/types/consultation";
import { User } from 'src/types/User';
import { Speciality } from 'src/types/speciality';

export const consultationSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    doctor: {type: Schema.Types.ObjectId, ref: "User"},
    patient: {type: Schema.Types.ObjectId, ref: "User"},
    speciality: {type: Schema.Types.ObjectId, ref: "Speciality"},
    observation: {type: String},
    date: {type: String, req: true},
    status: {type: String, enum: ['pending', 'completed', 'cancelled']}
});
export interface IConsultationEntity extends Omit<Consultation, '_id'>, Document {}