export interface ParticipationSocialSchoolPreSchool {
    participatesInGamesAndActivitiesSchoolPreSchool: string;
    waitsForTurnSchoolPreSchool: string;
    participatesInCircleTimeSchoolPreSchool: string;
    transitionsEasilyToNewActivitiesSchoolPreSchool: string;
    joinsGamesWithoutInterruptingSchoolPreSchool: string;
    followsClassRulesAndRoutinesSchoolPreSchool: string;
    sharesToysAndMaterialsSchoolPreSchool: string;
    cooperatesWithPeersForCommonGoalsSchoolPreSchool: string;
    interactsWithPeersDuringPlaySchoolPreSchool: string;
    resolvesConflictsWithPeersIndependentlySchoolPreSchool: string;
  }
  
  export interface VisionSchoolPreSchool {
    coversEyesOrComplainsAboutLightingSchoolPreSchool: string;
    distractedByVisualStimuliSchoolPreSchool: string;
    difficultyLocatingObjectsSchoolPreSchool: string;
    difficultyFindingItemsOnDeskOrTableSchoolPreSchool: string;
    looksAroundDuringTeachersSpeechSchoolPreSchool: string;
    difficultyPairingItemsByShapeAndColorSchoolPreSchool: string;
    walksAmongOtherChildrenPlayingSchoolPreSchool: string;
    staresAtPeopleOrObjectsSchoolPreSchool: string;
    enjoysWatchingMovingObjectsSchoolPreSchool: string;
    enjoysLookingAtMovingObjectsWithPeripheralVisionSchoolPreSchool: string;
  }
  
  export interface HearingSchoolPreSchool {
    discomfortWithLoudSoundsSchoolPreSchool: string;
    discomfortWithSingingOrMusicSchoolPreSchool: string;
    unawareOfNewVoicesAndSoundsSchoolPreSchool: string;
    unableToIdentifySoundSourceSchoolPreSchool: string;
    makesRepetitiveSoundsSchoolPreSchool: string;
    enjoysRepetitiveNoisesSchoolPreSchool: string;
    unawareOfCertainSoundsSchoolPreSchool: string;
    difficultyFocusingInNoisyEnvironmentsSchoolPreSchool: string;
    unableToFollowVerbalInstructionsSchoolPreSchool: string;
    disturbedByBackgroundNoiseSchoolPreSchool: string;
  }
  
  export interface TouchSchoolPreSchool {
    avoidsBeingTouchedSchoolPreSchool: string;
    discomfortWithDirtyHandsOrFaceSchoolPreSchool: string;
    discomfortWithWashingHandsSchoolPreSchool: string;
    reactsNegativelyToAccidentalTouchSchoolPreSchool: string;
    doesNotWipeFaceAfterEatingSchoolPreSchool: string;
    distressedByCertainTexturesSchoolPreSchool: string;
    refusesToWearCostumesOrTightClothesSchoolPreSchool: string;
    hasHighPainToleranceSchoolPreSchool: string;
    ignoresNeedToUseBathroomSchoolPreSchool: string;
    avoidsMessyActivitiesSchoolPreSchool: string;
  }
  
  export interface SmellAndTasteSchoolPreSchool {
    chewsNonFoodItemsSchoolPreSchool: string;
    doesNotNoticeStrongOrUnusualOdorsSchoolPreSchool: string;
    discomfortWithCertainScentsSchoolPreSchool: string;
    refusesToTryNewFoodsSchoolPreSchool: string;
  }
  
  export interface BodyAwarenessSchoolPreSchool {
    enjoysMovingFurnitureSchoolPreSchool: string;
    breaksObjectsFromExcessiveForceSchoolPreSchool: string;
    excessivelyJumpsOrClimbsSchoolPreSchool: string;
    opensOrClosesDoorsWithExcessiveForceSchoolPreSchool: string;
    usesExcessiveForceWhenPlayingWithObjectsSchoolPreSchool: string;
    bumpsIntoPeersExcessivelySchoolPreSchool: string;
    chewsOnNonFoodItemsSchoolPreSchool: string;
    strugglesToManipulateFoodContainersSchoolPreSchool: string;
    knocksOverOthersToysSchoolPreSchool: string;
    squeezesScissorsExcessivelySchoolPreSchool: string;
  }
  
  export interface BalanceAndMovementSchoolPreSchool {
    enjoysSpinningInRotatingEquipmentSchoolPreSchool: string;
    needsSupportWhenStandingSchoolPreSchool: string;
    fallsFromChairOrTendsToLeanSchoolPreSchool: string;
    fearfulOfMovementActivitiesSchoolPreSchool: string;
    excessivelyEnthusiasticAboutSpinningSchoolPreSchool: string;
    clumsyWhenBendingToPickUpObjectsSchoolPreSchool: string;
    strugglesToBalanceAndAvoidFallingSchoolPreSchool: string;
    discomfortWithHeightsSchoolPreSchool: string;
    poorCoordinationSchoolPreSchool: string;
    difficultyWithRhythmicBodyMovementsSchoolPreSchool: string;
  }
  
  export interface PlanningAndIdeationSchoolPreSchool {
    overlyFocusedOnIndividualActivitiesSchoolPreSchool: string;
    strugglesToGenerateNewIdeasInPlaySchoolPreSchool: string;
    repeatsActivitiesWithoutChangingThemSchoolPreSchool: string;
    needsRealObjectsToPlaySchoolPreSchool: string;
    strugglesToImitateActionsCorrectlySchoolPreSchool: string;
    playsWithOwnGamesAvoidingImitationSchoolPreSchool: string;
    strugglesToCopyAdultsOrPeersInBuildingActivitiesSchoolPreSchool: string;
    hasDifficultyUsingBothHandsForTasksSchoolPreSchool: string;
    cannotCompleteMultistepTasksSchoolPreSchool: string;
    strugglesWithRoutineSequencesSchoolPreSchool: string;
  }

  export interface ISpmPreSchool{
    doctor: string;
    responsable: string;
    relationshipWithChild: string;
    patient: string;
    gender: string;
    birthDate: string;
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
    participationSocialSchool: ParticipationSocialSchoolPreSchool;
    visionSchool: VisionSchoolPreSchool;
    hearingSchool: HearingSchoolPreSchool;
    touchSchool: TouchSchoolPreSchool;
    smellAndTasteSchool: SmellAndTasteSchoolPreSchool;
    bodyAwarenessSchool: BodyAwarenessSchoolPreSchool;
    balanceAndMovementSchool: BalanceAndMovementSchoolPreSchool;
    planningAndIdeationSchool: PlanningAndIdeationSchoolPreSchool;
};
  