export interface IDataCollection {
    levelOne: ICreateLevelOne;
    levelTwo: ICreateLevelTwo;
    levelThree: ICreateLevelThree;
    levelFour: ICreateLevelFour;
}

export interface ICreateLevelOne {
    receptiveCommunication:{
        locatesSoundsTurningTowardsSoundSource: IMetrics;
        looksAtPlayfulVocalSounds: IMetrics;
        respondsToVoiceTurningTowardsPerson: IMetrics;
        looksAtImagesIndicatedAsAdultPointsToBookImages: IMetrics;
        followsProximalPointToPlaceObjectsInContainersPuzzlePiecesEtc: IMetrics;
        looksWhenShownAnObjectAndToldNameLook: IMetrics;
        looksAtPartnerWhenCalledByName: IMetrics;
        followsProximalPointOfAnObjectOrLocation: IMetrics;
        followsDistalPointToRetrieveToy: IMetrics;
        looksReachesOrSmilesInResponseToAdultGesturesAndVoiceInSocialGames: IMetrics;
        looksReachesSmilesOrGesturesInResponseToAdultsLanguageGesturesInSongs: IMetrics;
        respondsByInterruptingActionsMomentarilyInResponseToInhibitoryWords: IMetrics;
        givesObjectRequestedVerballyWhenCombinedWithAdultsOutstretchedHand: IMetrics;
        executesOneStepRoutineInstructionInvolvingBodyActionsCombinedWithVerbalGesturalCues: IMetrics;
        executesRoutineVerbalInstructionInvolvingBodyActionsWithoutGestureSupport: IMetrics;
    }

    expressiveCommunication: {
        usesDirectedReachToMakeRequests: IMetrics,
        vocalizesWithIntention: IMetrics,
        asksForHelpByHandingAnObjectToAdult: IMetrics,
        takesTurnsVocalizingWithCommunicationPartner: IMetrics,
        expressesRefusalByPushingObjectAwayOrReturningObjectToOtherPerson: IMetrics,
        pointsToNearbyLocationToRequestDesiredObjects: IMetrics,
        establishesEyeContactToObtainDesiredObjectWhenAdultBlocksAccessOrRetainsDesiredObject: IMetrics,
        pointsToIndicateAChoiceBetweenTwoObjects: IMetrics,
        combinesVocalizationAndGazeForIntentionalRequests: IMetrics,
        pointsToADistantLocationToRequestDesiredObjects: IMetrics,
        pointsToADistantPlaceToIndicateAChoiceBetweenTwoObjects: IMetrics,
        vocalizesWithReduplicatedBabblingCVCV: IMetrics,
        producesFiveOrMoreConsonantsInSpontaneousVocalizations: IMetrics,
        producesCVCVWithDifferentCVSequences: IMetrics
    }

    imitation:{
        imitates8To10ActionsOfASchemaWithObjects: IMetrics,
        imitates10VisibleMotorActionsWithinASongOrGameRoutines: IMetrics,
        imitatesSixInvisibleMotorActionsOnHeadOrFaceInSongsOrGameRoutines: IMetrics,
        imitatesSixOrofacialMovements: IMetrics
    }

    cognition:{
        matchesOrGroupsIdenticalObjects: IMetrics,
        matchesOrGroupsIdenticalImages: IMetrics,
        matchesOrGroupsImagesAndObjects: IMetrics,
        matchesOrGroupsObjectsByColor: IMetrics
    }
}

export interface ICreateLevelTwo {
    receptiveCommunication:{
        followsInstructionsToStopOrWaitWithoutAidsOrGestures: IMetrics,
        follows8To10VerbalInstructionsOfABehaviorInvolvingBodyActionsAndActionsWithObjects: IMetrics,
        identifiesByPointingOrShowingSeveralNamedBodyPartsOnSelfOrAnotherPerson: IMetrics,
        respondsToVerbalInstructionsToGivePointOrShow8To10SpecificObjectsInNaturalPlayRoutinesDressingAndFeeding: IMetrics,
        identifiesByPointingAndDirectingGazeToThreeNamedImagesInABook: IMetrics,
        understandsInitialSpatialConcepts: IMetrics,
        looksAtPeopleAndPhotographsOfPeopleWhenNamedFamilyAnimalsTeachers: IMetrics,
        obtains8To10VerballyRequestedObjectsInTheRoomButNotDirectlyInFrontOfTheChildRequiringSomeSearch: IMetrics,
        uponVerbalRequestsWithGesturalCuesCompletesTwoActionsDoubleCommandsWithAnObject: IMetrics,
        pointsToNamedBodyPartsInAnImage: IMetrics
    }

