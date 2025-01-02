import { ISensoryProcessingMeasureSchoolPreSchool } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IParticipationSocialSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IVisionSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IHearingSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { ITouchSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { ISmellAndTasteSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IBodyAwarenessSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IBalanceAndMovementSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"
import { IPlanningAndIdeationSpmsps } from "./sensoryProcessingMeasureSchoolPreSchool"

export interface ISpmsps {
	identificatioSpmsps: ISensoryProcessingMeasureSchoolPreSchool;
	participationSocialSpmsps: IParticipationSocialSpmsps;
	visionSpmsps: IVisionSpmsps;
	hearingSpmsps: IHearingSpmsps;
	touchSpmsps: ITouchSpmsps;
	smellAndTasteSpmsps: ISmellAndTasteSpmsps;
	bodyAwarenessSpmsps: IBodyAwarenessSpmsps;
	balanceAndMovementSpmsps: IBalanceAndMovementSpmsps;
	planningAndIdeationSpmsps: IPlanningAndIdeationSpmsps;
};