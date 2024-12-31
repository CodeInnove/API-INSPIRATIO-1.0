import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsString } from 'class-validator';




export class QuestionsAsqDTO{
  
  @ApiProperty()
  @IsString()
  patient: string;
  
  @ApiProperty()
  @IsString()
  doctor: string;
  
  
  @ApiProperty()
  @IsBoolean()
  isAbleToConverseUsingShortPhrasesOrSentences: boolean;
  
  @ApiProperty()
  @IsBoolean()
  ifNotProceedToQuestion9: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeTalkToYouJustToBeFriendly: boolean;
  
  @ApiProperty()
  @IsBoolean()
  canYouHaveADialogue: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeUseStrangePhrasesOrSayThingsRepeatedly: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenUseSociallyInappropriateQuestionsOrStatements: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenUsePronounsInverted: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenUseWordsThatHeSeemsToHaveInvented: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenSayTheSameThingRepeatedly: boolean;
  
  @ApiProperty()
  @IsBoolean()
  areThereThingsThatAreDoneByHimInAParticularWay: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHisFacialExpressionGenerallySeemAppropriate: boolean;
  
  @ApiProperty()
  @IsBoolean()
  hasHeEverUsedYourHandAsATool: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenHaveSpecialInterestsThatSeemWeirdToOthers: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenGetMoreInterestedInPartsOfAnObject: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenHaveSpecificInterests: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenInAWierdWayLookFeelListenTasteOrSmellThingsOrPeople: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenHaveMannerismsOrStrangeWaysOfMovingHisHandsOrFingers: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenMakeComplexMovementsWithHisWholeBody: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeOftenHurtHimselfOnPurpose: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeHaveAnObjectThatHeCarriesAround: boolean;
  
  @ApiProperty()
  @IsBoolean()
  doesHeHaveAParticularFriendOrABestFriend: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeRepeatedOrImitateWhatYouDid: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHePointAtThings: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeUseGesturesToShowWhatHeWanted: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeUseHisHeadToSayYes: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeShakeHisHeadToSayNo: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeUsuallyLookYouDirectlyInTheFace: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeSmileBackIfSomeoneSmiledAtHim: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeShowThingsOfHisInterestToGetYourAttention: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeShareThingsWithYouBesidesFood: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeWantYouToParticipateInSomethingThatWasEntertainingHim: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4To5YearsOldDidHeTryToComfortYouIfYouWereSadOrHurt: boolean;
  
  @ApiProperty()
  @IsBoolean()
  betweenTheAgesOf4To5YearsWhenHeWantedSomethingOrSomeHelpDidHeLookAtYou: boolean;
  
  @ApiProperty()
  @IsBoolean()
  betweenTheAgesOf4To5YearsDidHeHaveNormalFacialExpressions: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHeParticipateSpontaneouslyInSocialGames: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHePlayImaginaryGames: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHeSeemInterestedInOtherChildren: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHeReactPositivelyWhenAnotherChildApproachedHim: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldIfYouEnteredTheRoomAndStartedACConversationWithHim: boolean;
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHePlayMakeBelieveWithAnotherChild: boolean;
  
  
  @ApiProperty()
  @IsBoolean()
  whenHeWas4Or5YearsOldDidHePlayCooperativelyInGroupGames: boolean;
  
}

/*export class CreateBehaviorQuestionDto {
  @ValidateNested()
  @Type(() => QuestionsAsqDTO)
  @ApiProperty({ type: QuestionsAsqDTO })
  questions: QuestionsAsqDTO;
  

}*/