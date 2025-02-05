
  
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

  export interface ISpmSchool{
    doctor: string;
    responsable: string;
    relationshipWithChild: string;
    patient: string;
    gender: string;
    bitrhDate: string;
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
    participationSocialSchool: IParticipationSocialSchool;
    visionSchool: IVisionSchool;
    hearingSchool: IHearingSchool;
    touchSchool: ITouchSchool;
    smellAndTasteSchool: ISmellAndTasteSchool;
    bodyAwarenessSchool: IBodyAwarenessSchool;
    balanceAndMovementSchool: IBalanceAndMovementSchool;
    planningAndIdeationSchool: IPlanningAndIdeationSchool;
};
  