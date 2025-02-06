import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export interface ScoreDto {
    SOC: number;
    VIS: number;
    HEA: number;
    TOU: number;
    ITEMS: number;
    BOD: number;
    BAL: number;
    PLA: number;
}

class SocialParticipationPreSchool {
  @ApiProperty()
  @IsString()
  playsWithFriendsPreSchool: string;

  @ApiProperty()
  @IsString()
  sharesThingsPreSchool: string;

  @ApiProperty()
  @IsString()
  participatesInGroupGamesPreSchool: string;

  @ApiProperty()
  @IsString()
  participatesAtMealsPreSchool: string;

  @ApiProperty()
  @IsString()
  participatesInFamilyOutingsPreSchool: string;

  @ApiProperty()
  @IsString()
  participatesInFamilyMeetingsPreSchool: string;

  @ApiProperty()
  @IsString()
  participatesWithFriendsPreSchool: string;

  @ApiProperty()
  @IsString()
  helpsWithFamilyActivitiesPreSchool: string;
}

class VisionPreSchool {
  @ApiProperty()
  @IsString()
  botheredByBrightLightsPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyFindingObjectsPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyRecognizingObjectsPreSchool: string;

  @ApiProperty()
  @IsString()
  likesWatchingMovingObjectsPreSchool: string;

  @ApiProperty()
  @IsString()
  walksThroughObjectsPreSchool: string;

  @ApiProperty()
  @IsString()
  likesSwitchingLightsPreSchool: string;

  @ApiProperty()
  @IsString()
  likesLookingAtMovingObjectsPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyPayingAttentionPreSchool: string;

  @ApiProperty()
  @IsString()
  botheredByVisualStimuliPreSchool: string;

  @ApiProperty()
  @IsString()
  distractedWhileWalkingPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyCompletingTasksPreSchool: string;
}

class HearingPreSchool {
  @ApiProperty()
  @IsString()
  botheredByNormalSoundsPreSchool: string;

  @ApiProperty()
  @IsString()
  reactsNegativelyToLoudNoisesPreSchool: string;

  @ApiProperty()
  @IsString()
  seemsNotToHearPreSchool: string;

  @ApiProperty()
  @IsString()
  overlySensitiveToSoundsPreSchool: string;

  @ApiProperty()
  @IsString()
  easilyDistractedByNoisesPreSchool: string;

  @ApiProperty()
  @IsString()
  likesMakingCertainSoundsPreSchool: string;

  @ApiProperty()
  @IsString()
  distressedBySharpNoisesPreSchool: string;

  @ApiProperty()
  @IsString()
  distressedInLoudPlacesPreSchool: string;

  @ApiProperty()
  @IsString()
  startledByLoudSoundsPreSchool: string;
}

class TouchPreSchool {
  @ApiProperty()
  @IsString()
  avoidsBeingTouchedPreSchool: string;

  @ApiProperty()
  @IsString()
  prefersTouchingOthersPreSchool: string;

  @ApiProperty()
  @IsString()
  distressedByNailCuttingPreSchool: string;

  @ApiProperty()
  @IsString()
  botheredByFaceTouchPreSchool: string;

  @ApiProperty()
  @IsString()
  avoidsMessyActivitiesPreSchool: string;

  @ApiProperty()
  @IsString()
  highPainTolerancePreSchool: string;

  @ApiProperty()
  @IsString()
  dislikesBrushingTeethPreSchool: string;

  @ApiProperty()
  @IsString()
  enjoysPainfulSensationsPreSchool: string;

  @ApiProperty()
  @IsString()
  dislikesHairCarePreSchool: string;

  @ApiProperty()
  @IsString()
  dislikesHaircutsPreSchool: string;

  @ApiProperty()
  @IsString()
  avoidsCertainTexturesPreSchool: string;

  @ApiProperty()
  @IsString()
  vomitsDueToTexturesPreSchool: string;

  @ApiProperty()
  @IsString()
  dislikesFaceCleaningPreSchool: string;

  @ApiProperty()
  @IsString()
  droolsExcessivelyPreSchool: string;
}

class SmellAndTastePreSchool {
  @ApiProperty()
  @IsString()
  eatsNonFoodItemsPreSchool: string;

  @ApiProperty()
  @IsString()
  ignoresStrongOdorsPreSchool: string;

  @ApiProperty()
  @IsString()
  prefersCertainFlavorsPreSchool: string;

