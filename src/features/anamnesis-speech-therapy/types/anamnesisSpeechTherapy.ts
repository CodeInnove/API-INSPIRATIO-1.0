export interface IAnamnesisSpeechTherapy{
    
    identification: {
        name: string,
        birthDate: string,
        maritalStatus: string,
        placeOfBirth: string,
        age: number,
        sex: string,
        nationality: string,
        schoolName: string,
        studyPeriod: string,
    },
        affiliation: {
            fatherName: string,
            fatherAge: number,
            fatherProfession: string,
            fatherEducation: string,
            motherName: string,
            motherAge: number,
            motherProfession: string,
            motherEducation: string,
            siblingsNames: [{
            age: number
        }]
    },
    address: {
        street: string,
        city: string,
        number: string,
        state: string,
        zipCode: string,
        phonenumbers: [string],
        responsible: string,
        referredBy: string,
        anamnesisDate: string,
        professional: string
        },

    complaintAndDuration: string,
    
    antecedents: {
        constitutional: {
            gestation: string,
            typeOfDelivery: string,
            complications: {
            usedMedication: string,
            medicalGuidance: string,
            whichMedication: string,
            prenatalCare: string,
            prenatalCareWhy: string,
            childProblem: string,
            whichProblem: string,
            },
    },
    circumstantial: {
        socioCultural: {
        parentsWorkHours: string,
        childCaregiver: string,
        weeklyRoutine: string,
        },
    },
    },
    development: {
    physical: {
        somatic: {
            sleep: string,
            disease: string,
            hearingEarInfection: string,
            vision: string,
            allergies: string,
            surgeriesAndDates: string,
            hospitalizations: string,
            medication: string,
            breastfed: string,
            untilWhen: string,
            lookedAtMotherBreastfeeding: string,
            whatEatsNow: string,
            chokedEasily: string,
            gastroesophagealReflux: string,
            usedBottle: string,
            whenStartedUsingBottle: string,
            forHowLongUsedBottle: string,
            whenChangedFromLiquidToPastyFoods: string,
            pastyToSolidFoods: string,
            fever: string,
            fainting: string,
            convulsions: string,
            otherProblems: string,
        },
        motor: {
            heldHeadUp: string,
            satWithSupport: string,
            satWithoutSupport: string,
            crawled: string,
            walked: string,
            diurnalSphincterControl: string,
            nocturnalSphincterControl: string,
            fellALot: string,
            bumpedIntoThings: string,
            speechBabblingWhen: string,
            quietBaby: string
        },
    },
    neurovegetativeFunctions: {
        suction: string,
        chewing: string,
        swallowing: string,
        breathing: string,
        presentsNoiseEffort: string,
        leftOrRightHanded: string,
        usedPacifierBottleFinger: string,
        untilWhenUsedPacifierBottleFinger: string,
        otherHabits: string
    },
    ideomotor: {
        bathesAlone: string,
        eatsAlone: string,
        sinceWhenEatsAlone: string,
        whatDoesItUse: string,
        whichHandEatsWith: string,
        playsBall: string,
        jumpsRope: string,
        brushesTeethAlone: string,
        dressesAlone: string,
        putsOnShoes: string,
        tiesShoes: string,
        closesZipper: string
    },
        ideatory: {
        hasOwnInitiative: string,
        demonstratesWishes: string,
        whatDoesWhenAlone: string,
        howSolvesProblems: string
        }
    },
    socioCultural:{
        interactive:{
        relationshipWithParents: string,
        relationshipWithAdults: string,
        relationshipWithOtherChildren: string,
        whoAreYourBestFriends: string
    },
        integrative:{
        whatLikes: string,
        muchChargedToSpeakCorrectly: string,
        familyWithSpeechDifficulty: string,
        difficultyOfUnderstanding: string,
        hasVisualContact: string,
        bitesOtherChildrenAggressive: string,
        communicationInitiative: string,
        maintainsDialogue: string,
        hasContactWithWhatLikes: string,
        doesntLike: string,
        hasGoodSchoolPerformance: string,
        whenStartedSchool: string,
        hadGoodAdaptation: string,
        howIsTheirBehavior: string,
        answersByName: string
        }
    },
    importantObservations: string
};