import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";

export enum ResponseBoolean {
  'NAO' = 'NAO',
  'SIM COM MEDIACAO' = 'SIM COM MEDIACAO',
  'SIM' = 'SIM',
}


export class Socialization0To1Year {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  observesAPersonMovingInTheirVisualField?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  smilesInResponseToAdultAttention?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  vocalizesInResponseToAttention?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  looksAtOwnHandSmilingOrVocalizing?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  respondsToFamilyCircleSmilingVocalizingOrStoppingCrying?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  smilesInResponseToOthersFacialExpressions?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  smilesAndVocalizesWhenSeeingImageInMirror?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  caressesOrTouchesAdultsFacesPullsHairNoseGlassesEtc?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reachesTowardsAnOfferedObject?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reachesArmsTowardsFamilyMembers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  extendsHandAndTouchesOwnReflectedImageInMirror?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  holdsAndExaminesGivenObjectFor1Minute?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  shakesOrSqueezesAnObjectPlacedInHandProducingInvoluntarySounds?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsAloneFor10Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  seeksEyeContactWhenSomeonePaysAttentionFor2To3Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsAloneWithoutComplainingFor15To20MinutesNearAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  vocalizesToGetAttention?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  imitatesAdultInPeekABooGames?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  clapsHandsImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  wavesHandImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  raisesArmsToExpressBigImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  offersSomethingButDoesNotAlwaysDeliver?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hugsCaressesAndKissesFamilyMembers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  respondsToOwnNameLookingOrExtendingArmToBePickedUp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  squeezesOrShakesToyToProduceSoundsInImitation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  manipulatesToyOrObject?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  extendsAToyOrObjectToAnAdultAndDeliversIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  imitatesMovementsOfOtherChildrenWhilePlaying?: ResponseBoolean;
}

export class Socialization1To2Years {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  imitatesAnAdultInASimpleTask?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsNextToAnotherChildEachPerformingDifferentTasks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesPartInAPlayWithAnotherChildFor2To5Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  acceptsParentsAbsenceAlthoughMayComplain?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  activelyExploresItsEnvironment?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  performsManipulativeActivityWithAnotherPerson?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hugsAndCarriesADollOrSoftToy?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  repeatsActionsThatProduceLaughterAndAttention?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  givesABookForAnAdultToReadOrForBothToShare?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pullsAPersonToShowThemSomething?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  withdrawsHandOrSaysNoWhenNearForbiddenObjectAndSomeoneRemindsIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whenPlacedInChairOrChangingTableWaitsToBeAttended?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsWith2Or3ChildrenOfSameAge?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sharesAnObjectOrFoodWithAnotherChild?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  greetsPeersOrAdultsWhenReminded?: ResponseBoolean;
}

export class Socialization2To3Years {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  obeysParentsOrdersAtLeastHalfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  seeksOrTakesAnObjectOrPersonWhenAsked?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  paysAttentionToStoryOrMusicFor5To10Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysPleaseOrThankYouWhenReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  triesToHelpParentsPerformTasksByDoingPartOfIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsAtWearingAdultsClothes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesAChoiceWhenAsked?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  demonstratesUnderstandingOfFeelingsExpressingThem?: ResponseBoolean;
}

export class Socialization3To4Years {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  singsAndDancesWhenHearingMusic?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  followsRulesOfAGameImitatingActionsOfOtherChildren?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  greetsFamilyMembersWithoutBeingReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  followsRulesInGroupGamesDirectedByAdults?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  asksPermissionToPlayWithAToyBeingUsedByAnotherChild?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysPleaseAndThankYouWithoutBeingRemindedHalfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  answersThePhoneCallingAnAdultAndSpeakingWithFamilyMembers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  waitsItsTurn?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  followsRulesInGamesDirectedByAnOlderChild?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  obeysParentsInstructionsInPublicPlaces?: ResponseBoolean;
}

export class Socialization4To5Years {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  asksForHelpWhenHavingDifficulties?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  contributesToAdultConversation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  repeatsRhymesSongsOrDancesForOthers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  doesATaskAloneFor20To30Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  apologizesWithoutBeingReminded75PercentOfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  waitsItsTurnInPlayInvolving8To9Children?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsWith2To3ChildrenFor20MinutesInAnActivityInvolvingCooperation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whenInPublicPresentsASociallyAcceptableBehavior?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  asksPermissionToUseOthersObjects75PercentOfTheTime?: ResponseBoolean;
}

