import { IBasicLifeSkills } from "./basicLife";
import { ICommunityParticipationSkills } from "./comunityParticipation";
import { IDomesticLifeSkills } from "./domesticLife";
import { IIndependentLifeSkills } from "./independentLife";
import { ISchoolSkills } from "./school";
import { IVocationalsSkills } from "./vocationals";

export interface IAfl {
  basicLifeSkills: IBasicLifeSkills;
  communityLifeSkills: ICommunityParticipationSkills;
  domesticLifeSkills: IDomesticLifeSkills;
  independentLifeSkills: IIndependentLifeSkills;
  schoolLifeSkills: ISchoolSkills;
  vocationalLifeSkills: IVocationalsSkills;
}