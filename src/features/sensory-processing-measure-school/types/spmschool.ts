import { ISensoryProcessingMeasureSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IParticipationSocialSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IVisionSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IHearingSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { ITouchSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { ISmellAndTasteSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IBodyAwarenessSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IBalanceAndMovementSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"
import { IPlanningAndIdeationSchool } from "src/features/sensory-processing-measure-school/types/sensoryProcessingMeasureSchool"

export interface ISpmSchool{
    identificationSpmSchool: ISensoryProcessingMeasureSchool;
    participationSocialSchool: IParticipationSocialSchool;
    visionSchool: IVisionSchool;
    hearingSchool: IHearingSchool;
    touchSchool: ITouchSchool;
    smellAndTasteSchool: ISmellAndTasteSchool;
    bodyAwarenessSchool: IBodyAwarenessSchool;
    balanceAndMovementSchool: IBalanceAndMovementSchool;
    planningAndIdeationSchool: IPlanningAndIdeationSchool;
};