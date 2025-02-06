import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export interface ScoreSchoolPreSchoolDto {  // Renomeei para ScoreDto para consistência
  SOC: number;
  VIS: number;
  HEA: number;
  TOU: number;
  ITEMS: number;
  BOD: number;
  BAL: number;
  PLA: number;
}

export class ParticipationSocialSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    participatesInGamesAndActivitiesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    waitsForTurnSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    participatesInCircleTimeSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    transitionsEasilyToNewActivitiesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    joinsGamesWithoutInterruptingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    followsClassRulesAndRoutinesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    sharesToysAndMaterialsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    cooperatesWithPeersForCommonGoalsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    interactsWithPeersDuringPlaySchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    resolvesConflictsWithPeersIndependentlySchoolPreSchool: string;
  }
  
  export class VisionSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    coversEyesOrComplainsAboutLightingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    distractedByVisualStimuliSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    difficultyLocatingObjectsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    difficultyFindingItemsOnDeskOrTableSchoolPreSchool: string;
    
     @ApiProperty()
    @IsString()
    looksAroundDuringTeachersSpeechSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    difficultyPairingItemsByShapeAndColorSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    walksAmongOtherChildrenPlayingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    staresAtPeopleOrObjectsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    enjoysWatchingMovingObjectsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    enjoysLookingAtMovingObjectsWithPeripheralVisionSchoolPreSchool: string;
  }
  
  export class HearingSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    discomfortWithLoudSoundsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    discomfortWithSingingOrMusicSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    unawareOfNewVoicesAndSoundsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    unableToIdentifySoundSourceSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    makesRepetitiveSoundsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    enjoysRepetitiveNoisesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    unawareOfCertainSoundsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    difficultyFocusingInNoisyEnvironmentsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    unableToFollowVerbalInstructionsSchoolPreSchool: string;
    
     @ApiProperty()
    @IsString()
    disturbedByBackgroundNoiseSchoolPreSchool: string;
  }
  
  export class TouchSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    avoidsBeingTouchedSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    discomfortWithDirtyHandsOrFaceSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    discomfortWithWashingHandsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    reactsNegativelyToAccidentalTouchSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    doesNotWipeFaceAfterEatingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    distressedByCertainTexturesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    refusesToWearCostumesOrTightClothesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    hasHighPainToleranceSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    ignoresNeedToUseBathroomSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    avoidsMessyActivitiesSchoolPreSchool: string;
  }
  
  export class SmellAndTasteSchoolPreSchoolDto {
     @ApiProperty()
    @IsString()
    chewsNonFoodItemsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    doesNotNoticeStrongOrUnusualOdorsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    discomfortWithCertainScentsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    refusesToTryNewFoodsSchoolPreSchool: string;
  }
  
  export class BodyAwarenessSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    enjoysMovingFurnitureSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    breaksObjectsFromExcessiveForceSchoolPreSchool: string;
    
     @ApiProperty()
    @IsString()
    excessivelyJumpsOrClimbsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    opensOrClosesDoorsWithExcessiveForceSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    usesExcessiveForceWhenPlayingWithObjectsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    bumpsIntoPeersExcessivelySchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    chewsOnNonFoodItemsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    strugglesToManipulateFoodContainersSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    knocksOverOthersToysSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    squeezesScissorsExcessivelySchoolPreSchool: string;
  }
  
  export class BalanceAndMovementSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    enjoysSpinningInRotatingEquipmentSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    needsSupportWhenStandingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    fallsFromChairOrTendsToLeanSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    fearfulOfMovementActivitiesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    excessivelyEnthusiasticAboutSpinningSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    clumsyWhenBendingToPickUpObjectsSchoolPreSchool: string;
    
     @ApiProperty()
    @IsString()
    strugglesToBalanceAndAvoidFallingSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    discomfortWithHeightsSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    poorCoordinationSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    difficultyWithRhythmicBodyMovementsSchoolPreSchool: string;
  }
  
  export class PlanningAndIdeationSchoolPreSchoolDto {
    @ApiProperty()
    @IsString()
    overlyFocusedOnIndividualActivitiesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    strugglesToGenerateNewIdeasInPlaySchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    repeatsActivitiesWithoutChangingThemSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    needsRealObjectsToPlaySchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    strugglesToImitateActionsCorrectlySchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    playsWithOwnGamesAvoidingImitationSchoolPreSchool: string;
    
     @ApiProperty()
    @IsString()
    strugglesToCopyAdultsOrPeersInBuildingActivitiesSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    hasDifficultyUsingBothHandsForTasksSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    cannotCompleteMultistepTasksSchoolPreSchool: string;
    
    @ApiProperty()
    @IsString()
    strugglesWithRoutineSequencesSchoolPreSchool: string;
  }


export class CreateSensoryProcessingMeasureSchoolPreschoolDto {
    @ApiProperty()
    date: string;

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
    comment: string;

    @ApiProperty()
    participationSocialSpmsps: ParticipationSocialSchoolPreSchoolDto;
    @ApiProperty()
    visionSpmsps: VisionSchoolPreSchoolDto;
    @ApiProperty()
    hearingSpmsps: HearingSchoolPreSchoolDto;
    @ApiProperty()
    touchSpmsps: TouchSchoolPreSchoolDto;
    @ApiProperty()
    smellAndTasteSpmsps: SmellAndTasteSchoolPreSchoolDto;
    @ApiProperty()
    bodyAwarenessSpmsps: BodyAwarenessSchoolPreSchoolDto;
    @ApiProperty()
    balanceAndMovementSpmsps: BalanceAndMovementSchoolPreSchoolDto;
    @ApiProperty()
    planningAndIdeationSpmsps: PlanningAndIdeationSchoolPreSchoolDto;

    @ApiProperty()
    scoresSchoolPreSchool: ScoreSchoolPreSchoolDto
}
