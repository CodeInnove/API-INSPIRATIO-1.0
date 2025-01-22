import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGmfmDto, DimensionScores, GmfmResults } from './dto/create-gmfm.dto';
import { UpdateGmfmDto } from './dto/update-gmfm.dto';
import { IGmfmEntity } from 'src/entities/gmfm.entity';
import { GmfmRepository } from './gmfm.repository';
import { PercentageScoresDto } from './dto/porcentage.dto';


type GmfmWithScores = CreateGmfmDto & { 
  dimensionScores: DimensionScores;
  scores: PercentageScoresDto; 
  totalScore: number,
};

@Injectable()
export class GmfmService {
  constructor(
    private readonly gmfmRepository: GmfmRepository
  ) {}

  private calculateGmfmScores(gmfm: CreateGmfmDto): GmfmResults {
    const { lieDownAndRollOver, toSit, crawlAndKneel, standing, walkRunJump } = gmfm;

    const dimensionA =
        (Number(lieDownAndRollOver?.supHeadInMidline) || 0) +
        (Number(lieDownAndRollOver?.supHandsToMidline) || 0) +
        (Number(lieDownAndRollOver?.supRaisesHead45) || 0) +
        (Number(lieDownAndRollOver?.supFlexesRightHipAndKnee) || 0) +
        (Number(lieDownAndRollOver?.supFlexesLeftHipAndKnee) || 0) +
        (Number(lieDownAndRollOver?.supReachesRightHandAcrossMidline) || 0) +
        (Number(lieDownAndRollOver?.supReachesLeftHandAcrossMidline) || 0) +
        (Number(lieDownAndRollOver?.supRollsToProneRight) || 0) +
        (Number(lieDownAndRollOver?.supRollsToProneLeft) || 0) +
        (Number(lieDownAndRollOver?.proneRaisesHeadVertical) || 0) +
        (Number(lieDownAndRollOver?.proneOnForearmsRaisesHead) || 0) +
        (Number(lieDownAndRollOver?.proneOnForearmsRightExtendsLeftArm) || 0) +
        (Number(lieDownAndRollOver?.proneOnForearmsLeftExtendsRightArm) || 0) +
        (Number(lieDownAndRollOver?.proneRollsToSupineRight) || 0) +
        (Number(lieDownAndRollOver?.proneRollsToSupineLeft) || 0) +
        (Number(lieDownAndRollOver?.pronePivots90Right) || 0) +
        (Number(lieDownAndRollOver?.pronePivots90Left) || 0);


    const dimensionB =
        (Number(toSit?.supPulledToSitWithHeadControl) || 0) +
        (Number(toSit?.supRollsRightToSit) || 0) +
        (Number(toSit?.supRollsLeftToSit) || 0) +
        (Number(toSit?.sittingSupportedHeadUp3Seconds) || 0) +
        (Number(toSit?.sittingSupportedHeadMidline10Seconds) || 0) +
        (Number(toSit?.sittingArmsSupported5Seconds) || 0) +
        (Number(toSit?.sittingArmsFree3Seconds) || 0) +
        (Number(toSit?.sittingReachesForToyForward) || 0) +
        (Number(toSit?.sittingReachesForToyRight45) || 0) +
        (Number(toSit?.sittingReachesForToyLeft45) || 0) +
        (Number(toSit?.sittingRightSideFreeArms5Seconds) || 0) +
        (Number(toSit?.sittingLeftSideFreeArms5Seconds) || 0) +
        (Number(toSit?.sittingLowersToProneControlled) || 0) +
        (Number(toSit?.sittingFeetForwardReaches4PointRight) || 0) +
        (Number(toSit?.sittingFeetForwardReaches4PointLeft) || 0) +
        (Number(toSit?.sittingPivots90NoArms) || 0) +
        (Number(toSit?.sittingOnBenchFreeArmsAndFeet10Seconds) || 0) +
          (Number(toSit?.standingReachesSittingOnSmallBench) || 0) +
         (Number(toSit?.floorReachesSittingOnSmallBench) || 0) +
        (Number(toSit?.floorReachesSittingOnLargeBench) || 0);


    const dimensionC =
        (Number(crawlAndKneel?.proneDrags18MetersForward) || 0) +
        (Number(crawlAndKneel?.fourPointsHoldsWeight10Seconds) || 0) +
        (Number(crawlAndKneel?.fourPointsReachesSittingArmsFree) || 0) +
        (Number(crawlAndKneel?.proneReachesFourPoints) || 0) +
        (Number(crawlAndKneel?.fourPointsAdvancesRightArm) || 0) +
        (Number(crawlAndKneel?.fourPointsAdvancesLeftArm) || 0) +
        (Number(crawlAndKneel?.fourPointsCrawls18MetersForward) || 0) +
        (Number(crawlAndKneel?.fourPointsCrawls18MetersAlternating) || 0) +
        (Number(crawlAndKneel?.fourPointsClimbs4Steps) || 0) +
        (Number(crawlAndKneel?.fourPointsDescends4StepsBackwards) || 0) +
        (Number(crawlAndKneel?.sittingReachesKneelingArmsFree10Seconds) || 0) +
        (Number(crawlAndKneel?.kneelingReachesSemiKneelingRightArmsFree10Seconds) || 0) +
        (Number(crawlAndKneel?.kneelingReachesSemiKneelingLeftArmsFree10Seconds) || 0) +
        (Number(crawlAndKneel?.kneelingWalks10StepsForward) || 0);


    const dimensionD =
        (Number(standing?.floorPullsToStandOnLargeBench) || 0) +
        (Number(standing?.standingFreeArms3Seconds) || 0) +
        (Number(standing?.standingHoldsLargeBenchRaisesRightFoot) || 0) +
        (Number(standing?.standingHoldsLargeBenchRaisesLeftFoot) || 0) +
        (Number(standing?.standingFreeArms20Seconds) || 0) +
        (Number(standing?.standingRaisesLeftFootFreeArms10Seconds) || 0) +
        (Number(standing?.standingRaisesRightFootFreeArms10Seconds) || 0) +
        (Number(standing?.sittingSmallBenchReachesStandingNoArms) || 0) +
        (Number(standing?.kneelingReachesStandingSemiKneelingRightNoArms) || 0) +
        (Number(standing?.kneelingReachesStandingSemiKneelingLeftNoArms) || 0) +
        (Number(standing?.standingLowersToSitFloorControlled) || 0) +
        (Number(standing?.standingSquatsFreeArms) || 0) +
        (Number(standing?.standingPicksUpObjectReturnsStanding) || 0);


    const dimensionE =
        (Number(walkRunJump?.standingHoldingLargeBenchSideStepsRight5Steps) || 0) +
        (Number(walkRunJump?.standingHoldingLargeBenchSideStepsLeft5Steps) || 0) +
        (Number(walkRunJump?.standingTwoHandsHeldWalks10Steps) || 0) +
        (Number(walkRunJump?.standingOneHandHeldWalks10Steps) || 0) +
        (Number(walkRunJump?.standingWalks10StepsForward) || 0) +
        (Number(walkRunJump?.standingWalks10StepsTurnsAndReturns) || 0) +
        (Number(walkRunJump?.standingWalks10StepsBackwards) || 0) +
        (Number(walkRunJump?.standingWalks10StepsCarryingLargeObject) || 0) +
        (Number(walkRunJump?.standingWalks10StepsBetweenParallelLines) || 0) +
        (Number(walkRunJump?.standingWalks10StepsOn2cmLine) || 0) +
        (Number(walkRunJump?.standingStepsOverStickRightFootFirst) || 0) +
        (Number(walkRunJump?.standingStepsOverStickLeftFootFirst) || 0) +
        (Number(walkRunJump?.standingRuns4Point5MetersReturns) || 0) +
        (Number(walkRunJump?.standingKicksBallRightFoot) || 0) +
        (Number(walkRunJump?.standingKicksBallLeftFoot) || 0) +
        (Number(walkRunJump?.standingJumps30cmBothFeet) || 0) +
        (Number(walkRunJump?.standingJumpsForward30cmBothFeet) || 0) +
        (Number(walkRunJump?.standingHops10TimesRightFoot) || 0) +
        (Number(walkRunJump?.standingHops10TimesLeftFoot) || 0) +
        (Number(walkRunJump?.standingHoldingRailClimbs4StepsAlternating) || 0) +
        (Number(walkRunJump?.standingHoldingRailDescends4StepsAlternating) || 0) +
        (Number(walkRunJump?.standingClimbs4StepsAlternating) || 0) +
        (Number(walkRunJump?.standingDescends4StepsAlternating) || 0) +
        (Number(walkRunJump?.standingJumpsDownFromStepBothFeet) || 0);


        const dimensionScores: DimensionScores = {
          a: dimensionA,
          b: dimensionB,
          c: dimensionC,
          d: dimensionD,
          e: dimensionE,
        };
    
        const percentageA = Math.round((dimensionScores.a / 51) * 100);
        const percentageB = Math.round((dimensionScores.b / 60) * 100);
        const percentageC = Math.round((dimensionScores.c / 42) * 100);
        const percentageD = Math.round((dimensionScores.d / 39) * 100);
        const percentageE = Math.round((dimensionScores.e / 72) * 100);
    
        const totalScore = (percentageA + percentageB + percentageC + percentageD + percentageE) / 5;
    
        const percentageScores: PercentageScoresDto = {
          a: percentageA,
          b: percentageB,
          c: percentageC,
          d: percentageD,
          e: percentageE,
        };
    
        const results: GmfmResults = {
          ...gmfm,
          dimensionScores,
          percentageScores,
          totalScore: totalScore,
          results: totalScore,
        };
    
        return results;
      }
    
    
      async create(gmfm: CreateGmfmDto): Promise<IGmfmEntity> {
        try {
          const gmfmWithScores: GmfmResults = this.calculateGmfmScores(gmfm);
          const gmfmToSave: GmfmWithScores = {
            ...gmfm,
            ...gmfmWithScores,
             scores: gmfmWithScores.percentageScores,
             totalScore: gmfmWithScores.totalScore
          };
          const createdGmfm = await this.gmfmRepository.create(gmfmToSave); 
          return createdGmfm
        } catch (error) {
          throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
      }

      

  async findAll(): Promise<IGmfmEntity[]> {
    try {
      return await this.gmfmRepository.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, gmfm: UpdateGmfmDto): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.update(id, gmfm);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<IGmfmEntity> {
    try {
      return await this.gmfmRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}

