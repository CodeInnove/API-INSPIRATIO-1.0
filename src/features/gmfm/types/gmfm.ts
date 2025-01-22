export interface ICreateGmfm{
  patient: string;
  doctor: string;
  lieDownAndRollOver: LieDownAndRollOver
  toSit: ToSit
  crawlAndKneel: CrawlAndKneel
  standing: Standing
  alkRunJump: WalkRunJump
  gmfmResults: GmfmResults
  totalScore: number;
}

  interface DimensionScores {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
  }
  
  
  interface GmfmResults  {
    dimensionScores: DimensionScores;
    percentageScores: {
      a: number;
      b: number;
      c: number;
      d: number;
      e: number;
    };
    totalScore: number;
    targetScore?: number; 
  }
  export interface LieDownAndRollOver{
    supHeadInMidline: number,
    supHandsToMidline: number,
    supRaisesHead45: number,
    supFlexesRightHipAndKnee: number,
    supFlexesLeftHipAndKnee: number,
    supReachesRightHandAcrossMidline: number,
    supReachesLeftHandAcrossMidline: number,
    supRollsToProneRight: number,
    supRollsToProneLeft: number,
    proneRaisesHeadVertical: number,
    proneOnForearmsRaisesHead: number,
    proneOnForearmsRightExtendsLeftArm: number,
    proneOnForearmsLeftExtendsRightArm: number,
    proneRollsToSupineRight: number,
    proneRollsToSupineLeft: number,
    pronePivots90Right: number,
    pronePivots90Left: number,
}

export interface ToSit {
    supPulledToSitWithHeadControl: number,
    supRollsRightToSit: number,
    supRollsLeftToSit: number,
    sittingSupportedHeadUp3Seconds: number,
    sittingSupportedHeadMidline10Seconds: number,
    sittingArmsSupported5Seconds: number,
    sittingArmsFree3Seconds: number,
    sittingReachesForToyForward: number,
    sittingReachesForToyRight45: number,
    sittingReachesForToyLeft45: number,
    sittingRightSideFreeArms5Seconds: number,
    sittingLeftSideFreeArms5Seconds: number,
    sittingLowersToProneControlled: number,
    sittingFeetForwardReaches4PointRight: number,
    sittingFeetForwardReaches4PointLeft: number,
    sittingPivots90NoArms: number,
    sittingOnBenchFreeArmsAndFeet10Seconds: number,
    standingReachesSittingOnSmallBench: number,
    floorReachesSittingOnSmallBench: number,
    floorReachesSittingOnLargeBench: number,
}

export interface CrawlAndKneel{
    proneDrags18MetersForward: number,
    fourPointsHoldsWeight10Seconds: number,
    fourPointsReachesSittingArmsFree: number,
    proneReachesFourPoints: number,
    fourPointsAdvancesRightArm: number,
    fourPointsAdvancesLeftArm: number,
    fourPointsCrawls18MetersForward: number,
    fourPointsCrawls18MetersAlternating: number,
    fourPointsClimbs4Steps: number,
    fourPointsDescends4StepsBackwards: number,
    sittingReachesKneelingArmsFree10Seconds: number,
    kneelingReachesSemiKneelingRightArmsFree10Seconds: number,
    kneelingReachesSemiKneelingLeftArmsFree10Seconds: number,
    kneelingWalks10StepsForward: number,
}

export interface Standing {
    floorPullsToStandOnLargeBench: number,
    standingFreeArms3Seconds: number,
    standingHoldsLargeBenchRaisesRightFoot: number,
    standingHoldsLargeBenchRaisesLeftFoot: number,
    standingFreeArms20Seconds: number,
    standingRaisesLeftFootFreeArms10Seconds: number,
    standingRaisesRightFootFreeArms10Seconds: number,
    sittingSmallBenchReachesStandingNoArms: number,
    kneelingReachesStandingSemiKneelingRightNoArms: number,
    kneelingReachesStandingSemiKneelingLeftNoArms: number,
    standingLowersToSitFloorControlled: number,
    standingSquatsFreeArms: number,
    standingPicksUpObjectReturnsStanding: number,
}

export interface WalkRunJump {
    standingHoldingLargeBenchSideStepsRight5Steps: number,
    standingHoldingLargeBenchSideStepsLeft5Steps: number,
    standingTwoHandsHeldWalks10Steps: number,
    standingOneHandHeldWalks10Steps: number,
    standingWalks10StepsForward: number,
    standingWalks10StepsTurnsAndReturns: number,
    standingWalks10StepsBackwards: number,
    standingWalks10StepsCarryingLargeObject: number,
    standingWalks10StepsBetweenParallelLines: number,
    standingWalks10StepsOn2cmLine: number,
    standingStepsOverStickRightFootFirst: number,
    standingStepsOverStickLeftFootFirst: number,
    standingRuns4Point5MetersReturns: number,
    standingKicksBallRightFoot: number,
    standingKicksBallLeftFoot: number,
    standingJumps30cmBothFeet: number,
    standingJumpsForward30cmBothFeet: number,
    standingHops10TimesRightFoot: number,
    standingHops10TimesLeftFoot: number,
    standingHoldingRailClimbs4StepsAlternating: number,
    standingHoldingRailDescends4StepsAlternating: number,
    standingClimbs4StepsAlternating: number,
    standingDescends4StepsAlternating: number,
    standingJumpsDownFromStepBothFeet: number
}

