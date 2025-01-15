import { IAvaliations } from "./avaliations" 

export interface IAvMilestone {
    avMilestone1: AvMilestoneAv1
    avMilestone2: AvMilestoneAv2
    avMilestone3: AvMilestoneAv3
}

export interface AvMilestoneAv1 {
    level1: {
        mand: {
          emitsTwoWordsSignsOrPecsButMayRequireEchoicImitativeOrOtherCueExceptPhysicalCues: IAvaliations,
          emitsFourDifferentMandsWithoutCuesExceptWhatDoYouWant: IAvaliations,
          generalizesSixMandsBetweenTwoPeopleTwoEnvironmentsAndTwoDifferentExamplesOfAReinforcer: IAvaliations,
          spontaneouslyEmitsFiveMandsWithoutVerbalCues: IAvaliations,
          emitsTenDifferentMandsWithoutCuesExceptWhatDoYouWant: IAvaliations
        },
        tact: {
          tactsTwoItemsWithEchoicOrImitativeCue: IAvaliations,
          tactsFourAnyItemsWithEchoicOrImitativeCue: IAvaliations,
           tactsSixNonReinforcingItems: IAvaliations,
           spontaneouslyTactsTwoDifferentItemsWithoutVerbalCues: IAvaliations,
          tactsTenItems: IAvaliations
        },
        listener: {
          attendsToTheVoiceOfASpeakerMakingEyeContactWithTheSpeaker: IAvaliations,
           respondsToHearingTheirOwnName: IAvaliations,
           looksTouchesOrPointsToTheCorrectFamilyMemberAnimalOrOtherReinforcerWhenPresentedInASetOfTwoStimuli: IAvaliations,
          performsFourDifferentMotorActionsUnderCommandWithoutAVisualCue: IAvaliations,
         selectsTheCorrectItemInASetOfFourStimuliTwentyDifferentObjectsOrFigures: IAvaliations
        },
        visualPerceptionAndMatchingSkills: {
          visuallyTracksMovingStimuliForTwoSeconds: IAvaliations,
          graspsSmallObjectsWithThumbAndIndexFingerPincerGrasp: IAvaliations,
          visuallyAttendsToAToyOrBookForThirtySeconds: IAvaliations,
          placesThreeItemsInAContainerStacksThreeBlocksOrPlacesThreeRingsOnAStakes: IAvaliations,
         matchesTenIdenticalItemsPuzzleInlayToysOrFigures: IAvaliations
        },
        independentPlay: {
          manipulatesAndExploresObjectsForOneMinute: IAvaliations,
          presentsVariationInPlayByIndependentInteractionWithFiveDifferentItems: IAvaliations,
           demonstratesGeneralizationByEngagingInExploratoryMovementAndPlayingWithToysInANewEnvironmentForTwoMinutes: IAvaliations,
          independentlyEngagesInMovementPlayForTwoMinutes: IAvaliations,
           independentlyEngagesInCauseAndEffectGamesForTwoMinutes: IAvaliations
        },
        socialBehaviorAndSocialPlay: {
          makesEyeContactAsAMand: IAvaliations,
          indicatesThatTheyWantToBeCarriedOrWantsPhysicalPlay: IAvaliations,
           makesEyeContactWithOtherChildren: IAvaliations,
          spontaneouslyEngagesInParallelPlayWhenNearAnotherChild: IAvaliations,
          spontaneouslyFollowsPeersOrImitatesMotorBehavior: IAvaliations
        },
          imitation: {
          imitatesTwoGrossMovementsWithCueDosLikeThis: IAvaliations,
          imitatesFourGrossMotorMovementsWithCueDosLikeThis: IAvaliations,
           imitatesEightMotorMovementsTwoInvolvingObjects: IAvaliations,
           spontaneouslyImitatesMotorBehaviorsOfOthers: IAvaliations,
           imitatesTwentyMotorMovementsOfAnyType: IAvaliations
           },
           spontaneousVocalBehavior: {
              spontaneouslyEmitsAnAverageOfFiveSoundsPerHour: IAvaliations,
            spontaneouslyEmitsFiveDifferentSoundsAnAverageOfTenSoundsTotalPerHour: IAvaliations,
             spontaneouslyEmitsTenDifferentSoundsWithVariedIntonationsAverageOfTwentyFiveSoundsTotalPerHour: IAvaliations,
            spontaneouslyEmitsFiveDifferentApproximationsOfWholeWords: IAvaliations,
              spontaneouslyVocalizesFifteenWholeWordsOrPhrasesWithAppropriateIntonationAndRhythm: IAvaliations
            },
            total: 0
      },
}
export interface AvMilestoneAv2 {

