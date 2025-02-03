export enum Ethnicity {
  AMERICAN_INDIAN_ALASKA_NATIVE = 'American Indian/Alaska Native',
  ASIAN = 'Asian',
  BLACK_AFRICAN_AMERICAN = 'Black/African American',
  HISPANIC_LATINO = 'Hispanic/Latino',
  NATIVE_HAWAIIAN_PACIFIC_ISLANDER = 'Native Hawaiian/Pacific Islander',
  WHITE = 'White',
  OTHER = 'Other',
}

export interface ISocialParticipationPreSchool {
  playsWithFriendsPreSchool: 'N' | 'O' | 'F' | 'S';
  sharesThingsPreSchool: 'N' | 'O' | 'F' | 'S';
  participatesInGroupGamesPreSchool: 'N' | 'O' | 'F' | 'S';
  participatesAtMealsPreSchool: 'N' | 'O' | 'F' | 'S';
  participatesInFamilyOutingsPreSchool: 'N' | 'O' | 'F' | 'S';
  participatesInFamilyMeetingsPreSchool: 'N' | 'O' | 'F' | 'S';
  participatesWithFriendsPreSchool: 'N' | 'O' | 'F' | 'S';
  helpsWithFamilyActivitiesPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface IVisionPreSchool {
  botheredByBrightLightsPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyFindingObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyRecognizingObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
  likesWatchingMovingObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
  walksThroughObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
  likesSwitchingLightsPreSchool: 'N' | 'O' | 'F' | 'S';
  likesLookingAtMovingObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyPayingAttentionPreSchool: 'N' | 'O' | 'F' | 'S';
  botheredByVisualStimuliPreSchool: 'N' | 'O' | 'F' | 'S';
  distractedWhileWalkingPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyCompletingTasksPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface IHearingPreSchool {
  botheredByNormalSoundsPreSchool: 'N' | 'O' | 'F' | 'S';
  reactsNegativelyToLoudNoisesPreSchool: 'N' | 'O' | 'F' | 'S';
  seemsNotToHearPreSchool: 'N' | 'O' | 'F' | 'S';
  overlySensitiveToSoundsPreSchool: 'N' | 'O' | 'F' | 'S';
  easilyDistractedByNoisesPreSchool: 'N' | 'O' | 'F' | 'S';
  likesMakingCertainSoundsPreSchool: 'N' | 'O' | 'F' | 'S';
  distressedBySharpNoisesPreSchool: 'N' | 'O' | 'F' | 'S';
  distressedInLoudPlacesPreSchool: 'N' | 'O' | 'F' | 'S';
  startledByLoudSoundsPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface ITouchPreSchool {
  avoidsBeingTouchedPreSchool: 'N' | 'O' | 'F' | 'S';
  prefersTouchingOthersPreSchool: 'N' | 'O' | 'F' | 'S';
  distressedByNailCuttingPreSchool: 'N' | 'O' | 'F' | 'S';
  botheredByFaceTouchPreSchool: 'N' | 'O' | 'F' | 'S';
  avoidsMessyActivitiesPreSchool: 'N' | 'O' | 'F' | 'S';
  highPainTolerancePreSchool: 'N' | 'O' | 'F' | 'S';
  dislikesBrushingTeethPreSchool: 'N' | 'O' | 'F' | 'S';
  enjoysPainfulSensationsPreSchool: 'N' | 'O' | 'F' | 'S';
  dislikesHairCarePreSchool: 'N' | 'O' | 'F' | 'S';
  dislikesHaircutsPreSchool: 'N' | 'O' | 'F' | 'S';
  avoidsCertainTexturesPreSchool: 'N' | 'O' | 'F' | 'S';
  vomitsDueToTexturesPreSchool: 'N' | 'O' | 'F' | 'S';
  dislikesFaceCleaningPreSchool: 'N' | 'O' | 'F' | 'S';
  droolsExcessivelyPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface ISmellAndTastePreSchool {
  eatsNonFoodItemsPreSchool: 'N' | 'O' | 'F' | 'S';
  ignoresStrongOdorsPreSchool: 'N' | 'O' | 'F' | 'S';
  prefersCertainFlavorsPreSchool: 'N' | 'O' | 'F' | 'S';
  refusesToothpastePreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface IBodyAwarenessPreSchool {
  holdsObjectsTooTightlyPreSchool: 'N' | 'O' | 'F' | 'S';
  seeksPushPullActivitiesPreSchool: 'N' | 'O' | 'F' | 'S';
  insecureDuringMovementPreSchool: 'N' | 'O' | 'F' | 'S';
  holdsObjectsTooLooselyPreSchool: 'N' | 'O' | 'F' | 'S';
  excessivePressurePreSchool: 'N' | 'O' | 'F' | 'S';
  jumpsExcessivelyPreSchool: 'N' | 'O' | 'F' | 'S';
  roughWithAnimalsPreSchool: 'N' | 'O' | 'F' | 'S';
  pushesOthersPreSchool: 'N' | 'O' | 'F' | 'S';
  chewsObjectsPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface IBalanceAndMovementPreSchool {
  overlyAfraidOfMovementPreSchool: 'N' | 'O' | 'F' | 'S';
  avoidsBalanceActivitiesPreSchool: 'N' | 'O' | 'F' | 'S';
  fallsFromChairPreSchool: 'N' | 'O' | 'F' | 'S';
  failsToCatchSelfWhenFallingPreSchool: 'N' | 'O' | 'F' | 'S';
  doesntGetDizzyPreSchool: 'N' | 'O' | 'F' | 'S';
  spinsExcessivelyPreSchool: 'N' | 'O' | 'F' | 'S';
  distressedByHeadTiltingPreSchool: 'N' | 'O' | 'F' | 'S';
  poorCoordinationPreSchool: 'N' | 'O' | 'F' | 'S';
  needsSupportToRisePreSchool: 'N' | 'O' | 'F' | 'S';
  rocksBodyPreSchool: 'N' | 'O' | 'F' | 'S';
  afraidOfStairsPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface IPlanningAndIdeationPreSchool {
  difficultyCarryingMultipleItemsPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyOrganizingItemsPreSchool: 'N' | 'O' | 'F' | 'S';
  confusedByRoutineStepsPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyCompletingMultiStepTasksPreSchool: 'N' | 'O' | 'F' | 'S';
  troubleImitatingActionsPreSchool: 'N' | 'O' | 'F' | 'S';
  cantCopyOthersPreSchool: 'N' | 'O' | 'F' | 'S';
  difficultyWithNewIdeasPreSchool: 'N' | 'O' | 'F' | 'S';
  repetitiveInPlayPreSchool: 'N' | 'O' | 'F' | 'S';
  troubleExitingCarSeatPreSchool: 'N' | 'O' | 'F' | 'S';
}

export interface ISpmpSchool {
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
  scores: {
      SOC: number;
        VIS: number;
        HEA: number;
        TOU: number;
        ITEMS: number;
        BOD: number;
        BAL: number;
        PLA: number;
    };
    participationSocialPreSchool?: ISocialParticipationPreSchool;
    visionPreSchool?: IVisionPreSchool;
    hearingPreSchool?: IHearingPreSchool;
    touchPreSchool?: ITouchPreSchool;
    smellAndTastePreSchool?: ISmellAndTastePreSchool;
    bodyAwarenessPreSchool?: IBodyAwarenessPreSchool;
    balanceAndMovementPreSchool?: IBalanceAndMovementPreSchool;
    planningAndIdeationPreSchool?: IPlanningAndIdeationPreSchool;
}