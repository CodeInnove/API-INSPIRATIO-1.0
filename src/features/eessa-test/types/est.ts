import { IEessaTest } from "./eessaTest"
import { ISimpleandDuplicatedSyllablesEst } from "./eessaTest"
import { ICombinationOfTwoSyllablesEst } from "./eessaTest"
import { CombinationOfThreeSyllablesEst } from "./eessaTest"
import { IProsodySpokenPhrasesEst } from "./eessaTest"
import { IProsodyOtherContextsEst } from "./eessaTest"

export interface IEst {
    identificatioEst: IEessaTest;
    simpleandDuplicatedSyllablesEst: ISimpleandDuplicatedSyllablesEst;
    combinationOfTwoSyllablesEst: ICombinationOfTwoSyllablesEst;
    combinationOfThreeSyllablesEst: CombinationOfThreeSyllablesEst;
    prosodySpokenPhrasesEst: IProsodySpokenPhrasesEst;
    prosodyOtherContextsEst: IProsodyOtherContextsEst;
};