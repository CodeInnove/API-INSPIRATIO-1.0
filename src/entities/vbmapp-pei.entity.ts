import {Schema, Document} from 'mongoose'
import { ICreateVbmapp } from 'src/features/vbmapp-pei/types/vbmapp' 

export const VbmappPeiSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: Schema.Types.ObjectId, ref: 'User' },
    avMilestone: { type: Schema.Types.Mixed, default: Number },
    subTestEcoico: { type: Schema.Types.Mixed, default: Number },
    avBarreirasAv: { type: Schema.Types.Mixed, default: Number },
});

export interface VbmappEntity extends Omit<ICreateVbmapp, '_id'>, Document {}