    level2: {
        mand: {
          asksForTwentyDifferentItemsThatAreNotPresentWithoutACueExceptWhatDoYouNeed: IAvaliations,
          asksForOthersToEmitFiveDifferentActionsOrActionsThatAreMissingAndAreNeededToEnjoyADesiredActivity: IAvaliations,
          emitsFiveDifferentMandsThatContainTwoOrMoreWordsNotIncludingIWant: IAvaliations,
          spontaneouslyEmitsFifteenDifferentMands: IAvaliations,
          emitsTenNewMandsWithoutSpecificTraining: IAvaliations
        },
        tact: {
          tactsTwentyFiveItemsWhenAskedWhatIsThat: IAvaliations,
          generalizesTactsAcrossThreeExamplesOfFiftyItemsOrFromAListOfKnownGeneralizations: IAvaliations,
          tactsTenDifferentActionsWhenAskedForExampleWhatAmIDoing: IAvaliations,
          tactsFiftyCombinationsOfTwoComponentVerbNounOrNounVerb: IAvaliations,
          tactsTwoHundredNounsAndOrVerbsOrOtherPartsOfLanguage: IAvaliations
        },
        listener: {
          selectsTheCorrectItemFromAnUnorganizedSetOfSixForFortyDifferentObjectsOrFigures: IAvaliations,
          generalizesResponsesOfListenerDiscriminationInAnUnorganizedSetOfEightForThreeDifferentExamplesOfFiftyItems: IAvaliations,
          performsTenSpecificMotorActionsUnderCommand: IAvaliations,
          followsFiftyInstructionsOfTwoComponentsNounVerbAndOrVerbNoun: IAvaliations,
          selectsTheCorrectItemInABookPictureOfASceneOrNaturalEnvironmentWhenNamedForTwoHundredAndFiftyItems: IAvaliations
        },
        visualPerceptionAndMatchingSkills: {
          matchesIdenticalObjectsOrFiguresInAnUnorganizedSetOfSixForTwentyFiveItems: IAvaliations,
          categorizesSimilarColorsAndShapesForTenDifferentColorsOrShapesGivenModels: IAvaliations,
          matchesIdenticalObjectsOrFiguresInAnUnorganizedSetOfEightContainingThreeSimilarStimuliForTwentyFiveItems: IAvaliations,
          matchesNonIdenticalObjectsOrFiguresInAnUnorganizedSetOfTenForTwentyFiveItems: IAvaliations,
          matchesNonIdenticalObjectsThreeDWithFiguresTwoDAndOrViceVersaInAnUnorganizedSetOfTenContainingThreeSimilarStimuliForTwentyFiveItems: IAvaliations
        },
        independentPlay: {
          searchesForAMissingOrMatchingPartOfAToyInAnEnvironmentForFiveItemsOrSets: IAvaliations,
          independentlyDemonstratesTheUseOfToysOrObjectsAccordingToFunctionForFiveItems: IAvaliations,
          playsWithEverydayItemsInCreativeWays: IAvaliations,
          independentlyEngagesInPlayOnAPlaygroundStructureAndEquipmentForATotalOfFiveMinutes: IAvaliations,
          assemblesToysThatHaveMultiplePartsForFiveDifferentGroupsOfMaterials: IAvaliations
        },
        socialBehaviorAndSocialPlay: {
          initiatesAphysicalInteractionWithAPeer: IAvaliations,
          spontaneouslyEmitsMandsToPeers: IAvaliations,
          engagesInContinuousSocialPlayWithPeersForThreeMinutesWithoutAdultCuesOrReinforcement: IAvaliations,
          spontaneouslyRespondsToMandsFromPeers: IAvaliations,
          spontaneouslyAsksPeersToParticipateInGamesSocialPlayEtc: IAvaliations
        },
        imitation: {
          imitatesTenActionsThatRequireSelectionOfASpecificObjectFromASet: IAvaliations,
          imitatesTwentyDifferentFineMotorActionsWhenGivenTheCueDoThis: IAvaliations,
          imitatesTenDifferentSequencesOfThreeComponentActionsWhenProvidedTheCueDoThis: IAvaliations,
          spontaneouslyImitatesFiveFunctionalSkillsInTheNaturalEnvironment: IAvaliations,
          imitatesOrAttemptsToImitateInAnApproximateFormAnyNewMotorActionModeledByAnAdultWithAndWithoutObjects: IAvaliations
        },
        listenerResponseByFunctionCharacteristicAndClass: {
          selectsFiveDifferentFoodsOrDrinksWhenEachIsPresentedInASetOfFiveItemsWithFourNonFoodsOrFourNonDrinksAndAskedToVerballyFillInYouEatAndYouDrink: IAvaliations,
          selectsTheCorrectItemFromASetOfEightToCompleteTwentyFiveDifferentFCCInstructionsOfAnyType: IAvaliations,
          selectsTheCorrectItemFromASetOfTenOrFromABookForTwentyFiveDifferentQuestionsFormedOfVerbNounROFCCUsingWhichWhatAndWho: IAvaliations,
          selectsAnItemGivenThreeDifferentVerbalStatementsAboutEachItemWhenPresentedIndependently: IAvaliations,
          tactsItemsSpontaneouslyInFiftyPercentOfTheAttempts: IAvaliations
        },
        intraverbal: {
          completesTenBlankSpacesInDifferentPhrasesOfSomeType: IAvaliations,
          providesTheFirstNameWhenAskedWhatIsYourName: IAvaliations,
          completesTwentyFiveDifferentBlankSpacesInPhrasesNotIncludingSounds: IAvaliations,
          answersTwentyFiveDifferentWhatQuestions: IAvaliations,
          answersTwentyFiveDifferentWhoAndWhereQuestions: IAvaliations
        },
       classroomRoutinesAndGroupSkills: {
          sitsAtTheTableWithTheGroupWithoutExhibitingInappropriateBehaviorsForThreeMinutes: IAvaliations,
          placesPersonalItemsDistantlyOrganizesThemAndComesToTheTableWithAVerbalCue: IAvaliations,
          transitionsBetweenActivityRoomsWithAGesturalOrVerbalCueOnly: IAvaliations,
          sitsInASmallGroupForFiveMinutesWithoutInappropriateBehaviorOrTryingToLeaveTheGroup: IAvaliations,
          sitsInASmallGroupForTenMinutesAttendsToTheTeacherOrMaterialForFiftyPercentOfThePeriodAndRespondsToFiveSDsFromTheTeacher: IAvaliations
        },
        languageStructure: {
          theChildsArticulationOfTenTactsCanBeUnderstoodByFamiliarAdultsWhoCannotSeeTheTactedItem: IAvaliations,
          hasATotalListenerVocabularyOfOneHundredWords: IAvaliations,
          emitsTenDifferentTwoWordVocalizationsPerDayOfAnyTypeExceptEchoic: IAvaliations,
          emitsFunctionalProsodyFiveTimesInADay: IAvaliations,
          hasATotalSpeakerVocabularyOfThreeHundredWords: IAvaliations
        },
        total: 0
      }
}

