import {Schema, Document} from 'mongoose'
import { ICreatePediatricNeurologicalEvaluation } from 'src/features/pediatric-neurological-evaluation/types/pediatricNeurologicalEvaluation';


export const PediatricNeurologicalEvaluationSchema = new Schema ({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: 'User' },
    dateOfBirth: { type: String, required: false },
    age: { type: Number, required: false },
    responsible: { type: Schema.Types.ObjectId, ref: 'User' },
    clinicalDiagnosis: { type: String, required: false },
    applicationDate: { type: String, required: false },
    doctor: { type: Schema.Types.ObjectId, ref: 'User' },
    responsibleSupervisor: {type: String, required: false },
    contact: { type: String, required: false },
    dysfunctionalDiagnosis: { type: String, required: false },
    physiotherapeutic: { type: String, required: false },
    hma: { type: String, required: false },
    patientPresentation: { type: String, required: false },
    concomitantPathology: { type: String, required: false },
    familyHistory: { type: String, required: false },
    dailyMedication: { type: String, required: false },
    gestationHistory: { type: String, required: false },
    familyRoutine: { type: String, required: false },
    feeding: { type: String, required: false },
    sleep: { type: String, required: false },
    clothing: { type: String, required: false },
    hygiene: { type: String, required: false },
    play: { type: String, required: false },
    hyperfocus: { type: String, required: false },
    socialization: { type: String, required: false },
    inspection: { 
        head: {
            positionAvaliationHead: { type: String, required: false },
            sideTilt: { type: String, required: false },
            rotation: { type: String, required: false },
            flexion: { type: String, required: false },
            extension: { type: String, required: false },
        },
        shoulder: {
            positionAvaliationShoulder: { type: String, required: false },
            internalRotation: { type: String, required: false },
            externalRotation: { type: String, required: false },
            elevation: { type: String, required: false },
            depression: { type: String, required: false },
            protraction: { type: String, required: false },
            retraction: { type: String, required: false },
        },
          elbow: {
            positionAvaliationElbow: { type: String, required: false },
            Pronation: { type: String, required: false },
            supination: { type: String, required: false },
            flexion: { type: String, required: false },
            extension: { type: String, required: false },
        },
        wrist: {
            positionAvaliationWrist: { type: String, required: false },
            flexion: { type: String, required: false },
            extension: { type: String, required: false },
            ulnarDeviation: { type: String, required: false },
            radialDeviation: { type: String, required: false },
        },
        hand: {
            positionAvaliationHand: { type: String, required: false },
            fingerFlexion: { type: String, required: false },
            thumbAdduction: { type: String, required: false },
        },

        trunk: {
            positionAvaliationTrunk:{ type: String, required: false },
            lateralFlexion: { type: String, required: false },
            scoliosis: { type: String, required: false },
            dorsalKyphosis: { type: String, required: false },
        },
        pelvis: {
            positionAvaliationPelvis: { type: String, required: false },
            pelvisFlexion:{ type: String, required: false },
            internalRotation: { type: String, required: false },
            externalRotation: { type: String, required: false },
            adduction: { type: String, required: false },
            abduction: { type: String, required: false },
            anteversion:{ type: String, required: false },
            retroversion: { type: String, required: false },
        },
        knee: {
            positionAvaliationKnee: { type: String, required: false },
            flexion: { type: String, required: false },
            extension: { type: String, required: false },
            valgus: { type: String, required: false },
            varus: { type: String, required: false },
        },
        ankleAndFoot: {
            positionAvaliationAnkleAndFoot: { type: String, required: false },
            plantarFlexion: { type: String, required: false },
            dorsiflexion: { type: String, required: false },
            eversion: { type: String, required: false },
            inversion: { type: String, required: false },
            toeFlexion: { type: String, required: false },
            toeExtension: { type: String, required: false },
        }
    },
    palpation: { 
        positionAvaliantionPalpation: { type: String, required: false },
        deltoid: { type: String, required: false },
        biceps: { type: String, required: false },
        triceps: { type: String, required: false },
        pectoral: { type: String, required: false },
        abdominals: { type: String, required: false },
        obliques: { type: String, required: false },
        quadriceps: { type: String, required: false },
        tricepsSural: { type: String, required: false },
        hamstrings: { type: String, required: false },
        observationPalpation: { type: String, required: false },
     },
    muscleTone: {
        scaleTone: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        shoulderFlexors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        shoulderExtensors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        elbowFlexors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        elbowExtensors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        wristFlexors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        wristExtensors:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        hipFlexors: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        hipAdductors:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        kneeFlexors:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        ankleDorsiflexors:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        anklePlantiflexors:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
    },
    obsMuscleTone: { type: String, required: false },
    mobility: {
        shoulder: {
            flexionShoulder: { type: Number, required: false },
            abductionShoulder: { type: Number, required: false },
            adductionShoulder: { type: Number, required: false }, 
        },
        elbow: {
            flexionElbow: { type: Number, required: false },
            extensionElbow: { type: Number, required: false },
        },
        trunk:{
            flexionTrunk: { type: Number, required: false }, 
        },
        hip: {
            flexionHip: { type: Number, required: false },
            extensionHip: { type: Number, required: false }, 
            adductionHip: { type: Number, required: false },
            abductionHip: { type: Number, required: false }, 
            internalRotationHip: { type: Number, required: false },
            externalRotationHip: { type: Number, required: false },
        },
         knee: {
            extensionKnee: { type: Number, required: false },
            flexionKnee: { type: Number, required: false },
        },
          ankle: {
            extensionAnkle: { type: Number, required: false }, 
           flexionAnkle: { type: Number, required: false }, 
        }
    },
    muscleStrength: {
        shoulder:{
            flexion:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            extension:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            abduction:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            adduction:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            internalRotation:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            externalRotation:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        elbow: {
            flexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            extension: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            pronation: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            supination:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        wrist: {
            flexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            extension: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            ulnarDeviation:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            radialDeviation:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        trunk: {
            flexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            extension: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
              rotation: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
             lateralFlexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        hip: {
            extension: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            adduction: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            abduction: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            internalRotation: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            externalRotation: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        knee: {
            flexion:{ type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            extension: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        },
        ankle: {
            dorsiflexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
            plantiflexion: { type: Number, required: false, enum: [0, 1, 2, 3, 4, 5] },
        }
    },
    deepReflexes: {
        brachioradialis: { type: String, required: false, enum: ['A', 'D', 'SR', 'N'] },
        bicipital: { type: String, required: false , enum: ['A', 'D', 'SR', 'N']},
        tricipital: { type: String, required: false , enum: ['A', 'D', 'SR', 'N']},
        patellar: { type: String, required: false , enum: ['A', 'D', 'SR', 'N']},
        achilles: { type: String, required: false, enum: ['A', 'D', 'SR', 'N'] },
    },
    superficialReflexes: {
        babinski: { type: String, required: false, enum: ['A', 'D', 'SR', 'N'] },
        cutaneousAbdominal:{ type: String, required: false , enum: ['A', 'D', 'SR', 'N']},
    },
    

    propectionReaction: {
        front: {
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality: { type: Number, required: false },
            classification: { type: String, required: false },
        },
        sides: {
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality:{ type: Number, required: false },
            classification: { type: String, required: false },
        },
        back:{
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality: { type: Number, required: false },
            classification: { type: String, required: false },
        },    
    },

    standingPosition: {
        front: {
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality: { type: Number, required: false },
            classification: { type: String, required: false },
        },
        sides: {
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality: { type: Number, required: false },
            classification: { type: String, required: false },
        },
        back: {
            initialMonths: { type: Number, required: false },
            finalMonths: { type: Number, required: false },
            laterality: { type: Number, required: false },
            classification: { type: String, required: false },
        }
    },

    evaluationDescription: {
        childCollaborative: { type: Boolean, required: false },
        childCollaborativeObs: { type: String, required: false },
        companionParticipative: { type: Boolean, required: false },
        companionParticipativeObs: { type: String, required: false },
    },

    complementaryExams: {
        xRay: { type: Boolean, required: false },
        magneticResonanceImaging: { type: Boolean, required: false },
        computedTomography: { type: Boolean, required: false },
        electromyography: { type: Boolean, required: false },
        cinematographicDocumentation: { type: Boolean, required: false },
        blood: { type: Boolean, required: false },
        urine: { type: Boolean, required: false },
        feces:{ type: Boolean, required: false },
        others: { type: String, required: false },
    },

    observationAndDiagnostics: { type: String, required: false },
});


export interface IPediatricNeurologicalEvaluationEntity extends Omit<ICreatePediatricNeurologicalEvaluation, '_id'>, Document {}