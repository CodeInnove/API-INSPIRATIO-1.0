import { Schema } from "mongoose"
import { IPgpse } from "src/features/portage-guideto-preschool-education/types/portageGuidetoPreschoolEducation"



export const PortageGuidetoPreschoolEducationSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    birthDay: { type: String, required: false, ref: 'User' },
    Date: { type: Date, required: true},
    socialization0To1Year: { type: Number },
    socialization1To2Years: { type: Number },
    socialization2To3Years: { type: Number },
    socialization3To4Years: { type: Number },
    socialization4To5Years: { type: Number },
    socialization5To6Years: { type: Number },
    language0To1Years: { type: Number },
    language1To2Years: { type: Number },
    language2To3Years: { type: Number },
    language3To4Years: { type: Number },
    language4To5Years: { type: Number },
    language5To6Years: { type: Number },
    cognition0To1Year: { type: Number },
    cognition1To2Years: { type: Number },
    cognition2To3Years: { type: Number },
    cognition3To4Years: { type: Number },
    cognition4To5Years: { type: Number },
    cognition5To6Years: { type: Number },
    selfCare0To1Year: { type: Number },
    selfCare1To2Years: { type: Number },
    selfCare2To3Years: { type: Number },
    selfCare3To4Years: { type: Number },
    selfCare4To5Years: { type: Number },
    selfCare5To6Years: { type: Number },
    motorDevelopment0To1Year: { type: Number },
    motorDevelopment1To2Years: { type: Number },
    motorDevelopment2To3Years: { type: Number },
    motorDevelopment3To4Years: { type: Number },
    motorDevelopment4To5Years: { type: Number },

    
}, { timestamps: true})

export interface IPortageGuidetoPreschoolEducationEntity extends Omit<IPgpse, '_id'>, Document {}