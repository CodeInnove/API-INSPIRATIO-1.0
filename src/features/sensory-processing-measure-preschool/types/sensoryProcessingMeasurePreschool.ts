export class ISensoryProcessingMeasurePreschool {
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

export class ISocialParticipationPreSchool {
  
    playsWithFriends: boolean;
    sharesThings: boolean;
    participatesInGroupGames: boolean;
    participatesAtMeals: boolean;
    participatesInFamilyOutings: boolean;
    participatesInFamilyMeetings: boolean;
    participatesWithFriends: boolean;
    helpsWithFamilyActivities: boolean;
  }
  
  export class IVisionPreSchool {
    
    botheredByBrightLights: boolean;
    difficultyFindingObjects: boolean;
    difficultyRecognizingObjects: boolean;
    likesWatchingMovingObjects: boolean;
    walksThroughObjects: boolean;
    likesSwitchingLights: boolean;
    likesLookingAtMovingObjects: boolean;
    difficultyPayingAttention: boolean;
    botheredByVisualStimuli: boolean;
    distractedWhileWalking: boolean;
    difficultyCompletingTasks: boolean;
  }
  
  export class IHearingPreSchool {
    
    botheredByNormalSounds: boolean;
    reactsNegativelyToLoudNoises: boolean;
    seemsNotToHear: boolean;
    overlySensitiveToSounds: boolean;
    easilyDistractedByNoises: boolean;
    likesMakingCertainSounds: boolean;
    distressedBySharpNoises: boolean;
    distressedInLoudPlaces: boolean;
    startledByLoudSounds: boolean;
  }
  
  export class ITouchPreSchool {
    
    avoidsBeingTouched: boolean;
    prefersTouchingOthers: boolean;
    distressedByNailCutting: boolean;
    botheredByFaceTouch: boolean;
    avoidsMessyActivities: boolean;
    highPainTolerance: boolean;
    dislikesBrushingTeeth: boolean;
    enjoysPainfulSensations: boolean;
    dislikesHairCare: boolean;
    dislikesHaircuts: boolean;
    avoidsCertainTextures: boolean;
    vomitsDueToTextures: boolean;
    dislikesFaceCleaning: boolean;
    droolsExcessively: boolean;
  }
  
  export class ISmellAndTastePreSchool {
    
    eatsNonFoodItems: boolean;
    ignoresStrongOdors: boolean;
    prefersCertainFlavors: boolean;
    refusesToothpaste: boolean;
  }
  
  export class IBodyAwarenessPreSchool {
    
    holdsObjectsTooTightly: boolean;
    seeksPushPullActivities: boolean;
    insecureDuringMovement: boolean;
    holdsObjectsTooLoosely: boolean;
    excessivePressure: boolean;
    jumpsExcessively: boolean;
    roughWithAnimals: boolean;
    pushesOthers: boolean;
    chewsObjects: boolean;
  }
  
  export class IBalanceAndMovementPreSchool {
    
    overlyAfraidOfMovement: boolean;
    avoidsBalanceActivities: boolean;
    fallsFromChair: boolean;
    failsToCatchSelfWhenFalling: boolean;
    doesntGetDizzy: boolean;
    spinsExcessively: boolean;
    distressedByHeadTilting: boolean;
    poorCoordination: boolean;
    needsSupportToRise: boolean;
    rocksBody: boolean;
    afraidOfStairs: boolean;
  }
  
  export class IPlanningAndIdeationPreSchool {
    
    difficultyCarryingMultipleItems: boolean;
    difficultyOrganizingItems: boolean;
    confusedByRoutineSteps: boolean;
    difficultyCompletingMultiStepTasks: boolean;
    troubleImitatingActions: boolean;
    cantCopyOthers: boolean;
    difficultyWithNewIdeas: boolean;
    repetitiveInPlay: boolean;
    troubleExitingCarSeat: boolean;
  }
  