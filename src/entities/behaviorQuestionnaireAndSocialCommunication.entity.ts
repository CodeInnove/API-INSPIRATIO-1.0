import { Schema, Document } from 'mongoose';
import { IBehaviorQuestionnaireAndSocialCommunication } from 'src/features/behavior-questionnaire-and-social-communication/types/behaviorQuestionnaireAndSocialCommunication';

export const BehaviorQuestionnaireAndSocialCommunicationSchema = new Schema({

    questions:[{
        questionOne: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwo: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThree: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionFour: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionFive: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionSix: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionSeven: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionEight: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionNine: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionEleven: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwelve: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionFourteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionFifteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionSixteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionSeventeen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionEighteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionNineteen: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwenty: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyOne: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyTwo: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyThree: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyFour: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyFive: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentySix: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentySeven: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyEight: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionTwentyNine: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirty: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyOne: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyTwo: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyThree: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyFour: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyFive: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtySix: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtySeven: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyEight: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionThirtyNine: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
        questionForty: {
            yes: { type: String, default: undefined},
            no: { type: String, default: undefined},
        },
    }],

    scoreAsq: { 
        yesScore:{ type: Number, default: 0 },
        noScore:{ type: Number, default: 0 },
        },

    totalResultAsq: {
        resultTotal: { type: Number, default: 0 }
        }
    
});
export interface IBehaviorQuestionnaireAndSocialCommunicationEntity extends Omit<IBehaviorQuestionnaireAndSocialCommunication, '_id'>, Document { }