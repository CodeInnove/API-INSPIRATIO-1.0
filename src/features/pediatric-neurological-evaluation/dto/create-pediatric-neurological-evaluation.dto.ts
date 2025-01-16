import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';


class HeadInspectio {
    @ApiProperty()
    @IsString()
    positionAvaliationHead: string;
    @ApiProperty()
    @IsString()
    sideTilt: string;
    @ApiProperty()
    @IsString()
    rotation: string;
    @ApiProperty()
    @IsString()
    flexion: string;
    @ApiProperty()
    @IsString()
    extension: string;
}

class ShoulderInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationShoulder: string;
    @ApiProperty()
    @IsString()
    internalRotation: string;
    @ApiProperty()
    @IsString()
    externalRotation: string;
    @ApiProperty()
    @IsString()
    elevation: string;
    @ApiProperty()
    @IsString()
    depression: string;
    @ApiProperty()
    @IsString()
    protraction: string;
    @ApiProperty()
    @IsString()
    retraction: string;
}

class ElbowInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationElbow: string;
    @ApiProperty()
    @IsString()
    PronationElbow: string;
    @ApiProperty()
    @IsString()
    supinationElbow: string;
    @ApiProperty()
    @IsString()
    flexionElbow: string;
    @ApiProperty()
    @IsString()
    extensionElbow: string;
}

class WristInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationWrist: string;
    @ApiProperty()
    @IsString()
    flexionWristWrist: string;
    @ApiProperty()
    @IsString()
    extensionWristWrist: string;
    @ApiProperty()
    @IsString()
    ulnarDeviationWristWrist: string;
    @ApiProperty()
    @IsString()
    radialDeviationWristWrist: string;
    
}

class HandInspection { 
    @ApiProperty()
    @IsString()
    positionAvaliationHand: string;
    @ApiProperty()
    @IsString()
    fingerFlexionHand: string;
    @ApiProperty()
    @IsString()
    thumbAdductionHand: string;
}

class TrunkInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationTrunk: string;
    @ApiProperty()
    @IsString()
    lateralFlexionTrunk: string;
    @ApiProperty()
    @IsString()
    scoliosisTrunk: string;
    @ApiProperty()
    @IsString()
    dorsalKyphosisTrunk: string;
}

class PelvisInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationPelvis: string;
    @ApiProperty()
    @IsString()
    pelvisFlexion: string;
    @ApiProperty()
    @IsString()
    internalRotation: string;
    @ApiProperty()
    @IsString()
    externalRotation: string;
    @ApiProperty()
    @IsString()
    adduction: string;
    @ApiProperty()
    @IsString()
    abduction: string;
    @ApiProperty()
    @IsString()
    anteversion: string;
    @ApiProperty()
    @IsString()
    retroversion: string;
} 

class KneeInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationKnee: string;
    @ApiProperty()
    @IsString()
    flexionKnee: string;
    @ApiProperty()
    @IsString()
    extensionKnee: string;
    @ApiProperty()
    @IsString()
    valgusKnee: string;
    @ApiProperty()
    @IsString()
    varusKnee: string;
}

class AnkleAndFootInspection {
    @ApiProperty()
    @IsString()
    positionAvaliationAnkleAndFoot: string;
    @ApiProperty()
    @IsString()
    plantarFlexionFoot: string;
    @ApiProperty()
    @IsString()
    dorsiflexionFoot: string;
    @ApiProperty()
    @IsString()
    eversionFoot: string;
    @ApiProperty()
    @IsString()
    inversionFoot: string;
    @ApiProperty()
    @IsString()
    toeFlexionFoot: string;
    @ApiProperty()
    @IsString()
    toeExtensionFoot: string;
}

  export class IInspection {
    @ApiProperty()
    headInspectio: HeadInspectio

    @ApiProperty()
    shoulderInspection: ShoulderInspection

    @ApiProperty()
    elbowInspection: ElbowInspection

    @ApiProperty()
    wristInspection: WristInspection

    @ApiProperty()
    handInspection: HandInspection

    @ApiProperty()
    trunkInspection: TrunkInspection

    @ApiProperty()
    pelvisInspection: PelvisInspection

    @ApiProperty()
    kneeInspection: KneeInspection

    @ApiProperty()
    ankleAndFootInspection: AnkleAndFootInspection
}

