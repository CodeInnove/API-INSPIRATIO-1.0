import { IParticipationSocialSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IVisionSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IHearingSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { ITouchSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { ISmellAndTasteSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IBodyAwarenessSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IBalanceAndMovementSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IPlanningAndIdeationSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"

export interface ISpmsps {
	doctor: string;
    responsable: string;
    relationshipWithChild: string;
    patient: string;
    gender: string;
    age: string;
    bitrhDate: string;
    ethnicity: string;
    date: string;
	participationSocialSpmsps: IParticipationSocialSchoolPreSchool;
	visionSpmsps: IVisionSchoolPreSchool;
	hearingSpmsps: IHearingSchoolPreSchool;
	touchSpmsps: ITouchSchoolPreSchool;
	smellAndTasteSpmsps: ISmellAndTasteSchoolPreSchool;
	bodyAwarenessSpmsps: IBodyAwarenessSchoolPreSchool;
	balanceAndMovementSpmsps: IBalanceAndMovementSchoolPreSchool;
	planningAndIdeationSpmsps: IPlanningAndIdeationSchoolPreSchool;
};