  @ApiProperty()
  @IsString()
  refusesToothpastePreSchool: string;
}

class BodyAwarenessPreSchool {
  @ApiProperty()
  @IsString()
  holdsObjectsTooTightlyPreSchool: string;

  @ApiProperty()
  @IsString()
  seeksPushPullActivitiesPreSchool: string;

  @ApiProperty()
  @IsString()
  insecureDuringMovementPreSchool: string;

  @ApiProperty()
  @IsString()
  holdsObjectsTooLooselyPreSchool: string;

  @ApiProperty()
  @IsString()
  excessivePressurePreSchool: string;

  @ApiProperty()
  @IsString()
  jumpsExcessivelyPreSchool: string;

  @ApiProperty()
  @IsString()
  roughWithAnimalsPreSchool: string;

  @ApiProperty()
  @IsString()
  pushesOthersPreSchool: string;

  @ApiProperty()
  @IsString()
  chewsObjectsPreSchool: string;
}

class BalanceAndMovementPreSchool {
  @ApiProperty()
  @IsString()
  overlyAfraidOfMovementPreSchool: string;

  @ApiProperty()
  @IsString()
  avoidsBalanceActivitiesPreSchool: string;

  @ApiProperty()
  @IsString()
  fallsFromChairPreSchool: string;

  @ApiProperty()
  @IsString()
  failsToCatchSelfWhenFallingPreSchool: string;

  @ApiProperty()
  @IsString()
  doesntGetDizzyPreSchool: string;

  @ApiProperty()
  @IsString()
  spinsExcessivelyPreSchool: string;

  @ApiProperty()
  @IsString()
  distressedByHeadTiltingPreSchool: string;

  @ApiProperty()
  @IsString()
  poorCoordinationPreSchool: string;

  @ApiProperty()
    @IsString()
  needsSupportToRisePreSchool: string;

    @ApiProperty()
    @IsString()
    rocksBodyPreSchool: string;

  @ApiProperty()
  @IsString()
  afraidOfStairsPreSchool: string;
}

class PlanningAndIdeationPreSchool {
  @ApiProperty()
  @IsString()
  difficultyCarryingMultipleItemsPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyOrganizingItemsPreSchool: string;

  @ApiProperty()
  @IsString()
  confusedByRoutineStepsPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyCompletingMultiStepTasksPreSchool: string;

  @ApiProperty()
  @IsString()
  troubleImitatingActionsPreSchool: string;

  @ApiProperty()
  @IsString()
  cantCopyOthersPreSchool: string;

  @ApiProperty()
  @IsString()
  difficultyWithNewIdeasPreSchool: string;

  @ApiProperty()
  @IsString()
  repetitiveInPlayPreSchool: string;

  @ApiProperty()
  @IsString()
  troubleExitingCarSeatPreSchool: string;
}


export class CreateSensoryProcessingMeasurePreschoolDto {
  @ApiProperty()
  @IsString()
  doctor: string;

  @ApiProperty()
  @IsString()
  responsable: string;

  @ApiProperty()
  @IsString()
  relationshipWithChild: string;

  @ApiProperty()
  @IsString()
  patient: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsNumber()
  age: number;

    @ApiProperty()
    @IsString()
    birthDate: string;


  @ApiProperty()
  @IsString()
  date: string;

    @ApiProperty()
    @IsOptional()
    comment?: string;

  @ApiProperty()
  @IsOptional()
  participationSocialPreSchool: SocialParticipationPreSchool;

  @ApiProperty()
  @IsOptional()
  visionPreSchool: VisionPreSchool;

  @ApiProperty()
    @IsOptional()
  hearingPreSchool: HearingPreSchool;

  @ApiProperty()
    @IsOptional()
  touchPreSchool: TouchPreSchool;

  @ApiProperty()
    @IsOptional()
  smellAndTastePreSchool: SmellAndTastePreSchool;

  @ApiProperty()
    @IsOptional()
  bodyAwarenessPreSchool: BodyAwarenessPreSchool;

  @ApiProperty()
  @IsOptional()
  balanceAndMovementPreSchool: BalanceAndMovementPreSchool;

  @ApiProperty()
    @IsOptional()
  planningAndIdeationPreSchool: PlanningAndIdeationPreSchool;
   @ApiProperty()
  scores: ScoreDto;
}