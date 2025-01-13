import { ApiProperty } from "@nestjs/swagger";



class Respiration {
    @ApiProperty()
    nasalRespiration: number

    @ApiProperty()
    light: number

    @ApiProperty()
    severe: number
}
class DeglutitionBehaviorOfLipsScores{
    @ApiProperty()
    WithoutAppearingtoMakeAnEffort: number;
    @ApiProperty()
    light: number;
    @ApiProperty()
    moderate: number;
    @ApiProperty()
    doNotSealOralCavitySevere: number;
}
class DeglutitionBehaviorOfTheTongueScores {
    @ApiProperty()
    containedInOralCavity: number;

    @ApiProperty()
    adaptationOrDysfunction: number;

    @ApiProperty()
    protudedInExcess: number;
}

class DeglutitionOtherBehaviorsAndSignsOfChangeScores {
    @ApiProperty()
    headMovementAbsent: number;

    @ApiProperty()
    headMovementPresent: number;

    @ApiProperty()
    tensionOfFacialMusclesAbsent: number;

    @ApiProperty()
    tensionOfFacialMusclesPresent: number;

    @ApiProperty()
    escapeOfFoodAbsent: number;

    @ApiProperty()
    escapeOfFoodPresent: number;
}

class DeglutitionEfficiencyScoresSolid {
    @ApiProperty()
    doesNotRepeatSwallowingOfTheSameBolus: number;

    @ApiProperty()
    oneRepetition: number;

    @ApiProperty()
    multipleSwallows: number;
}

class DeglutitionEfficiencyScoresLiquid {
    @ApiProperty()
    doesNotRepeatSwallowingOfTheSameBolus: number;

    @ApiProperty()
    oneRepetition: number;

    @ApiProperty()
    multipleSwallows: number;
}

class Mastication {
    @ApiProperty()
    biteWithIncisors: number;
    @ApiProperty()
    biteWithPosteriorTeeth: number;
    @ApiProperty()
    doNotBite: number;
    @ApiProperty()
    bilateralAlternated: number;
    @ApiProperty()
    simultaneousVertical: number;
    @ApiProperty()
    unilateralPreferential: number;
    @ApiProperty()
    unilateralCronic: number;
    @ApiProperty()
    anteriorFrontal: number;
    @ApiProperty()
    doesNotPerformFunctionDoesNotGrind: number;
}

class OtherBehaviorsAndSignsOfChangeMasticationScores{
    @ApiProperty()
    headMovementOrOtherBodyPartsAbsent: number;

    @ApiProperty()
    headMovementOrOtherBodyPartsPresent: number;

    @ApiProperty()
    alteredPostureAbsent: number;

    @ApiProperty()
    alteredPosturePresent: number;

    @ApiProperty()
    escapeOfFoodAbsent: number;

    @ApiProperty()
    escapeOfFoodPresent: number;
}

export class ICreateAmiofeFunctions {

    @ApiProperty()
    respiration: Respiration;

    @ApiProperty()
    deglutitionBehaviorOfLipsScores: DeglutitionBehaviorOfLipsScores;

    @ApiProperty()
    deglutitionBehaviorOfTheTongueScores: DeglutitionBehaviorOfTheTongueScores;

    @ApiProperty()
    deglutitionOtherBehaviorsAndSignsOfChangeScores: DeglutitionOtherBehaviorsAndSignsOfChangeScores;

    @ApiProperty()
    deglutitionEfficiencyScoresSolid: DeglutitionEfficiencyScoresSolid;

    @ApiProperty()
    deglutitionEfficiencyScoresLiquid: DeglutitionEfficiencyScoresLiquid;

    @ApiProperty()
    mastication: Mastication;

    @ApiProperty()
    otherBehaviorsAndSignsOfChangeMasticationScores: OtherBehaviorsAndSignsOfChangeMasticationScores;
    
    @ApiProperty()
    resultTotal: number;
    @ApiProperty()
    timeSpent: number;
    @ApiProperty()
    foodsUsed: string;
}

   
