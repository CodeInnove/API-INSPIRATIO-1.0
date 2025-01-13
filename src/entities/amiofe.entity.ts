import {Schema, Document} from 'mongoose'
import { ICreateAmiofe } from 'src/features/amiofe/types/amiofe';

export const AmiofeSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: String, required: false },
    apparanceAndPostura: {
        lanialPosture: {
          occlusionNormalOfLips: { type: Number },
          occlusionOfLipsWithTension: { type: Number },
          mildDysfunction: { type: Number },
          severeDysfunction: { type: Number },
        },
        verticalMandibularPostureScores: {
          posturalNormal: { type: Number },
          occlusionOfTeeth: { type: Number },
          openMouth: { type: Number },
          excessiveMouthOpening: { type: Number },
        },
        appearanceOfCheeksScores: {
          normal: { type: Number },
          increasedVolumeOrFlaccidArched: { type: Number },
          severe: { type: Number },
        },
        appearanceOfFaceScores: {
          symmetryBetweenRightAndLeftSides: { type: Number },
          asymmetryLeve: { type: Number },
          severe: { type: Number },
          increasedSide: {type: String}
        },
        positionOfTongue: {
          containedInOralCavity: { type: Number },
          interposedToDentalArches: { type: Number },
          protudedInExcess: { type: Number },
        },
        appearanceOfHardPalate: {
          normal: { type: Number },
          light: { type: Number },
          severe: { type: Number },
        },
      },
      mobility: {
        LabialMovements: {
            precise: { 
                protrusion: { type: Number },
                retraction: { type: Number },
                lateralityD: { type: Number },
                lateralityE: { type: Number },
              },
            lackOfPrecisionTremor:{
                protrusion: { type: Number },
                retraction: { type: Number },
                lateralityD: { type: Number },
                lateralityE: { type: Number },
              },
            severeInability: {
                protrusion: { type: Number },
                retraction: { type: Number },
                lateralityD: { type: Number },
                lateralityE: { type: Number },
            },
          },
        performanceMovementsOfTheTongue: {
            precise:{
                protrude: { type: Number },
                retract: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                elevate: { type: Number },
                lower: { type: Number },
              },
            lackOfPrecisionTremor:{
                protrude: { type: Number },
                retract: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                elevate: { type: Number },
                lower: { type: Number },
            },
            severeInability:{
                protrude: { type: Number },
                retract: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                elevate: { type: Number },
                lower: { type: Number },
            }
        },
          performanceMandibularMovements: {
            precise:{
                lower: { type: Number },
                elevate: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                protrude: { type: Number },
              },
              lackOfPrecisionTremor:{
                lower: { type: Number },
                elevate: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                protrude: { type: Number },
              },
            severeInability: {
                lower: { type: Number },
                elevate: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                protrude: { type: Number },
            },
              score:{
                lower: { type: Number },
                elevate: { type: Number },
                lateralD: { type: Number },
                lateralE: { type: Number },
                protrude: { type: Number },
              }
        },
        performanceCheeksMovements: {
            precise:{
                inflate: { type: Number },
                suck: { type: Number },
                retract: { type: Number },
                lateralizeAir: { type: Number },
            },
            lackOfPrecisionTremor:{
                inflate: { type: Number },
                suck: { type: Number },
                retract: { type: Number },
                lateralizeAir: { type: Number },
            },
            severeInability: {
                inflate: { type: Number },
                suck: { type: Number },
                retract: { type: Number },
                lateralizeAir: { type: Number },
            },
            score:{
                inflate: { type: Number },
                suck: { type: Number },
                retract: { type: Number },
                lateralizeAir: { type: Number },
            }
        },
      },
      functions: {
        respiration: {
          nasalRespiration: { type: Number },
          light: { type: Number },
          severe: { type: Number },
        },
        deglutitionBehaviorOfLipsScores: {
          WithoutAppearingtoMakeAnEffort: { type: Number },
          light: { type: Number },
          moderate: { type: Number },
          doNotSealOralCavitySevere: { type: Number },
        },
        deglutitionBehaviorOfTheTongueScores: {
          containedInOralCavity: { type: Number },
          adaptationOrDysfunction: { type: Number },
          protudedInExcess: { type: Number },
        },
        deglutitionOtherBehaviorsAndSignsOfChangeScores: {
          headMovementAbsent: { type: Number },
          headMovementPresent: { type: Number },
          tensionOfFacialMusclesAbsent: { type: Number },
          tensionOfFacialMusclesPresent: { type: Number },
          escapeOfFoodAbsent: { type: Number },
          escapeOfFoodPresent: { type: Number },
        },
        
        deglutitionEfficiencyScoresSolid: {
            doesNotRepeatSwallowingOfTheSameBolus: { type: Number },
            oneRepetition: { type: Number },
            multipleSwallows: { type: Number },
          },
          deglutitionEfficiencyScoresLiquid: {
            doesNotRepeatSwallowingOfTheSameBolus: { type: Number },
            oneRepetition: { type: Number },
            multipleSwallows: { type: Number },
          },
          mastication: {
          biteWithIncisors: { type: Number },
          biteWithPosteriorTeeth: { type: Number },
          doNotBite: { type: Number },
          bilateralAlternated: { type: Number },
          simultaneousVertical: { type: Number },
          unilateralPreferential: { type: Number },
          unilateralCronic: { type: Number },
          anteriorFrontal: { type: Number },
          doesNotPerformFunctionDoesNotGrind: { type: Number },
        },
        otherBehaviorsAndSignsOfChangeMasticationScores: {
          headMovementOrOtherBodyPartsAbsent: { type: Number },
          headMovementOrOtherBodyPartsPresent: { type: Number },
          alteredPostureAbsent: { type: Number },
          alteredPosturePresent: { type: Number },
          escapeOfFoodAbsent: { type: Number },
          escapeOfFoodPresent: { type: Number },
        },
        resultTotal: { type: Number },
        timeSpent: { type: Number },
        foodsUsed: { type: String },
      },
      functionalAnalysisOfOcclusion: {
          opening: {
              detour: { type: String },
              pain: { type: String },
          },
          closing: {
              detour: { type: String },
              pain: { type: String },
          },
          measures: {
              trespassVertical: { type: Number },
              interincisalDistance: { type: Number },
              total: { type: Number },
          },
      },
      laterality: {
        pain: { type: String },
        guide: { type: String },
        work: { type: String },
        balance: { type: String },
        measure: { type: Number },
    },
    protrusion: {
        pain: { type: String },
        detour: { type: String },
        oclusal: { type: String },
        trespass: { type: Number },
        distance: { type: Number },
        total: { type: Number },
      },
      noise: {
        opening: { type: String },
        closing: { type: String },
        protrusion: { type: String },
        rightLaterality: { type: String },
        leftLaterality: { type: String },
      },
});

export interface IAmiofeEntity extends Omit<ICreateAmiofe, '_id'>, Document {}
