import { IOccupationalTherapyAnamnesis } from "./occupationalTherapyAnamnesis";
import { IGeneralObservations } from "./occupationalTherapyAnamnesis";
import { IClinicalHistory } from "./occupationalTherapyAnamnesis";
import { INeuropsychomotorDevelopment } from "./occupationalTherapyAnamnesis";
import { IActivitiesOfDailyLiving } from "./occupationalTherapyAnamnesis";
import { ISignsOfReadiness } from "./occupationalTherapyAnamnesis";
import { IInstrumentalActivitiesOfDailyLiving } from "./occupationalTherapyAnamnesis";
import { ISchoolAndSocialRoutine } from "./occupationalTherapyAnamnesis";
import { ITeacherReportedDifficulties } from "./occupationalTherapyAnamnesis";
import { ISensoryAndBehavioralAspects } from "./occupationalTherapyAnamnesis";
import { IPlayAndLeisureAspects } from "./occupationalTherapyAnamnesis";
import { ISupportNetworkAndPreviousTreatments } from "./occupationalTherapyAnamnesis";
import { IResponsibleGeneralObservations } from "./occupationalTherapyAnamnesis";

export interface IOta {
    identificatioOta: IOccupationalTherapyAnamnesis;
    generalObservations: IGeneralObservations;
    clinicalHistory: IClinicalHistory;
    neuropsychomotorDevelopment: INeuropsychomotorDevelopment;
    activitiesOfDailyLiving: IActivitiesOfDailyLiving;
    signsOfReadiness: ISignsOfReadiness;
    instrumentalActivitiesOfDailyLiving: IInstrumentalActivitiesOfDailyLiving;
    schoolAndSocialRoutine: ISchoolAndSocialRoutine;
    teacherReportedDifficulties: ITeacherReportedDifficulties;
    sensoryAndBehavioralAspects: ISensoryAndBehavioralAspects;
    playAndLeisureAspects: IPlayAndLeisureAspects;
    supportNetworkAndPreviousTreatments: ISupportNetworkAndPreviousTreatments;
    responsibleGeneralObservations: IResponsibleGeneralObservations;
}