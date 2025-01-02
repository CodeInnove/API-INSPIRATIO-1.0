export interface IPsychopedagogicalAnamnesis{

    patient: string; // ObjectId as string
    dateOfApplication: string;
    dateBirth: string;
    age: number;
    teacherName: string;
    supportProfessional: string;
    schoolName: string;
    schoolPeriod: string;
    schoolYear: string;


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
        doYouUseAdaptedActivitiesAtSchool: boolean;
        whatActivitiesAreAdapted: string;
        doYouHaveDifficultyInSocialInteraction: boolean;
        whatDifficultyInSocialInteraction: boolean;
        resistanceToRoutineChange: boolean;
        whatRoutineChange: string;
        eyeContact: boolean;
        whatEyeContact: string;
        interestInLearning: boolean;
        whatInterestInLearning: string;
        hyperactivity: boolean;
        whatHyperactivity: string;
        inattention: boolean;
        whatInattention: string;
        areYouLiterate: boolean;
        whatAreYouLiterate: string;
        changeInLanguageAndCommunication: boolean;
        whatLanguageAndCommunication: string;
        inappropriateReactionToFrustration: boolean;
        whatReactionToFrustration: string;
        crisisTypeCrisisTrigger: boolean;
        whatTypeCrisisTrigger: string;
        stereotypy: boolean;
        whatStereotypy: string;
        medication: boolean;
        whatMedication: string;
        allergy: boolean;
        whatAllergy: string;
        Diagnosis: string;
        schoolFamilyComplaint: string;
        outher: string;
    }



    learningAssessment:{
        readingLevel: string;
        textProduction: string;
        preSyllabicWritingLevel: string;
        doYouRecognizeTheColors: boolean;                                                                        
        difficultyRecognizeTheColors: boolean;
        doYouHaveDifficultyTracingTheNumerals: boolean;
        difficultyRecognizingNumbers: boolean;
        doYouHaveAChangeWhenCarryingOutOperations: string;
        difficultyCarryingOutOperations: boolean;
        doesItSolveProblemSituations: boolean;
    }

       
    therapistInCharge: string; 
    informationOfficer: string;
    choiseInformationOfficer: string;
}