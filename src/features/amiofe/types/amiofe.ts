import {
    CreateResponseMobilityCheeks,
    CreateResponseMobilityJaw,
    CreateResponseMobilityLanguage, 
    CreateResponseMobilityLips
} from  './responseMobilty'


export interface ICreateAmiofe {
    patient: string;
    doctor: string;
    date: string;
    appearanceAndPostural: IAppearanceAndPostural
    mobility: IMobility
    fuction: IFunctions
    laterality: ILaterality
    protrusion: IProtrusion
    noise: INoise
}

export interface IAppearanceAndPostural{
    labialPostureScores: {
        occlusionNormalOfLips: number,
        occlusionOfLipsWithTension: number,
        mildDysfunction: number,
        severeDysfunction: number
      },
      verticalMandibularPostureScores: {
        posturalNormal: number,
        occlusionOfTeeth: number,
        openMouth: number,
        excessiveMouthOpening: number
      },
      appearanceOfCheeksScores: {
        normal: number,
        increasedVolumeOrFlaccidArched: number,
        severe: number
      },
      appearanceOfFaceScores: {
        symmetryBetweenRightAndLeftSides: number,
        asymmetryLeve: number,
        severe: number,
        increasedSide: string
       },
        positionOfTongue: {
        containedInOralCavity: number,
        interposedToDentalArches: number,
        protudedInExcess: number
      },
      appearanceOfHardPalate: {
        normal: number,
        light: number,
        severe: number
      },

}

export interface IMobility {

    LabialMovements: {
        precise: CreateResponseMobilityLips,
        lackOfPrecisionTremor: CreateResponseMobilityLips,
        severeInability: CreateResponseMobilityLips
      },

    performanceMovementsOfTheTongue: {
        precise: CreateResponseMobilityLanguage,
        lackOfPrecisionTremor: CreateResponseMobilityLanguage,
        severeInability: CreateResponseMobilityLanguage
    },
    performanceMandibularMovements: {
        precise: CreateResponseMobilityJaw,
        lackOfPrecisionTremor: CreateResponseMobilityJaw,
        severeInability: CreateResponseMobilityJaw
        score: CreateResponseMobilityJaw
    },
    performanceCheeksMovements: {
        precise: CreateResponseMobilityCheeks,
        lackOfPrecisionTremor: CreateResponseMobilityCheeks,
        severeInability: CreateResponseMobilityCheeks
        score: CreateResponseMobilityCheeks
    }
}



export interface IFunctions{
// respiração
    respiration: {
    nasalRespiration: number,
    light: number
    severe: number
  },
  //comportamento dos labios
  deglutitionBehaviorOfLipsScores: {
    WithoutAppearingtoMakeAnEffort: number,
    light: number,
    moderate: number,
    doNotSealOralCavitySevere: number
  },
  // comportamento da língua
    deglutitionBehaviorOfTheTongueScores: {
    containedInOralCavity: number,
    adaptationOrDysfunction: number,
    protudedInExcess: number
  },

  //Outros comportamentos e sinais de alteração
    deglutitionOtherBehaviorsAndSignsOfChangeScores: {
        headMovementAbsent: number,
        headMovementPresent: number,
        tensionOfFacialMusclesAbsent: number,
        tensionOfFacialMusclesPresent: number,
        escapeOfFoodAbsent: number,
        escapeOfFoodPresent: number

    },

    //Deglutição Eficiência Item Complementar  
    deglutitionEfficiencyScoresSolid: {
            doesNotRepeatSwallowingOfTheSameBolus: number,
            oneRepetition: number,
            multipleSwallows: number
          },
          deglutitionEfficiencyScoresLiquid: {
            doesNotRepeatSwallowingOfTheSameBolus: number,
            oneRepetition: number,
            multipleSwallows: number
          },

      //Mastigação 
    masticationScores:{
        biteWithIncisors: number,
        biteWithPosteriorTeeth: number,
        doNotBite: number,
        bilateralAlternated: number,
        simultaneousVertical: number,
        unilateralPreferential: number,
        unilateralCronic: number,
        anteriorFrontal: number,
        doesNotPerformFunctionDoesNotGrind: number
    },
    //Outros comportamentos e sinais de alteração 
    otherBehaviorsAndSignsOfChangeMasticationScores:{
        headMovementOrOtherBodyPartsAbsent: number,
        headMovementOrOtherBodyPartsPresent: number,
        alteredPostureAbsent: number,
        alteredPosturePresent: number,
        escapeOfFoodAbsent: number,
        escapeOfFoodPresent: number
    }

    resultTotal: number;
    timeSpent: number;
    foodsUsed: string;
  
}


export interface IFunctionalAnalysisOfOcclusion{
    opening: {
        detour: string
        pain: string
    },
    closing: {
        detour: string
        pain: string
    },

    measures: {
        trespassVertical: number
        interincisalDistance: number
        total: number
    }
}


export interface ILaterality{
    pain: string
    guide: string
    work: string
    balance: string
    measure: number
} 

export interface IProtrusion {
    pain: string
    detour: string
    oclusal: string
    trespass: number
    distance: number
    total: number
}

export interface INoise{ 
    opening: string 
    closing: string
    protrusion: string
    rightLaterality: string
    leftLaterality: string
}