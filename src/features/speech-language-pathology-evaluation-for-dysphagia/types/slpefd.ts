import { ISpeechLanguagePathologyEvaluationForDysphagia } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IInitialPatientEvaluationSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IEvaluationOfArticulatoryOrgansSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IFunctionalSwallowingEvaluationSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IPatientEvaluationWithTracheostomyAndUseOfColoredDietSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IResultsSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IConductSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";
import { IObservationsSlpefd } from "./speechLanguagePathologyEvaluationForDysphagia";

export interface ISlpefd {
    identificatioSlpefd: ISpeechLanguagePathologyEvaluationForDysphagia;
    initialPatientEvaluationSlpefd: IInitialPatientEvaluationSlpefd;
    evaluationOfArticulatoryOrgansSlpefd: IEvaluationOfArticulatoryOrgansSlpefd;
    functionalSwallowingEvaluationSlpefd: IFunctionalSwallowingEvaluationSlpefd;
    patientEvaluationWithTracheostomyAndUseOfColoredDietSlpefd: IPatientEvaluationWithTracheostomyAndUseOfColoredDietSlpefd;
    resultsSlpefd: IResultsSlpefd;
    conductSlpefd: IConductSlpefd;
    observationsSlpefd: IObservationsSlpefd;
};