export class Socialization5To6Years {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  expressesItsFeelings?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  playsWith4To5ChildrenInCooperativeActivityFor20MinutesWithoutSupervision?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  explainsToOthersTheRulesOfTheGameOrActivity?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  imitatesAdultRoles?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  collaboratesInConversationDuringMeals?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  followsRulesOfAGameInvolvingVerbalReasoning?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  comfortsPeersWhenTheyAreSad?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  choosesItsOwnFriends?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  plansAndBuildsUsingSimpleTools?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  setsGoalsForItselfAndPerformsActivityToAchieveThem?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  dramatizesExcerptsFromStoriesPlayingARoleOrUsingPuppets?: ResponseBoolean;
}


// LINGUAGEM
export class Language0To1Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    expressesItsFeelings?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    playsWith4To5ChildrenInCooperativeActivityFor20MinutesWithoutSupervision?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    explainsToOthersTheRulesOfTheGameOrActivity?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    imitatesAdultRoles?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    collaboratesInConversationDuringMeals?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    followsRulesOfAGameInvolvingVerbalReasoning?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    comfortsPeersWhenTheyAreSad?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    choosesItsOwnFriends?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    plansAndBuildsUsingSimpleTools?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    setsGoalsForItselfAndPerformsActivityToAchieveThem?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    dramatizesExcerptsFromStoriesPlayingARoleOrUsingPuppets?: ResponseBoolean;
}

export class Language1To2Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    says5DifferentWords?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    asksForMore?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysDone?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    obeys3DifferentOrdersThatAreNotAccompaniedByIndicativeGestures?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    managesToGiveOrShowWhenAsked?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsTo12ObjectsWhenNamed?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsTo3To5FiguresInABook?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsTo3PartsOfOwnBody?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysOwnNameOrNicknameWhenAsked?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToTheQuestionWhatIsThis?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    combinesWordsAndGesturesToExpressWishes?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    names5FamilyMembersIncludingAnimals?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    names4Toys?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    producesAnimalSoundsOrNamesThemByTheSound?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    asksForKnownFoodsByNameWhenShown?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    asksQuestionsVaryingIntonationOfVoice?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    names3BodyPartsOnADollOrAnotherPerson?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToYesNoQuestions?: ResponseBoolean;
}

export class Language2To3Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    combinesNounsOrAdjectivesAndNounsIn2WordSentences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    combinesNounAndVerbIn2WordSentences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesAWordToIndicateThatWantsToGoToTheBathroom?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    combinesVerbOrNounWithThereAndHereIn2WordSentences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    combines2WordsToExpressPossession?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesNoInSpeech?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToTheQuestionWhatIsDoingForHabitualActivity?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToQuestionsLikeWhereIsObject?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    namesFamiliarEnvironmentalSounds?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    givesMoreThanOneObjectWhenUsingThePluralFormInTheRequest?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    whenSpeakingRefersToItselfByName?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToFiguresOfCommonObjectsDescribedByUseUpTo10WhatIsUsedToEatSpoon?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    showsAgeByFingers?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysSexWhenAsked?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    obeysTheSequenceOfTwoRelatedOrders?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesTheVerbFormInTheGerund?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsRegularPluralForms?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsSomeIrregularFormsOfVerbsInThePastSystematically?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    asksQuestionsLikeWhatIsThis?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    controlsVolumeOfVoice90PercentOfTheTime?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesThisAndThatInSpeech?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsIsAndIsLocatedInSimpleSentences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysIMeMineInsteadOfOwnName?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToObjectsAndSaysTheyAreNotOtherThings?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToTheQuestionWhoGivingAName?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsPossessiveFormsOfNouns?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesArticlesWhenSpeaking?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesNounsThatIndicateAGroupOrCategory?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesTheVerbsToBeToExistAndToHaveInThePresentWithFewErrors?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysIfObjectsAreOpenOrClosed?: ResponseBoolean;
}

