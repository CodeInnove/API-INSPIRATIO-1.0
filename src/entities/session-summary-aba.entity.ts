import { Schema } from 'mongoose';
import { ISessionSummaryABA } from 'src/features/session-summary-aba/entities/sessionSummaryAba';

export const SessionSummaryABASchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true, auto: true},
    doctor: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    patient: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    responsable: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    data: {type: String},
    observation: {type: String}
});

export interface ISessionSummaryABAEntity extends Omit<ISessionSummaryABA, '_id'>, Document {}
