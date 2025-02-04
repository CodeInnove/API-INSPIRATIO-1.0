export enum Ethnicity {
  AMERICAN_INDIAN_ALASKA_NATIVE = 'American Indian/Alaska Native',
  ASIAN = 'Asian',
  BLACK_AFRICAN_AMERICAN = 'Black/African American',
  HISPANIC_LATINO = 'Hispanic/Latino',
  NATIVE_HAWAIIAN_PACIFIC_ISLANDER = 'Native Hawaiian/Pacific Islander',
  WHITE = 'White',
  OTHER = 'Other',
}

export interface IParticipationSocial {
  playsWithFriends: 'N' | 'O' | 'F' | 'S';
  interactsWithParents: 'N' | 'O' | 'F' | 'S';
  sharesThings: 'N' | 'O' | 'F' | 'S';
  maintainsConversation: 'N' | 'O' | 'F' | 'S';
  maintainsEyeContact: 'N' | 'O' | 'F' | 'S';
  joinsGames: 'N' | 'O' | 'F' | 'S';
  participatesInMeals: 'N' | 'O' | 'F' | 'S';
  participatesInFamilyOutings: 'N' | 'O' | 'F' | 'S';
  participatesInFamilyGatherings: 'N' | 'O' | 'F' | 'S';
  participatesInFriendActivities: 'N' | 'O' | 'F' | 'S';
}

export interface IVision {
  botheredByLight: 'N' | 'O' | 'F' | 'S';
  difficultyFindingObjects: 'N' | 'O' | 'F' | 'S';
  closesOneEye: 'N' | 'O' | 'F' | 'S';
  botheredByVisualStimuli: 'N' | 'O' | 'F' | 'S';
  difficultyFollowingObjects: 'N' | 'O' | 'F' | 'S';
  difficultyIdentifyingObjects: 'N' | 'O' | 'F' | 'S';
  enjoysWatchingMovingObjects: 'N' | 'O' | 'F' | 'S';
  walksIntoObjects: 'N' | 'O' | 'F' | 'S';
  enjoysSwitchingLights: 'N' | 'O' | 'F' | 'S';
  dislikesCertainLights: 'N' | 'O' | 'F' | 'S';
  usesPeripheralVision: 'N' | 'O' | 'F' | 'S';
}

export interface IHearing {
  botheredByNormalSounds: 'N' | 'O' | 'F' | 'S';
  reactsNegativelyToLoudNoises: 'N' | 'O' | 'F' | 'S';
  seemsNotToHearCertainSounds: 'N' | 'O' | 'F' | 'S';
  intenseInterestInUnnoticedSounds: 'N' | 'O' | 'F' | 'S';
  scaredByUnexpectedSounds: 'N' | 'O' | 'F' | 'S';
  distractedByBackgroundNoise: 'N' | 'O' | 'F' | 'S';
  enjoysMakingRepetitiveNoises: 'N' | 'O' | 'F' | 'S';
  botheredByHighPitchedSounds: 'N' | 'O' | 'F' | 'S';
}

export interface ITouch {
  withdrawsFromLightTouch: 'N' | 'O' | 'F' | 'S';
  doesNotNoticeBeingTouched: 'N' | 'O' | 'F' | 'S';
  botheredByNewClothes: 'N' | 'O' | 'F' | 'S';
  prefersTouchingOverBeingTouched: 'N' | 'O' | 'F' | 'S';
  botheredByNailCutting: 'N' | 'O' | 'F' | 'S';
  botheredByFaceTouch: 'N' | 'O' | 'F' | 'S';
  avoidsMessyActivities: 'N' | 'O' | 'F' | 'S';
  highPainTolerance: 'N' | 'O' | 'F' | 'S';
  dislikesToothbrushing: 'N' | 'O' | 'F' | 'S';
  enjoysPainfulSensations: 'N' | 'O' | 'F' | 'S';
  difficultyFindingThingsByTouch: 'N' | 'O' | 'F' | 'S';
}