export class Language3To4Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    expressesDiminutivesAndAugmentativesWhenSpeaking?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    paysAttentionFor5MinutesToAReadStory?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    obeysSequenceOf2UnrelatedOrders?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysFullNameWhenAsked?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsSimpleQuestionsInvolvingHow?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsRegularVerbsInThePast?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    reportsImmediateExperiences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysHowCommonObjectsAreUsed?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    expressesFutureActionsUsingVerbsToGoToHaveAndToWant?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesMasculineAndFeminineAppropriatelyInSpeech?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesImperativeFormsOfVerbsWhenAskingForFavors?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    tells2FactsInOrderOfOccurrence?: ResponseBoolean;
}

export class Language4To5Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    obeysASequenceInvolving3Orders?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    demonstratesUnderstandingOfReflexiveVerbsUsingThemOccasionallyExHeGotHurt?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    managesToIdentifyObjectsFiguresThatFormAPairUponRequest?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsFutureWhenSpeaking?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesSentencesComposedByCoordination?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    managesToIdentifyTheTopAndBottomPartOfObjectsWhenRequested?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsOccasionallyTheConditionalWhenSpeakingCouldWouldCouldWouldMake?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    managesToIdentifyAbsurditiesInFigures?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    employsTheFollowingWordsBrotherSisterGrandmotherGrandfather?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    completesSentencesWithAntonyms?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    tellsAKnownStoryWithoutHelpOfFigures?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    inAFigureNamesTheObjectThatDoesNotBelongToACertainCategory?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysIfTwoWordsRhymeOrNot?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesComplexSentencesComposedBySubordination?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysIfASoundIsLoudOrSoft?: ResponseBoolean;
}

export class Language5To6Years {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    managesToIndicateSomeManyAndSeveralElements?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysOwnAddress?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    saysOwnPhoneNumber?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToTheSetThatHasMoreLessOrFewElements?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    tellsSimpleJokes?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    reportsDailyExperiences?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    describesALocationOrMovementThroughOrBetweenAwayFromFromSinceToOverUpTo?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    answersTheQuestionWhyWithAnExplanation?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    ordersAndTellsAStoryOf2To5EpisodesInTheCorrectSequence?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    definesWords?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsAppropriatelyToTheQuestionWhatIsTheOppositeOf?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    respondsToTheQuestionWhatHappensIf?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    usesYesterdayAndTomorrowCorrectly?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    asksTheMeaningOfNewOrKnownQuestions?: ResponseBoolean;
}

// COGNIÇÃO
export class Cognition0To1Year {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    removesAClothFromFaceThatObscuresVision?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    looksForObjectThatHasBeenRemovedFromItsVisualField?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    removesAnObjectFromAReceptacleByPuttingHandInsideIt?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    placesAnObjectInAReceptacleImitatingAnAdult?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    placesAnObjectInAReceptacleWhenGivenInstructions?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    shakesAToyThatProducesSoundHangingFromAString?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    placesThreeObjectsInAReceptacleAndEmptiesIt?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    transfersAnObjectFromOneHandToAnotherToPickUpAnotherObject?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    dropsAndPicksUpAToy?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    discoversAnObjectHiddenUnderAReceptacle?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pushes3BlocksAsIfItWereATrain?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    removesACircleFromABoardByImitation?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    placesARoundPinInAPinBoardWhenRequested?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    performsSimpleGesturesWhenRequested?: ResponseBoolean;
}

export class Cognition1To2Years{
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    removes6ObjectsFromAReceptacleOneAtATime?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToAPartOfTheBody?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    stacks3BlocksGivenTheOrder?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    matchesSimilarObjects?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    scribblesOnPaper?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToItselfWhenAskedWhereIsName?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    places5RoundPinsGivenTheOrder?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    matchesObjectsWithTheFigureOfTheSameName?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToTheNamedFigure?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    turnsThePagesOfABook23AtATimeToFindTheNamedFigure?: ResponseBoolean;
}

export class Cognition2To3YearsDto {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    findsACertainBookWhenRequested?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    completesA3PieceJigsawPuzzle?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    names4CommonObjectsInFigures?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    drawsAVerticalLineImitatingAnAdult?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    drawsAHorizontalLineImitatingAnAdult?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    copiesACircle?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    matchesObjectsWithTheSameTexture?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pointsToSmallAndBigWhenRequested?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    drawsAPlusSignImitatingAnAdult?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    matches3Colors?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    placesObjectsInsideOnTopAndUnderAReceptacleGivenTheOrder?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    namesObjectsWhenHearsTheNoiseTheyMake?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    mountsA4PieceFittingToy?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    namesActionsInFiguresWhatIsDoing?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    matchesGeometricShapeWithTheFigureOfTheSame?: ResponseBoolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    stacks5OrMoreRingsOnARodInOrder?: ResponseBoolean;
}

