import {Schema, Document} from 'mongoose'
import { IChecklistDenver } from 'src/features/checklist-denver/types/checklistDenver'

export const ChecklistDenverSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    dataCollection: { type: Schema.Types.Mixed, required: true },
    createTableOne: { type: Schema.Types.Mixed, required: true },
    createTableTwo: { type: Schema.Types.Mixed, required: true },
    createTableThree: { type: Schema.Types.Mixed, required: true },
    createTableFour: { type: Schema.Types.Mixed, required: true },

}, { timestamps: true})

export interface IChecklistDenverEntity extends Omit<IChecklistDenver, '_id'>, Document {}