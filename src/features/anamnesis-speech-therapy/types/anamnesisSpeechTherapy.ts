export interface IAnamnesisSpeechTherapy{
    
    identification: {
        patient: string; // ObjectId as string
        dateBirth: string;
        age: number;
        maritalStatus: string;
        sex: string;
        naturalization: string;
        nationality: string;
        schoolName: string;
        schoolPeriod: string;
    affiliation: {
        fatherName: string;
        ageFather: number;
        fatherProfession: string;
        schooling: string;
        motherName: string;
        ageMother: number;
        motherProfession: string;
        schoolingMother: string;
        brotherName: string;
        brotherAge: number;
        };
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        zipCode: string;
        fone: string;
        responsible: string;
        forwarded: string;
        dateAnamnese: string;
        professional: string;
        };
    }



    complaintAndDuration:{
        observationComplaintAndDuration: string;
    };



    background:{
      groupConstitutional:{
        questionGestation: string;
        questionTypeOfDelivery: string;
        questionComplications: string;
        questionHasUsedAnyMedication: string;
        questionUnderMedicalAdvice: string;
        questionWhichMedicine: string;
        questionDidYouHavePrenatalCare: string;
        questionWhy: string;
        questionDidTheChildHaveAnyProblems: string;
        questionWhatProblem: string;};



      groupCircumstantial:{
        questionParentsWorkingHours: string;
        questionWhoDoesTheChildStayWith: string;
        questionWeeklyRoutine: string;
    };
};


    development: {
        physical: {
            groupSomatic:{
                questionSleep: string;
                questionSickness: string;
                questionHearingAndEarInfection: string;
                questionVision: string;
                questionAllergy: string;
                questionSurgery: string;
                questionDateOfSurgery: string;
                questionHospitalization: string;
                questionDrug: string;
                questionBreastfed: string;
                questionWhenUntil: string;
                questionLookedAtMyMotherInBreastfeeding: string;
                questionWhatDoYouCurrentlyEat: string;
                questionDidYouChokeEasily: string;
                questionGastroesophagealReflux: string;
                questionDidYouUseABottle: string;
                questionWhenDidYouStartUsingIt: string;
                questionForHowLong: string;
                questionWhenDidYouSwitchFromLiquidToPastyFoods: string;
                questionPastyToSolid: string;
                questionFever: string;
                questionFainting: string;
                questionSeizures: string;
                questionOtherProblems: string;
            };



        groupEngine:{
            questionHeHeldHisHead: string;
            questionSatWithSupport: string;
            questionSatWithoutSupport: string;
            questionCrawled: string;
            questionBeen: string;
            questionDaytimeSphincterControl: string;
            questionNightSphincterControl: string;
            questionFallALot: string;
            questionDidYouBumpIntoEverything: string;
            questionSpeechBabbling: string;
            questionWhen: string;
            questionWasItAQuietBaby: string;
        }



        groupNeurovegetativeFunctions:{
            questionSuction: string;
            questionMastication: string;
            questionSwallowing: string;
            questionRespiration: string;
            questionDoesItHaveNoise: string;
            questionEffort: string;
            questionLeftHandedOrRightHanded: string;
            questionUsed: string;
            questionUntilWhen: string;
            questionOtherHabits: string;
            };



        groupIdeomotor:{
            questionDoYouShowerAlone: string;
            questionDoYouEatAlone: string;
            questionSinceWhen: string;
            questionWhatDoYouUse: string;
            questionWithWhatHand: string;
            questionDoYouPlayBall: string;
            questionJumpRope: string;
            questionDoYouBrushYourTeethAlone: string;
            questionDoYouDressAlone: string;
            questionDoYouPutOnYourShoes: string;
            questionLaceUpYourSneakers: string;
            questionZipUp: string;
        }
        

        groupIdeatorious:{
            questionDodYouHaveYourOwnInitiative: string;
            questionDoesItShowWill: string;
            questionWhatDoYouDoWhenYoureAlone: string;
            questionHowDoesItSolveProblems: string;
        };
    };


    socioCultural: {
        groupInteractive:{
            questionRelationshipWithParents: string;
            questionRelationshipWithAdults: string;
            questionRelationshipWithOtherChildren: string;
            questionWhoAreYourBestFriends: string;
        };

        groupIntegrative:{
            questionWhatDoYouLike: string;
            questionAreYouVeryDemandingToSayRight: string;
            questionFamilyWithSpeechImpairment: string;
            questionIsThereDifficultyInUnderstandingDoesHeUnderstandWhatYouSay: string;
            questionDoesItHaveEyeContact: string;
            questionIsBitingOtherChildrenAggressive: string;
            questionDoYouHaveACommunicationInitiative: string;
            questionDoYouMaintainDialogue: string;
            questionDoYouHaveContactWithSomethingYouLike: string;
            questionAndWhatDoesntHeLike: string;
            questionDoYouPerformWellAtSchool: string;
            questionWhenDidYouEnterSchool: string;
            questionDidYouHaveAGoodAdaptation: string;
            questionHowIsTheirBehavior: string;
            questionDoYouGoByName: string;
            observationIntegrative: string;
        };
    };
}};