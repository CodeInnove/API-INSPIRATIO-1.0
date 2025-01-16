import { ISensoryProcessingMeasurePreschool } from "./sensoryProcessingMeasurePreschool"
import { ISocialParticipationPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IVisionPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IHearingPreSchool } from "./sensoryProcessingMeasurePreschool"
import { ITouchPreSchool } from "./sensoryProcessingMeasurePreschool"
import { ISmellAndTastePreSchool } from "./sensoryProcessingMeasurePreschool"
import { IBodyAwarenessPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IBalanceAndMovementPreSchool } from "./sensoryProcessingMeasurePreschool"
import { IPlanningAndIdeationPreSchool } from "./sensoryProcessingMeasurePreschool"

export interface ISpmps {
	identificatioPreSchool: ISensoryProcessingMeasurePreschool;
	participationSocialPreSchool: ISocialParticipationPreSchool;
	visionPreSchool: IVisionPreSchool;
	hearingPreSchool: IHearingPreSchool;
	touchPreSchool: ITouchPreSchool;
	smellAndTastePreSchool: ISmellAndTastePreSchool;
	bodyAwarenessPreSchool: IBodyAwarenessPreSchool;
	balanceAndMovementPreSchool: IBalanceAndMovementPreSchool;
	planningAndIdeationPreSchool: IPlanningAndIdeationPreSchool;
};