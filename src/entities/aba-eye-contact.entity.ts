import {Schema, Document} from 'mongoose'

export const AbaEyeContactSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User'},
    doctor: { type: Schema.Types.ObjectId, ref: 'User'},
    reinforcer: { type: Schema.Types.ObjectId, ref: 'User'},
    firstWeek: { type: Number, enum: ['AFT', 'AG', 'NF', 'I']},
    secondWeek: { type: Number, enum: ['AFT', 'AG', 'NF', 'I']},
    thirdWeek: { type: Number, enum: ['AFT', 'AG', 'NF', 'I']},
    fourthWeek: { type: Number, enum: ['AFT', 'AG', 'NF', 'I']},
    fifthWeek: { type: Number, enum: ['AFT', 'AG', 'NF', 'I']},
})
