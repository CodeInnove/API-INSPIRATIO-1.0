import { Schema, Document } from 'mongoose';
import { IPsychopedagogicalAnamnesis } from 'src/features/psychopedagogical-anamnesis/types/psychopedagogicalAnamnesis';


export const PsychopedagogicalAnamnesisSchema = new Schema({

    identification: {
        patient: { type: Schema.Types.ObjectId, ref: "patient" },
        dateOfApplication: { type: String, required: true },
        dateBirth: { type: String, required: true },
        age: { type: Number, required: true },
        teacherName: { type: String, required: true },
        supportProfessional: { type: String, required: true },
        schoolName: { type: String, required: true },
        schoolPeriod: { type: String, required: true },
        schoolYear: { type: String, required: true },
    },

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
        doYouUseAdaptedActivitiesAtSchool:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatActivitiesAreAdapted: { type: String, required: true },


        doYouHaveDifficultyInSocialInteraction:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatDifficultyInSocialInteraction: { type: String, required: true },


        resistanceToRoutineChange:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatRoutineChange: { type: String, required: true },


        eyeContact:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatEyeContact: { type: String, required: true },


        interestInLearning:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatInterestInLearning: { type: String, required: true },


        hyperactivity:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatHyperactivity: { type: String, required: true },


        inattention:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatInattention: { type: String, required: true },


        areYouLiterate:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatAreYouLiterate: { type: String, required: true },


        changeInLanguageAndCommunication:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatLanguageAndCommunication: { type: String, required: true },


        inappropriateReactionToFrustration:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatReactionToFrustration: { type: String, required: true },


        crisisTypeCrisisTrigger:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatTypeCrisisTrigger: { type: String, required: true },


        stereotypy:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatStereotypy: { type: String, required: true },


        medication:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatMedication: { type: String, required: true },


        allergy:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        whatAllergy: { type: String, required: true },


        Diagnosis: { type: String, required: true },
        schoolFamilyComplaint: { type: String, required: true },
        outher: { type: String, required: true },
    },



    learningAssessment:{
        readingLevel:[{
            optionDoesNotRead: { type: String, required: true},
            optionSyllableReading: { type: String, required: true},
            optionFluenReading: { type: String, required: true},

        }],
        textProduction:[{
            optionDoesNotWrite: { type: String, required: true},
            optionWritesSentences: { type: String, required: true},
            optionFluenReading: { type: String, required: true},
            optionProducesShortTexts: { type: String, required: true},
            optionProducesTextWithoutContextualizations: { type: String, required: true},
            optionProducesTextWithCohesion: { type: String, required: true},

        }],
        preSyllabicWritingLevel:[{
            optionSyllabic: { type: String, required: true},
            optionSyllabicOurAlphabetic: { type: String, required: true},
            optionAlphabetic: { type: String, required: true},
        }],     
        logicalReasoning: { type: String, required: true },
        doYouRecognizeTheColors:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],                                                                                                           
        difficultyRecognizeTheColors:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        doYouHaveDifficultyTracingTheNumerals:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],   
              
        difficultyRecognizingNumbers:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        doYouHaveAChangeWhenCarryingOutOperations:[{
            optionAddition: { type: String, required: true},
            optionSubtraction: { type: String, required: true},
            optionMultiplication: { type: String, required: true},
            optionDivision: { type: String, required: true},
        }],
        difficultyCarryingOutOperations:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }],
        doesItSolveProblemSituations:[{
            optionYes: { type: String, required: true},
            optionNo: { type: String, required: true},
        }]
    },

        FinishForms:{
        therapistInCharge: { type: String, required: true },
        informationOfficer: { type: String, required: true },
        choiseInformationOfficer:[{
            optionPai: { type: String, required: true},
            optionMom: { type: String, required: true},
            optionGrandMother: { type: String, required: true},
        }]
    }
});

export interface IPsychopedagogicalAnamnesisEntity extends Omit<IPsychopedagogicalAnamnesis, '_id'>, Document { }