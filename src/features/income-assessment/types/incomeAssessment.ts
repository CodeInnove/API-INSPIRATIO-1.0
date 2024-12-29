export class IIncomeAssessment{
    nameOrId: string;
    dateOfApplication: Date;
    dateOfBirth: Date;
    familyOurSchoolComplaint: string;
    noteForEvaluation: string;
}

export class IObservedAspectsPshyco{
	pencilGrip: 'Preensão primitiva' | 'Preensão palmar supinada' | 'Preensão de transição' | 'Preensão madura'
	hypothesisWriting: 'Não se aplica a faixa etária' | 'Não realiza' | 'Pictográfica' | 'Pré silábica' | 'Silábica' | 'Alfabética'
	writingWordsAndPhrases: 'Não se aplica a faixa etária' | 'Não realiza' | 'Reconhece letras' | 'Preensão madura' | 'Autônomo em palavras' | 'Autônomo em palavras e frases'
	reading: 'Não se aplica a faixa etária' | 'Não realiza' | 'Rota lexical' | 'Rota fonológica'
	numbersAndQuantiity: 'Não se aplica a faixa etária' | 'Não realiza' | 'Reconhece' | 'Nomeia' | 'Quantifica'
	operationsMathematical: 'Não se aplica a faixa etária' | 'Não realiza' | 'Fase sensório motor' | 'Fase pré-operatório' | 'Fase operatório concreto' | 'Fase operatório formal'
	functionsExecutive: 'Inibição' | 'Memória de trabalho' | 'Flexibilidade cognitiva' | 'Planejar' | 'Tomar decisões' | 'Estabelecer metas' | 'Antecipar' | 'Organizar' | 'Ter fluidez'
}

