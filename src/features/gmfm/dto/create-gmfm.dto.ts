class LieDownAndRollOver {
    supHeadInMidline: Number
    supHandsToMidline: Number
    supRaisesHead45: Number
    supFlexesRightHipAndKnee: Number
    supFlexesLeftHipAndKnee: Number
    supReachesRightHandAcrossMidline: Number
    supReachesLeftHandAcrossMidline: Number
    supRollsToProneRight: Number
    supRollsToProneLeft: Number
    proneRaisesHeadVertical: Number
    proneOnForearmsRaisesHead: Number
    proneOnForearmsRightExtendsLeftArm: Number
    proneOnForearmsLeftExtendsRightArm: Number
    proneRollsToSupineRight: Number
    proneRollsToSupineLeft: Number
    pronePivots90Right: Number
    pronePivots90Left: Number
}

class IToSit{
    supPulledToSitWithHeadControl: Number
    supRollsRightToSit: Number
    supRollsLeftToSit: Number
    sittingSupportedHeadUp3Seconds: Number
    sittingSupportedHeadMidline10Seconds: Number
    sittingArmsSupported5Seconds: Number
    sittingArmsFree3Seconds: Number
    sittingReachesForToyForward: Number
    sittingReachesForToyRight45: Number
    sittingReachesForToyLeft45: Number
    sittingRightSideFreeArms5Seconds: Number
    sittingLeftSideFreeArms5Seconds: Number
    sittingLowersToProneControlled: Number
    sittingFeetForwardReaches4PointRight: Number
    sittingFeetForwardReaches4PointLeft: Number
    sittingPivots90NoArms: Number
    sittingOnBenchFreeArmsAndFeet10Seconds: Number
    standingReachesSittingOnSmallBench: Number
    floorReachesSittingOnSmallBench: Number
    floorReachesSittingOnLargeBench: Number
}

class ICrawlAndKneel {
    proneDrags18MetersForward: Number
    fourPointsHoldsWeight10Seconds: Number
    fourPointsReachesSittingArmsFree: Number
    proneReachesFourPoints: Number
    fourPointsAdvancesRightArm: Number
    fourPointsAdvancesLeftArm: Number
    fourPointsCrawls18MetersForward: Number
    fourPointsCrawls18MetersAlternating: Number
    fourPointsClimbs4Steps: Number
    fourPointsDescends4StepsBackwards: Number
    sittingReachesKneelingArmsFree10Seconds: Number
    kneelingReachesSemiKneelingRightArmsFree10Seconds: Number
    kneelingReachesSemiKneelingLeftArmsFree10Seconds: Number
    kneelingWalks10StepsForward: Number
}

class IStanding {
    floorPullsToStandOnLargeBench: Number
    standingFreeArms3Seconds: Number
    standingHoldsLargeBenchRaisesRightFoot: Number
    standingHoldsLargeBenchRaisesLeftFoot: Number
    standingFreeArms20Seconds: Number
    standingRaisesLeftFootFreeArms10Seconds: Number
    standingRaisesRightFootFreeArms10Seconds: Number
    sittingSmallBenchReachesStandingNoArms: Number
    kneelingReachesStandingSemiKneelingRightNoArms: Number
    kneelingReachesStandingSemiKneelingLeftNoArms: Number
    standingLowersToSitFloorControlled: Number
    standingSquatsFreeArms: Number
    standingPicksUpObjectReturnsStanding: Number
}

class IWalkRunJump{
    standingHoldingLargeBenchSideStepsRight5Steps: Number
    standingHoldingLargeBenchSideStepsLeft5Steps: Number
    standingTwoHandsHeldWalks10Steps: Number
    standingOneHandHeldWalks10Steps: Number
    standingWalks10StepsForward: Number
    standingWalks10StepsTurnsAndReturns: Number
    standingWalks10StepsBackwards: Number
    standingWalks10StepsCarryingLargeObject: Number
    standingWalks10StepsBetweenParallelLines: Number
    standingWalks10StepsOn2cmLine: Number
    standingStepsOverStickRightFootFirst: Number
    standingStepsOverStickLeftFootFirst: Number
    standingRuns4Point5MetersReturns: Number
    standingKicksBallRightFoot: Number
    standingKicksBallLeftFoot: Number
    standingJumps30cmBothFeet: Number
    standingJumpsForward30cmBothFeet: Number
    standingHops10TimesRightFoot: Number
    standingHops10TimesLeftFoot: Number
    standingHoldingRailClimbs4StepsAlternating: Number
    standingHoldingRailDescends4StepsAlternating: Number
    standingClimbs4StepsAlternating: Number
    standingDescends4StepsAlternating: Number
    standingJumpsDownFromStepBothFeet: Number
}

export class CreateGmfmDto {
    lieDownAndRollOver: LieDownAndRollOver
    toSit: IToSit
    crawlAndKneel: ICrawlAndKneel
    standing: IStanding
    walkRunJump: IWalkRunJump
}
