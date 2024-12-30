import { Schema, Document } from 'mongoose';
import { IBehaviorQuestionnaireAndSocialCommunication } from 'src/features/behavior-questionnaire-and-social-communication/types/behaviorQuestionnaireAndSocialCommunication';

export const BehaviorQuestionnaireAndSocialCommunicationSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  //patient: {type: Schema.Types.ObjectId, ref: 'User'},
  //doctor: {type: Schema.Types.ObjectId, ref: 'User'},
  questions: {
    isAbleToConverseUsingShortPhrasesOrSentences: { type: Boolean },
    ifNotProceedToQuestion9: { type: Boolean },
    doesHeTalkToYouJustToBeFriendly: { type: Boolean },
    canYouHaveADialogue: { type: Boolean },
    doesHeUseStrangePhrasesOrSayThingsRepeatedly: { type: Boolean },
    doesHeOftenUseSociallyInappropriateQuestionsOrStatements: { type: Boolean },
    doesHeOftenUsePronounsInverted: { type: Boolean },
    doesHeOftenUseWordsThatHeSeemsToHaveInvented: { type: Boolean },
    doesHeOftenSayTheSameThingRepeatedly: { type: Boolean },
    areThereThingsThatAreDoneByHimInAParticularWay: { type: Boolean },
    doesHisFacialExpressionGenerallySeemAppropriate: { type: Boolean },
    hasHeEverUsedYourHandAsATool: { type: Boolean },
    doesHeOftenHaveSpecialInterestsThatSeemWeirdToOthers: { type: Boolean },
    doesHeOftenGetMoreInterestedInPartsOfAnObject: { type: Boolean },
    doesHeOftenHaveSpecificInterests: { type: Boolean },
    doesHeOftenInAWierdWayLookFeelListenTasteOrSmellThingsOrPeople: { type: Boolean },
    doesHeOftenHaveMannerismsOrStrangeWaysOfMovingHisHandsOrFingers: { type: Boolean },
    doesHeOftenMakeComplexMovementsWithHisWholeBody: { type: Boolean },
    doesHeOftenHurtHimselfOnPurpose: { type: Boolean },
    doesHeHaveAnObjectThatHeCarriesAround: { type: Boolean },
    doesHeHaveAParticularFriendOrABestFriend: { type: Boolean },
    whenHeWas4To5YearsOldDidHeRepeatedOrImitateWhatYouDid: { type: Boolean },
    whenHeWas4To5YearsOldDidHePointAtThings: { type: Boolean },
    whenHeWas4To5YearsOldDidHeUseGesturesToShowWhatHeWanted: { type: Boolean },
    whenHeWas4To5YearsOldDidHeUseHisHeadToSayYes: { type: Boolean },
    whenHeWas4To5YearsOldDidHeShakeHisHeadToSayNo: { type: Boolean },
    whenHeWas4To5YearsOldDidHeUsuallyLookYouDirectlyInTheFace: { type: Boolean },
    whenHeWas4To5YearsOldDidHeSmileBackIfSomeoneSmiledAtHim: { type: Boolean },
    whenHeWas4To5YearsOldDidHeShowThingsOfHisInterestToGetYourAttention: { type: Boolean },
    whenHeWas4To5YearsOldDidHeShareThingsWithYouBesidesFood: { type: Boolean },
    whenHeWas4To5YearsOldDidHeWantYouToParticipateInSomethingThatWasEntertainingHim: { type: Boolean },
    whenHeWas4To5YearsOldDidHeTryToComfortYouIfYouWereSadOrHurt: { type: Boolean },
    betweenTheAgesOf4To5YearsWhenHeWantedSomethingOrSomeHelpDidHeLookAtYou: { type: Boolean },
    betweenTheAgesOf4To5YearsDidHeHaveNormalFacialExpressions: { type: Boolean },
    whenHeWas4Or5YearsOldDidHeParticipateSpontaneouslyInSocialGames: { type: Boolean },
    whenHeWas4Or5YearsOldDidHePlayImaginaryGames: { type: Boolean },
    whenHeWas4Or5YearsOldDidHeSeemInterestedInOtherChildren: { type: Boolean },
    whenHeWas4Or5YearsOldDidHeReactPositivelyWhenAnotherChildApproachedHim: { type: Boolean },
    whenHeWas4Or5YearsOldIfYouEnteredTheRoomAndStartedACConversationWithHim: { type: Boolean },
    whenHeWas4Or5YearsOldDidHePlayMakeBelieveWithAnotherChild: { type: Boolean },
    whenHeWas4Or5YearsOldDidHePlayCooperativelyInGroupGames: { type: Boolean }
  }
  

    
});
export interface IBehaviorQuestionnaireAndSocialCommunicationEntity extends Omit<IBehaviorQuestionnaireAndSocialCommunication, '_id'>, Document {}