export class Cognition3To4YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  namesObjectsAsBeingBigOrSmall?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pointsTo10PartsOfTheBodyWhenRequested?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pointsToBoyAndGirlGivenTheOrder?: ResponseBoolean;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysIfAnObjectIsHeavyOrLight?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unites2PartsOfAFigureToFormTheWhole?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  describes2EventsOrCharactersFromAFamiliarStoryOrTvProgram?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  repeatsGamesRhymesOrSongsThatInvolveCoordinatedMovements?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  matches3OrMoreObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pointsToLongOrShortObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  associatesCorrespondingObjectsExSockShoe?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  countsUpTo3ImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  groupsObjectsIntoCategories?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tracesAVInImitation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tracesADiagonalLineGivenTheExample?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  countsUpTo10ObjectsImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buildsABridgeWith3BlocksByImitation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  matchesASequenceOrPatternSizeColorOfBlocksOrBeads?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  copiesASeriesOfInterconnectedV?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  addsALegOrArmToAnIncompleteDrawingOfTheHumanFigure?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  completesA6PiecePuzzle?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  indicatesIfObjectsAreEqualOrDifferent?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drawsASquareImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names3ColorsBeingRequested?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names3GeometricShapesSquareTriangleAndCircle?: ResponseBoolean;
}

export class Cognition4To5YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  picksUpFrom1To5ObjectsWhenRequested?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names5DifferentTextures?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  copiesATriangleWhenRequested?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  remembers4ObjectsThatHadBeenSeenInAFigure?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysTheTimeOfTheDayAssociatedWithEachActivity?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  repeatsFamiliarRhymes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysIfAnObjectIsHeavierOrLighterObjectsWithADifferenceOf05Kilo?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysWhatIsMissingWhenAnObjectIsRemovedFromAGroupOf3Objects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names8Colors?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  identifiesTheValueOf3Coins?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  matchesSymbolsLettersAndNumbers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysTheColorOfNamedObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reports5MainFactsOfAStoryTold3Times?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drawsHumanFigureHeadTorsoAnd4Limbs?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sings5VersesOfASong?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buildsAPyramidOf10BlocksByImitation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  namesObjectsAsBeingLongOrShort?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  placesObjectsBehindBesideOrNextToOthers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesEqualSetsOf10ObjectsAccordingToModel?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  namesOrPointsToTheMissingPartOfTheFigure?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  countsFrom1To20?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  identifiesTheObjectThatIsPlacedInTheMiddleInFirstAndLastPlace?: ResponseBoolean;
}

export class Cognition5To6YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  countsUpTo20ObjectsAndAnswersAppropriatelyToTheQuestionHowManyDidYouCount?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names10Numerals?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  identifiesWhichIsItsLeftAndWhichIsItsRight?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysTheVowelsInOrder?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  writesOwnNameWithBlockLetters?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  names5LettersOfTheAlphabet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  objectsInSequenceOfLengthAndWidth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  namesTheUppercaseLettersOfTheAlphabet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  placesNumeralsFrom1To10InTheCorrectSequence?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  identifiesThePositionOfObjectsInFirstSecondAndThirdPlace?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  namesTheLowercaseLettersOfTheAlphabet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  matchesUppercaseLettersWithLowercaseOnes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pointsToNumeralsFrom1To25?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  copiesARhombus?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  completesASimpleLabyrinth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysTheDaysOfTheWeekInOrder?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  addsAndSubtractsCombinationsOfUpTo3Elements?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  saysTheMonthAndDayOfOwnBirthday?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reads10PrintedWords?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  predictsWhatWillOccur?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pointsToWholeAndHalfObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  countsFromMemoryFrom1To100AskToStopAt40AndContinueAt80IfNoErrorsUntil40?: ResponseBoolean;
}