export class IEvaluationofPerformanceBody2At4YearsPshyco{
	masterBodyGesturesInCulturalSelfcareAndPlay: 'Sim' | 'Não'
	moveBodyUsingSpatialConceptsLikeInFrontBehindUpDown: 'Sim' | 'Não'
	exploreVariousBodyMovementsJumpDance: 'Sim' | 'Não'
	demonstrateIndependenceInSelfCare: 'Sim' | 'Não'
	developManualSkillsLikeDrawingAndCutting: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceBody5At6YearsPshyco{
	expressFeelingsAndEmotionsThroughBodyInDailyLifePlayDanceMusic: 'Sim' | 'Não'
	controlBodyForPlayListeningStorytellingAndArtActivities: 'Sim' | 'Não'
	createMovementsGesturesAndMimeInPlayAndArt: 'Sim' | 'Não'
	adoptSelfCareHabitsForHygieneEatingComfort: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceTrailsAndOthers2At4YearsPshyco{
	createSoundsWithObjectsAndInstruments: 'Sim' | 'Não'
	useMaterialsClayModelingMassExploringShapesTexturesAndVolumes: 'Sim' | 'Não'
	useEnvironmentalSoundSourcesInMusicActivities: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceTrailsAndOthers5At6YearsPshyco{
	createSoundBasedPerformancesWithObjectsAndInstruments: 'Sim' | 'Não'
	expressThroughDrawingPaintingAndSculpture: 'Sim' | 'Não'
	recognizeSoundQualitiesIntensityDurationPitchTimbreInProductions: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceListeningSpeechAndOthers2At4YearsPshyco{
	engageInDialogueExpressingDesiresNeedsFeelings: 'Sim' | 'Não'
	identifyAndCreateSoundsRecognizeRhymes: 'Sim' | 'Não'
	showInterestInStoriesAndDifferentiateWrittenFromIllustratedText: 'Sim' | 'Não'
	askAndAnswerQuestionsAboutStories: 'Sim' | 'Não'
	tellStoriesAboutPersonalExperiences: 'Sim' | 'Não'
	createAndTellStoriesOrally: 'Sim' | 'Não'
	handleVariousTextsRecognizingTheirSocialUse: 'Sim' | 'Não'
	participateInListeningToDifferentTextGenresNurseryRhymesStoriesMenus: 'Sim' | 'Não'
	useWritingToolsToTraceLettersAndSymbols: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceListeningSpeechAndOthers5At6YearsPshyco{
	expressIdeasWishesAndFeelingsOrallyAndThroughSpontaneousWriting: 'Sim' | 'Não'
	createSongsPoemsAndRhymes: 'Sim' | 'Não'
	selectAndBrowseBooksIdentifyThemesAndWords: 'Sim' | 'Não'
	retellStoriesAndPlanCollectivePerformances: 'Sim' | 'Não'
	writeRetellingsWithTeacherAsScribe: 'Sim' | 'Não'
	producePersonalOralAndWrittenStories: 'Sim' | 'Não'
	hypothesizeAboutKnownTextGenresUsingObservations: 'Sim' | 'Não'
	selectKnownBooksAndTextsForReadingAloud: 'Sim' | 'Não'
	recordWordsAndTextsUsingSpontaneousWriting: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceSpacesAndOthers2At4YearsPshyco{
	compareObjectPropertiesTextureSize: 'Sim' | 'Não'
	observeAndDescribeDailyAndNaturalPhenomena: 'Sim' | 'Não'
	sharePlantAndAnimalCare: 'Sim' | 'Não'
	identifySpatialInsideOutsideAndTemporalBeforeAfterRelations: 'Sim' | 'Não'
	classifyObjectsByAttributes: 'Sim' | 'Não'
	useBasicTimeConceptsNowBeforeAfter: 'Sim' | 'Não'
	countObjectsPeopleBooks: 'Sim' | 'Não'
	recordNumbersForQuantityOfChildrenAndObjects: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceSpacesAndOthers5At6YearsPshyco{
	compareObjectsByProperties: 'Sim' | 'Não'
	observeAndDescribeMaterialChangesInExperiments: 'Sim' | 'Não'
	identifySourcesOfInformationAboutNature: 'Sim' | 'Não'
	recordObservationsUsingDrawingsNumbersOrWriting: 'Sim' | 'Não'
	classifyObjectsBySimilaritiesAndDifferences: 'Sim' | 'Não'
	relateFactsAboutBirthAndFamilyHistory: 'Sim' | 'Não'
	relateNumbersToQuantities: 'Sim' | 'Não'
	expressMeasurementsWeightHeightThroughSimpleGraphs: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceTheSelfAndOthers2At4YearsPshyco{
	showCareAndSolidarityInInteractions: 'Sim' | 'Não'
	demonstrateSelfConfidenceAndResilience: 'Sim' | 'Não'
	shareObjectsAndSpacesWithPeersAndAdults: 'Sim' | 'Não'
	communicateWithPeersAndAdultsForUnderstanding: 'Sim' | 'Não'
	respectDifferencesInPhysicalTraits: 'Sim' | 'Não'
	followBasicSocialRules: 'Sim' | 'Não'
	resolveConflictsWithAdultGuidance: 'Sim' | 'Não'
}

export class IEvaluationOfPerformanceTheSelfAndOthers5At6YearsPshyco{
	showEmpathyForOthersFeelingsAndNeeds: 'Sim' | 'Não'
	actIndependentlyWithConfidence: 'Sim' | 'Não'
	developParticipationAndCooperationSkills: 'Sim' | 'Não'
	expressIdeasAndFeelingsToDiverseGroups: 'Sim' | 'Não'
	valueBodyCharacteristicsAndRespectOthers: 'Sim' | 'Não'
	showInterestAndRespectForDifferentCultures: 'Sim' | 'Não'
	useRespectfulStrategiesToHandleConflicts: 'Sim' | 'Não'
}

export class ITheSelfAndOthersPshyco{
	respectAndExpressFeelingsAndEmotions: 'Sim' | 'Não'
	actInGroupsAndBuildNewRelationshipsRespectingDiversityAndSolidarity: 'Sim' | 'Não'
	knowAndRespectSocialRulesShowingRespectForOthers: 'Sim' | 'Não'
}

export class IBodyAndOthersPshyco{
	recognizeTheImportanceOfDailyActionsForSelfHealthAndEnvironmentMaintenance: 'Sim' | 'Não'
	showAutonomyInHygieneEatingDressingAndSelfCareValuingOnesBody: 'Sim' | 'Não'
	intentionallyUseTheBodyCreativityControlAppropriatenessForInteraction: 'Sim' | 'Não'
	coordinateManualSkills: 'Sim' | 'Não'
}

export class ITrailsAndOthersPshyco{
	differentiateSoundTypesAndRhythmsInteractingWithMusicAsIndividualAndCollectiveExpression: 'Sim' | 'Não'
	expressThroughVisualArtsUsingVariousMaterials: 'Sim' | 'Não'
	relateToOthersThroughGesturesWordsGamesImitationsObservationsAndBodyLanguage: 'Sim' | 'Não'
}

export class IListeningAndOthersPshyco{
	expressIdeasAndFeelingsInDifferentInteractions: 'Sim' | 'Não'
	argueAndNarrateFactsOrallyInChronologicalOrder: 'Sim' | 'Não'
	listenComprehendTellRetellAndCreateNarratives: 'Sim' | 'Não'
	knowDifferentTextGenresShowingUnderstanding: 'Sim' | 'Não'
}

export class ISpacesAndOthersPshyco{
  identifyNameAndCompareObjectPropertiesEstablishingRelationships: 'Sim' | 'Não'
  interactWithEnvironmentAndNaturalArtificialPhenomenaWithCareAndCuriosity: 'Sim' | 'Não'
  useVocabularyRelatedToMagnitudeSpaceAndMeasurementsForCommunication: 'Sim' | 'Não'
  useUnitsOfMeasurementAndTimeNotionsForEverydayNeeds: 'Sim' | 'Não'
  identifyAndRecordQuantitiesThroughVariousRepresentations: 'Sim' | 'Não'
}

export class IPortugueseLanguage1GradePshyco{
    segregateLettersFromSymbols: 'Sim' | 'Não'
    recognizeAlphabetAsSpeechSoundRepresentation: 'Sim' | 'Não'
    differentiatePrintedAndCursiveLetters: 'Sim' | 'Não'
    compareSyllablesAndIdentifySimilaritiesDifferences: 'Sim' | 'Não'
    writeWordsSentencesSpontaneouslyOrByDictation: 'Sim' | 'Não'
    recognizeReadingDirection: 'Sim' | 'Não'
}
    
export class IMathematics1GradePshyco{
    useNumbersAsIndicatorsInEverydaySituations: 'Sim' | 'Não'
    countObjectsUsingVariousStrategies: 'Sim' | 'Não'
    countUpTo100ObjectsAndPresentResultsVerballyOrSymbolically: 'Sim' | 'Não'
    constructAdditionSubtractionFacts: 'Sim' | 'Não'
    compareLengthsCapacitiesMasses: 'Sim' | 'Não'
    readDataFromTablesAndBarGraphs: 'Sim' | 'Não'
}
    
export class IPortugueseLanguage2GradePshyco{
    segmentWordsIntoSyllablesAndModifyThem: 'Sim' | 'Não'
    readAndWriteWordsWithSyllablesCVVCVC: 'Sim' | 'Não'
    writeWordsSentencesAndTextsInPrintedAndCursiveForms: 'Sim' | 'Não'
    recognizeRhymesSoundsInTexts: 'Sim' | 'Não'
    readNewWordsByDecodingAndMemorization: 'Sim' | 'Não'
    readAndComprehendDailyLifeTexts: 'Sim' | 'Não'
}
    
export class IMathematics2GradePshyco{
    compareAndOrderNumbersUpToHundredsPlace: 'Sim' | 'Não'
    compareObjectQuantitiesInTwoSets: 'Sim' | 'Não'
    composeDecomposeNumbersUpToThreeDigits: 'Sim' | 'Não'
    constructAdditionSubtractionFactsForMentalOrWrittenCalculation: 'Sim' | 'Não'
    solveAndCreateAdditionSubtractionProblems: 'Sim' | 'Não'
    buildSequencesOfNaturalNumbersInOrder: 'Sim' | 'Não'
}
    
export class IPortugueseLanguage3GradePshyco{
    readAndWriteWordsWithVariousSyllablesCVVCVC: 'Sim' | 'Não'
    classifyWordsBySyllableCount: 'Sim' | 'Não'
    useGrammaticalKnowledgeInTextProduction: 'Sim' | 'Não'
    useDictionaryToClarifyDoubtsAboutSpelling: 'Sim' | 'Não'
    readAndComprehendPoeticTextsExploringRhymesSounds: 'Sim' | 'Não'
}

export class IMathematics3GradePshyco{
    readWriteCompareNumbersUpToThousandsPlace: 'Sim' | 'Não'
    useAdditionMultiplicationFactsForCalculation: 'Sim' | 'Não'
    solveAndCreateAdditionSubtractionProblems: 'Sim' | 'Não'
    solveAndCreateMultiplicationProblemsUpTo10: 'Sim' | 'Não'
    associateGeometricFiguresWithPhysicalObjects: 'Sim' | 'Não'
    readTimeOnDigitalAndAnalogClocks: 'Sim' | 'Não'
}
    
export class IPortugueseLanguage4GradePshyco{
    spellWordsUsingPhonemeGraphemeCorrespondenceRules: 'Sim' | 'Não'
    identifyAndUsePunctuationMarksInWriting: 'Sim' | 'Não'
    planAndProduceTextsBasedOnResearch: 'Sim' | 'Não'
    useDictionaryToClarifySpellingDoubts: 'Sim' | 'Não'
    identifyElementsInNarratives: 'Sim' | 'Não'
}
    
export class IMathematics4GradePshyco{
    readWriteOrderNumbersUpToTenThousandPlace: 'Sim' | 'Não'
    decomposeAndComposeNaturalNumbersForCalculation: 'Sim' | 'Não'
    solveAndCreateProblemsWithNaturalNumbers: 'Sim' | 'Não'
    useRelationshipsBetweenOperationsForStrategyExpansion: 'Sim' | 'Não'
    determineUnknownNumberInEquality: 'Sim' | 'Não'
    readAndRecordMeasuresAndTimeIntervals: 'Sim' | 'Não'
}
    
export class IPortugueseLanguage5GradePshyco{
    spellWordsUsingPhonemeGraphemeAndIrregularRules: 'Sim' | 'Não'
    accuratelyAccentuateWords: 'Sim' | 'Não'
    differentiateCommaSemicolonColonInTexts: 'Sim' | 'Não'
    useLinguisticKnowledgeInTextProduction: 'Sim' | 'Não'
    attributeMeaningToNonLinguisticAspectsInSpeech: 'Sim' | 'Não'
    useDictionaryToClarifyDoubtsAboutSpelling: 'Sim' | 'Não'
}
    
export class IMathematics5GradePshyco{
    readWriteOrderNumbersUpToHundredThousandPlace: 'Sim' | 'Não'
    readWriteOrderRationalNumbersInDecimalForm: 'Sim' | 'Não'
    solveAndCreateAdditionSubtractionProblemsWithRationalNumbers: 'Sim' | 'Não'
    solveAndCreateMultiplicationDivisionProblemsWithRationalNumbers: 'Sim' | 'Não'
    concludeInvestigationOnDifferentWaysOfPerformingOperations: 'Sim' | 'Não'
}

export class IObservationIaPshyco{
    obersaviotGeneral: string;
}

export class IEvaluatorsSignaturePshyco{
    evaluatorSigned: string;
}