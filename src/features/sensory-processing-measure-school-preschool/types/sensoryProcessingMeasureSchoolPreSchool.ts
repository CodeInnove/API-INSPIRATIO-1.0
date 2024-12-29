export class ISensoryProcessingMeasureSchoolPreSchool {

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
  
  export class IParticipationSocialSpmsps {
    participatesInGamesAndActivities: boolean;
    waitsForTurn: boolean;
    participatesInCircleTime: boolean;
    transitionsEasilyToNewActivities: boolean;
    joinsGamesWithoutInterrupting: boolean;
    followsClassRulesAndRoutines: boolean;
    sharesToysAndMaterials: boolean;
    cooperatesWithPeersForCommonGoals: boolean;
    interactsWithPeersDuringPlay: boolean;
    resolvesConflictsWithPeersIndependently: boolean;
  }
  
  export class IVisionSpmsps {
    coversEyesOrComplainsAboutLighting: boolean;
    distractedByVisualStimuli: boolean;
    difficultyLocatingObjects: boolean;
    difficultyFindingItemsOnDeskOrTable: boolean;
    looksAroundDuringTeachersSpeech: boolean;
    difficultyPairingItemsByShapeAndColor: boolean;
    walksAmongOtherChildrenPlaying: boolean;
    staresAtPeopleOrObjects: boolean;
    enjoysWatchingMovingObjects: boolean;
    enjoysLookingAtMovingObjectsWithPeripheralVision: boolean;
  }
  
  export class IHearingSpmsps {
    discomfortWithLoudSounds: boolean;
    discomfortWithSingingOrMusic: boolean;
    unawareOfNewVoicesAndSounds: boolean;
    unableToIdentifySoundSource: boolean;
    makesRepetitiveSounds: boolean;
    enjoysRepetitiveNoises: boolean;
    unawareOfCertainSounds: boolean;
    difficultyFocusingInNoisyEnvironments: boolean;
    unableToFollowVerbalInstructions: boolean;
    disturbedByBackgroundNoise: boolean;
  }
  
  export class ITouchSpmsps {
    avoidsBeingTouched: boolean;
    discomfortWithDirtyHandsOrFace: boolean;
    discomfortWithWashingHands: boolean;
    reactsNegativelyToAccidentalTouch: boolean;
    doesNotWipeFaceAfterEating: boolean;
    distressedByCertainTextures: boolean;
    refusesToWearCostumesOrTightClothes: boolean;
    hasHighPainTolerance: boolean;
    ignoresNeedToUseBathroom: boolean;
    avoidsMessyActivities: boolean;
  }
  
  export class ISmellAndTasteSpmsps {
    chewsNonFoodItems: boolean;
    doesNotNoticeStrongOrUnusualOdors: boolean;
    discomfortWithCertainScents: boolean;
    refusesToTryNewFoods: boolean;
  }
  
  export class IBodyAwarenessSpmsps {
    enjoysMovingFurniture: boolean;
    breaksObjectsFromExcessiveForce: boolean;
    excessivelyJumpsOrClimbs: boolean;
    opensOrClosesDoorsWithExcessiveForce: boolean;
    usesExcessiveForceWhenPlayingWithObjects: boolean;
    bumpsIntoPeersExcessively: boolean;
    chewsOnNonFoodItems: boolean;
    strugglesToManipulateFoodContainers: boolean;
    knocksOverOthersToys: boolean;
    squeezesScissorsExcessively: boolean;
  }
  
  export class IBalanceAndMovementSpmsps {
    enjoysSpinningInRotatingEquipment: boolean;
    needsSupportWhenStanding: boolean;
    fallsFromChairOrTendsToLean: boolean;
    fearfulOfMovementActivities: boolean;
    excessivelyEnthusiasticAboutSpinning: boolean;
    clumsyWhenBendingToPickUpObjects: boolean;
    strugglesToBalanceAndAvoidFalling: boolean;
    discomfortWithHeights: boolean;
    poorCoordination: boolean;
    difficultyWithRhythmicBodyMovements: boolean;
  }
  
  export class IPlanningAndIdeationSpmsps {
    overlyFocusedOnIndividualActivities: boolean;
    strugglesToGenerateNewIdeasInPlay: boolean;
    repeatsActivitiesWithoutChangingThem: boolean;
    needsRealObjectsToPlay: boolean;
    strugglesToImitateActionsCorrectly: boolean;
    playsWithOwnGamesAvoidingImitation: boolean;
    strugglesToCopyAdultsOrPeersInBuildingActivities: boolean;
    hasDifficultyUsingBothHandsForTasks: boolean;
    cannotCompleteMultistepTasks: boolean;
    strugglesWithRoutineSequences: boolean;
  }
  