    expressiveCommunication: {
        usesTargetSignsOrGesturesWithVocalizationToExpressFourFunctions: IMetrics,
        produces6To10WordsOrApproximationsWithinTheContextOfFamilyRoutinesSensorySocialRoutinesAndSongs: IMetrics,
        producesSpontaneouslySeveralWordsAssociatedWithAGameRoutine: IMetrics,
        usesFunctionally20OrMoreApproximationsOfNamesAndNonNominals: IMetrics,
        namesObjectsAndImagesSpontaneously: IMetrics,
        vocalizesWithAVarietyOfIntonationsDuringSongsEtc: IMetrics,
        makesRequestsAndRefusesUsingSingleWordsWithEyeContact: IMetrics,
        namesActionsInContext: IMetrics,
        makesApproximationsToTheNameOfThreeImportantPeople: IMetrics,
        shakesHeadAndSaysNoToRefuse: IMetrics,
        nodsHeadAndSaysYesToAffirm: IMetrics,
        asksApproximationWhatIsThatWhenFacedWithSomethingUnknown: IMetrics
    }

    imitation:{
        imitatesAVarietyOfVowelAndConsonantSoundsDuringVerbalApproximationsInMeaningfulCommunications: IMetrics,
        imitatesAnimalSoundsAndOtherSounds: IMetrics,
        imitatesRecognizableSingleWordsSpontaneouslyAndFrequentlyInInteractions: IMetrics,
        imitatesTheMovementsForFiveSongsImitatesAtLeast10DifferentActions: IMetrics,
        imitatesOrApproximatesSequentialActionsInSongs: IMetrics,
        imitatesActionsWithObjectsMultiStepActions: IMetrics,
        imitatesPretendActionsForHerselfAndWithMiniatures: IMetrics,
        imitatesTwoSequencesOfMovementsInSongOrGameRoutines: IMetrics,
        imitatesTwoWordPhrases: IMetrics
    }

    cognition:{
        matchesOrGroupsByShapes: IMetrics,
        matchesOrGroupsBySize: IMetrics,
        matchesOrGroupsDrawingsAndOutlines: IMetrics,
        sortsSimilarObjectsIntoGroups: IMetrics,
        groupsCommonObjectsIntoFunctionalGroups: IMetrics,
        searchesOrAsksForMissingObjects: IMetrics,
        matchesOrGroupsInTwoDimensions: IMetrics,
        matchesByQuantityFromOneToThree: IMetrics
    }
}

export interface ICreateLevelThree {
    receptiveCommunication:{
        paysAttentionAndJoinsWithInterestFor5To10MinutesWhileAdultReadsAFamiliarBookUsingSimplePhrases: IMetrics,
        followsNewOneStepOrdersInvolvingFamiliarObjectsOrActions: IMetrics,
        identifiesManyCommonObjectsAndTheirImages: IMetrics,
        respondsAppropriatelyToYesOrNoQuestionsAboutPreferences: IMetrics,
        identifiesFiveOrMoreActionsInPicturesOrBooks: IMetrics,
        followsTwoOrMoreInstructionsGivenInSituationalRoutines: IMetrics,
        perceivesSpatialRelationshipsInvolvingObjects: IMetrics,
        differentiatesInitialSizeConceptsLargeOrSmall: IMetrics,
        differentiatesAtLeastFourDifferentColorsWhenRequested: IMetrics,
        identifies20ItemsBySound: IMetrics,
        understandsTheFunctionOfCommonObjects: IMetrics,
        understandsThePersonalPronounsMineAndYours: IMetrics,
        identifies10ActionsThroughImagesChoicesRepresentations: IMetrics,
        followsTwoOrMoreUnrelatedActionsInANewContext: IMetrics
    }

    expressiveCommunication: {
        producesACombinationOfTwoToThreeWordsForAVarietyOfCommunicativeIntentions: IMetrics,
        producesUtterancesOfTwoOrMoreWordsToMakeCommentsToAnotherPerson: IMetrics,
        namesActionsInPicturesOrBooks: IMetrics,
        makesCommentsAndRequestsForLocation: IMetrics,
        makesCommentsAndRequestsUsingInitialPossessiveForms: IMetrics,
        gesturesOrVocalizesIDontKnowInContext: IMetrics,
        usesConsistentlyTheNameOfOtherPeopleToAttractAttention: IMetrics,
        conveysASimpleMessageToAnotherPerson: IMetrics,
        saysHelloAndGoodbyeAppropriately: IMetrics,
        usesPronounsForHimselfAndForOthers: IMetrics,
        usesSimpleWordsAndGesturesToDescribePersonalExperiences: IMetrics,
        namesOneOrTwoColors: IMetrics,
        respondsAppropriatelyToWhatQuestions: IMetrics,
        respondsAppropriatelyToWhereQuestions: IMetrics,
        respondsAppropriatelyToWhoQuestions: IMetrics,
        asksSimpleYesNoQuestionsUsingARisingIntonation: IMetrics,
        asksWhatAndWhereQuestions: IMetrics,
        answersQuestionsAboutSimpleInformation: IMetrics
    }