export class IPalpation {
        @ApiProperty()
        @IsString()
        positionAvaliantionPalpation: string;
        @ApiProperty()
        @IsString()
          deltoid: string;
        @ApiProperty()
        @IsString()
          biceps: string;
          @ApiProperty()
        @IsString()
          triceps: string;
        @ApiProperty()
        @IsString()
          pectoral: string;
          @ApiProperty()
        @IsString()
          abdominals: string;
        @ApiProperty()
        @IsString()
          obliques: string;
          @ApiProperty()
        @IsString()
          quadriceps: string;
          @ApiProperty()
        @IsString()
          tricepsSural: string;
        @ApiProperty()
        @IsString()
          hamstrings: string;
          @ApiProperty()
          @IsString()
          observationPalpation: string;
}
export class IMuscleTone {
        @ApiProperty()
        @IsNumber()
        scaleTone: number;
         @ApiProperty()
         @IsNumber()
        shoulderFlexors: number;
        @ApiProperty()
        @IsNumber()
        shoulderExtensors: number;
        @ApiProperty()
        @IsNumber()
        elbowFlexors: number;
        @ApiProperty()
        @IsNumber()
        elbowExtensors: number;
         @ApiProperty()
        @IsNumber()
        wristFlexors: number;
        @ApiProperty()
        @IsNumber()
        wristExtensors:number;
        @ApiProperty()
        @IsNumber()
        hipFlexors: number;
         @ApiProperty()
        @IsNumber()
        hipAdductors:number;
         @ApiProperty()
        @IsNumber()
        kneeFlexors: number;
        @ApiProperty()
        @IsNumber()
        ankleDorsiflexors:number;
         @ApiProperty()
        @IsNumber()
        anklePlantiflexors:number;
}



class ShoulderMobility {
        @ApiProperty()
        @IsNumber()
        flexionShoulder: number;
        @ApiProperty()
        @IsNumber()
        abductionShoulder: number;
        @ApiProperty()
        @IsNumber()
        adductionShoulder: number;
}

class ElbowMobility {
    @ApiProperty()
    @IsNumber()
     flexionElbow: number;
     @ApiProperty()
     @IsNumber()
     extensionElbow: number;
 }

class TrunkMobility{
    @ApiProperty()
    @IsNumber()
    flexionTrunk: number;
 }

class HipMobility {
    @ApiProperty()
    @IsNumber()
     flexionHip: number;
      @ApiProperty()
     @IsNumber()
     extensionHip: number;
     @ApiProperty()
     @IsNumber()
     adductionHip: number;
     @ApiProperty()
     @IsNumber()
     abductionHip: number;
    @ApiProperty()
     @IsNumber()
     internalRotationHip: number;
      @ApiProperty()
     @IsNumber()
     externalRotationHip: number;
 }

class KneeMobility{
    @ApiProperty()
    @IsNumber()
     extensionKnee: number;
     @ApiProperty()
     @IsNumber()
     flexionKnee: number;
 };

class AnkleMobility {
    @ApiProperty()
    @IsNumber()
     extensionAnkle: number;
     @ApiProperty()
     @IsNumber()
    flexionAnkle: number;
 }
export class IMobility {
    @ApiProperty()
    mobilityshoulder: ShoulderMobility
    @ApiProperty()
    mobilityelbow: ElbowMobility
    @ApiProperty()
    mobilitytrunk: TrunkMobility
    @ApiProperty()
    mobilityhip: HipMobility
    @ApiProperty()
    mobilityknee: KneeMobility
    @ApiProperty()
    mobilityankle: AnkleMobility
}


class ShoulderMuscleStrength {
    @ApiProperty()
            @IsString()
            flexion:string;
            @ApiProperty()
            @IsString()
            extension:string;
            @ApiProperty()
            @IsString()
            abduction:string;
            @ApiProperty()
            @IsString()
            adduction:string;
            @ApiProperty()
            @IsString()
            internalRotation:string;
            @ApiProperty()
            @IsString()
            externalRotation:string;
} 
class ElbowMuscleStrength {
    @ApiProperty()
    @IsString()
    flexion: string;
    @ApiProperty()
    @IsString()
    extension: string;
    @ApiProperty()
    @IsString()
    pronation: string;
    @ApiProperty()
    @IsString()
    supination:string;
}

