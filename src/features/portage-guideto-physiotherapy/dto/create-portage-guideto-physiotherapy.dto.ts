import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNumber, IsOptional } from "class-validator";


export enum ResponseType {
  'NAO' = 'NAO',
  'AV' = 'AV',
  'SIM' = 'SIM',
}



export class MotorDevelopment0To1YearDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  reachesForAnObjectPlacedInFrontOfIt15To20Cm?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  grabsAnObjectPlacedInFrontOfIt8Cm?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  extendsArmsTowardAnObjectInFrontOfItAndGrabsIt?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  reachesForAPreferredObject?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  putsObjectsInMouth?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  raisesHeadAndTorsoSupportingSelfOnOneArm?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  touchesAndExploresObjectsWithMouth?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  inPronePositionTurnsOnBack?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  inPronePositionMovesForwardTheEquivalentOfItsHeight?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  inSupinePositionRollsToTheSide?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  inSupinePositionTurnsFromStomachToBack?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  makesEffortToSitHoldingOntoAdultsFingers?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  turnsHeadEasilyWhenTheBodyIsSupported?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  sitsFor2Minutes?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  releasesAnObjectToGrabAnother?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  grabsAndDropsAnObjectPurposefully?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  standsWithMaximumSupport?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  whileStandingWithSupportJumpsUpAndDown?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  crawlsToGrabAnObjectDistantItsHeight?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  sitsSupportingSelfAlone?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  whileSittingTurnsToCrawling?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  whileInPronePositionManagesToSit?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  sitsWithoutHandSupport?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  throwsObjectsAtRandom?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  swaysBackAndForthWhenCrawling?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  transfersObjectsFromOneHandToAnotherWhenSitting?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  retains2CubesOf25CmInOneHand?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  getsOnKnees?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  standsSupportingSelfOnSomething?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  usesPincerGripToPickUpObjects?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  crawls?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  whileCrawlingExtendsOneHandUpwards?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  standsWithMinimumSupport?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  licksFoodAroundMouth?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  maintainsSelfStandingAloneFor1Minute?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  knocksDownAnObjectThatIsInsideAReceptacle?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  turnsSeveralPagesOfABookAtTheSameTime?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  scoopsWithASpoonOrSpade?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  placesSmallObjectsInsideAReceptacle?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  whileStandingLowersItselfAndSits?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  clapsHands?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksWithMinimumSupport?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  takesAFewStepsWithoutSupport?: ResponseType;
}

export class MotorDevelopment1To2YearsDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsStairsCrawling?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  placesItselfStandingWhileSitting?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  rollsABallImitatingAnAdult?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsOntoAnAdultChairTurnsAndSits?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  puts4RingsOnASmallStake?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  removes25CmPinsFromABoardOrTray?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  fits25CmPinsIntoAFittingBoard?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  buildsATowerOf3Blocks?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  makesTracesOnPaperWithPencilOrCrayon?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksAlone?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  goesDownStairsSittingPuttingFeetFirst?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  sitsInASmallChair?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  crouchesAndReturnsToStand?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  pushesAndPullsToysWhenWalking?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  usesAChairOrRockingHorse?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsStairsWithHelp?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  imitatesACircularMovement?: ResponseType;
}

export class MotorDevelopment2To3YearsDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  threads4LargeBeadsOnACordIn2Minutes?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  turnsLatchesOrDoorknobsOnDoors?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsInTheSamePlaceWithBothFeet?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksBackwards?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  goesDownStairsWithoutHelp?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  throwsABallToAnAdultAtA1HalfDistance?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  buildsATowerOf5To6Blocks?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  turnsPagesOfABookOneAtATime?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  unwrapsASmallObject?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  foldsAPaperInHalfImitatingAnAdult?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  dismantlesAndRebuildsPressureFitToys?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  unscrewsToysThatFitWithThreads?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  kicksALargeBallThatIsStill?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  makesBallsOfClayMudOrPlasticine?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  doesForwardTumbleWithHelp?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  hammersToFit5PinsInTheirHoles?: ResponseType;
}