    cognition:{
        matchesLettersInOwnName: IMetrics,
        matchesLetters: IMetrics,
        matchesWords: IMetrics,
        matchesNumbers: IMetrics,
        identifiesReceptivelyAndExpressivelySomeLettersNumbersShapesAndColors: IMetrics,
        playsGamesThatInvolveMemoryForHiddenObjects: IMetrics,
        categorizesObjectsOrImagesIntoEightClasses: IMetrics,
        understandsTheRelationshipBetweenQuantitiesAndNumericalSymbolsUpToNumberFive: IMetrics,
        countsTheCorrectNumberOfObjectsUpToFive: IMetrics,
        sequencesThreeOrMoreImagesInTheCorrectOrderAndNarratesTheSequenceOfImagesUsingLanguageSuchAsFirstThen: IMetrics
    }
}

export interface ICreateLevelFour {
    receptiveCommunication:{
        understandsAVarietyOfDescriptivePhysicalRelationshipConcepts: IMetrics,
        retrieves10To15ItemsUsing2To3MultipleCues: IMetrics,
        understandsGenderPronouns: IMetrics,
        understandsComparatives: IMetrics,
        understandsSpatialRelationshipsInvolvingObjectsAndPrepositionalLocutions: IMetrics,
        understandsNegations: IMetrics,
        understandsPossessivesAndPartWholeRelationships: IMetrics,
        demonstratesAttentionToShortStoriesAndUnderstandingOfStoryPartsByAnsweringSimpleWhatAndWhoQuestions: IMetrics,
        respondsToYesOrNoQuestionsForIdentity: IMetrics,
        respondsToQuestionsAboutPhysicalStates: IMetrics,
        respondsToQuestionsOfPersonalInformation: IMetrics,
        understandsEqualAndDifferent: IMetrics,
        understandsConceptsOfQuantity: IMetrics,
        identifiesTheCharacteristicsOfObjects: IMetrics,
        answersQuestionsRelatedToTheCategoryOfObjectsOrImages: IMetrics,
        understandsPastAndFutureTense: IMetrics,
        understandsPassiveVoice: IMetrics,
        understandsTemporalRelationships: IMetrics,
        followsThreePartUnrelatedVerbalInstructions: IMetrics
    }

    expressiveCommunication: {
        respondsToComplexQuestions: IMetrics,
        describesTheFunctionOfObjectsInResponseToAQuestion: IMetrics,
        speaksWithThreeOrFourWordUtterancesConsistently: IMetrics,
        usesAVarietyOfNounPhrases: IMetrics,
        usesPrepositionalPhrases: IMetrics,
        usesAVarietyOfVerbalExpressions: IMetrics,
        demonstratesAnAccurateProductionOfAtLeast80PercentOfAllConsonantsAndConsonantBlendsWithinConnectedSpeech: IMetrics,
        describesRecentExperiencesUsingThreeToFourWordUtterances: IMetrics,
        asksPermissionToContinueAnActivity: IMetrics,
        usesPluralForms: IMetrics,
        usesPossessives: IMetrics,
        usesTheRegularPastTense: IMetrics,
        usesArticlesLikeAAnThe: IMetrics,
        usesComparativesAndSuperlatives: IMetrics,
        usesTheNegative: IMetrics,
        usesVerbsInThePresent: IMetrics,
        usesWordsToDescribePhysicalStates: IMetrics,
        answersQuestionsAboutPhysicalStates: IMetrics,
        usesTheCategoriesOfTheNamesForFamiliarObjects: IMetrics,
        describesTheCharacteristicsOfObjects: IMetrics,
        usesReflexivePronouns: IMetrics,
        answersThePhoneAppropriately: IMetrics,
        participatesInAConversationInitiatedByAnAdultInTwoOrThreeTurnsInvolvingAVarietyOfFunctions: IMetrics,
        initiatesAndMaintainsAConversationWithAnAdultOnATopicGeneratedByHerself: string,
        describesSequencesOfTwoOrThreeEventsOfActivities: IMetrics,
        expressesIDontKnowAccompaniedByTheGesture: IMetrics,
        asksForExplanationsIfTheyDidNotUnderstandWhatWasSaid: IMetrics,
        engagesInAVarietyOfTopicsDuringAConversation: IMetrics,
        rephrasesOwnCommunicationWhenTheListenerIsNotUnderstanding: IMetrics,
        respondsToQuestionsAboutHerselfAndAboutOthers: IMetrics
    }

    cognition:{
        countsByHeartUpTo20: IMetrics,
        countsObjectsWith1To1CorrespondenceUpTo10: IMetrics,
        givesSomeoneOneSomeManyALittleAllMoreAndMost: IMetrics,
        givesSomeoneQuantitiesUpTo10: IMetrics,
        knowsTermsOfQuantityConcepts: IMetrics,
        knowsTermsOfSpatialRelationships: IMetrics,
        matchesAndUnderstands5To10ObjectWordAssociations: IMetrics,
        canReadSomeWords: IMetrics,
        canIdentifyTheWrittenNameInASetOfFiveWords: IMetrics,
        readsSignsAndSymbols: IMetrics,
        identifiesNumbersAndLetters: IMetrics,
        perceivesOppositesAndAnalogies: IMetrics
    }
}


export interface IMetrics {
    acquired: string
    notAcquired: string
    partial: string
  }