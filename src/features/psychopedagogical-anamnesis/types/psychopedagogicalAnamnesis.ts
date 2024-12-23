export interface IPsychopedagogicalAnamnesis{

    identification: {
        patient: string; // ObjectId as string
        dateOfApplication: string;
        dateBirth: string;
        age: number;
        teacherName: string;
        supportProfessional: string;
        schoolName: string;
        schoolPeriod: string;
        schoolYear: string;
    }

    familyLearningHistory:{
        fatherName: string;
        ageFather: number;
        schoolingFather: string;
        difficultyFather: string;
        motherName: string;
        ageMother: number;
        schoolingMother: string;
        difficultyMother: string;
        nameBrotherOne: string;
        ageBrotherOne: number;
        schoolingBrotherOne: string;
        difficultyBrotherOne: string;
        nameBrotherTwo: string;
        ageBrotherTwo: number;
        schoolingBrotherTwo: string;
        difficultyBrotherTwo: string;
        nameBrotherThree: string;
        ageBrotherThree: number;
        schoolingBrotherThree: string;
        difficultyBrotherThree: string;
    }

    observation:{
        bedtime: number;
        wakeUpTime: number;
        sportsActivitiesHeLikesTheMost: string;
        externalServiceActivities: string;
        doYouUseAdaptedActivitiesAtSchool: string;
        whatActivitiesAreAdapted: string;
        doYouHaveDifficultyInSocialInteraction: string;
        whatDifficultyInSocialInteraction: string;
        resistanceToRoutineChange: string;
        whatRoutineChange: string;
        eyeContact: string;
        whatEyeContact: string;
        interestInLearning: string;
        whatInterestInLearning: string;
        hyperactivity: string;
        whatHyperactivity: string;
        inattention: string;
        whatInattention: string;
        areYouLiterate: string;
        whatAreYouLiterate: string;
        changeInLanguageAndCommunication: string;
        whatLanguageAndCommunication: string;
        inappropriateReactionToFrustration: string;
        whatReactionToFrustration: string;
        crisisTypeCrisisTrigger: string;
        whatTypeCrisisTrigger: string;
        stereotypy: string;
        whatStereotypy: string;
        medication: string;
        whatMedication: string;
        allergy: string;
        whatAllergy: string;
        Diagnosis: string;
        schoolFamilyComplaint: string;
        outher: string;
    }



    learningAssessment:{
        readingLevel: string;
        textProduction: string;
        preSyllabicWritingLevel: string;
        logicalReasoning: string;
        doYouRecognizeTheColors: string;                                                                        
        difficultyRecognizeTheColors: string;
        doYouHaveDifficultyTracingTheNumerals: string;
        difficultyRecognizingNumbers: string;
        doYouHaveAChangeWhenCarryingOutOperations: string;
        difficultyCarryingOutOperations: string;
        doesItSolveProblemSituations: string;
    }

        FinishForms:{
        therapistInCharge: string; 
        informationOfficer: string;
        choiseInformationOfficer: string;
    }
}