class WristMuscleStrength {
    @ApiProperty()
    @IsString()
    flexion: string;
    @ApiProperty()
    @IsString()
    extension: string;
    @ApiProperty()
    @IsString()
    ulnarDeviation:string;
    @ApiProperty()
    @IsString()
    radialDeviation:string;
}

class TrunkMuscleStrength {
    @ApiProperty()
    @IsString()
    flexion: string;
    @ApiProperty()
    @IsString()
    extension: string;
    @ApiProperty()
    @IsString()
    rotation: string;
    @ApiProperty()
    @IsString()
    lateralFlexion: string;
}

class HipMuscleStrength {
    @ApiProperty()
    @IsString()
    extension: string;
    @ApiProperty()
    @IsString()
    adduction: string;
    @ApiProperty()
    @IsString()
    abduction: string;
     @ApiProperty()
    @IsString()
    internalRotation: string;
   @ApiProperty()
    @IsString()
    externalRotation: string;
}

class KneeMuscleStrength {
    @ApiProperty()
    @IsString()
    flexion:string;
    @ApiProperty()
    @IsString()
    extension: string;
}
class AnkleMuscleStrength {
    @ApiProperty()
    @IsString()
    dorsiflexion: string;
    @ApiProperty()
    @IsString()
    plantiflexion: string;
}
export class IMuscleStrength {
    @ApiProperty()
    shoulderMuscleStrength: ShoulderMuscleStrength;

    @ApiProperty()
    elbowMuscleStrength: ElbowMuscleStrength;

    @ApiProperty()
    wristMuscleStrength: WristMuscleStrength

    @ApiProperty()
    trunkMuscleStrength: TrunkMuscleStrength

    @ApiProperty()
    hipMuscleStrength: HipMuscleStrength

    @ApiProperty()
    kneeMuscleStrength: KneeMuscleStrength

    @ApiProperty()
    ankleMuscleStrength: AnkleMuscleStrength
}

export class IDeepReflexes {
    @ApiProperty()
    @IsString()
    brachioradialis: string;
    @ApiProperty()
    @IsString()
    bicipital: string;
    @ApiProperty()
    @IsString()
    tricipital: string;
    @ApiProperty()
    @IsString()
    patellar: string;
    @ApiProperty()
    @IsString()
    achilles: string;
}

export class ISuperficialReflexes {
    @ApiProperty()
    @IsString()
    babinski: string;
    @ApiProperty()
    @IsString()
    cutaneousAbdominal:string;
}

class ProtectionReactionsFront {
    @ApiProperty()
    @IsNumber()
    initialMonths: number;
    @ApiProperty()
    @IsNumber()
    finalMonths: number;
    @ApiProperty()
    @IsNumber()
    laterality: number;
    @ApiProperty()
    @IsString()
    classification: string;
}
class ProtectionReactionsSides {
    @ApiProperty()
    @IsNumber()
     initialMonths: number;
     @ApiProperty()
     @IsNumber()
     finalMonths: number;
     @ApiProperty()
    @IsNumber()
     laterality:number;
     @ApiProperty()
     @IsString()
     classification: string;
}

class ProtectionReactionsBack {
    @ApiProperty()
    @IsNumber()
     initialMonths: number;
     @ApiProperty()
     @IsNumber()
     finalMonths: number;
     @ApiProperty()
    @IsNumber()
     laterality: number;
     @ApiProperty()
     @IsString()
     classification: string;
} 
export class IProtectionReactions {
    @ApiProperty()
    protectionReactionsFront: ProtectionReactionsFront

    @ApiProperty()
    protectionReactionsSides: ProtectionReactionsSides

    @ApiProperty()
    protectionReactionsBack: ProtectionReactionsBack
}


class StandingPositionFront {
    @ApiProperty()
    @IsNumber()
     initialMonths: number;
     @ApiProperty()
     @IsNumber()
     finalMonths: number;
      @ApiProperty()
    @IsNumber()
     laterality: number;
     @ApiProperty()
     @IsString()
     classification: string;
}

class StandingPositionSides {
    @ApiProperty()
    @IsNumber()
     initialMonths: number;
     @ApiProperty()
     @IsNumber()
     finalMonths: number;
     @ApiProperty()
    @IsNumber()
     laterality: number;
     @ApiProperty()
     @IsString()
     classification: string;
}

