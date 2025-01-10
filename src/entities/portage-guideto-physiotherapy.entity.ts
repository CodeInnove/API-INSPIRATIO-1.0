import {Schema, Document} from 'mongoose'
import { MotorDevelopmentPhysio } from 'src/features/portage-guideto-physiotherapy/types/portagePhysiotherapy';

export const PortageGuidetoPhysiotherapySchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, auto: true },
    motorDevelopment0To1Year: { 
        reachesForAnObjectPlacedInFrontOfIt15To20Cm: { type: Boolean },
        grabsAnObjectPlacedInFrontOfIt8Cm: { type: Boolean },
        extendsArmsTowardAnObjectInFrontOfItAndGrabsIt: { type: Boolean },
        reachesForAPreferredObject: { type: Boolean },
        putsObjectsInMouth: { type: Boolean },
        raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach: { type: Boolean },
        raisesHeadAndTorsoSupportingSelfOnOneArm: { type: Boolean },
        touchesAndExploresObjectsWithMouth: { type: Boolean },
        inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime: { type: Boolean },
        inPronePositionTurnsOnBack: { type: Boolean },
        inPronePositionMovesForwardTheEquivalentOfItsHeight: { type: Boolean },
        inSupinePositionRollsToTheSide: { type: Boolean },
        inSupinePositionTurnsFromStomachToBack: { type: Boolean },
        makesEffortToSitHoldingOntoAdultsFingers: { type: Boolean },
        turnsHeadEasilyWhenTheBodyIsSupported: { type: Boolean },
        sitsFor2Minutes: { type: Boolean },
        releasesAnObjectToGrabAnother: { type: Boolean },
        grabsAndDropsAnObjectPurposefully: { type: Boolean },
        standsWithMaximumSupport: { type: Boolean },
        whileStandingWithSupportJumpsUpAndDown: { type: Boolean },
        crawlsToGrabAnObjectDistantItsHeight: { type: Boolean },
        sitsSupportingSelfAlone: { type: Boolean },
        whileSittingTurnsToCraw: { type: Boolean },
        whileInPronePositionManagesToSit: { type: Boolean },
        sitsWithoutHandSupport: { type: Boolean },
        throwsObjectsAtRandom: { type: Boolean },
        swaysBackAndForthWhenCrawling: { type: Boolean },
        transfersObjectsFromOneHandToAnotherWhenSitting: { type: Boolean },
        retains2CubesOf25CmInOneHand: { type: Boolean },
        getsOnKnees: { type: Boolean },
        standsSupportingSelfOnSomething: { type: Boolean },
        usesPincerGripToPickUpObjects: { type: Boolean },
        crawls: { type: Boolean },
        whileCrawlingExtendsOneHandUpwards: { type: Boolean },
        standsWithMinimumSupport: { type: Boolean },
        licksFoodAroundMouth: { type: Boolean },
        maintainsSelfStandingAloneFor1Minute: { type: Boolean },
        knocksDownAnObjectThatIsInsideAReceptacle: { type: Boolean },
        turnsSeveralPagesOfABookAtTheSameTime: { type: Boolean },
        scoopsWithASpoonOrSpade: { type: Boolean },
        placesSmallObjectsInsideAReceptacle: { type: Boolean },
        whileStandingLowersItselfAndSits: { type: Boolean },
        clapsHands: { type: Boolean },
        walksWithMinimumSupport: { type: Boolean },
        takesAFewStepsWithoutSupport: { type: Boolean }
    },
    motorDevelopment1To2Years: {
        climbsStairsCrawling: { type: Boolean },
        placesItselfStandingWhileSitting: { type: Boolean },
        rollsABallImitatingAnAdult: { type: Boolean },
        climbsOntoAnAdultChairTurnsAndSits: { type: Boolean },
        puts4RingsOnASmallStake: { type: Boolean },
        removes25CmPinsFromABoardOrTray: { type: Boolean },
        fits25CmPinsIntoAFittingBoard: { type: Boolean },
        buildsATowerOf3Blocks: { type: Boolean },
        makesTracesOnPaperWithPencilOrCrayon: { type: Boolean },
        walksAlone: { type: Boolean },
        goesDownStairsSittingPuttingFeetFirst: { type: Boolean },
        sitsInASmallChair: { type: Boolean },
        crouchesAndReturnsToStand: { type: Boolean },
        pushesAndPullsToysWhenWalking: { type: Boolean },
        usesAChairOrRockingHorse: { type: Boolean },
        climbsStairsWithHelp: { type: Boolean },
        bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor: { type: Boolean },
        imitatesACircularMovement: { type: Boolean }
    },
    motorDevelopment2To3Years: {
        threads4LargeBeadsOnACordIn2Minutes: { type: Boolean },
        turnsLatchesOrDoorknobsOnDoors: { type: Boolean },
        jumpsInTheSamePlaceWithBothFeet: { type: Boolean },
        walksBackwards: { type: Boolean },
        goesDownStairsWithoutHelp: { type: Boolean },
        throwsABallToAnAdultAtA1HalfDistance: { type: Boolean },
        buildsATowerOf5To6Blocks: { type: Boolean },
        turnsPagesOfABookOneAtATime: { type: Boolean },
        unwrapsASmallObject: { type: Boolean },
        foldsAPaperInHalfImitatingAnAdult: { type: Boolean },
        dismantlesAndRebuildsPressureFitToys: { type: Boolean },
        unscrewsToysThatFitWithThreads: { type: Boolean },
        kicksALargeBallThatIsStill: { type: Boolean },
        makesBallsOfClayMudOrPlasticine: { type: Boolean },
        holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger: { type: Boolean },
        doesForwardTumbleWithHelp: { type: Boolean },
        hammersToFit5PinsInTheirHoles: { type: Boolean }
    },
    motorDevelopment3To4Years: {
        makesAPuzzleOf3Pieces: { type: Boolean },
        cutsSomethingIntoPiecesWithScissors: { type: Boolean },
        jumpsFromAHeightOf20Cm: { type: Boolean },
        kicksALargeBallWhenSentToYou: { type: Boolean },
        walksOnTiptoes: { type: Boolean },
        runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet: { type: Boolean },
        pedalsWithTricycleTheDistanceOf1AndAHalfMeters: { type: Boolean },
        swingsOnASwingWhenItIsInMotion: { type: Boolean },
        climbsOnASlideOf120MTo180MAndSlidesDown: { type: Boolean },
        doesForwardTumbles: { type: Boolean },
        climbsStairsAlternatingFeet: { type: Boolean },
        marchesWalksInARhythmicalWay: { type: Boolean },
        parriesTheBallWithBothHands: { type: Boolean },
        drawsFiguresFollowingOutlinesOrDottedLines: { type: Boolean },
        cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine: { type: Boolean }
    },
    motorDevelopment4To5Years: {
        standsOnOneFootWithoutSupportFor4To8Seconds: { type: Boolean },
        changesDirectionWhenRunning: { type: Boolean },
        walksOnABeamOrBoardMaintainingBalance: { type: Boolean },
        jumpsForward10TimesWithoutFalling: { type: Boolean },
        jumpsOverARopeSuspended5CmFromTheGround: { type: Boolean },
        jumpsBackwards6Times: { type: Boolean },
        reboundsAndCatchesALargeBall: { type: Boolean },
        joins2To3PiecesOfPlasticine: { type: Boolean },
        cutsAroundCurvedLines: { type: Boolean },
        fitsScrewObjects: { type: Boolean },
        goesDownStairsAlternatingFeet: { type: Boolean },
        pedalsATricycleMakingTurns: { type: Boolean },
        jumpsOnOneFoot5ConsecutiveTimes: { type: Boolean },
        cutsACircleIn5Cm: { type: Boolean },
        drawsSimpleEasilyIdentifiableFiguresExHouse: { type: Boolean },
        cutsAndPastesSimpleShapes: { type: Boolean }
    },
    motorDevelopment5To6Years: {
        writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper: { type: Boolean },
        walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance: { type: Boolean },
        walksWhileHopping: { type: Boolean },
        swingsOnASwingStartingAndMaintainingTheMovement: { type: Boolean },
        stretchesFingersTouchingThumbToEachOfThem: { type: Boolean },
        copiesCapitalLetters: { type: Boolean },
        climbsOnLaddersOrASlideOf3M: { type: Boolean },
        hammersANailWithAHammer: { type: Boolean },
        reboundsTheBallAsItWalksWithDirection: { type: Boolean },
        managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime: { type: Boolean },
        cutsOutFiguresWithoutLeavingMoreThan6MmFromTheMargin: { type: Boolean },
        usesPencilSharpener: { type: Boolean },
        copiesComplexDrawingsSchoolShip: { type: Boolean },
        tearsSimpleFiguresFromThePaper: { type: Boolean },
        foldsASquarePaper2XDiagonallyByImitation: { type: Boolean },
        catchesALightBallWithOneHand: { type: Boolean },
        jumpsRopeAlone: { type: Boolean },
        strikesABallWithAStickOrPieceOfWood: { type: Boolean },
        catchesAnObjectOnTheFloorWhileRunning: { type: Boolean },
        skatesADistanceOf3MOrUsesASkateboard: { type: Boolean },
        ridesABicycle: { type: Boolean },
        slidesDownAHillOfSandOrEarth: { type: Boolean },
        walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist: { type: Boolean },
        drivesAScooterGivingImpulseWithOneFootOnly: { type: Boolean },
        jumpsAndTurnsOnOneFoot: { type: Boolean },
        writesOwnNameWithBlockLettersInLinedNotebook: { type: Boolean },
        jumpsFromAHeightOf30CmAndFallsOnTiptoes: { type: Boolean },
        stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds: { type: Boolean },
        hangsFor10SecondsOnAHorizontalBar: { type: Boolean }
    }
}, { timestamps: true});

export interface IPortageGuidetoPhysiotherapyEntity extends Omit<MotorDevelopmentPhysio, '_id'>, Document {}
