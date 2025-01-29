export interface MotorDevelopmentPhysio{
  patient: string;
  date: Date | string;
  birthDay: Date | string;
  doctor: string;
  diagnoses: string;
  motor0To1Years1: IMotorDevelopment0To1YearPhysio;
  motor1To2Years2: IMotorDevelopment1To2YearsPhysio;
  motor2To3Years3: IMotorDevelopment2To3YearsPhysio;
  motor3To4Years4: IMotorDevelopment3To4YearsPhysio;
  motor4To5Years5: IMotorDevelopment4To5YearsPhysio;
  motor5To6Years6: IMotorDevelopment5To6YearsPhysio;
  year: number;
  motorDevelopment0To1YearScore: number;
  motorDevelopment1To2YearsScore: number;
  motorDevelopment2To3YearsScore: number;
  motorDevelopment3To4YearsScore: number;
  motorDevelopment4To5YearsScore: number;
  motorDevelopment5To6YearsScore: number;
  motor: number;
}

export interface IMotorDevelopment0To1YearPhysio {
  reachesForAnObjectPlacedInFrontOfIt15To20Cm: string,
  grabsAnObjectPlacedInFrontOfIt8Cm: string,
  extendsArmsTowardAnObjectInFrontOfItAndGrabsIt: string,
  reachesForAPreferredObject: string,
  putsObjectsInMouth: string,
  raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach: string,
  raisesHeadAndTorsoSupportingSelfOnOneArm: string,
  touchesAndExploresObjectsWithMouth: string,
  inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime: string,
  inPronePositionTurnsOnBack: string,
  inPronePositionMovesForwardTheEquivalentOfItsHeight: string,
  inSupinePositionRollsToTheSide: string,
  inSupinePositionTurnsFromStomachToBack: string,
  makesEffortToSitHoldingOntoAdultsFingers: string,
  turnsHeadEasilyWhenTheBodyIsSupported: string,
  sitsFor2Minutes: string,
  releasesAnObjectToGrabAnother: string,
  grabsAndDropsAnObjectPurposefully: string,
  standsWithMaximumSupport: string,
  whileStandingWithSupportJumpsUpAndDown: string,
  crawlsToGrabAnObjectDistantItsHeight: string,
  sitsSupportingSelfAlone: string,
  whileSittingTurnsToCrawling: string,
  whileInPronePositionManagesToSit: string,
  sitsWithoutHandSupport: string,
  throwsObjectsAtRandom: string,
  swaysBackAndForthWhenCrawling: string,
  transfersObjectsFromOneHandToAnotherWhenSitting: string,
  retains2CubesOf25CmInOneHand: string,
  getsOnKnees: string,
  standsSupportingSelfOnSomething: string,
  usesPincerGripToPickUpObjects: string,
  crawls: string,
  whileCrawlingExtendsOneHandUpwards: string,
  standsWithMinimumSupport: string,
  licksFoodAroundMouth: string,
  maintainsSelfStandingAloneFor1Minute: string,
  knocksDownAnObjectThatIsInsideAReceptacle: string,
  turnsSeveralPagesOfABookAtTheSameTime: string,
  scoopsWithASpoonOrSpade: string,
  placesSmallObjectsInsideAReceptacle: string,
  whileStandingLowersItselfAndSits: string,
  clapsHands: string,
  walksWithMinimumSupport: string,
  takesAFewStepsWithoutSupport: string,
}

export interface IMotorDevelopment1To2YearsPhysio {
  climbsStairsCrawling: string,
  placesItselfStandingWhileSitting: string,
  rollsABallImitatingAnAdult: string,
  climbsOntoAnAdultChairTurnsAndSits: string,
  puts4RingsOnASmallStake: string,
  removes25CmPinsFromABoardOrTray: string,
  fits25CmPinsIntoAFittingBoard: string,
  buildsATowerOf3Blocks: string,
  makesTracesOnPaperWithPencilOrCrayon: string,
  walksAlone: string,
  goesDownStairsSittingPuttingFeetFirst: string,
  sitsInASmallChair: string,
  crouchesAndReturnsToStand: string,
  pushesAndPullsToysWhenWalking: string,
  usesAChairOrRockingHorse: string,
  climbsStairsWithHelp: string,
  bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor: string,
  imitatesACircularMovement: string,
}

