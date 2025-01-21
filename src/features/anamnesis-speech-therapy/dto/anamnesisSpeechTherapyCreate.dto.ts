import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';


export class IBackgroundDto {

  @ApiProperty()
  @IsOptional()
  @IsString()
  gestation: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  typeOfDelivery: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  complications: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  usedMedication: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  medicalGuidance: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whichMedication: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  prenatalCare: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  prenatalCareWhy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  childProblem: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whichProblem: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  parentsWorkHours: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  childCaregiver: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  weeklyRoutine: string;
}

export class IPhysicalDto {

  @ApiProperty()
  @IsOptional()
  @IsString()
  sleep: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  disease: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hearingEarInfection: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  vision: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  allergies: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  surgeriesAndDates: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hospitalizations: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  medication: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  breastfed: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  untilWhen: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lookedAtMotherBreastfeeding: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whatEatsNow: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  chokedEasily: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gastroesophagealReflux: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  usedBottle: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whenStartedUsingBottle: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  forHowLongUsedBottle: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whenChangedFromLiquidToPastyFoods: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pastyToSolidFoods: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fever: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fainting: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  convulsions: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  otherProblems: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  heldHeadUp: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  satWithSupport: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  satWithoutSupport: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  crawled: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  walked: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  diurnalSphincterControl: string; 

  @ApiProperty()
  @IsOptional()
  @IsString()
  nocturnalSphincterControl: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fellALot: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bumpedIntoThings: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  speechBabblingWhen: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  quietBaby: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  suction: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  chewing: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  swallowing: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  breathing: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  presentsNoise: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  effort: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  leftOrRightHanded: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  usedPacifierBottleFinger: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  untilWhenUsed: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  otherHabits: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  bathesAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eatsAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sinceWhenEatsAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whatDoesItUse: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whichHandEatsWith: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  playsBall: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  jumpsRope: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  brushesTeethAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  dressesAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  putsOnShoes: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  tiesShoes: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  closesZipper: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  hasOwnInitiative: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  demonstratesWishes: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whatDoesWhenAlone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  howSolvesProblems: string;
}


export class DevelopmentSocioCulturalDto{

  @ApiProperty()
  @IsOptional()
  @IsString()
  relationshipWithParents: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  relationshipWithAdults: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  relationshipWithOtherChildren: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whoAreYourBestFriends: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whatLikes: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  muchChargedToSpeakCorrectly: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  familyWithSpeechDifficulty: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  difficultyOfUnderstanding: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hasVisualContact: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bitesOtherChildrenAggressive: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  communicationInitiative: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  maintainsDialogue: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hasContactWithWhatLikes: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  doesntLike: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hasGoodSchoolPerformance: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  whenStartedSchool: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hadGoodAdaptation: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  howIsTheirBehavior: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  answersByName: string;
}

export class CreateAnamnesisSpeechTherapyDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  patient: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  birthDate:string

  @ApiProperty()
  @IsOptional()
  @IsString()
  maritalStatus: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  placeOfBirth: string

  @ApiProperty()
  @IsOptional()
  age:  number

  @ApiProperty()
  @IsOptional()
  @IsString()
  sex: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  nationality: string
  @ApiProperty()
  @IsOptional()
  @IsString()
  schoolName: string
  @ApiProperty()
  @IsOptional()
  @IsString()
  studyPeriod: string
  @ApiProperty()
  @IsOptional()
  @IsString()
  fatherName: string
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  fatherAge: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  fatherProfession: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  fatherEducation: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  motherName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  motherAge: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  motherProfession: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  motherEducation: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  siblingsNamesOne:string

  @ApiProperty()
  @IsOptional()
  @IsString()
  ageSiblingsNamesOne: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  siblingsNamesTwo: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  ageSiblingsNamesTwo: string
    
  @ApiProperty()
  @IsOptional()
  @IsString()
  complaintAndDurations: string;

  @ApiProperty()
  @IsOptional()
  backgorund: IBackgroundDto;

  @ApiProperty()
  @IsOptional()
  physycal: IPhysicalDto;

  @ApiProperty()
  @IsOptional()
  socioCultural: DevelopmentSocioCulturalDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  importantObservations: string;
    


};