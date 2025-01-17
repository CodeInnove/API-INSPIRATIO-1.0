
  export enum Ethnicity {
    AMERICAN_INDIAN_ALASKA_NATIVE = 'American Indian/Alaska Native',
    ASIAN = 'Asian',
    BLACK_AFRICAN_AMERICAN = 'Black/African American',
    HISPANIC_LATINO = 'Hispanic/Latino',
    NATIVE_HAWAIIAN_PACIFIC_ISLANDER = 'Native Hawaiian/Pacific Islander',
    WHITE = 'White',
    OTHER = 'Other',
  }
  
  export interface IParticipationSocialSchool {
    knowsHowToWorkInGroup: boolean;
    resolvesConflictsIndependently: boolean;
    handlesFrustrationWithoutAggression: boolean;
    participatesSpontaneouslyInGames: boolean;
    participatesWithoutInterruptingGames: boolean;
    hasFriendsAndChoosesToBeWithThem: boolean;
    understandsAndUsesHumorInPlay: boolean;
    maintainsAppropriatePersonalSpace: boolean;
    maintainsEyeContactAppropriately: boolean;
    switchesConversationTopicsAppropriately: boolean;
  }
  
  export interface IVisionSchool {
    botheredByLight: boolean;
    distractedByVisualStimuli: boolean;
    looksAroundInsteadOfPayingAttention: boolean;
    movesObjectsInFrontOfEyes: boolean;
    staresAtPeopleOrObjects: boolean;
    botheredByDimLightsInCinema: boolean;
  }
  
  export interface IHearingSchool {
    botheredByLoudSounds: boolean;
    botheredByMusicOrInstruments: boolean;
    doesntRespondToNewSounds: boolean;
    cantDetermineSoundLocation: boolean;
    makesNoiseWhileClassIsSilent: boolean;
    talksLoudlyDuringRecess: boolean;
    makesUnusualNoisesAlone: boolean;
  }
  
  export interface ITouchSchool {
    botheredByMessyHandsOrFace: boolean;
    doesntTolerateDirtOnHandsOrClothes: boolean;
    discomfortWithCertainTextures: boolean;
    botheredByAccidentalTouchesFromFriends: boolean;
    doesntRespondToBeingTouched: boolean;
    seeksHotOrColdTemperatures: boolean;
    touchesPeersInappropriately: boolean;
    doesntWipeFoodOrSalivaFromFace: boolean;
  }
  
  export interface ISmellAndTasteSchool {
    botheredByTastesOrSmellsOfCertainFoods: boolean;
    doesntNoticeStrongOdors: boolean;
    cantDistinguishBetweenOdors: boolean;
    triesToTasteOrLickNonFoodItems: boolean;
  }
  
  export interface IBodyAwarenessSchool {
    spillsWhenOpeningContainers: boolean;
    chewsOnObjectsOrClothing: boolean;
    movesChairAbruptly: boolean;
    runsOrJumpsInsteadOfWalking: boolean;
    stompsFeetWhenWalking: boolean;
    jumpsHardOnStairs: boolean;
    opensOrClosesDoorsWithExcessiveForce: boolean;
  }
  
  export interface IBalanceAndMovementSchool {
    usesWallsForSupportWhenWalking: boolean;
    tanglesFeetInChairLegs: boolean;
    rocksInChairWhenSeated: boolean;
    fidgetsWhenSeated: boolean;
    fallsFromChairWhenSeated: boolean;
    leansOnWallsOrFurnitureForSupport: boolean;
    needsSupportToGetUpFromFloor: boolean;
    slumpsOrLeansOnDeskWhenSeated: boolean;
    poorCoordinationAppearsClumsy: boolean;
  }
  
  export interface IPlanningAndIdeationSchool {
    inconsistentInDailyTasks: boolean;
    strugglesToSolveProblemsEffectively: boolean;
    dropsItemsWhenCarryingMultipleObjects: boolean;
    hasDifficultyWithTaskSequencing: boolean;
    failsToCompleteMultiStepTasks: boolean;
    strugglesToImitateDemonstrations: boolean;
    hasDifficultyCompletingTasksFromModels: boolean;
    limitedImaginationInPlay: boolean;
    repeatsSameActivitiesDuringRecess: boolean;
    disorganizedMaterialsAtDesk: boolean;
  }
  