import { Schema } from "mongoose"
import { IPortageGuidetoPreschoolEducation } from "src/features/portage-guideto-preschool-education/types/portageGuidetoPreschoolEducation"


export const PortageGuidetoPreschoolEducationSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    birthDay: { type: String, required: false, ref: 'User' },
    Date: { type: Date, required: true},
    socialization: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true})

export interface IPortageGuidetoPreschoolEducationEntity extends Omit<IPortageGuidetoPreschoolEducation, '_id'>, Document {}