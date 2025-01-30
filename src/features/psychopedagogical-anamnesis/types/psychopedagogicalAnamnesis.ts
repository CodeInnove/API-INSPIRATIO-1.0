export interface IPsychopedagogicalAnamnesis {
  patient: string; // ObjectId as string
  dateOfApplication: string;
  dateBirth: string;
  age: string;
  schoolIdentification: ISchoolIdentification;
  familyLearningHistory: IFamilyLearningHistory;
  observation: IObservations;
  learningAssessment: ILearningAssessment;
  responsibleForInforming: IResponsibleForInforming;
}

export interface ISchoolIdentification {
  teacherName: string;
  supportProfessional: string;
  schoolName: string;
  schoolPeriod: string;
  schoolYear: string;
}

export interface IFamilyLearningHistory {
  fatherName: string;
  ageFather: string;
  schoolingFather: string;
  difficultyFather: string;
  motherName: string;
  ageMother: string;
  schoolingMother: string;
  difficultyMother: string;
  nameBrotherOne: string;
  ageBrotherOne: string;
  schoolingBrotherOne: string;
  difficultyBrotherOne: string;
  nameBrotherTwo: string;
  ageBrotherTwo: string;
  schoolingBrotherTwo: string;
  difficultyBrotherTwo: string;
  nameBrotherThree: string;
  ageBrotherThree: string;
  schoolingBrotherThree: string;
  difficultyBrotherThree: string;
}

export interface IObservations {
  bedtime: string;
  wakeUpTime: string;
  sportsActivitiesHeLikesTheMost: string;
  externalServiceActivities: string;
  doYouUseAdaptedActivitiesAtSchool: string;
  whatActivitiesAreAdapted: string;
  doYouHaveDifficultyInSocialInteraction: string;
  whatDifficultyInSocialInteraction: string;
  resistanceToRoutineChange: string;
  whatRoutineChange: string;
  eyeContact: string;
  whatEyeContact: string;
  interestInLearning: string;
  whatInterestInLearning: string;
  hyperactivity: string;
  whatHyperactivity: string;
  inattention: string;
  whatInattention: string;
  areYouLiterate: string;
  whatAreYouLiterate: string;
  changeInLanguageAndCommunication: string;
  whatLanguageAndCommunication: string;
  inappropriateReactionToFrustration: string;
  whatReactionToFrustration: string;
  crisisTypeCrisisTrigger: string;
  whatTypeCrisisTrigger: string;
  stereotypy: string;
  whatStereotypy: string;
  medication: string;
  whatMedication: string;
  allergy: string;
  whatAllergy: string;
  Diagnosis: string;
  schoolFamilyComplaint: string;
  outher: string;
}

export interface ILearningAssessment {
  readingLevel: string;
  textProduction: string;
  preSyllabicWritingLevel: string;
  doYouRecognizeTheColors: string;
  difficultyRecognizeTheColors: string;
  doYouHaveDifficultyTracingTheNumerals: string;
  difficultyRecognizingNumbers: string;
  doYouHaveAChangeWhenCarryingOutOperations: string[];
  difficultyCarryingOutOperations: string;
  doesItSolveProblemSituations: string;
}

export interface IResponsibleForInforming {
  informationOfficer: string;
  choiseInformationOfficer: string;
}