export interface ISmellAndTaste {
  triesInedibleItems: 'N' | 'O' | 'F' | 'S';
  gagsAtUnlikedFoods: 'N' | 'O' | 'F' | 'S';
  enjoysSmellingObjects: 'N' | 'O' | 'F' | 'S';
  discomfortWithSmells: 'N' | 'O' | 'F' | 'S';
  ignoresStrongOdors: 'N' | 'O' | 'F' | 'S';
}

export interface IBodyAwareness {
  gripsObjectsTooTightly: 'N' | 'O' | 'F' | 'S';
  seeksPushPullActivities: 'N' | 'O' | 'F' | 'S';
  unsureOfBodyMovements: 'N' | 'O' | 'F' | 'S';
  holdsObjectsTooLoosely: 'N' | 'O' | 'F' | 'S';
  exertsExcessiveForce: 'N' | 'O' | 'F' | 'S';
  jumpsFrequently: 'N' | 'O' | 'F' | 'S';
  petsAnimalsTooHard: 'N' | 'O' | 'F' | 'S';
  pushesOtherChildren: 'N' | 'O' | 'F' | 'S';
  chewsObjects: 'N' | 'O' | 'F' | 'S';
  breaksObjectsFromForce: 'N' | 'O' | 'F' | 'S';
}

export interface IBalanceAndMovement {
exaggeratedFearOfMovement: 'N' | 'O' | 'F' | 'S';
  goodBalance: 'N' | 'O' | 'F' | 'S';
avoidsBalanceActivities: 'N' | 'O' | 'F' | 'S';
  fallsFromChair: 'N' | 'O' | 'F' | 'S';
  poorBodyControlWhenFalling: 'N' | 'O' | 'F' | 'S';
  doesNotGetDizzy: 'N' | 'O' | 'F' | 'S';
  spinsBodyFrequently: 'N' | 'O' | 'F' | 'S';
  distressedByHeadTilting: 'N' | 'O' | 'F' | 'S';
poorCoordination: 'N' | 'O' | 'F' | 'S';
  needsSupportToRise: 'N' | 'O' | 'F' | 'S';
  rocksBody: 'N' | 'O' | 'F' | 'S';
  afraidOfStairs: 'N' | 'O' | 'F' | 'S';
}

export interface IPlanningAndIdeation {
inconsistentDailyTasks: 'N' | 'O' | 'F' | 'S';
difficultyCarryingMultipleObjects: 'N' | 'O' | 'F' | 'S';
confusionOrganizingMaterials: 'N' | 'O' | 'F' | 'S';
troubleSequentialTasks: 'N' | 'O' | 'F' | 'S';
difficultyCompletingMultiStepTasks: 'N' | 'O' | 'F' | 'S';
troubleImitatingActions: 'N' | 'O' | 'F' | 'S';
difficultyCopyingModels: 'N' | 'O' | 'F' | 'S';
troubleGeneratingActivityIdeas: 'N' | 'O' | 'F' | 'S';
repeatsSameActivities: 'N' | 'O' | 'F' | 'S';
 troubleExitingCarSeat: 'N' | 'O' | 'F' | 'S';
}

export interface ISpmpHome {
  doctor: string;
  responsable: string;
  relationshipWithChild: string;
  patient: string;
  gender: 'M' | 'F';
  age: number;
  birthDate: string;
  ethnicity: Ethnicity;
  date: string;
  comment?: string;
  scoresHome: {
      SOC: number;
      VIS: number;
      HEA: number;
      TOU: number;
      ITEMS: number;
      BOD: number;
      BAL: number;
      PLA: number;
  };

  participationSocial?: IParticipationSocial;
  vision?: IVision;
  hearing?: IHearing;
  touch?: ITouch;
  smellAndTaste?: ISmellAndTaste;
  bodyAwareness?: IBodyAwareness;
  balanceAndMovement?: IBalanceAndMovement;
  planningAndIdeation?: IPlanningAndIdeation;
};