class StandingPositionBack {
    @ApiProperty()
    @IsNumber()
     initialMonths: number;
     @ApiProperty()
     @IsNumber()
     finalMonths: number;
     @ApiProperty()
    @IsNumber()
     laterality: number;
     @ApiProperty()
     @IsString()
     classification: string;
}

export class IStandingPosition {
    @ApiProperty()
    standingPositionFront: StandingPositionFront

    @ApiProperty()
    standingPositionSides:StandingPositionSides

    @ApiProperty()
    standingPositionBack: StandingPositionBack
}

export class IEvaluationDescription {
         @ApiProperty()
         @IsBoolean()
        childCollaborative: boolean;
         @ApiProperty()
         @IsString()
         @IsOptional()
        childCollaborativeObs: string;
         @ApiProperty()
         @IsBoolean()
        companionParticipative: boolean;
         @ApiProperty()
        @IsString()
         @IsOptional()
        companionParticipativeObs: string;
}

export class IComplementaryExams {
        @ApiProperty()
        @IsBoolean()
        xRay: boolean;
        @ApiProperty()
         @IsBoolean()
        magneticResonanceImaging: boolean;
        @ApiProperty()
         @IsBoolean()
        computedTomography: boolean;
         @ApiProperty()
          @IsBoolean()
        electromyography: boolean;
         @ApiProperty()
         @IsBoolean()
        cinematographicDocumentation: boolean;
         @ApiProperty()
          @IsBoolean()
        blood: boolean;
         @ApiProperty()
         @IsBoolean()
        urine: boolean;
         @ApiProperty()
          @IsBoolean()
        feces:boolean;
        @ApiProperty()
        @IsString()
        @IsOptional()
        others: string;
}

export class CreatePediatricNeurologicalEvaluationDto {
    @ApiProperty()
    @IsString()
    patient: string;
  
    @ApiProperty()
    @IsString()
    dateOfBirth: string;
  
    @ApiProperty()
    @IsNumber()
    age: number;
  
    @ApiProperty()
    @IsString()
    responsible: string;
  
    @ApiProperty()
    @IsString()
    clinicalDiagnosis: string;
  
    @ApiProperty()
    @IsString()
    applicationDate: string;
  
    @ApiProperty()
    @IsString()
    doctor: string;
  
    @ApiProperty()
    @IsString()
    responsibleSupervisor: string;
  
    @ApiProperty()
    @IsString()
    contact: string;
  
    @ApiProperty()
    @IsString()
    dysfunctionalDiagnosis: string;
  
    @ApiProperty()
    @IsString()
    physiotherapeutic: string;
  
    @ApiProperty()
    @IsString()
    hma: string;
  
    @ApiProperty()
    @IsString()
    patientPresentation: string;
  
    @ApiProperty()
    @IsString()
    concomitantPathology: string;
  
    @ApiProperty()
    @IsString()
    familyHistory: string;
  
    @ApiProperty()
    @IsString()
    dailyMedication: string;
  
    @ApiProperty()
    @IsString()
    gestationHistory: string;
  
    @ApiProperty()
    @IsString()
    familyRoutine: string;
  
    @ApiProperty()
    @IsString()
    feeding: string;
  
    @ApiProperty()
    @IsString()
    sleep: string;
  
    @ApiProperty()
    @IsString()
    clothing: string;
  
    @ApiProperty()
    @IsString()
    hygiene: string;
  
    @ApiProperty()
    @IsString()
    play: string;
  
    @ApiProperty()
    @IsString()
    hyperfocus: string;
  
    @ApiProperty()
    @IsString()
    socialization: string;

    @ApiProperty()
    inspection: IInspection;

    @ApiProperty()
    palpation: IPalpation

    @ApiProperty()
    muscleTone: IMuscleTone

    @ApiProperty()
    mobility: IMobility

    @ApiProperty()
    muscleStrength: IMuscleStrength

    @ApiProperty()
    deepReflexes: IDeepReflexes

    @ApiProperty()
    superficialReflexes: ISuperficialReflexes

    @ApiProperty()
    protectionReactions: IProtectionReactions

    @ApiProperty()
    standingPosition: IStandingPosition

    @ApiProperty()
    evaluationDescription: IEvaluationDescription

    @ApiProperty()
    complementaryExams: IComplementaryExams

    @ApiProperty()
    observationAndDiagnostics: string;
}  