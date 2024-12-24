import { IAnamneseForCerebralPalsy } from "./anamneseForCerebralPalsy";
import { IdevelopmentMotor} from "./anamneseForCerebralPalsy"; 
import { IFoods} from "./anamneseForCerebralPalsy";

export interface IAfcp{
    historicGestation: IAnamneseForCerebralPalsy;
    developmentMotor: IdevelopmentMotor;
    foods_: IFoods;
}
