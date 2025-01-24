import { Schema, Document } from 'mongoose';
import { IPsychopedagogicalAnamnesis } from 'src/features/psychopedagogical-anamnesis/types/psychopedagogicalAnamnesis';


export const PsychopedagogicalAnamnesisSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    dateBirth: { type: String, required: true },
    age: { type: Number, required: true },
    teacherName: { type: String, required: true },
    supportProfessional: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolPeriod: { type: String, required: true },
    schoolYear: { type: String, required: true },

    familyLearningHistory:{
        fatherName: { type: String, required: true },
        ageFather: { type: Number, required: true },
        schoolingFather: { type: String, required: true },
        difficultyFather: { type: String, required: true },
        motherName: { type: String, required: true },
        ageMother: { type: Number, required: true },
        schoolingMother: { type: String, required: true },
        difficultyMother: { type: String, required: true },
        nameBrotherOne: { type: String, required: true },
        ageBrotherOne: { type: Number, required: true },
        schoolingBrotherOne: { type: String, required: true },
        difficultyBrotherOne: { type: String, required: true },
        nameBrotherTwo: { type: String, required: true },
        ageBrotherTwo: { type: Number, required: true },
        schoolingBrotherTwo: { type: String, required: true },
        difficultyBrotherTwo: { type: String, required: true },
        nameBrotherThree: { type: String, required: true },
        ageBrotherThree: { type: Number, required: true },
        schoolingBrotherThree: { type: String, required: true },
        difficultyBrotherThree: { type: String, required: true },
    },

    observation:{
        bedtime: { type: Number, required: true },
        wakeUpTime: { type: Number, required: true },
        sportsActivitiesHeLikesTheMost: { type: String, required: true },
        externalServiceActivities: { type: String, required: true },
        doYouUseAdaptedActivitiesAtSchool:{ type: String, required: true },
        whatActivitiesAreAdapted: { type: String, required: true },
        doYouHaveDifficultyInSocialInteraction:{ type: String, required: true },
        whatDifficultyInSocialInteraction: { type: String, required: true },
        resistanceToRoutineChange:{ type: String, required: true },
        whatResistanceToRoutineChange: { type: String, required: true },
        eyeContact:{ type: String, required: true },
        whatEyeContact: { type: String, required: true },
        interestInLearning:{ type: String, required: true },
        whatInterestInLearning: { type: String, required: true },
        hyperactivity:{ type: String, required: true },
        whatHyperactivity: { type: String, required: true },
        inattention:{ type: String, required: true },
        whatInattention: { type: String, required: true },
        areYouLiterate:{ type: String, required: true },
        whatAreYouLiterate: { type: String, required: true },
        changeInLanguageAndCommunication:{ type: String, required: true },
        whatLanguageAndCommunication: { type: String, required: true },
        inappropriateReactionToFrustration:{ type: String, required: true },
        whatReactionToFrustration: { type: String, required: true },
        crisisTypeCrisisTrigger:{ type: String, required: true },
        whatTypeCrisisTrigger: { type: String, required: true },
        stereotypy:{ type: String, required: true },
        whatStereotypy: { type: String, required: true },
        medication:{ type: String, required: true },
        whatMedication: { type: String, required: true },
        allergy:{ type: String, required: true },
        whatAllergy: { type: String, required: true },
        Diagnosis: { type: String, required: true },
        schoolFamilyComplaint: { type: String, required: true },
        outher: { type: String, required: true },
    },



    learningAssessment:{
        readingLevel:{ type: String, enum: ['Não lê', 'Leitura silaba', 'Leitura fluente'], required: true },
        textProduction:{ type: String, enum: ['Não escreve', 'Escreve palavras', 'Escreva frases', 'Produz pequenos textos', 'Produz textos sem contextualização', 'Produz textos com coesão']},
        preSyllabicWritingLevel:{ type: String,  enum: [' Pré silábico', 'Silábico', 'Silábico/Alfabético', 'Alfabético']},     
        doYouRecognizeTheColors:{ type: String, required: true },                                                                                                           
        difficultyRecognizeTheColors:{ type: String, required: true },
        doYouHaveDifficultyTracingTheNumerals:{ type: String, required: true },        
        difficultyRecognizingNumbers:{ type: String, required: true },
        doYouHaveAChangeWhenCarryingOutOperations:{type: String, enum: ['Adição', 'Subtração', 'Multiplicação', 'Divisão']},
        difficultyCarryingOutOperations:{ type: String, required: true },
        doesItSolveProblemSituations:{ type: String, required: true }
    },

        
    therapistInCharge: { type: String, required: true },
    informationOfficer: { type: String, required: true },
    choiseInformationOfficer:{ type: String, required: true , enum: ['Pai', 'Mãe', 'Avó'] },

});

export interface IPsychopedagogicalAnamnesisEntity extends Omit<IPsychopedagogicalAnamnesis, '_id'>, Document { }