// SELF CARE
export class SelfCare0To1YearDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sucksAndSwallowsLiquids?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsPorridgeOrSoup?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  extendsHandsTowardsBabyBottleTryingToGrabIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsPureedFoodsGivenByParents?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  holdsBabyBottleWithoutHelpWhileDrinking?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  bringsBottleToMouthOrRefusesItPushingItAway?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsMashedFoodsGivenByParents?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drinksFromAMugHeldByParents?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsSemisolidFoodsGivenByParents?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  feedsItselfUsingFingers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  holdsTheMugWithBothHandsAndDrinks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  bringsASpoonFullOfFoodToMouthWithHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  stretchesArmsAndLegsWhenBeingDressed?: ResponseBoolean;
}

export class SelfCare1To2YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsWithSpoonIndependently?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  holdsMugWithOneHandAndDrinks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsHandInWaterAndPatsFaceWithWetHandsImitatingSomeone?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sitsOnAPottyOrChildsToiletFor5Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsAHatOnHeadAndRemovesIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesOffSocks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pushesArmsThroughSleevesAndFeetThroughTrouserLegs?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesOffShoesWhenLacesAreUntied?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesOffCoatWhenUnbuttoned?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesOffTrousersWhenUnbuttoned?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pullsALargeZipperUpAndDown?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesWordsOrGesturesIndicatingNeedToGoToTheBathroom?: ResponseBoolean;
}

export class SelfCare2To3YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  eatsAloneUsingSpoonOrMugSpillingALittleFoodOrLiquid?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whenGivenATowelDriesHandsAndFaceWithHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sucksLiquidFromTheGlassOrMugUsingAStraw?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesForkfuls?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  chewsAndSwallowsOnlyEdibleSubstances?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  driesHandsWithoutHelpWhenGivenATowel?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  warnsThatWantsToGoToTheBathroomEvenIfItIsTooLate?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  controlsOwnDrool?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  urinatesOrDefecatesWhenPlacedInPottyAtLeast3TimesAWeek?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsOnShoes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  brushesTeethImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  removesSimpleClothesThatHaveBeenUnbuttoned?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesTheBathroomToDefecateFailsOnlyOnceAWeek?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  obtainsWaterFromAFaucetWithoutHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  washesHandsAndFaceWithSoap?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  warnsThatWantsToGoToTheBathroomDuringTheDayInTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hangsCoatOnAHookAtItsOwnHeight?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  staysDryWhenSleepingDuringTheDay?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  avoidsRisksExSharpEdgesOnFurnitureAndStairsWithoutHandrail?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesANapkinWhenRecommended?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  piercesTheForkInTheFoodTakingItToTheMouth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  poursLiquidFromASmallPitcherIntoAGlassWithoutHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unfastensClothesFastenedWithASnapFastener?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  washesArmsAndLegsWhenGivenABath?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsOnSocks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  wearsCoatJacketOrShirt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  identifiesTheFrontPartOfClothes?: ResponseBoolean;
}

export class SelfCare3To4YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  feedsItselfAloneForEntireMeal?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  dressesItselfAloneNeedingHelpOnlyWhenThereAreJacketsOrTShirtsWithClosedCollarsOrButtonsAndFasteners?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  wipesNoseWhenReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  wakesUpDry2MorningsAWeek?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  ifBoyUrinatesInTheToiletWhileStanding?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  dressesAndUndressesItselfAloneExceptForButtonsAndFasteners75PercentOfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fastensClothesWithSnapsOrHooks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  blowsNoseWhenReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  avoidsCommonDangersExBrokenGlass?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hangsClothesOnAHangerAndPutsInClosetWhenAsked?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  brushesTeethWhenReceivesInstruction?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsOnGloves?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsOnBoots?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unbuttonsLargeButtons?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buttonsLargeButtons?: ResponseBoolean;
}

