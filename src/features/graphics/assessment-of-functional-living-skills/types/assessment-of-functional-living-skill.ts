
export interface ICreateAssessmentOfFunctionalLivingSkills{
  basicLife: IBasicLife
  communityParticipation: ICommunityParticipation
  domesticLife: IDomesticLife
  schools
  vocation
  independencyLife
}

export interface IBasicLife{
  selfManagement: ITask
  basicCommunication: ITask
  clothing: ITask
  usingBathroom: ITask
  hygiene: ITask
  bathing: ITask
  healthSafetyFirstAid: ITask
  nightRoutine: ITask
}

export interface ICommunityParticipation{
  basicModality: ITask
  knowledgeCommunity: ITask
  shopping: ITask
  eatingInPublic: ITask
  money: ITask
  time: ITask
  socialAwarenessGoodManners: ITask
}

export interface IDomesticLife{
  mealsAtHome: ITask
  dishware: ITask
  clothingLaundry: ITask
  cleaningTask: ITask
  householdFunctions: ITask
  leisure: ITask
  kitchen: ITask
  cooking: ITask
}

export interface ISchools{
  classroomMechanics: ITask
  schoolFood: ITask
  routineAndExpectations: ITask
  socialSkills: ITask
  technology: ITask
  commonKnowledge: ITask
  academicCore: ITask
  academicApplication: ITask
}

export interface IVocation{
  jobSearch: ITask
  interview: ITask
  basicSkills: ITask
  collegeRelations: ITask
  workplaceSafety: ITask
  repairSkills: ITask
  careAndCleaning: ITask
  laundry: ITask
  retail: ITask
  personalSupport: ITask
  officeActivities: ITask
  computerSkills: ITask
  restaurantSkills: ITask
  kitchenSkills: ITask
  warehouse: ITask
  tools: ITask
  tradesAndConstruction: ITask
  gardening: ITask
}

export interface IIndependecyLife{
  organization: ITask
  personalcCare: ITask
  maintenanceAndCleaning: ITask
  mechanicsAndRepairs: ITask
  communityTravel: ITask
  transportation: ITask
  kitchenAppliances: ITask
  foodPlanning: ITask
  managingMoney: ITask
  personalManagement: ITask
  safety: ITask
  problemSolving: ITask
  socialInteraction: ITask
  livingOthers: ITask
  interpersonalRelationships: ITask
}

export interface IScore {
  TotalScore: number;
  hits: number;
}

export interface ITask {
  amount: number;
  tasks: string;
  score: number;
}

export interface IArea1 {
  selfManagement: IScore;
  basicComunnication: IScore;
  clothing: IScore;
  usingBathroom: IScore;
  hygiene: IScore;
  bathing: IScore;
  healthSafetyFirstAid: IScore;
  nightRoutine: IScore;
}

export interface IArea2 {
  basicModality: IScore;
  knowledgeCommunity: IScore;
  shopping: IScore;
  eatingInPublic: IScore;
  money: IScore;
  time: IScore;
  socialAwarenessGoodManners: IScore;
}

export interface IArea3 {
  mealsAtHome: IScore;
  dishware: IScore;
  clothingLaundry: IScore;
  cleaningTask: IScore;
  householdFunctions: IScore;
  leisure: IScore;
  kitchen: IScore;
  cooking: IScore;
}

export interface IArea4 {
  classroomMechanics: IScore;
  schoolFood: IScore;
  routineAndExpectations: IScore;
  socialSkills: IScore;
  technology: IScore;
  commonKnowledge: IScore;
  academicCore: IScore;
  academicApplication: IScore;
}

export interface IArea5 {
  jobSearch: IScore;
  interview: IScore;
  basicSkills: IScore;
  collegeRelations: IScore;
  workplaceSafety: IScore;
  repairSkills: IScore;
  careAndCleaning: IScore;
  laundry: IScore;
  retail: IScore;
  personalSupport: IScore;
  officeActivities: IScore;
  computerSkills: IScore;
  restaurantSkills: IScore;
  kitchenSkills: IScore;
  warehouse: IScore;
  tools: IScore;
  tradesAndConstruction: IScore;
  gardening: IScore;
}

export interface IArea6 {
  organization: IScore;
  personalCare: IScore;
  maintenanceAndCleaning: IScore;
  mechanicsAndRepairs: IScore;
  communityTravel: IScore;
  transportation: IScore;
  kitchenAppliances: IScore;
  foodPlanning: IScore;
  managingMoney: IScore;
  personalManagement: IScore;
  safety: IScore;
  problemSolving: IScore;
  socialInteraction: IScore;
  livingOthers: IScore;
  interpersonalRelationships: IScore;
}

export interface IAbility {
  basicLife: {
    area1: IArea1;
    total: number;
  };
  communityParticipation: {
    area2: IArea2;
    total: number;
  };
  domesticLife: {
    area3: IArea3;
    total: number;
  };
  schools: {
    area4: IArea4;
    total: number;
  };
  vocational: {
    area5: IArea5;
    total: number;
  };
  independencyLife: {
    area6: IArea6;
    total: number;
  };
}

export interface IMchatREntity extends Document {
  _id: string;
  name: string; // Assuming this is a string, change if it's an ObjectId
  evaluator: string; // Assuming this is a string, change if it's an ObjectId
  date: string;
  dateBirth: string;
  calcAge: {
    year: number;
    month?: number;
  };
  area: IArea1[];
  area2: IArea2[];
  area3: IArea3[];
  area4: IArea4[];
  area5: IArea5[];
  area6: IArea6[];
  ability: IAbility;
}