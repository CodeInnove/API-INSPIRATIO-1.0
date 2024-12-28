import { ISensoryProcessingMeasure } from "./sensoryProcessingMeasure"
import { IParticipationSocial } from "./sensoryProcessingMeasure"
import { ISmellAndTaste } from "./sensoryProcessingMeasure"
import { ITouch } from "./sensoryProcessingMeasure"
import { IHearing } from "./sensoryProcessingMeasure"
import { IVision } from "./sensoryProcessingMeasure"
import { IBodyAwareness } from "./sensoryProcessingMeasure"
import { IBalanceAndMovement } from "./sensoryProcessingMeasure"
import { IPlanningAndIdeation } from "./sensoryProcessingMeasure"

export interface ISpm{
    sensoryProcessingMeasure: ISensoryProcessingMeasure;
    participationSocial: IParticipationSocial;
    vision: IVision;
    hearing: IHearing;
    touch: ITouch;
    smellAndTaste: ISmellAndTaste;
    bodyAwareness: IBodyAwareness;
    balanceAndMovement: IBalanceAndMovement;
    planningAndIdeation: IPlanningAndIdeation;
};