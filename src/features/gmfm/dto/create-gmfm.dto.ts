import { ApiProperty } from "@nestjs/swagger"
import { IsNumber } from "class-validator"

class LieDownAndRollOver {

    @ApiProperty()
    @IsNumber()
    supHeadInMidline: Number

    @ApiProperty()
    @IsNumber()
    supHandsToMidline: Number

    @ApiProperty()
    @IsNumber()
    supRaisesHead45: Number

    @ApiProperty()
    @IsNumber()
    supFlexesRightHipAndKnee: Number

    @ApiProperty()
    @IsNumber()
    supFlexesLeftHipAndKnee: Number

    @ApiProperty()
    @IsNumber()
    supReachesRightHandAcrossMidline: Number

    @ApiProperty()
    @IsNumber()
    supReachesLeftHandAcrossMidline: Number

    @ApiProperty()
    @IsNumber()
    supRollsToProneRight: Number

    @ApiProperty()
    @IsNumber()
    supRollsToProneLeft: Number

    @ApiProperty()
    @IsNumber()
    proneRaisesHeadVertical: Number

    @ApiProperty()
    @IsNumber()
    proneOnForearmsRaisesHead: Number

    @ApiProperty()
    @IsNumber()
    proneOnForearmsRightExtendsLeftArm: Number

    @ApiProperty()
    @IsNumber()
    proneOnForearmsLeftExtendsRightArm: Number
    @ApiProperty()
    @IsNumber()
    proneRollsToSupineRight: Number

    @ApiProperty()
    @IsNumber()
    proneRollsToSupineLeft: Number

    @ApiProperty()
    @IsNumber()
    pronePivots90Right: Number

    @ApiProperty()
    @IsNumber()
    pronePivots90Left: Number
}

export class IToSit{
    @ApiProperty()
    @IsNumber()
    supPulledToSitWithHeadControl: Number

    @ApiProperty()
    @IsNumber()
    supRollsRightToSit: Number

    @ApiProperty()
    @IsNumber()
    supRollsLeftToSit: Number

    @ApiProperty()
    @IsNumber()
    sittingSupportedHeadUp3Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingSupportedHeadMidline10Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingArmsSupported5Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingArmsFree3Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingReachesForToyForward: Number
    @ApiProperty()
    @IsNumber()
    sittingReachesForToyRight45: Number

    @ApiProperty()
    @IsNumber()
    sittingReachesForToyLeft45: Number

    @ApiProperty()
    @IsNumber()
    sittingRightSideFreeArms5Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingLeftSideFreeArms5Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingLowersToProneControlled: Number

    @ApiProperty()
    @IsNumber()
    sittingFeetForwardReaches4PointRight: Number

    @ApiProperty()
    @IsNumber()
    sittingFeetForwardReaches4PointLeft: Number

    @ApiProperty()
    @IsNumber()
    sittingPivots90NoArms: Number

    @ApiProperty()
    @IsNumber()
    sittingOnBenchFreeArmsAndFeet10Seconds: Number

    @ApiProperty()
    @IsNumber()
    standingReachesSittingOnSmallBench: Number

    @ApiProperty()
    @IsNumber()
    floorReachesSittingOnSmallBench: Number

    @ApiProperty()
    @IsNumber()
    floorReachesSittingOnLargeBench: Number
}

export class ICrawlAndKneel {

    @ApiProperty()
    @IsNumber()
    proneDrags18MetersForward: Number

    @ApiProperty()
    @IsNumber()
    fourPointsHoldsWeight10Seconds: Number

    @ApiProperty()
    @IsNumber()
    fourPointsReachesSittingArmsFree: Number

    @ApiProperty()
    @IsNumber()
    proneReachesFourPoints: Number

    @ApiProperty()
    @IsNumber()
    fourPointsAdvancesRightArm: Number


    @ApiProperty()
    @IsNumber()
    fourPointsAdvancesLeftArm: Number

    @ApiProperty()
    @IsNumber()
    fourPointsCrawls18MetersForward: Number

    @ApiProperty()
    @IsNumber()
    fourPointsCrawls18MetersAlternating: Number


    @ApiProperty()
    @IsNumber()
    fourPointsClimbs4Steps: Number
    @ApiProperty()
    @IsNumber()
    fourPointsDescends4StepsBackwards: Number

