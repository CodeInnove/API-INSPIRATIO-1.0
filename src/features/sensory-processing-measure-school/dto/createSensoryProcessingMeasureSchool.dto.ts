import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class IParticipationSocialSchool {
    @ApiProperty()
    @IsString()
    knowsHowToWorkInGroupSchool: string;

    @ApiProperty()
    @IsString()
    resolvesConflictsIndependentlySchool: string;

    @ApiProperty()
    @IsString()
    handlesFrustrationWithoutAggressionSchool: string;

    @ApiProperty()
    @IsString()
    participatesSpontaneouslyInGamesSchool: string;

    @ApiProperty()
    @IsString()
    participatesWithoutInterruptingGamesSchool: string;

    @ApiProperty()
    @IsString()
    hasFriendsAndChoosesToBeWithThemSchool: string;

    @ApiProperty()
    @IsString()
    understandsAndUsesHumorInPlaySchool: string;

    @ApiProperty()
    @IsString()
    maintainsAppropriatePersonalSpaceSchool: string;

    @ApiProperty()
    @IsString()
    maintainsEyeContactAppropriatelySchool: string;

    @ApiProperty()
    @IsString()
    switchesConversationTopicsAppropriatelySchool: string;
  }
  
  export class IVisionSchool {
    @ApiProperty()
    @IsString()
    botheredByLightSchool: string;

    @ApiProperty()
    @IsString()
    distractedByVisualStimuliSchool: string;

    @ApiProperty()
    @IsString()
    looksAroundInsteadOfPayingAttentionSchool: string;

    @ApiProperty()
    @IsString()
    movesObjectsInFrontOfEyesSchool: string;

    @ApiProperty()
    @IsString()
    staresAtPeopleOrObjectsSchool: string;

    @ApiProperty()
    @IsString()
    botheredByDimLightsInCinemaSchool: string;
  }
  
  export class IHearingSchool {
    @ApiProperty()
    @IsString()
    botheredByLoudSoundsSchool: string;

    @ApiProperty()
    @IsString()
    botheredByMusicOrInstrumentsSchool: string;

    @ApiProperty()
    @IsString()
    doesntRespondToNewSoundsSchool: string;

    @ApiProperty()
    @IsString()
    cantDetermineSoundLocationSchool: string;

    @ApiProperty()
    @IsString()
    makesNoiseWhileClassIsSilentSchool: string;

    @ApiProperty()
    @IsString()
    talksLoudlyDuringRecessSchool: string;

      @ApiProperty()
    @IsString()
    makesUnusualNoisesAloneSchool: string;
  }
  
  export class ITouchSchool {
    @ApiProperty()
    @IsString()
    botheredByMessyHandsOrFaceSchool: string;

    @ApiProperty()
    @IsString()
    doesntTolerateDirtOnHandsOrClothesSchool: string;

    @ApiProperty()
    @IsString()
    discomfortWithCertainTexturesSchool: string;

    @ApiProperty()
    @IsString()
    botheredByAccidentalTouchesFromFriendsSchool: string;

    @ApiProperty()
    @IsString()
    doesntRespondToBeingTouchedSchool: string;

    @ApiProperty()
    @IsString()
    seeksHotOrColdTemperaturesSchool: string;

    @ApiProperty()
    @IsString()
    touchesPeersInappropriatelySchool: string;

    @ApiProperty()
    @IsString()
    doesntWipeFoodOrSalivaFromFaceSchool: string;
  }
  
  export class ISmellAndTasteSchool {
    @ApiProperty()
    @IsString()
    botheredByTastesOrSmellsOfCertainFoodsSchool: string;

    @ApiProperty()
    @IsString()
    doesntNoticeStrongOdorsSchool: string;

    @ApiProperty()
    @IsString()
    cantDistinguishBetweenOdorsSchool: string;

    @ApiProperty()
    @IsString()
    triesToTasteOrLickNonFoodItemsSchool: string;
  }
  
  export class IBodyAwarenessSchool {
    @ApiProperty()
    @IsString()
    spillsWhenOpeningContainersSchool: string;

    @ApiProperty()
    @IsString()
    chewsOnObjectsOrClothingSchool: string;

    @ApiProperty()
    @IsString()
    movesChairAbruptlySchool: string;

    @ApiProperty()
    @IsString()
    runsOrJumpsInsteadOfWalkingSchool: string;

    @ApiProperty()
    @IsString()
    stompsFeetWhenWalkingSchool: string;

    @ApiProperty()
    @IsString()
    jumpsHardOnStairsSchool: string;

    @ApiProperty()
    @IsString()
    opensOrClosesDoorsWithExcessiveForceSchool: string;
  }
  
  export class IBalanceAndMovementSchool {
    @ApiProperty()
    @IsString()
    usesWallsForSupportWhenWalkingSchool: string;

    @ApiProperty()
    @IsString()
    tanglesFeetInChairLegsSchool: string;

    @ApiProperty()
    @IsString()
    rocksInChairWhenSeatedSchool: string;

      @ApiProperty()
    @IsString()
    fidgetsWhenSeatedSchool: string;

    @ApiProperty()
    @IsString()
    fallsFromChairWhenSeatedSchool: string;

    @ApiProperty()
    @IsString()
    leansOnWallsOrFurnitureForSupportSchool: string;

    @ApiProperty()
    @IsString()
    needsSupportToGetUpFromFloorSchool: string;

    @ApiProperty()
    @IsString()
    slumpsOrLeansOnDeskWhenSeatedSchool: string;

    @ApiProperty()
    @IsString()
    poorCoordinationAppearsClumsySchool: string;
  }
  
  export class IPlanningAndIdeationSchool {
    @ApiProperty()
    @IsString()
    inconsistentInDailyTasksSchool: string;

    @ApiProperty()
    @IsString()
    strugglesToSolveProblemsEffectivelySchool: string;

    @ApiProperty()
    @IsString()
    dropsItemsWhenCarryingMultipleObjectsSchool: string;

    @ApiProperty()
    @IsString()
    hasDifficultyWithTaskSequencingSchool: string;

    @ApiProperty()
    @IsString()
    failsToCompleteMultiStepTasksSchool: string;

    @ApiProperty()
    @IsString()
    strugglesToImitateDemonstrationsSchool: string;

    @ApiProperty()
    @IsString()
    hasDifficultyCompletingTasksFromModelsSchool: string;

    @ApiProperty()
    @IsString()
     limitedImaginationInPlaySchool: string;

    @ApiProperty()
    @IsString()
     repeatsSameActivitiesDuringRecessSchool: string;

    @ApiProperty()
    @IsString()
    disorganizedMaterialsAtDeskSchool: string;
  }


export class CreateSensoryProcessingMeasureSchoolDto {

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
    age: number;


    @ApiProperty()
    bitrhDate: string;


    @ApiProperty()
    @IsString()
    ethnicity: string;

    @ApiProperty()
    date: string;

    @ApiProperty()
    participationSocialSchool: IParticipationSocialSchool

    @ApiProperty()
    visionSchool: IVisionSchool

    @ApiProperty()
    hearingSchool:IHearingSchool

    @ApiProperty()
    touchSchool: ITouchSchool

    @ApiProperty()
    smellAndTasteSchool: ISmellAndTasteSchool

    @ApiProperty()
    bodyAwarenessSchool: IBodyAwarenessSchool

    @ApiProperty()
    balanceAndMovementSchool: IBalanceAndMovementSchool

    @ApiProperty()
    planningAndIdeationSchool: IPlanningAndIdeationSchool
}
