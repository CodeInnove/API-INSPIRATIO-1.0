import {Schema, Document} from 'mongoose'
import { ResponseType } from 'src/features/portage-guideto-physiotherapy/dto/create-portage-guideto-physiotherapy.dto';
import { MotorDevelopmentPhysio } from 'src/features/portage-guideto-physiotherapy/types/portagePhysiotherapy';

export const PortageGuidetoPhysiotherapySchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, auto: true },
    motorDevelopment0To1Year: {
        reachesForAnObjectPlacedInFrontOfIt15To20Cm: { type: String, ResponseType },
        grabsAnObjectPlacedInFrontOfIt8Cm: { type: String, ResponseType },
        extendsArmsTowardAnObjectInFrontOfItAndGrabsIt: { type: String, ResponseType },
        reachesForAPreferredObject: { type: String, ResponseType },
        putsObjectsInMouth: { type: String, ResponseType },
        raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach: { type: String, ResponseType },
        raisesHeadAndTorsoSupportingSelfOnOneArm: { type: String, ResponseType },
        touchesAndExploresObjectsWithMouth: { type: String, ResponseType },
        inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime: { type: String, ResponseType },
        inPronePositionTurnsOnBack: { type: String, ResponseType },
        inPronePositionMovesForwardTheEquivalentOfItsHeight: { type: String, ResponseType },
        inSupinePositionRollsToTheSide: { type: String, ResponseType },
        inSupinePositionTurnsFromStomachToBack: { type: String, ResponseType },
        makesEffortToSitHoldingOntoAdultsFingers: { type: String, ResponseType },
        turnsHeadEasilyWhenTheBodyIsSupported: { type: String, ResponseType },
        sitsFor2Minutes: { type: String, ResponseType },
        releasesAnObjectToGrabAnother: { type: String, ResponseType },
        grabsAndDropsAnObjectPurposefully: { type: String, ResponseType },
        standsWithMaximumSupport: { type: String, ResponseType },
        whileStandingWithSupportJumpsUpAndDown: { type: String, ResponseType },
        crawlsToGrabAnObjectDistantItsHeight: { type: String, ResponseType },
        sitsSupportingSelfAlone: { type: String, ResponseType },
        whileSittingTurnsToCraw: { type: String, ResponseType },
        whileInPronePositionManagesToSit: { type: String, ResponseType },
        sitsWithoutHandSupport: { type: String, ResponseType },
        throwsObjectsAtRandom: { type: String, ResponseType },
        swaysBackAndForthWhenCrawling: { type: String, ResponseType },
        transfersObjectsFromOneHandToAnotherWhenSitting: { type: String, ResponseType },
        retains2CubesOf25CmInOneHand: { type: String, ResponseType },
        getsOnKnees: { type: String, ResponseType },
        standsSupportingSelfOnSomething: { type: String, ResponseType },
        usesPincerGripToPickUpObjects: { type: String, ResponseType },
        crawls: { type: String, ResponseType },
        whileCrawlingExtendsOneHandUpwards: { type: String, ResponseType },
        standsWithMinimumSupport: { type: String, ResponseType },
        licksFoodAroundMouth: { type: String, ResponseType },
        maintainsSelfStandingAloneFor1Minute: { type: String, ResponseType },
        knocksDownAnObjectThatIsInsideAReceptacle: { type: String, ResponseType },
        turnsSeveralPagesOfABookAtTheSameTime: { type: String, ResponseType },
        scoopsWithASpoonOrSpade: { type: String, ResponseType },
        placesSmallObjectsInsideAReceptacle: { type: String, ResponseType },
        whileStandingLowersItselfAndSits: { type: String, ResponseType },
        clapsHands: { type: String, ResponseType },
        walksWithMinimumSupport: { type: String, ResponseType },
        takesAFewStepsWithoutSupport: { type: String, ResponseType }
    },
    motorDevelopment1To2Years: {
        climbsStairsCrawling: { type: String, ResponseType },
        placesItselfStandingWhileSitting: { type: String, ResponseType },
        rollsABallImitatingAnAdult: { type: String, ResponseType },
        climbsOntoAnAdultChairTurnsAndSits: { type: String, ResponseType },
        puts4RingsOnASmallStake: { type: String, ResponseType },
        removes25CmPinsFromABoardOrTray: { type: String, ResponseType },
        fits25CmPinsIntoAFittingBoard: { type: String, ResponseType },
        buildsATowerOf3Blocks: { type: String, ResponseType },
        makesTracesOnPaperWithPencilOrCrayon: { type: String, ResponseType },
        walksAlone: { type: String, ResponseType },
        goesDownStairsSittingPuttingFeetFirst: { type: String, ResponseType },
        sitsInASmallChair: { type: String, ResponseType },
        crouchesAndReturnsToStand: { type: String, ResponseType },
        pushesAndPullsToysWhenWalking: { type: String, ResponseType },
        usesAChairOrRockingHorse: { type: String, ResponseType },
        climbsStairsWithHelp: { type: String, ResponseType },
        bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor: { type: String, ResponseType },
        imitatesACircularMovement: { type: String, ResponseType }
    },
    motorDevelopment2To3Years: {
        threads4LargeBeadsOnACordIn2Minutes: { type: String, ResponseType },
        turnsLatchesOrDoorknobsOnDoors: { type: String, ResponseType },
        jumpsInTheSamePlaceWithBothFeet: { type: String, ResponseType },
        walksBackwards: { type: String, ResponseType },
        goesDownStairsWithoutHelp: { type: String, ResponseType },
        throwsABallToAnAdultAtA1HalfDistance: { type: String, ResponseType },
        buildsATowerOf5To6Blocks: { type: String, ResponseType },
        turnsPagesOfABookOneAtATime: { type: String, ResponseType },
        unwrapsASmallObject: { type: String, ResponseType },
        foldsAPaperInHalfImitatingAnAdult: { type: String, ResponseType },
        dismantlesAndRebuildsPressureFitToys: { type: String, ResponseType },
        unscrewsToysThatFitWithThreads: { type: String, ResponseType },
        kicksALargeBallThatIsStill: { type: String, ResponseType },
        makesBallsOfClayMudOrPlasticine: { type: String, ResponseType },
        holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger: { type: String, ResponseType },
        doesForwardTumbleWithHelp: { type: String, ResponseType },
        hammersToFit5PinsInTheirHoles: { type: String, ResponseType }
    },
    motorDevelopment3To4Years: {
        makesAPuzzleOf3Pieces: { type: String, ResponseType },
        cutsSomethingIntoPiecesWithScissors: { type: String, ResponseType },
        jumpsFromAHeightOf20Cm: { type: String, ResponseType },
        kicksALargeBallWhenSentToYou: { type: String, ResponseType },
        walksOnTiptoes: { type: String, ResponseType },
        runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet: { type: String, ResponseType },
        pedalsWithTricycleTheDistanceOf1AndAHalfMeters: { type: String, ResponseType },
        swingsOnASwingWhenItIsInMotion: { type: String, ResponseType },
        climbsOnASlideOf120MTo180MAndSlidesDown: { type: String, ResponseType },
        doesForwardTumbles: { type: String, ResponseType },
        climbsStairsAlternatingFeet: { type: String, ResponseType },
        marchesWalksInARhythmicalWay: { type: String, ResponseType },
        parriesTheBallWithBothHands: { type: String, ResponseType },
        drawsFiguresFollowingOutlinesOrDottedLines: { type: String, ResponseType },
        cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine: { type: String, ResponseType }
    },
    motorDevelopment4To5Years: {
        standsOnOneFootWithoutSupportFor4To8Seconds: { type: String, ResponseType },
        changesDirectionWhenRunning: { type: String, ResponseType },
        walksOnABeamOrBoardMaintainingBalance: { type: String, ResponseType },
        jumpsForward10TimesWithoutFalling: { type: String, ResponseType },
        jumpsOverARopeSuspended5CmFromTheGround: { type: String, ResponseType },
        jumpsBackwards6Times: { type: String, ResponseType },
        reboundsAndCatchesALargeBall: { type: String, ResponseType },
        joins2To3PiecesOfPlasticine: { type: String, ResponseType },
        cutsAroundCurvedLines: { type: String, ResponseType },
        fitsScrewObjects: { type: String, ResponseType },
        goesDownStairsAlternatingFeet: { type: String, ResponseType },
        pedalsATricycleMakingTurns: { type: String, ResponseType },
        jumpsOnOneFoot5ConsecutiveTimes: { type: String, ResponseType },
        cutsACircleIn5Cm: { type: String, ResponseType },
        drawsSimpleEasilyIdentifiableFiguresExHouse: { type: String, ResponseType },
        cutsAndPastesSimpleShapes: { type: String, ResponseType }
    },
    motorDevelopment5To6Years: {
        writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper: { type: String, ResponseType },
        walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance: { type: String, ResponseType },
        walksWhileHopping: { type: String, ResponseType },
        swingsOnASwingStartingAndMaintainingTheMovement: { type: String, ResponseType },
        stretchesFingersTouchingThumbToEachOfThem: { type: String, ResponseType },
        copiesCapitalLetters: { type: String, ResponseType },
        climbsOnLaddersOrASlideOf3M: { type: String, ResponseType },
        hammersANailWithAHammer: { type: String, ResponseType },
        reboundsTheBallAsItWalksWithDirection: { type: String, ResponseType },
        managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime: { type: String, ResponseType },
        cutsOutFiguresWithoutLeavingMoreThan6MmFromTheMargin: { type: String, ResponseType },
        usesPencilSharpener: { type: String, ResponseType },
        copiesComplexDrawingsSchoolShip: { type: String, ResponseType },
        tearsSimpleFiguresFromThePaper: { type: String, ResponseType },
        foldsASquarePaper2XDiagonallyByImitation: { type: String, ResponseType },
        catchesALightBallWithOneHand: { type: String, ResponseType },
        jumpsRopeAlone: { type: String, ResponseType },
        strikesABallWithAStickOrPieceOfWood: { type: String, ResponseType },
        catchesAnObjectOnTheFloorWhileRunning: { type: String, ResponseType },
        skatesADistanceOf3MOrUsesASkateboard: { type: String, ResponseType },
        ridesABicycle: { type: String, ResponseType },
        slidesDownAHillOfSandOrEarth: { type: String, ResponseType },
        walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist: { type: String, ResponseType },
        drivesAScooterGivingImpulseWithOneFootOnly: { type: String, ResponseType },
        jumpsAndTurnsOnOneFoot: { type: String, ResponseType },
        writesOwnNameWithBlockLettersInLinedNotebook: { type: String, ResponseType },
        jumpsFromAHeightOf30CmAndFallsOnTiptoes: { type: String, ResponseType },
        stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds: { type: String, ResponseType },
         hangsFor10SecondsOnAHorizontalBar: { type: String, ResponseType }
    },

    motor: { type: Number }
}, { timestamps: true});

export interface IPortageGuidetoPhysiotherapyEntity extends Omit<MotorDevelopmentPhysio, '_id'>, Document {}
