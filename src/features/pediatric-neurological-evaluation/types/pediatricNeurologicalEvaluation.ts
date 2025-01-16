export interface ICreatePediatricNeurologicalEvaluation {
    patient: string;
    dateOfBirth: string
    age: number;
    responsible: string;
    clinicalDiagnosis: string;
    applicationDate: string;
    doctor: string;
    responsibleSupervisor: string;
    contact: string;
    dysfunctionalDiagnosis: string;
    physiotherapeutic: string; 
    hma: string;
    patientPresentation: string;
    concomitantPathology: string;
    familyHistory: string;
    dailyMedication: string;
    gestationHistory: string;
    familyRoutine: string;
    feeding: string;
    sleep: string;
    clothing: string;
    hygiene: string;
    play: string;
    hyperfocus: string;
    socialization: string;
    inspection: {
        head: {
            positionAvaliationHead: string;
            sideTilt: string;
            rotation: string;
            flexion: string;
            extension: string;
        }
        shoulder: {
            positionAvaliationShoulder: string;
            internalRotation: string;
            externalRotation: string;
            elevation: string;
            depression: string;
            protraction: string;
            retraction: string;
        }
          elbow: {
            positionAvaliationElbow: string;
            Pronation: string;
            supination: string;
            flexion: string;
            extension: string;
        }
        wrist: {
            positionAvaliationWrist: string;
            flexion: string;
            extension: string;
            ulnarDeviation: string;
            radialDeviation: string;
        }
        hand: {
            positionAvaliationHand: string;
            fingerFlexion: string;
            thumbAdduction: string;
        }

        trunk: {
            positionAvaliationTrunk: string;
            lateralFlexion: string;
            scoliosis: string;
            dorsalKyphosis: string;
        }
        pelvis: {
            positionAvaliationPelvis: string;
            pelvisFlexion: string;
            internalRotation: string;
            externalRotation: string;
            adduction: string;
            abduction: string;
            anteversion: string;
            retroversion: string;
        }
        knee: {
            positionAvaliationKnee: string;
            flexion: string;
            extension: string;
            valgus: string;
            varus: string;
        }
        ankleAndFoot: {
            positionAvaliationAnkleAndFoot: string;
            plantarFlexion: string;
            dorsiflexion: string;
            eversion: string;
            inversion: string;
            toeFlexion: string;
            toeExtension: string;
        }
    },
    
    palpation:{
        positionAvaliantionPalpation: string;
          deltoid: string;
          biceps: string;
          triceps: string;
          pectoral: string;
          abdominals: string;
          obliques: string;
          quadriceps: string;
          tricepsSural: string;
          hamstrings: string;
    }
    muscleTone: {
        scaleTone: string;
        shoulderFlexors: string;
        shoulderExtensors: string;
        elbowFlexors: string;
        elbowExtensors: string;
        wristFlexors: string;
        wristExtensors:string;
        hipFlexors: string;
        hipAdductors:string;
        kneeFlexors: string;
        ankleDorsiflexors:string;
        anklePlantiflexors:string;
    }
    obsMuscleTone: string;

    mobility: {
        shoulder: {
            flexionShoulder: number; 
            abductionShoulder: number; 
            adductionShoulder: number; 
        }
        elbow: {
            flexionElbow: number; 
            extensionElbow: number; 
        }
        trunk:{
            flexionTrunk: number; 
        },
        hip: {
            flexionHip: number; 
            extensionHip: number; 
            adductionHip: number; 
            abductionHip: number; 
            internalRotationHip: number; 
            externalRotationHip: number; 
        },
         knee: {
            extensionKnee: number; 
            flexionKnee: number; 
        },
          ankle: {
            extensionAnkle: number; 
           flexionAnkle: number; 
        }
      }

    muscleStrength: {
        shoulder:{
            flexion:string;
            extension:string;
            abduction:string;
            adduction:string;
            internalRotation:string;
            externalRotation:string;
        },
        elbow: {
            flexion: string;
            extension: string;
            pronation: string;
            supination:string;
        }
        wrist: {
            flexion: string;
            extension: string;
            ulnarDeviation:string;
            radialDeviation:string;
        }
        trunk: {
            flexion: string;
            extension: string;
              rotation: string;
             lateralFlexion: string;
        },
        hip: {
            extension: string;
            adduction: string;
            abduction: string;
            internalRotation: string;
            externalRotation: string;
        }
        knee: {
            flexion:string;
            extension: string;
        }
        ankle: {
            dorsiflexion: string;
            plantiflexion: string;
        }
        },
    deepReflexes: {
        brachioradialis: string;
        bicipital: string;
        tricipital: string;
        patellar: string;
        achilles: string;
    }
    superficialReflexes:{
        babinski: string;
        cutaneousAbdominal:string;
    }

    protectionReactions: {
        front: {
            initialMonths: number;
            finalMonths: number;
            laterality: number;
            classification: string;
        }
        sides: {
            initialMonths: number;
            finalMonths: number;
            laterality:number;
            classification: string;
        }
        back:{
            initialMonths: number;
            finalMonths: number;
            laterality: number;
            classification: string;
        }         
    }
         
    standingPosition:{
        front: {
            initialMonths: number;
            finalMonths: number;
            laterality: number;
            classification: string;
        }
        sides: {
            initialMonths: number;
            finalMonths: number;
            laterality: number;
            classification: string;
        }
        back: {
            initialMonths: number;
            finalMonths: number;
            laterality: number;
            classification: string;
        }
    }
    evaluationDescription: {
        childCollaborative: boolean;
        childCollaborativeObs: string;
        companionParticipative: boolean;
        companionParticipativeObs: string;
    }
    complementaryExams: {
        xRay: boolean;
        magneticResonanceImaging: boolean;
        computedTomography: boolean;
        electromyography: boolean;
        cinematographicDocumentation: boolean;
        blood: boolean;
        urine: boolean;
        feces:boolean;
        others: string;
    },
}