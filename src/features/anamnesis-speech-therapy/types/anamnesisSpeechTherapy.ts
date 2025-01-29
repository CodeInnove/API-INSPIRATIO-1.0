interface IcomplaintAndDurations {
  complaintAndDuration: string;
}

interface IBackground {
  gestation: string;
  typeOfDelivery: string;
  usedMedication: string;
  medicalGuidance: string;
  whichMedication: string;
  prenatalCare: string;
  prenatalCareWhy: string;
  childProblem: string;
  whichProblem: string;
  parentsWorkHours: string;
  childCaregiver: string;
  weeklyRoutine: string;
}
interface Idevelopment {
  sleep: string;
  disease: string;
  hearingEarInfection: string;
  vision: string;
  allergies: string;
  surgeriesAndDates: string;
  hospitalizations: string;
  medication: string;
  breastfed: string;
  untilWhen: string;
  lookedAtMotherBreastfeeding: string;
  whatEatsNow: string;
  chokedEasily: string;
  gastroesophagealReflux: string;
  usedBottle: string;
  whenStartedUsingBottle: string;
  forHowLongUsedBottle: string;
  whenChangedFromLiquidToPastyFoods: string;
  pastyToSolidFoods: string;
  fever: string;
  fainting: string;
  convulsions: string;
  otherProblems: string;
  heldHeadUp: string;
  satWithSupport: string;
  satWithoutSupport: string;
  crawled: string;
  walked: string;
  diurnalSphincterControl: string;
  nocturnalSphincterControl: string;
  fellALot: string;
  bumpedIntoThings: string;
  speechBabblingWhen: string;
  quietBaby: string;
  suction: string;
  chewing: string;
  swallowing: string;
  breathing: string;
  presentsNoiseEffort: string;
  leftOrRightHanded: string;
  usedPacifierBottleFinger: string[];
  untilWhenUsedPacifierBottleFinger: string;
  otherHabits: string;
  bathesAlone: string;
  eatsAlone: string;
  sinceWhenEatsAlone: string;
  whatDoesItUse: string;
  whichHandEatsWith: string;
  playsBall: string;
  jumpsRope: string;
  brushesTeethAlone: string;
  dressesAlone: string;
  putsOnShoes: string;
  tiesShoes: string;
  closesZipper: string;
  hasOwnInitiative: string;
  demonstratesWishes: string;
  whatDoesWhenAlone: string;
  howSolvesProblems: string;
}
interface IsocioCultural {
  relationshipWithParents: string;
  relationshipWithAdults: string;
  relationshipWithOtherChildren: string;
  whoAreYourBestFriends: string;
  whatLikes: string;
  muchChargedToSpeakCorrectly: string;
  familyWithSpeechDifficulty: string;
  difficultyOfUnderstanding: string;
  hasVisualContact: string;
  bitesOtherChildrenAggressive: string;
  communicationInitiative: string;
  maintainsDialogue: string;
  hasContactWithWhatLikes: string;
  doesntLike: string;
  hasGoodSchoolPerformance: string;
  whenStartedSchool: string;
  hadGoodAdaptation: string;
  howIsTheirBehavior: string;
  answersByName: string;
}

interface IimportantObservations {
  importantObservation: string;
}

export interface IAnamnesisSpeechTherapy {
  dateOfApplication: Date;
  doctor: string;
  patient: string;
  /*birthDate:string
  maritalStatus: string
  placeOfBirth: string
  age:  number
  sex: string
  nationality: string
  schoolName: string
  studyPeriod: string
  fatherName: string
  fatherAge: string
  fatherProfession: string
  fatherEducation: string
  motherName: string
  motherAge: string
  motherProfession: string
  motherEducation: string
  siblingsNamesOne:string
  ageSiblingsNamesOne: string
  siblingsNamesTwo: string
  ageSiblingsNamesTwo: string*/
  complaintAndDuration: IcomplaintAndDurations;
  antecedents: IBackground;
  development: Idevelopment;
  socioCultural: IsocioCultural;
  importantObservations: IimportantObservations;
}