export class SelfCare4To5YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cleansWhatItSpilledOnOwn?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  avoidsPoisonAndAllHarmfulSubstances?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unbuttonsOwnClothes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buttonsOwnClothes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  removesPlateAndCutleryFromTheTable?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fitsZipperIntoItsTermination?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  washesHandsAndFace?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesAppropriateCutleryToEat?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  wakesUpAtNightToGoToTheBathroomOrWakesUpDry?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cleansAndBlowsItsNose75PercentOfTheTimeWithoutBeingReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  bathesAloneNeedingHelpOnlyToWashBackNeckAndEars?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesAKnifeToSpreadButterOnBread?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tightensAndLoosensBeltsOrBuckles?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  dressesItselfAloneButDoesNotTieLaces?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  servesItselfAtTheTableWhileHoldingTheFoodPlatter?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  helpsSetTheTableCorrectlyWhenReceivesInstructions?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  brushesTeeth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  goesToTheBathroomInTimeRemovesClothesUsesToiletPaperFlushesAndDressesWithoutHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  combsOrBrushesHair?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hangsClothesOnHangers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksAroundTheNeighborhoodWithoutConstantSupervision?: ResponseBoolean;

   @ApiProperty()
  @IsBoolean()
  @IsOptional()
   threadsLacesIntoShoes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tiesOrLacesShoelaces?: ResponseBoolean;
}

export class SelfCare5To6YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isResponsibleForAWeeklyTaskAndPerformsItWhenReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  selectsAppropriateClothingForClimateAndOccasion?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  stopsOnTheSidewalkLooksBothWaysAndCrossesTheStreetWithoutNeedingToBeReminded?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  servesItselfAtTheTableAndPassesThePotOfFoodToOthers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  preparesOwnCupOfCoffeeWithMilk?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isResponsibleForADailyTaskAtHome?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  adjustsTheTemperatureOfWaterForBathing?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  preparesOwnSnack?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksAloneUpToADistanceOf2BlocksFromHome?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsTenderFoodsWithAKnife?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  findsTheBathroomInAPublicPlaceCorrectly?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  opensTheMilkPackage?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  picksUpATrayWithFoodCarryingItAndPlacingItOnTheTable?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tiesTheLacesOnJacketsWithHood?: ResponseBoolean;

   @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fastensTheCarSeatBelt?: ResponseBoolean;
}
export class MotorDevelopment0To1YearDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reachesForAnObjectPlacedInFrontOfIt15To20Cm?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  grabsAnObjectPlacedInFrontOfIt8Cm?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  extendsArmsTowardAnObjectInFrontOfItAndGrabsIt?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reachesForAPreferredObject?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  putsObjectsInMouth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  raisesHeadAndTorsoSupportingSelfOnOneArm?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  touchesAndExploresObjectsWithMouth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inPronePositionTurnsOnBack?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inPronePositionMovesForwardTheEquivalentOfItsHeight?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inSupinePositionRollsToTheSide?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inSupinePositionTurnsFromStomachToBack?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesEffortToSitHoldingOntoAdultsFingers?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  turnsHeadEasilyWhenTheBodyIsSupported?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sitsFor2Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  releasesAnObjectToGrabAnother?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  grabsAndDropsAnObjectPurposefully?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  standsWithMaximumSupport?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whileStandingWithSupportJumpsUpAndDown?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  crawlsToGrabAnObjectDistantItsHeight?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sitsSupportingSelfAlone?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whileSittingTurnsToCrawling?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whileInPronePositionManagesToSit?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sitsWithoutHandSupport?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  throwsObjectsAtRandom?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  swaysBackAndForthWhenCrawling?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  transfersObjectsFromOneHandToAnotherWhenSitting?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  retains2CubesOf25CmInOneHand?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  getsOnKnees?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  standsSupportingSelfOnSomething?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesPincerGripToPickUpObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  crawls?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whileCrawlingExtendsOneHandUpwards?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  standsWithMinimumSupport?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  licksFoodAroundMouth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  maintainsSelfStandingAloneFor1Minute?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  knocksDownAnObjectThatIsInsideAReceptacle?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  turnsSeveralPagesOfABookAtTheSameTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  scoopsWithASpoonOrSpade?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  placesSmallObjectsInsideAReceptacle?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  whileStandingLowersItselfAndSits?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  clapsHands?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksWithMinimumSupport?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  takesAFewStepsWithoutSupport?: ResponseBoolean;
}