export class MotorDevelopment3To4YearsDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  makesAPuzzleOf3Pieces?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsSomethingIntoPiecesWithScissors?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsFromAHeightOf20Cm?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  kicksALargeBallWhenSentToYou?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksOnTiptoes?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  pedalsWithTricycleTheDistanceOf1AndAHalfMeters?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  swingsOnASwingWhenItIsInMotion?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsOnASlideOf120MTo180MAndSlidesDown?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  doesForwardTumbles?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsStairsAlternatingFeet?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  marchesWalksInARhythmicalWay?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  parriesTheBallWithBothHands?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  drawsFiguresFollowingOutlinesOrDottedLines?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine?: ResponseType;
}

export class MotorDevelopment4To5YearsDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  standsOnOneFootWithoutSupportFor4To8Seconds?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  changesDirectionWhenRunning?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksOnABeamOrBoardMaintainingBalance?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsForward10TimesWithoutFalling?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsOverARopeSuspended5CmFromTheGround?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsBackwards6Times?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  reboundsAndCatchesALargeBall?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  joins2To3PiecesOfPlasticine?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsAroundCurvedLines?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  fitsScrewObjects?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  goesDownStairsAlternatingFeet?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  pedalsATricycleMakingTurns?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsOnOneFoot5ConsecutiveTimes?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsACircleIn5Cm?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  drawsSimpleEasilyIdentifiableFiguresExHouse?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsAndPastesSimpleShapes?: ResponseType;
}

export class MotorDevelopment5To6YearsDto {
  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksWhileHopping?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  swingsOnASwingStartingAndMaintainingTheMovement?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  stretchesFingersTouchingThumbToEachOfThem?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  copiesCapitalLetters?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  climbsOnLaddersOrASlideOf3M?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  hammersANailWithAHammer?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  reboundsTheBallAsItWalksWithDirection?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  cutsOutFiguresWithoutLeavingMoreThan6MmFromTheMargin?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  usesPencilSharpener?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  copiesComplexDrawingsSchoolShip?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  tearsSimpleFiguresFromThePaper?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  foldsASquarePaper2XDiagonallyByImitation?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  catchesALightBallWithOneHand?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsRopeAlone?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  strikesABallWithAStickOrPieceOfWood?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  catchesAnObjectOnTheFloorWhileRunning?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  skatesADistanceOf3MOrUsesASkateboard?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  ridesABicycle?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  slidesDownAHillOfSandOrEarth?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  drivesAScooterGivingImpulseWithOneFootOnly?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsAndTurnsOnOneFoot?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  writesOwnNameWithBlockLettersInLinedNotebook?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  jumpsFromAHeightOf30CmAndFallsOnTiptoes?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds?: ResponseType;

  @ApiProperty({ enum: ResponseType })
  @IsOptional()
  hangsfor10SecondsOnAHorizontalBar?: ResponseType;
}

export class CreatePortageGuidetoPhysiotherapyDto{

  @ApiProperty()
  patient: string;

  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional()
  date: Date;

  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional()
  birthDay: string;

  @ApiProperty()
  doctor: string;

  @ApiProperty()
  diagnoses: string;

  
  @ApiProperty()
  @IsNumber()
  year: number;

  @ApiProperty()
  motorDevelopment0To1Year: MotorDevelopment0To1YearDto;

  @ApiProperty()
  motorDevelopment1To2Years: MotorDevelopment1To2YearsDto;

  @ApiProperty()
  motorDevelopment2To3Years: MotorDevelopment2To3YearsDto;

  @ApiProperty()
  motorDevelopment3To4Years: MotorDevelopment3To4YearsDto;

  @ApiProperty()
  motorDevelopment4To5Years: MotorDevelopment4To5YearsDto;

  @ApiProperty()
  motorDevelopment5To6Years: MotorDevelopment5To6YearsDto;

  @ApiProperty()
  motor: number;
}

