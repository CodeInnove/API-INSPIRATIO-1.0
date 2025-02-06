import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';


export interface ScoreSchoolDto {  // Renomeei para ScoreDto para consistência
  SOC: number;
  VIS: number;
  HEA: number;
  TOU: number;
  ITEMS: number;
  BOD: number;
  BAL: number;
  PLA: number;
}

export class IParticipationSocialSchool {
    @ApiProperty()
    @IsString()
    knowsHowToWorkInGroup: string;

    @ApiProperty()
    @IsString()
    resolvesConflictsIndependently: string;

    @ApiProperty()
    @IsString()
    handlesFrustrationWithoutAggression: string;

    @ApiProperty()
    @IsString()
    participatesSpontaneouslyInGames: string;

    @ApiProperty()
    @IsString()
    participatesWithoutInterruptingGames: string;

    @ApiProperty()
    @IsString()
    hasFriendsAndChoosesToBeWithThem: string;

    @ApiProperty()
    @IsString()
    understandsAndUsesHumorInPlay: string;

    @ApiProperty()
    @IsString()
    maintainsAppropriatePersonalSpace: string;

    @ApiProperty()
    @IsString()
    maintainsEyeContactAppropriately: string;

    @ApiProperty()
    @IsString()
    switchesConversationTopicsAppropriately: string;
  }
  
  export class IVisionSchool {
    @ApiProperty()
    @IsString()
    botheredByLight: string;

    @ApiProperty()
    @IsString()
    distractedByVisualStimuli: string;

    @ApiProperty()
    @IsString()
    looksAroundInsteadOfPayingAttention: string;

    @ApiProperty()
    @IsString()
    movesObjectsInFrontOfEyes: string;

    @ApiProperty()
    @IsString()
    staresAtPeopleOrObjects: string;

    @ApiProperty()
    @IsString()
    botheredByDimLightsInCinema: string;
  }
  
  export class IHearingSchool {
    @ApiProperty()
    @IsString()
    botheredByLoudSounds: string;

    @ApiProperty()
    @IsString()
    botheredByMusicOrInstruments: string;

    @ApiProperty()
    @IsString()
    doesntRespondToNewSounds: string;

    @ApiProperty()
    @IsString()
    cantDetermineSoundLocation: string;

    @ApiProperty()
    @IsString()
    makesNoiseWhileClassIsSilent: string;

    @ApiProperty()
    @IsString()
    talksLoudlyDuringRecess: string;

      @ApiProperty()
    @IsString()
    makesUnusualNoisesAlone: string;
  }
  
  export class ITouchSchool {
    @ApiProperty()
    @IsString()
    botheredByMessyHandsOrFace: string;

    @ApiProperty()
    @IsString()
    doesntTolerateDirtOnHandsOrClothes: string;

    @ApiProperty()
    @IsString()
    discomfortWithCertainTextures: string;

    @ApiProperty()
    @IsString()
    botheredByAccidentalTouchesFromFriends: string;

    @ApiProperty()
    @IsString()
    doesntRespondToBeingTouched: string;

    @ApiProperty()
    @IsString()
    seeksHotOrColdTemperatures: string;

    @ApiProperty()
    @IsString()
    touchesPeersInappropriately: string;

    @ApiProperty()
    @IsString()
    doesntWipeFoodOrSalivaFromFace: string;
  }
  
  export class ISmellAndTasteSchool {
    @ApiProperty()
    @IsString()
    botheredByTastesOrSmellsOfCertainFoods: string;

    @ApiProperty()
    @IsString()
    doesntNoticeStrongOdors: string;

    @ApiProperty()
    @IsString()
    cantDistinguishBetweenOdors: string;

    @ApiProperty()
    @IsString()
    triesToTasteOrLickNonFoodItems: string;
  }
  
  export class IBodyAwarenessSchool {
    @ApiProperty()
    @IsString()
    spillsWhenOpeningContainers: string;

    @ApiProperty()
    @IsString()
    chewsOnObjectsOrClothing: string;

    @ApiProperty()
    @IsString()
    movesChairAbruptly: string;

    @ApiProperty()
    @IsString()
    runsOrJumpsInsteadOfWalking: string;

    @ApiProperty()
    @IsString()
    stompsFeetWhenWalking: string;

    @ApiProperty()
    @IsString()
    jumpsHardOnStairs: string;

    @ApiProperty()
    @IsString()
    opensOrClosesDoorsWithExcessiveForce: string;
  }
  
  export class IBalanceAndMovementSchool {
    @ApiProperty()
    @IsString()
    usesWallsForSupportWhenWalking: string;

    @ApiProperty()
    @IsString()
    tanglesFeetInChairLegs: string;

    @ApiProperty()
    @IsString()
    rocksInChairWhenSeated: string;

      @ApiProperty()
    @IsString()
    fidgetsWhenSeated: string;

    @ApiProperty()
    @IsString()
    fallsFromChairWhenSeated: string;

    @ApiProperty()
    @IsString()
    leansOnWallsOrFurnitureForSupport: string;

    @ApiProperty()
    @IsString()
    needsSupportToGetUpFromFloor: string;

    @ApiProperty()
    @IsString()
    slumpsOrLeansOnDeskWhenSeated: string;

    @ApiProperty()
    @IsString()
    poorCoordinationAppearsClumsy: string;
  }
  
  export class IPlanningAndIdeationSchool {
    @ApiProperty()
    @IsString()
    inconsistentInDailyTasks: string;

    @ApiProperty()
    @IsString()
    strugglesToSolveProblemsEffectively: string;

    @ApiProperty()
    @IsString()
    dropsItemsWhenCarryingMultipleObjects: string;

    @ApiProperty()
    @IsString()
    hasDifficultyWithTaskSequencing: string;

    @ApiProperty()
    @IsString()
    failsToCompleteMultiStepTasks: string;

    @ApiProperty()
    @IsString()
    strugglesToImitateDemonstrations: string;

    @ApiProperty()
    @IsString()
    hasDifficultyCompletingTasksFromModels: string;

    @ApiProperty()
    @IsString()
     limitedImaginationInPlay: string;

    @ApiProperty()
    @IsString()
     repeatsSameActivitiesDuringRecess: string;

    @ApiProperty()
    @IsString()
    disorganizedMaterialsAtDesk: string;
  }


export class CreateSensoryProcessingMeasureSchoolDto {
    @ApiProperty()
    @IsString()
    date: string;
  
    @ApiProperty()
    @IsString()
    doctor: string;

    @ApiProperty()
    @IsString()
    responsable: string;

  @ApiProperty()
  @IsString()
  //relationshipWithChild: string;

  @ApiProperty()
  @IsString()
  patient: string;

  @ApiProperty()
  @IsString()
  //gender: string;

  @ApiProperty()
  //age: number;

    @ApiProperty()
    bitrhDate: string;

    @ApiProperty()
    @IsOptional()
    comment?: string;

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

    @ApiProperty()
    scoresSchool: ScoreSchoolDto
}