export class MotorDevelopment1To2YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsStairsCrawling?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  placesItselfStandingWhileSitting?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  rollsABallImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsOntoAnAdultChairTurnsAndSits?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  puts4RingsOnASmallStake?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  removes25CmPinsFromABoardOrTray?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fits25CmPinsIntoAFittingBoard?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buildsATowerOf3Blocks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesTracesOnPaperWithPencilOrCrayon?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksAlone?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  goesDownStairsSittingPuttingFeetFirst?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  sitsInASmallChair?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  crouchesAndReturnsToStand?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pushesAndPullsToysWhenWalking?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesAChairOrRockingHorse?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsStairsWithHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  imitatesACircularMovement?: ResponseBoolean;
}

export class MotorDevelopment2To3YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  threads4LargeBeadsOnACordIn2Minutes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  turnsLatchesOrDoorknobsOnDoors?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsInTheSamePlaceWithBothFeet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksBackwards?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  goesDownStairsWithoutHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  throwsABallToAnAdultAtA1HalfDistance?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  buildsATowerOf5To6Blocks?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  turnsPagesOfABookOneAtATime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unwrapsASmallObject?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  foldsAPaperInHalfImitatingAnAdult?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  dismantlesAndRebuildsPressureFitToys?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  unscrewsToysThatFitWithThreads?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  kicksALargeBallThatIsStill?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesBallsOfClayMudOrPlasticine?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  doesForwardTumbleWithHelp?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hammersToFit5PinsInTheirHoles?: ResponseBoolean;
}

export class MotorDevelopment3To4YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  makesAPuzzleOf3Pieces?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsSomethingIntoPiecesWithScissors?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsFromAHeightOf20Cm?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  kicksALargeBallWhenSentToYou?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksOnTiptoes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pedalsWithTricycleTheDistanceOf1AndAHalfMeters?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  swingsOnASwingWhenItIsInMotion?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsOnASlideOf120MTo180MAndSlidesDown?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  doesForwardTumbles?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsStairsAlternatingFeet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  marchesWalksInARhythmicalWay?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  parriesTheBallWithBothHands?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drawsFiguresFollowingOutlinesOrDottedLines?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine?: ResponseBoolean;
}

export class MotorDevelopment4To5YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  standsOnOneFootWithoutSupportFor4To8Seconds?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  changesDirectionWhenRunning?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksOnABeamOrBoardMaintainingBalance?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsForward10TimesWithoutFalling?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsOverARopeSuspended5CmFromTheGround?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsBackwards6Times?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reboundsAndCatchesALargeBall?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  joins2To3PiecesOfPlasticine?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsAroundCurvedLines?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fitsScrewObjects?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  goesDownStairsAlternatingFeet?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pedalsATricycleMakingTurns?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsOnOneFoot5ConsecutiveTimes?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsACircleIn5Cm?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drawsSimpleEasilyIdentifiableFiguresExHouse?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsAndPastesSimpleShapes?: ResponseBoolean;
}

