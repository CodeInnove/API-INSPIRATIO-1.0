import { Schema, Document } from 'mongoose';
import { IAnamnesisSpeechTherapy } from 'src/features/anamnesis-speech-therapy/types/anamnesisSpeechTherapy';


export const AnamnesisSpeechTherapySchema = new Schema({

    identification: {
        patient: { type: Schema.Types.ObjectId, ref: "patient" },
        dateBirth: { type: String, required: true },
        age: { type: Number, required: true },
        maritalStatus: { type: String, required: true },
        sex: { type: String, required: true },
        naturalization: { type: String, required: true },
        nationality: { type: String, required: true },
        schoolName: { type: String , required: true },
        schoolPeriod: { type: String , required: true },
    
    affiliation: {
        fatherName: { type: String, required: true },
        ageFather: { type: Number, required: true },
        FatherProfession: { type: String, required: true },
        schooling: { type: String, required: true },
        motherName: { type: String, required: true },
        ageMother: { type: Number, required: true },
        MotherProfession: { type: String, required: true },
        schoolingMother: { type: String, required: true },
        brotherName: { type: String, required: true},
        brotherAge: { type: Number, required: true },
        },

    address: {
        street: { type: String, required: true },
        number: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        fone: { type: String, required: true },
        responsible: { type: String, required: true },
        forwarded: { type: String, required: true },
        dateAnamnese: { type: Date, required: true },
        professional: { type: String, required: true },
    },
    },

    complaintAndDuration:{
        observationComplaintAndDuration: { type: String, required: true},
    },

    background:{
        groupConstitutional:{
          questionGestation: { type: String, required: true},
          questionTypeOfDelivery: { type: String, required: true},
          questionComplications: { type: String, required: true},
          questionHasUsedAnyMedication:[{
              optionYes: { type: String, required: true},
              optionNo: { type: String, required: true},
          }],
          questionUnderMedicalAdvice:[{
              optionYes: { type: String, required: true},
              optionNo: { type: String, required: true},
          }],
          questionWhichMedicine: { type: String, required: true},
          questionDidYouHavePrenatalCare:[{
              optionYes: { type: String, required: true},
              optionNo: { type: String, required: true},
          }],
          questionWhy: { type: String, required: true},
          questionDidTheChildHaveAnyProblems:[{
              optionYes: { type: String, required: true},
              optionNo: { type: String, required: true},
          }],
          
          questionWhatProblem: { type: String, required: true},
        }},

        groupCircumstantial:{
            questionParentsWorkingHours:[{
                fathersWorkingHours: { type: String, required: true},
                motherWorkingHours: { type: String, required: true},
            }],
            questionWhoDoesTheChildStayWith: { type: String, required: true},
            questionWeeklyRoutine: { type: String, required: true},
        },

    development:{
        physical:{
        groupSomatic:{
            questionSleep: { type: String, required: true},
            questionSickness: { type: String, required: true},
            questionHearingAndEarInfection: { type: String, required: true},
            questionVision: { type: String, required: true},
            questionAllergy: { type: String, required: true},
            questionSurgery: { type: String, required: true},
            questionDateOfSurgery: { type: String, required: true},
            questionHospitalization: { type: String, required: true},
            questionDrug: { type: String, required: true},
            questionBreastfed: { type: String, required: true},
            questionUntilWhen: { type: String, required: true},
            questionLookedAtMyMotherInBreastfeeding: { type: String, required: true},
            questionWhatDoYouCurrentlyEat: { type: String, required: true},
            questionDidYouChokeEasily: { type: String, required: true},
            questionGastroesophagealReflux: { type: String, required: true},
            questionDidYouUseABottle: { type: String, required: true},
            questionWhenDidYouStartUsingIt: { type: String, required: true},
            questionForHowLong: { type: String, required: true},
            questionWhenDidYouSwitchFromLiquidToPastyFoods: { type: String, required: true},
            questionPastyToSolid: { type: String, required: true},
            questionFever: { type: String, required: true},
            questionFainting: { type: String, required: true},
            questionSeizures: { type: String, required: true},
            questionOtherProblems: { type: String, required: true},
        },


        groupEngine:{
            questionHeHeldHisHead: { type: String, required: true},
            questionSatWithSupport:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionSatWithoutSupport:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionCrawled:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionBeen:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionDaytimeSphincterControl: { type: String, required: true},
            questionNightSphincterControl: { type: String, required: true},
            questionFallALot:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionDidYouBumpIntoEverything:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionSpeechBabbling:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionWhen: { type: String, required: true},
            questionWasItAQuietBaby:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
        },

        
        groupNeurovegetativeFunctions:{
            questionSuction: { type: String, required: true},
            questionMastication: { type: String, required: true},
            questionSwallowing: { type: String, required: true},
            questionRespiration: { type: String, required: true},
            questionDoesItHaveNoise:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionEffort:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionLeftHandedOrRightHanded: { type: String, required: true},
            questionUsed:[{
                optionPacifier: { type: String, required: true},
                optionBottle: { type: String, required: true},
                optionFinger: { type: String, required: true},
            }],
            questionUntilWhen: { type: String, required: true},
            questionOtherHabits: { type: String, required: true},
        },
    
        groupIdeomotor:{
            questionDoYouShowerAlone: { type: String, required: true},
            questionDoYouEatAlone:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionSinceWhen: { type: String, required: true},
            questionWhatDoYouUse: { type: String, required: true},
            questionWithWhatHand: { type: String, required: true},
            questionDoYouPlayBall:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionJumpRope:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionDoYouBrushYourTeethAlone:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionDoYouDressAlone:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionDoYouPutOnYourShoes:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionLaceUpYourSneakers:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
            questionZipUp:[{
                optionYes: { type: String, required: true},
                optionNo: { type: String, required: true},
            }],
        },

        groupIdeatorious:{
            questionDodYouHaveYourOwnInitiative: { type: String, required: true},
            questionDoesItShowWill: { type: String, required: true},
            questionWhatDoYouDoWhenYoureAlone: { type: String, required: true},
            questionHowDoesItSolveProblems: { type: String, required: true},
        }
    },

    socioCultural:{
        groupInteractive:{
            questionRelationshipWithParents: { type: String, required: true},
            questionRelationshipWithAdults: { type: String, required: true},
            questionRelationshipWithOtherChildren: { type: String, required: true},
            questionWhoAreYourBestFriends: { type: String, required: true},
        },
    
        groupIntegrative:{
            questionWhatDoYouLike: { type: String, required: true},
            questionAreYouVeryDemandingToSayRight: { type: String, required: true},
            questionFamilyWithSpeechImpairment: { type: String, required: true},
            questionIsThereDifficultyInUnderstandingDoesHeUnderstandWhatYouSay: { type: String, required: true},
            questionDoesItHaveEyeContact: { type: String, required: true},
            questionIsBitingOtherChildrenAggressive: { type: String, required: true},
            questionDoYouHaveACommunicationInitiative: { type: String, required: true},
            questionDoYouMaintainDialogue: { type: String, required: true},
            questionDoYouHaveContactWithSomethingYouLike: { type: String, required: true},
            questionAndWhatDoesntHeLike: { type: String, required: true},
            questionDoYouPerformWellAtSchool: { type: String, required: true},
            questionWhenDidYouEnterSchool: { type: String, required: true},
            questionDidYouHaveAGoodAdaptation: { type: String, required: true},
            questionHowIsTheirBehavior: { type: String, required: true},
            questionDoYouGoByName: { type: String, required: true},
            observationIntegrative: { type: String, required: true},
        }   
    }
  },
});

export interface IAnamnesisSpeechTherapyEntity extends Omit<IAnamnesisSpeechTherapy, '_id'>, Document { }