export interface AvMilestoneAv3 {
      level3: {
        mand: {
          spontaneouslyAsksForDifferentVerbalInformationUsingInterrogativePronounsOrAQuestionWord: IAvaliations,
           politelyAsksToStopAnUndesirableActivityOrRemoveSomeAversiveEstablishingOperationInFiveDifferentCircumstances: IAvaliations,
           mandsWithTenDifferentAdjectivesPrepositionsOrAdverbs: IAvaliations,
          givesDirectionsInstructionsOrExplanationsAboutHowToDoSomethingOrHowToParticipateInAnActivity: IAvaliations,
          asksForOthersToPayAttentionToTheirOwnIntraverbalBehavior: IAvaliations
        },
        tact: {
        tactsTheColorShapeAndFunctionOfFiveObjectsWhenEachObjectAndQuestionIsPresentedInMixedOrder: IAvaliations,
          tactsFourDifferentPrepositionsAndFourPronouns: IAvaliations,
           tactsFourDifferentAdjectivesExcludingColorsAndShapesAndFourAdverbs: IAvaliations,
           tactsWithCompleteSentencesContainingFourOrMoreWords: IAvaliations,
           hasATotalTactingVocabularyOfOneThousandWordsNamesVerbsAdjectivesEtc: IAvaliations
        },
       listener: {
        selectsItemsByColorAndShapeFromAnArrangementOfSixSimilarStimuliForFourColorsAndFourShapes: IAvaliations,
          followsTwoInstructionsInvolvingSixDifferentPrepositionsAndFourDifferentPronouns: IAvaliations,
            selectsItemsFromAnArrangementOfSimilarStimuliBasedOnFourPairsOfRelativeAdjectivesAndDemonstratesActionsBasedOnFourPairsOfRelativeAdverbs: IAvaliations,
         followsThreeStepInstructionsForTenDifferentDirections: IAvaliations,
         hasATotalListenerRepertoireOfOneThousandAndTwoHundredWordsNamesVerbsAdjectivesEtc: IAvaliations
       },
       visualPerceptionAndMatchingSkills: {
         spontaneouslyMatchesAnyPartOfAnArtsActivityWithAnotherPersonsModel: IAvaliations,
          demonstratesGeneralizedNonIdenticalMatchingInAnUnorganizedArrangementOfTenWithThreeSimilarStimuliForTwentyFiveItems: IAvaliations,
         completesTwentyDifferentTypesOfBlocksParquetryShapePuzzlesOrSimilarTasksInAtLeastEightDifferentPieces: IAvaliations,
         organizesFiveItemsFromFiveDifferentCategoriesWithoutAModel: IAvaliations,
         continuesTwentyThreeStepPatternsSequencesOrSeraitionTasks: IAvaliations
       },
        independentPlay: {
          spontaneouslyEngagesInImaginativeOrMakeBelievePlayOnFiveOccasions: IAvaliations,
          repeatsAGrossMotorBehaviorToAchieveABetterEffectForTwoActivities: IAvaliations,
           independentlyEngagesInArtAndCraftTypeActivitiesForFiveMinutes: IAvaliations,
          independentlyEngagesInSustainedPlayActivitiesForTenMinutesWithoutAdultCuesOrReinforcement: IAvaliations,
           independentlyDrawsOrWritesInPreAcademicActivityBooksForFiveMinutes: IAvaliations
        },
       socialBehaviorAndSocialPlay: {
        spontaneouslyCooperatesWithAPeerToAchieveASpecificOutcome: IAvaliations,
          spontaneouslyMandsToPeersWithAnInterrogativePronoun: IAvaliations,
        intraverballyRespondsToFiveDifferentQuestionsOrStatementsFromAPeer: IAvaliations,
          engagesInMakeBelieveSocialPlayActivitiesWithPeersForFiveMinutesWithoutAdultCuesOrReinforcement: IAvaliations,
          engagesInFourVerbalExchangesOfOneTopicWithPeersForFiveTopics: IAvaliations
      },
      listenerResponseByFunctionCharacteristicAndClass: {
         selectsTheCorrectItemFromAMatrixOfTenThatContainsThreeSimilarStimuliForTwentyFiveDifferentQuestionsWithInterrogativePronounsOfListenerTasksByFCC: IAvaliations,
           selectsAnItemFromABookBasedOnTwoVerbalComponentsOrACharacteristicFunctionOrClassForTwentyFiveItems: IAvaliations,
          selectsItemsFromABookPageOrInTheNaturalEnvironmentBasedOnThreeVerbalComponentsForTwentyFiveWHQuestionsInListenerTasksByFCC: IAvaliations,
          selectsCorrectItemsFromABookOrInTheNaturalEnvironmentGivenFourDifferentRotatingQuestionsAboutASingleTopicForTwentyFiveDifferentTopics: IAvaliations,
        demonstratesOneThousandDifferentResponsesOfListenerTasksByFCCTestedOrFromTheAccumulatedListOfKnownResponses: IAvaliations
       },
        intraverbal: {
             spontaneouslyEmitsTwentyIntraverbalsInTheFormOfAComment: IAvaliations,
           demonstratesThreeHundredOrMoreIntraverbalResponsesTestedOrFromTheAccumulatedListOfKnownIntraverbalResponses: IAvaliations,
           answersTwoQuestionsAfterReadingShortPassagesInABookForTwentyFivePassages: IAvaliations,
        describesTwentyFiveDifferentEventsVideosStoriesEtcWithEightOrMoreWords: IAvaliations,
            answersFourDifferentWHQuestionsIncludingWhereRotatingAboutASingleTopicForTenTopics: IAvaliations
      },
       classroomRoutinesAndGroupSkills: {
         usesTheBathroomAndWashesHandsWithVerbalCuesOnly: IAvaliations,
           respondsToFiveDifferentGroupInstructionsOrQuestionsWithoutDirectCuesInAGroupOfThreeOrMoreChildren: IAvaliations,
            worksIndependentlyForFiveMinutesInAGroupAndRemainsEngagedInTheTaskForFiftyPercentOfThePeriod: IAvaliations,
          acquiresTwoNewBehaviorsInA15MinuteGroupTeachingFormatInvolvingFiveOrMoreChildren: IAvaliations,
         sitsInAGroupSettingForTwentyMinutesInvolvingFiveChildrenWithoutDisruptiveBehaviorsAndRespondsToFiveIntraverbalQuestions: IAvaliations
       },
        languageStructure: {
         emitsNomialInflectionsMatchingTenOriginalNounsWithPluralSuffixesAndTenOriginalNounsWithPossessivePronouns: IAvaliations,
           emitsVerbalInflectionsMatchingTenOriginalVerbsToFormThePastTenseAndTenOriginalVerbsToFormTheFutureTense: IAvaliations,
            emitsTenDifferentNounPhrasesContainingAtLeastThreeWordsWithTwoModifiers: IAvaliations,
          emitsTenDifferentVerbalPhrasesContainingAtLeastThreeWordsWithTwoModifiers: IAvaliations,
           combinesNounAndVerbInThePhraseToProduceTenDifferentGrammaticallyCorrectSentencesContainingAtLeastFiveWords: IAvaliations
        },
        reading: {
         attendsToABookWhenAStoryIsBeingReadToTheChildInSeventyFivePercentOfTheTime: IAvaliations,
          selectsListenerDiscriminationTheCorrectUpperCaseLettersFromASetOfFiveLettersForTenDifferentLetters: IAvaliations,
         tactsTenUpperCaseLettersUnderCommand: IAvaliations,
         readsTheirOwnName: IAvaliations,
          matchesFiveWordsToCorrespondingPicturesOrItemsInASetOfFiveAndViceVersa: IAvaliations
        },
        writing: {
              imitatesFiveDifferentWrittenActionsModeledByAnAdultUsingAWritingInstrumentAndAWritingSurface: IAvaliations,
             independentlyTracesFiveDifferentGeometricShapesWithinOneFourthInchOfTheLines: IAvaliations,
               copiesTenLegibleLettersOrNumbers: IAvaliations,
           spellsAndWritesLegiblyTheirOwnNameWithoutCopying: IAvaliations,
              copiesAllTwentySixUppercaseAndLowercaseLettersLegibly: IAvaliations
        },
      mathematics: {
              identifiesAsAListenerTheNumbersFromOneToFiveInASetOfFiveDifferentNumbers: IAvaliations,
              tactsTheNumbersFromOneToFive: IAvaliations,
              countsItemsFromOneToFiveFromALargeSetOfItemsWithOneToOneCorrespondence: IAvaliations,
           identifiesAsAListenerEightDifferentComparisonsInvolvingMeasures: IAvaliations,
          correctlyMatchesAWrittenNumberToTheQuantityAndTheQuantityToTheWrittenNumberForTheNumbersFromOneToFive: IAvaliations
        },
            total: 0
      }
  }