import { Schema } from 'mongoose';
import { ISessionSummaryAT } from 'src/features/session-summary-at/types/sessionSummary';

export const SessionSummaryAtSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true, auto: true},
    doctor: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    patient: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    data: {type: String},
    hours: {type: String},
    observation: {type: String}
});

export interface SessionSummaryAtEntity extends Omit<ISessionSummaryAT, '_id'>, Document {}