export class MotorDevelopment5To6YearsDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksWhileHopping?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  swingsOnASwingStartingAndMaintainingTheMovement?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  stretchesFingersTouchingThumbToEachOfThem?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  copiesCapitalLetters?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  climbsOnLaddersOrASlideOf3M?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hammersANailWithAHammer?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  reboundsTheBallAsItWalksWithDirection?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  cutsOutFiguresWithoutLeavingMoreThan6MmFromTheMargin?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  usesPencilSharpener?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  copiesComplexDrawingsSchoolShip?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  tearsSimpleFiguresFromThePaper?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  foldsASquarePaper2XDiagonallyByImitation?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  catchesALightBallWithOneHand?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsRopeAlone?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  strikesABallWithAStickOrPieceOfWood?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  catchesAnObjectOnTheFloorWhileRunning?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  skatesADistanceOf3MOrUsesASkateboard?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  ridesABicycle?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  slidesDownAHillOfSandOrEarth?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist?: ResponseBoolean;

   @ApiProperty()
  @IsBoolean()
  @IsOptional()
  drivesAScooterGivingImpulseWithOneFootOnly?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsAndTurnsOnOneFoot?: ResponseBoolean;

   @ApiProperty()
  @IsBoolean()
  @IsOptional()
  writesOwnNameWithBlockLettersInLinedNotebook?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  jumpsFromAHeightOf30CmAndFallsOnTiptoes?: ResponseBoolean;

   @ApiProperty()
  @IsBoolean()
  @IsOptional()
  stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds?: ResponseBoolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hangsfor10SecondsOnAHorizontalBar?: ResponseBoolean;
}


 export class CreatePortageGuidetoPreschoolEducationDto {

  @ApiProperty()
  patient: string;

  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional()
  birthDay: string;

  @ApiProperty()
  doctor: string;

  @ApiProperty({
  type: String,
  format: 'date',
  example: 'dd/MM/yyyy'})
  @IsOptional()
  Date: string;



  @ApiProperty({ type: Socialization0To1Year})
  socialization0To1Years: Socialization0To1Year

  @ApiProperty({ type: Socialization1To2Years})
  socialization1To2Years: Socialization1To2Years

  @ApiProperty({ type: Socialization2To3Years})
  socialization2To3Years: Socialization2To3Years

  @ApiProperty({ type: Socialization3To4Years})
  socialization3To4Years : Socialization3To4Years

  @ApiProperty({ type: Socialization4To5Years})
  socialization4To5Years: Socialization4To5Years

  @ApiProperty({ type: Socialization5To6Years})
  socialization5To6Years: Socialization5To6Years

  @ApiProperty({ type: Language0To1Years})
  language0To1Years: Language0To1Years

  @ApiProperty({ type: Language1To2Years})
  language1To2Years: Language1To2Years

  @ApiProperty({ type: Language2To3Years})
  language2To3Years:Language2To3Years

  @ApiProperty({ type: Language3To4Years})
  language3To4Years:Language3To4Years

  @ApiProperty({ type: Language4To5Years})
  language4To5Years:Language4To5Years

  @ApiProperty({ type: Language5To6Years})
  language5To6Years:Language5To6Years

  @ApiProperty({ type: Cognition0To1Year})
  cognition0To1Year:Cognition0To1Year

  @ApiProperty({ type: Cognition1To2Years})
  cognition1To2Years:Cognition1To2Years

  @ApiProperty({ type: Cognition2To3YearsDto})
  Cognition2To3YearsDto:Cognition2To3YearsDto

  @ApiProperty({ type: Cognition3To4YearsDto})
  Cognition3To4YearsDto:Cognition3To4YearsDto

  @ApiProperty({ type: Cognition4To5YearsDto})
  Cognition4To5YearsDto:Cognition4To5YearsDto

  @ApiProperty({ type: Cognition5To6YearsDto})
  Cognition5To6YearsDto:Cognition5To6YearsDto

  @ApiProperty({ type: SelfCare0To1YearDto})
  SelfCare0To1YearDto: SelfCare0To1YearDto

  @ApiProperty({ type: SelfCare1To2YearsDto})
  SelfCare1To2YearsDto:SelfCare1To2YearsDto

  @ApiProperty({ type: SelfCare2To3YearsDto})
  SelfCare2To3YearsDto: SelfCare2To3YearsDto

  @ApiProperty({ type: SelfCare3To4YearsDto})
  SelfCare3To4YearsDto:SelfCare3To4YearsDto

  @ApiProperty({ type: SelfCare4To5YearsDto})
  SelfCare4To5YearsDto:SelfCare4To5YearsDto

  @ApiProperty({ type: SelfCare5To6YearsDto})
  SelfCare5To6YearsDto:SelfCare5To6YearsDto

  @ApiProperty({ type: MotorDevelopment0To1YearDto})
  MotorDevelopment0To1YearDto:MotorDevelopment0To1YearDto

  @ApiProperty({ type: MotorDevelopment1To2YearsDto})
  MotorDevelopment1To2YearsDto:MotorDevelopment1To2YearsDto

  @ApiProperty({ type: MotorDevelopment2To3YearsDto})
  MotorDevelopment2To3YearsDto:MotorDevelopment2To3YearsDto

  @ApiProperty({ type: MotorDevelopment3To4YearsDto})
  MotorDevelopment3To4YearsDto:MotorDevelopment3To4YearsDto

  @ApiProperty({ type: MotorDevelopment4To5YearsDto})
  MotorDevelopment4To5YearsDto:MotorDevelopment4To5YearsDto

  @ApiProperty({ type: MotorDevelopment5To6YearsDto})
  MotorDevelopment5To6YearsDto:MotorDevelopment5To6YearsDto


  @ApiProperty()
  totalResult: number;
}