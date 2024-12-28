import { ISensoryProcessingMeasure } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IParticipationSocial } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { ISmellAndTaste } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { ITouch } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IHearing } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IVision } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IBodyAwareness } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IBalanceAndMovement } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"
import { IPlanningAndIdeation } from "src/features/sensory-processing-measure/entities/sensoryProcessingMeasure"

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