    @ApiProperty()
    @IsNumber()
    sittingReachesKneelingArmsFree10Seconds: Number

    @ApiProperty()
    @IsNumber()
    kneelingReachesSemiKneelingRightArmsFree10Seconds: Number

    @ApiProperty()
    @IsNumber()
    kneelingReachesSemiKneelingLeftArmsFree10Seconds: Number


    @ApiProperty()
    @IsNumber()
    kneelingWalks10StepsForward: Number
}

export class IStanding {

    @ApiProperty()
    @IsNumber()
    floorPullsToStandOnLargeBench: Number

    @ApiProperty()
    @IsNumber()
    standingFreeArms3Seconds: Number

    @ApiProperty()
    @IsNumber()
    standingHoldsLargeBenchRaisesRightFoot: Number

    @ApiProperty()
    @IsNumber()
    standingHoldsLargeBenchRaisesLeftFoot: Number

    @ApiProperty()
    @IsNumber()
    standingFreeArms20Seconds: Number

    @ApiProperty()
    @IsNumber()
    standingRaisesLeftFootFreeArms10Seconds: Number

    @ApiProperty()
    @IsNumber()
    standingRaisesRightFootFreeArms10Seconds: Number

    @ApiProperty()
    @IsNumber()
    sittingSmallBenchReachesStandingNoArms: Number

    @ApiProperty()
    @IsNumber()
    kneelingReachesStandingSemiKneelingRightNoArms: Number

    @ApiProperty()
    @IsNumber()
    kneelingReachesStandingSemiKneelingLeftNoArms: Number


    @ApiProperty()
    @IsNumber()
    standingLowersToSitFloorControlled: Number

    @ApiProperty()
    @IsNumber()
    standingSquatsFreeArms: Number

    @ApiProperty()
    @IsNumber()
    standingPicksUpObjectReturnsStanding: Number
}

export class IWalkRunJump{
    @ApiProperty()
    @IsNumber()
    standingHoldingLargeBenchSideStepsRight5Steps: Number
    
    @ApiProperty()
    @IsNumber()
    standingHoldingLargeBenchSideStepsLeft5Steps: Number

    @ApiProperty()
    @IsNumber()
    standingTwoHandsHeldWalks10Steps: Number

    @ApiProperty()
    @IsNumber()
    standingOneHandHeldWalks10Steps: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsForward: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsTurnsAndReturns: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsBackwards: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsCarryingLargeObject: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsBetweenParallelLines: Number

    @ApiProperty()
    @IsNumber()
    standingWalks10StepsOn2cmLine: Number

    @ApiProperty()
    @IsNumber()
    standingStepsOverStickRightFootFirst: Number

    @ApiProperty()
    @IsNumber()
    standingStepsOverStickLeftFootFirst: Number
    @ApiProperty()
    @IsNumber()
    standingRuns4Point5MetersReturns: Number

    @ApiProperty()
    @IsNumber()
    standingKicksBallRightFoot: Number

    @ApiProperty()
    @IsNumber()
    standingKicksBallLeftFoot: Number

    @ApiProperty()
    @IsNumber()
    standingJumps30cmBothFeet: Number

    @ApiProperty()
    @IsNumber()
    standingJumpsForward30cmBothFeet: Number

    @ApiProperty()
    @IsNumber()
    standingHops10TimesRightFoot: Number

    @ApiProperty()
    @IsNumber()
    standingHops10TimesLeftFoot: Number

    @ApiProperty()
    @IsNumber()
    standingHoldingRailClimbs4StepsAlternating: Number

    @ApiProperty()
    @IsNumber()
    standingHoldingRailDescends4StepsAlternating: Number

    @ApiProperty()
    @IsNumber()
    standingClimbs4StepsAlternating: Number

    @ApiProperty()
    @IsNumber()
    standingDescends4StepsAlternating: Number

    @ApiProperty()
    @IsNumber()
    standingJumpsDownFromStepBothFeet: Number
}

export class CreateGmfmDto {
    @ApiProperty()
    patient: string

    @ApiProperty()
    doctor: string

    @ApiProperty()
    lieDownAndRollOver: LieDownAndRollOver

    @ApiProperty()
    toSit: IToSit

    @ApiProperty()
    crawlAndKneel: ICrawlAndKneel

    @ApiProperty()
    standing: IStanding

    @ApiProperty()
    walkRunJump: IWalkRunJump
}
