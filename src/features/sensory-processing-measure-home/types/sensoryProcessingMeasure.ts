
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
    playsWithFriends: string;
    interactsWithParents: string;
    sharesThings: string;
    maintainsConversation: string;
    maintainsEyeContact: string;
    joinsGames: string;
    participatesInMeals: string;
    participatesInFamilyOutings: string;
    participatesInFamilyGatherings: string;
    participatesInFriendActivities: string;
  }
  
  export interface IVision {
    botheredByLight: string;
    difficultyFindingObjects: string;
    closesOneEye: string;
    botheredByVisualStimuli: string;
    difficultyFollowingObjects: string;
    difficultyIdentifyingObjects: string;
    enjoysWatchingMovingObjects: string;
    walksIntoObjects: string;
    enjoysSwitchingLights: string;
    dislikesCertainLights: string;
    usesPeripheralVision: string;
  }
  
  export interface IHearing {
    botheredByNormalSounds: string;
    reactsNegativelyToLoudNoises: string;
    seemsNotToHearCertainSounds: string;
    intenseInterestInUnnoticedSounds: string;
    scaredByUnexpectedSounds: string;
    distractedByBackgroundNoise: string;
    enjoysMakingRepetitiveNoises: string;
    botheredByHighPitchedSounds: string;
  }
  
  export interface ITouch {
    withdrawsFromLightTouch: string;
    doesNotNoticeBeingTouched: string;
    botheredByNewClothes: string;
    prefersTouchingOverBeingTouched: string;
    botheredByNailCutting: string;
    botheredByFaceTouch: string;
    avoidsMessyActivities: string;
    highPainTolerance: string;
    dislikesToothbrushing: string;
    enjoysPainfulSensations: string;
    difficultyFindingThingsByTouch: string;
  }
  
  export interface ISmellAndTaste {
    triesInedibleItems: string;
    gagsAtUnlikedFoods: string;
    enjoysSmellingObjects: string;
    discomfortWithSmells: string;
    ignoresStrongOdors: string;
  }
  
  export interface IBodyAwareness {
    gripsObjectsTooTightly: string;
    seeksPushingAndPulling: string;
    unsureOfBodyMovements: string;
    gripsObjectsTooLoosely: string;
    exertsExcessiveForce: string;
    jumpsFrequently: string;
    petsAnimalsTooHard: string;
    pushesOtherChildren: string;
    chewsObjects: string;
    breaksObjectsFromForce: string;
  }
  
  export interface IBalanceAndMovement {
    exaggeratedFearOfMovement: string;
    goodBalance: string;
    avoidsBalanceActivities: string;
    fallsFromChair: string;
    poorBodyControlWhenFalling: string;
    doesNotGetDizzy: string;
    spinsBodyFrequently: string;
    botheredByHeadPositionChanges: string;
    clumsyMotorCoordination: string;
    fearOfElevators: string;
    leansOnObjects: string;
  }
  
  export interface IPlanningAndIdeation {
    inconsistentDailyTasks: string;
    difficultyCarryingMultipleObjects: string;
    confusionOrganizingMaterials: string;
    troubleSequentialTasks: string;
    difficultyCompletingMultiStepTasks: string;
    troubleImitatingActions: string;
    difficultyCopyingModels: string;
    troubleGeneratingActivityIdeas: string;
    repeatsSameActivities: string;
  }
  