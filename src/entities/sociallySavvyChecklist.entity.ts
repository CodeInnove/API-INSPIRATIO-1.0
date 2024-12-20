import { Schema, Document } from 'mongoose';
import { ISociallySavvyChecklist } from 'src/features/socially-savvy-checklist/types/sociallySavvyChecklist';

export const SociallySavvyChecklistSchema = new Schema({
    identification: {
        patient: { type: Schema.Types.ObjectId, ref: "User" },
        dateOfApplication: { type: String, required: true },
        evaluator: {type: Schema.Types.ObjectId, ref: "User"}
        },
    
    jointAtention:{
    questionOne: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionTwo: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionThree: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionFour: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionFive: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionSix: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionSeven: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    },
    questionEight: {
        zeroScale:{ type: String, default: undefined },
        scaleOne: { type: String, default: undefined },
        scaleTwo:{ type: String, default: undefined },
        scaleThree:{ type: String, default: undefined },
        notApplicable:{ type: String, default: undefined },
    }},

    socialPlay:{
        questionEight: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionNine: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEleven: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwelve: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionThirteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFourteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFifteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSixteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSeventeen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEighteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionNineteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwenty: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyOne: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyTwo: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyThree: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyFour: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        }
        },

    selfRegulation:{
        questionOne: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionTwo: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionThree: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFour: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFive: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSix: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSeven: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionEight: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionNine: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEleven: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwelve: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionThirteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFourteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFifteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSixteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSeventeen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEighteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        }},

    socialOurEmotional:{
        questionOne: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionTwo: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionThree: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFour: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFive: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSix: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        }},
    
        socialLanguage:{
        questionOne: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionTwo: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionThree: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFour: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFive: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSix: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSeven: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionEight: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionNine: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEleven: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwelve: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionThirteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFourteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionFifteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSixteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionSeventeen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionEighteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionNineteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwenty: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyOne: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyTwo: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyThree: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        
        questionTwentyFour: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        
        }},
    
    classroomOurGroupBehavior:{
        questionOne: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionTwo: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionThree: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFour: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFive: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSix: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSeven: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionEight: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionNine: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionEleven: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTwelve: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionThirteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionFourteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionFifteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionSixteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionSeventeen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionEighteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionNineteen: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTwenty: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTwentyOne: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTwentyTwo: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        },
        questionTwentyThree: {
            zeroScale: { type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo: { type: String, default: undefined },
            scaleThree: { type: String, default: undefined },
            notApplicable: { type: String, default: undefined }
        
        }},

    nonverbalSocialLanguage:{
        questionOne: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionTwo: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionThree: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFour: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionFive: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        },
        questionSix: {
            zeroScale:{ type: String, default: undefined },
            scaleOne: { type: String, default: undefined },
            scaleTwo:{ type: String, default: undefined },
            scaleThree:{ type: String, default: undefined },
            notApplicable:{ type: String, default: undefined },
        }},
    
});
export interface ISociallySavvyChecklistEntity extends Omit<ISociallySavvyChecklist, '_id'>, Document { }