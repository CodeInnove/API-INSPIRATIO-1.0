import { IAvBarreirasAv } from "./avBarreiras";
import { IAvMilestone } from "./avMilestone";
import { ISubTestEcoico } from "./subTestEcoico";

export interface ICreateVbmapp {
    patient: string;
    doctor: string;
    avMilestone: IAvMilestone;
    subTestEcoico: ISubTestEcoico;
    avBarreirasAv: IAvBarreirasAv;
} 