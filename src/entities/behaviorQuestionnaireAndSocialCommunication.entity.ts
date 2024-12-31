import { Schema, Document } from 'mongoose';
import { IBehaviorQuestionnaireAndSocialCommunication } from 'src/features/behavior-questionnaire-and-social-communication/types/behaviorQuestionnaireAndSocialCommunication';

export const BehaviorQuestionnaireAndSocialCommunicationSchema = new Schema({

/*isAbleToConverseUsingShortPhrasesOrSentences: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
ifNotProceedToQuestion9: {
  type: String,
  default: ''
},
doesHeTalkToYouJustToBeFriendly: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
canYouHaveADialogue: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeUseStrangePhrasesOrSayThingsRepeatedly: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenUseSociallyInappropriateQuestionsOrStatements: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenUsePronounsInverted: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenUseWordsThatHeSeemsToHaveInvented: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenSayTheSameThingRepeatedly: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
areThereThingsThatAreDoneByHimInAParticularWay: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHisFacialExpressionGenerallySeemAppropriate: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
hasHeEverUsedYourHandAsATool: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenHaveSpecialInterestsThatSeemWeirdToOthers: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenGetMoreInterestedInPartsOfAnObject: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenHaveSpecificInterests: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenInAWierdWayLookFeelListenTasteOrSmellThingsOrPeople: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenHaveMannerismsOrStrangeWaysOfMovingHisHandsOrFingers: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenMakeComplexMovementsWithHisWholeBody: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeOftenHurtHimselfOnPurpose: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeHaveAnObjectThatHeCarriesAround: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
doesHeHaveAParticularFriendOrABestFriend: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeRepeatedOrImitateWhatYouDid: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHePointAtThings: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeUseGesturesToSHowWhatHeWanted: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeUseHisHeadToSayYes: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeShakeHisHeadToSayNo: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeUsuallyLookYouDirectlyInTheFace: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeSmileBackIfSomeoneSmiledAtHim: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeShowThingsOfHisInterestToGetYourAttention: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeShareThingsWithYouBesidesFood: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeWantYouToParticipateInSomethingThatWasEntertainingHim: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4To5YearsOldDidHeTryToComfortYouIfYouWereSadOrHurt: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
betweenTheAgesOf4To5YearsWhenHeWantedSomethingOrSomeHelpDidHeLookAtYou: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
betweenTheAgesOf4To5YearsDidHeHaveNormalFacialExpressions: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHeParticipateSpontaneouslyInSocialGames: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHePlayImaginaryGames: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHeSeemInterestedInOtherChildren: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHeReactPositivelyWhenAnotherChildApproachedHim: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldIfYouEnteredTheRoomAndStartedACConversationWithHim: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHePlayMakeBelieveWithAnotherChild: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
whenHeWas4Or5YearsOldDidHePlayCooperativelyInGroupGames: {
  type: String,
  enum: ['sim', 'não', ''],
  default: ''
},
*/
isAbleToConverseUsingShortPhrasesOrSentences: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  ifNotProceedToQuestion9: {
    type: Number,
    default: 0,
  },
  doesHeTalkToYouJustToBeFriendly: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  canYouHaveADialogue: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeUseStrangePhrasesOrSayThingsRepeatedly: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenUseSociallyInappropriateQuestionsOrStatements: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenUsePronounsInverted: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenUseWordsThatHeSeemsToHaveInvented: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenSayTheSameThingRepeatedly: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  areThereThingsThatAreDoneByHimInAParticularWay: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHisFacialExpressionGenerallySeemAppropriate: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  hasHeEverUsedYourHandAsATool: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenHaveSpecialInterestsThatSeemWeirdToOthers: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenGetMoreInterestedInPartsOfAnObject: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenHaveSpecificInterests: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenInAWierdWayLookFeelListenTasteOrSmellThingsOrPeople: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenHaveMannerismsOrStrangeWaysOfMovingHisHandsOrFingers: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenMakeComplexMovementsWithHisWholeBody: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeOftenHurtHimselfOnPurpose: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeHaveAnObjectThatHeCarriesAround: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  doesHeHaveAParticularFriendOrABestFriend: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeRepeatedOrImitateWhatYouDid: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHePointAtThings: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeUseGesturesToSHowWhatHeWanted: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeUseHisHeadToSayYes: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeShakeHisHeadToSayNo: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeUsuallyLookYouDirectlyInTheFace: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeSmileBackIfSomeoneSmiledAtHim: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeShowThingsOfHisInterestToGetYourAttention: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeShareThingsWithYouBesidesFood: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeWantYouToParticipateInSomethingThatWasEntertainingHim: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4To5YearsOldDidHeTryToComfortYouIfYouWereSadOrHurt: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  betweenTheAgesOf4To5YearsWhenHeWantedSomethingOrSomeHelpDidHeLookAtYou: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  betweenTheAgesOf4To5YearsDidHeHaveNormalFacialExpressions: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHeParticipateSpontaneouslyInSocialGames: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHePlayImaginaryGames: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHeSeemInterestedInOtherChildren: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHeReactPositivelyWhenAnotherChildApproachedHim: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldIfYouEnteredTheRoomAndStartedACConversationWithHim: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHePlayMakeBelieveWithAnotherChild: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  whenHeWas4Or5YearsOldDidHePlayCooperativelyInGroupGames: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },

    scoreAsq: { 
        yesScore:{ type: Number, default: 0 },
        noScore:{ type: Number, default: 0 },
        },

    totalResultAsq: {
        resultTotal: { type: Number, default: 0 }
        }
    
});
export interface IBehaviorQuestionnaireAndSocialCommunicationEntity extends Omit<IBehaviorQuestionnaireAndSocialCommunication, '_id'>, Document { }