export interface IMotorDevelopment2To3YearsPhysio {
  threads4LargeBeadsOnACordIn2Minutes: string,
  turnsLatchesOrDoorknobsOnDoors: string,
  jumpsInTheSamePlaceWithBothFeet: string,
  walksBackwards: string,
  goesDownStairsWithoutHelp: string,
  throwsABallToAnAdultAtA1HalfDistance: string,
  buildsATowerOf5To6Blocks: string,
  turnsPagesOfABookOneAtATime: string,
  unwrapsASmallObject: string,
  foldsAPaperInHalfImitatingAnAdult: string,
  dismantlesAndRebuildsPressureFitToys: string,
  unscrewsToysThatFitWithThreads: string,
  kicksALargeBallThatIsStill: string,
  makesBallsOfClayMudOrPlasticine: string,
  holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger: string,
  doesForwardTumbleWithHelp: string,
  hammersToFit5PinsInTheirHoles: string,
}

export interface IMotorDevelopment3To4YearsPhysio {
  makesAPuzzleOf3Pieces: string,
  cutsSomethingIntoPiecesWithScissors: string,
  jumpsFromAHeightOf20Cm: string,
  kicksALargeBallWhenSentToYou: string,
  walksOnTiptoes: string,
  runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet: string,
  pedalsWithTricycleTheDistanceOf1AndAHalfMeters: string,
  swingsOnASwingWhenItIsInMotion: string,
  climbsOnASlideOf120MTo180MAndSlidesDown: string,
  doesForwardTumbles: string,
  climbsStairsAlternatingFeet: string,
  marchesWalksInARhythmicalWay: string,
  parriesTheBallWithBothHands: string,
  drawsFiguresFollowingOutlinesOrDottedLines: string,
  cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine: string,
}

export interface IMotorDevelopment4To5YearsPhysio {
  standsOnOneFootWithoutSupportFor4To8Seconds: string,
  changesDirectionWhenRunning: string,
  walksOnABeamOrBoardMaintainingBalance: string,
  jumpsForward10TimesWithoutFalling: string,
  jumpsOverARopeSuspended5CmFromTheGround: string,
  jumpsBackwards6Times: string,
  reboundsAndCatchesALargeBall: string,
  joins2To3PiecesOfPlasticine: string,
  cutsAroundCurvedLines: string,
  fitsScrewObjects: string,
  goesDownStairsAlternatingFeet: string,
  pedalsATricycleMakingTurns: string,
  jumpsOnOneFoot5ConsecutiveTimes: string,
  cutsACircleIn5Cm: string,
  drawsSimpleEasilyIdentifiableFiguresExHouse: string,
  cutsAndPastesSimpleShapes: string,
}

export interface IMotorDevelopment5To6YearsPhysio {
  writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper: string,
  walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance: string,
  walksWhileHopping: string,
  swingsOnASwingStartingAndMaintainingTheMovement: string,
  stretchesFingersTouchingThumbToEachOfThem: string,
  copiesCapitalLetters: string,
  climbsOnLaddersOrASlideOf3M: string,
  hammersANailWithAHammer: string,
  reboundsTheBallAsItWalksWithDirection: string,
  managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime: string,
  cutsOutFiguresWithoutLeavingMoreThan6Mmfromthemargin: string,
  usesPencilSharpener: string,
  copiesComplexDrawingsSchoolShip: string,
  tearsSimpleFiguresFromThePaper: string,
  foldsASquarePaper2XDiagonallyByImitation: string,
  catchesALightBallWithOneHand: string,
  jumpsRopeAlone: string,
  strikesABallWithAStickOrPieceOfWood: string,
  catchesAnObjectOnTheFloorWhileRunning: string,
  skatesADistanceOf3MOrUsesASkateboard: string,
  ridesABicycle: string,
  slidesDownAHillOfSandOrEarth: string,
  walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist: string,
  drivesAScooterGivingImpulseWithOneFootOnly: string,
  jumpsAndTurnsOnOneFoot: string,
  writesOwnNameWithBlockLettersInLinedNotebook: string,
  jumpsFromAHeightOf30CmAndFallsOnTiptoes: string,
  stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds: string,
  hangsFor10SecondsOnAHorizontalBar: string,
}

