import { Ethnicity, ISocialParticipationPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IVisionPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IHearingPreSchool } from "./sensoryProcessingMeasurePreschool"
import { ITouchPreSchool } from "./sensoryProcessingMeasurePreschool"
import { ISmellAndTastePreSchool } from "./sensoryProcessingMeasurePreschool"
import { IBodyAwarenessPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IBalanceAndMovementPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IPlanningAndIdeationPreSchool } from "./sensoryProcessingMeasurePreschool"

export interface ISpmpSchool {
	doctor: string;
	responsable: string;
	relationshipWithChild: string;
	patient: string;
	gender: string;
	age: number;
	bitrhDate: string;
	ethnicity: Ethnicity;
	comment: string;
	participationSocialPreSchool: ISocialParticipationPreSchool;
	visionPreSchool: IVisionPreSchool;
	hearingPreSchool: IHearingPreSchool;
	touchPreSchool: ITouchPreSchool;
	smellAndTastePreSchool: ISmellAndTastePreSchool;
	bodyAwarenessPreSchool: IBodyAwarenessPreSchool;
	balanceAndMovementPreSchool: IBalanceAndMovementPreSchool;
	planningAndIdeationPreSchool: IPlanningAndIdeationPreSchool;
};