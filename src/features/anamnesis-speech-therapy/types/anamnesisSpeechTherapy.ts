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
        questionHasUsedAnyMedication:[{
            optionYes: string;
            optionNo: string;
        }];
        questionUnderMedicalAdvice:[{
            optionYes: string;
            optionNo: string;
        }];
        questionWhichMedicine: string;
        questionDidYouHavePrenatalCare:[{
            optionYes: string;
            optionNo: string;
        }];
        questionWhy: string;
        questionDidTheChildHaveAnyProblems:[{
            optionYes: string;
            optionNo: string;
        }];
        questionWhatProblem: string;};



      groupCircumstantial:{
        questionParentsWorkingHours:[{
            fathersWorkingHours: string;
            motherWorkingHours: string;
        }];
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
            questionSatWithSupport:[{
                optionYes: string;
                optionNo: string;
            }];
            questionSatWithoutSupport:[{
                optionYes: string;
                optionNo: string;
            }];
            questionCrawled:[{
                optionYes: string;
                optionNo: string;
            }];
            questionBeen:[{
                optionYes: string;
                optionNo: string;
            }];
            questionDaytimeSphincterControl: string;
            questionNightSphincterControl: string;
            questionFallALot:[{
                optionYes: string;
                optionNo: string;
            }];
            questionDidYouBumpIntoEverything:[{
                optionYes: string;
                optionNo: string;
            }];
            questionSpeechBabbling:[{
                optionYes: string;
                optionNo: string;
            }];
            questionWhen: string;
            questionWasItAQuietBaby:[{
                optionYes: string;
                optionNo: string;
            }]};



        groupNeurovegetativeFunctions:{
            questionSuction: string;
            questionMastication: string;
            questionSwallowing: string;
            questionRespiration: string;
            questionDoesItHaveNoise:[{
                optionYes: string;
                optionNo: string;
            }];
            questionEffort:[{
                optionYes: string;
                optionNo: string;
            }];
            questionLeftHandedOrRightHanded: string;
            questionUsed:[{
                optionPacifier: string;
                optionBottle: string;
                optionFinger: string;
            }];
            questionUntilWhen: string;
            questionOtherHabits: string;
            };



        groupIdeomotor:{
            questionDoYouShowerAlone: string;
            questionDoYouEatAlone:[{
                optionYes: string;
                optionNo: string;
            }]
            questionSinceWhen: string;
            questionWhatDoYouUse: string;
            questionWithWhatHand: string;
            questionDoYouPlayBall:[{
                optionYes: string;
                optionNo: string;
            }]
            questionJumpRope:[{
                optionYes: string;
                optionNo: string;
            }]
            questionDoYouBrushYourTeethAlone:[{
                optionYes: string;
                optionNo: string;
            }]
            questionDoYouDressAlone:[{
                optionYes: string;
                optionNo: string;
            }]
            questionDoYouPutOnYourShoes:[{
                optionYes: string;
                optionNo: string;
            }]
            questionLaceUpYourSneakers:[{
                optionYes: string;
                optionNo: string;
            }]
            questionZipUp:[{
                optionYes: string;
                optionNo: string;
            }]};
        

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