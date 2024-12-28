export class ISensoryProcessingMeasure {
    nameParentOrId: string;
    relationshipWithChild: string;
    date: Date;
    nameOrId: string;
    gender: 'M' | 'F';
    ageYears: number;
    ageMonths: number;
    ethnicity: Ethnicity;
    behaviorComments: string;
  }
  
  export enum Ethnicity {
    AMERICAN_INDIAN_ALASKA_NATIVE = 'American Indian/Alaska Native',
    ASIAN = 'Asian',
    BLACK_AFRICAN_AMERICAN = 'Black/African American',
    HISPANIC_LATINO = 'Hispanic/Latino',
    NATIVE_HAWAIIAN_PACIFIC_ISLANDER = 'Native Hawaiian/Pacific Islander',
    WHITE = 'White',
    OTHER = 'Other',
  }
  
  export class IParticipationSocial {
    playsWithFriends: boolean;
    interactsWithParents: boolean;
    sharesThings: boolean;
    maintainsConversation: boolean;
    maintainsEyeContact: boolean;
    joinsGames: boolean;
    participatesInMeals: boolean;
    participatesInFamilyOutings: boolean;
    participatesInFamilyGatherings: boolean;
    participatesInFriendActivities: boolean;
  }
  
  export class IVision {
    botheredByLight: boolean;
    difficultyFindingObjects: boolean;
    closesOneEye: boolean;
    botheredByVisualStimuli: boolean;
    difficultyFollowingObjects: boolean;
    difficultyIdentifyingObjects: boolean;
    enjoysWatchingMovingObjects: boolean;
    walksIntoObjects: boolean;
    enjoysSwitchingLights: boolean;
    dislikesCertainLights: boolean;
    usesPeripheralVision: boolean;
  }
  
  export class IHearing {
    botheredByNormalSounds: boolean;
    reactsNegativelyToLoudNoises: boolean;
    seemsNotToHearCertainSounds: boolean;
    intenseInterestInUnnoticedSounds: boolean;
    scaredByUnexpectedSounds: boolean;
    distractedByBackgroundNoise: boolean;
    enjoysMakingRepetitiveNoises: boolean;
    botheredByHighPitchedSounds: boolean;
  }
  
  export class ITouch {
    withdrawsFromLightTouch: boolean;
    doesNotNoticeBeingTouched: boolean;
    botheredByNewClothes: boolean;
    prefersTouchingOverBeingTouched: boolean;
    botheredByNailCutting: boolean;
    botheredByFaceTouch: boolean;
    avoidsMessyActivities: boolean;
    highPainTolerance: boolean;
    dislikesToothbrushing: boolean;
    enjoysPainfulSensations: boolean;
    difficultyFindingThingsByTouch: boolean;
  }
  
  export class ISmellAndTaste {
    triesInedibleItems: boolean;
    gagsAtUnlikedFoods: boolean;
    enjoysSmellingObjects: boolean;
    discomfortWithSmells: boolean;
    ignoresStrongOdors: boolean;
  }
  
  export class IBodyAwareness {
    gripsObjectsTooTightly: boolean;
    seeksPushingAndPulling: boolean;
    unsureOfBodyMovements: boolean;
    gripsObjectsTooLoosely: boolean;
    exertsExcessiveForce: boolean;
    jumpsFrequently: boolean;
    petsAnimalsTooHard: boolean;
    pushesOtherChildren: boolean;
    chewsObjects: boolean;
    breaksObjectsFromForce: boolean;
  }
  
  export class IBalanceAndMovement {
    exaggeratedFearOfMovement: boolean;
    goodBalance: boolean;
    avoidsBalanceActivities: boolean;
    fallsFromChair: boolean;
    poorBodyControlWhenFalling: boolean;
    doesNotGetDizzy: boolean;
    spinsBodyFrequently: boolean;
    botheredByHeadPositionChanges: boolean;
    clumsyMotorCoordination: boolean;
    fearOfElevators: boolean;
    leansOnObjects: boolean;
  }
  
  export class IPlanningAndIdeation {
    inconsistentDailyTasks: boolean;
    difficultyCarryingMultipleObjects: boolean;
    confusionOrganizingMaterials: boolean;
    troubleSequentialTasks: boolean;
    difficultyCompletingMultiStepTasks: boolean;
    troubleImitatingActions: boolean;
    difficultyCopyingModels: boolean;
    troubleGeneratingActivityIdeas: boolean;
    repeatsSameActivities: boolean;
  }
  