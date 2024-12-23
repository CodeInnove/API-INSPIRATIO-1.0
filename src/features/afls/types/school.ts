export interface ISchoolSkills {
  officeSupplyUsage: OfficeSupplyUsageSkills;
  eatingTableMannersAndCafeteriaProcedures: EatingTableMannersAndCafeteriaProceduresSkills;
  classroomBehaviorSchoolRoutinesAndOrganization: ClassroomBehaviorSchoolRoutinesAndOrganizationSkills;
  socialRecreationalAndInterpersonalUnderstanding: SocialRecreationalAndInterpersonalUnderstandingSkills;
  technologyUsage: TechnologyUsageSkills;
  identificationNamingAndDescription: IdentificationNamingAndDescriptionSkills;
  literacyAndMath: LiteracyAndMathSkills;
}

interface OfficeSupplyUsageSkills {
  usesAWhiteboard: number;
  usesAnErasablePencil: number;
  usesAPencilSharpenerAndPencil: number;
  opensPens: number;
  usesHeadphones: number;
  usesAStapler: number;
  usesAdhesiveTape: number;
  appliesGlueFromATube: number;
  usesAGlueStick: number;
  cutsWithScissors: number;
  usesPaperClips: number;
  usesPinsOrThumbtacks: number;
  hangsPapersUsingMagnets: number;
  usesMarkers: number;
  usesStickyNotes: number; // "Lembretes" aqui se refere a notas adesivas
  usesAHolePunch: number;
  usesABinder: number;
  opensLatchesOnCabinets: number;
}

interface EatingTableMannersAndCafeteriaProceduresSkills {
  sitsWhileEating: number;
  opensFoodPackages: number;
  drinksWithAStraw: number;
  placesTheStrawInDrinkContainers: number;
  drinksFromAGlass: number;
  drinksFromAWaterBottle: number;
  opensAndClosesScrewTopBottlesAndContainers: number;
  opensCannedDrinks: number;
  usesASpoonForSolidFoods: number;
  usesASpoonForLiquidFoods: number;
  usesAFork: number;
  usesANapkin: number;
  eatsFromOnesOwnPlate: number;
  bitesAppropriateSizedPieces: number;
  eatsAtAnAppropriatePace: number;
  chewsWithMouthClosed: number;
  speaksInACorrectToneOfVoice: number;
  speaksWhenMouthIsEmpty: number;
  cleansUpAfterAMeal: number;
  separatesRecyclableAndNonRecyclableTrash: number;
  cleansTheAreaAfterSpillingFood: number;
  takesLunchFromTheLunchboxAndPutsItOut: number;
  waitsProperlyInLine: number;
  expressesLunchChoices: number;
  paysForTheLunch: number;
  carriesFoodToTheTable: number;
  returnsToTheLineToGetNapkinsKetchupEtc: number;
  getsInLineToBuyFood: number;
  avoidsAllergenicFood: number;
  eatsInPairs: number;
  asksToShareATableWhenAllAreOccupied: number;
  doesNotAskForOrTakeFoodFromOthersWithoutAsking: number;
  speedsUpToFinishEatingBeforeTheEndOfBreak: number;
}

interface ClassroomBehaviorSchoolRoutinesAndOrganizationSkills {
  looksWhenNameIsCalled: number;
  hangsUpCoatOrBackpack: number;
  removesItemsFromBackpack: number;
  putsItemsInBackpack: number;
  givesTheTeacherCommunicationNotebookDailyFolderOrPlanner: number;
  obtainsMaterialsFromTheTable: number;
  placesClassBooksAndMaterialsOnTheTable: number;
  sitsInTheChairWhenAsked: number;
  receivesInstructionsWellAndEngagesInClassroomRoutines: number;
  adaptsToChangesInTheSchedule: number;
  sitsInAGroupAppropriately: number;
  paysAttentionToTheTeacher: number;
  respondsToGroupInstructionsThatNeedToBeDiscriminated: number;
  receptivelyFollowsInstructionsGivenByVariousAdults: number;
  transitionsBetweenClassActivities: number;
  raisesHandToAnswerOrAskForHelp: number;
  retrievesItemsFromTheClassroom: number;
  returnsMaterialsToTheCorrectPlace: number;
  protectsOwnBelongingsOrWork: number;
  linesUpWhenAsked: number;
  waitsInLine: number;
  walksInLine: number;
  keepsHandsToSelf: number;
  walksDoesNotRunInSchool: number;
  waitsForAndRidesTheBus: number;
  reportsAndFollowsSchedule: number;
  describesSchoolRules: number;
  respondsToTheSchoolBell: number;
  listensToSchoolAnnouncements: number;
  understandsFirstAndSecondLunchPeriods: number;
  acceptsTheConceptOfScheduleVaryingFromDayToDay: number;
  understandsEventsOutsideTheSchoolRoutine: number;
  worksAloneOnSchoolTasks: number;
  participatesInGymActivities: number;
  remainsCalmInTheGym: number;
  changesClothesForPhysicalEducationClass: number;
  keepsLockerOrganized: number;
  remainsCalmDuringSchoolPresentations: number;
  speaksInFrontOfTheClass: number;
  takesTurnsDuringDiscussions: number;
  properlyGainsTheAttentionOfTheGroupOrWhoeverIsSpeakingAndWaitsToBeCalledOnToCommentOrContribute: number;
  knowsWhenToSpeakDuringADiscussion: number;
  respondsToTeacherCues: number;
  walksAloneInTheHallways: number;
  transitionsBetweenClasses: number;
  requestsToUseTheRestroomOrHallway: number;
  placesAllBelongingsInAppropriateLocation: number;
  placesWritingMaterialsInAnOrganizer: number;
  keepsHomeworkSeparateFromOtherMaterials: number;
  completesAndSubmitsHomeworkOnTime: number;
  keepsMaterialsForEachClassSeparate: number;
  takesAllNecessaryMaterialsHomeAndBringsThemBackToSchool: number;
  schoolArrivalAndDeparture: number;
  plansWithACalendar: number;
}

interface SocialRecreationalAndInterpersonalUnderstandingSkills {
  greetsAppropriately: number;
  maintainsEyeContact: number;
  walksUpAndDown: number; // Assumindo que se refere a andar em áreas designadas
  usesSlides: number;
  usesSwings: number;
  avoidsMovingSwings: number;
  usesMonkeyBars: number;
  usesPoles: number; // Assumindo que se refere a postes de playground
  staysInTheRecreationArea: number;
  avoidsDesignatedPlayAreasThatAreBeingUsed: number;
  respectsPersonalSpace: number;
  playsWithPlaygroundEquipment: number;
  playsSimpleBallGames: number;
  participatesInOrganizedGamesOutsideTheClassroom: number;
  playsWithPeersDuringRecess: number;
  singsSongsWithTheGroup: number;
  politelyInterruptsAConversation: number;
  identifiesInterestAndBoredomInATopic: number;
  endsConversationsPolitely: number;
  asksOthersForPermissionToJoinAnActivity: number;
  invitesPeersToJoinAnActivity: number;
  initiatesConversations: number;
  goesOutWithPeers: number;
  reportsProblemsToTeachers: number;
  respondsAppropriatelyToTeasing: number;
  respondsAppropriatelyToBullying: number;
  avoidsThoseWhoMakeFunOfOthersOrAreUnfriendly: number;
  differentiatesBetweenLiteralAndFigurativeComments: number;
  understandsOthersPerspectives: number;
  describesTheRelationshipBetweenBoyfriendsGirlfriends: number;
  respondsAppropriatelyWhenFeelingAttractedToOthers: number;
  respondsAppropriatelyWhenOthersAreAttractedToThem: number;
  identifiesCulturalDifferences: number;
  identifiesClubsInSchool: number;
  describesMajorSchoolEvents: number;
}

interface TechnologyUsageSkills {
  swipesRightLeftUpAndDownOnTouchScreens: number;
  opensAndOperatesAppsOnATablet: number;
  usesZoom: number;
  takesPhotosWithATablet: number;
  usesAnInteractiveWhiteboard: number;
  turnsOnTheComputer: number;
  operatesTheCursorUsingTheMouse: number;
  operatesTheCursorUsingFingers: number;
  waitsForProgressBarsHourglassesEtcToLoad: number;
  logsInAndShutsDownTheComputer: number;
  opensAComputerProgram: number;
  operatesTheDVDDrive: number;
  identifiesWhichProgramIsNeededForAGivenTask: number;
  printsVariousContent: number;
  operatesACDROM: number;
  typesSentencesByPositioningFingersCorrectly: number;
  usesSearchEngines: number;
  usesSecureUsernamesAndPasswords: number;
  createsAndSavesANewDocument: number;
  savesACopyOfARevisedDocumentAsANewDocument: number;
  formatsADocument: number;
  changesFontFeatures: number;
  highlightsCopiesCutsAndPastesDocuments: number;
  spellChecks: number;
  createsAndUsesFolders: number;
  backsUpFiles: number;
  usesAPortableDrive: number;
  searchesForFiles: number;
  usesALaptop: number;
  takesCareOfTheLaptop: number;
  monitorsBatteryCharge: number;
  usesSpreadsheetPrograms: number;
  createsBasicArtOrDrawings: number;
  createsAPresentationOnTheComputer: number;
  sendsAndReceivesEmails: number;
  findsImagesOnline: number;
  usesAnOnlineEncyclopedia: number;
  findsAndCitesOnlineSources: number;
  usesAnOnlineMapForDirections: number;
}

interface IdentificationNamingAndDescriptionSkills {
  receptivelyIdentifiesClassroomObjects: number;
  namesClassroomObjects: number;
  saysObjectsThatCanBeFoundInTheClassroom: number;
  identifiesTheBusNumber: number;
  identifiesTheSchoolLocationThroughADescription: number;
  saysPersonalInformation: number;
  saysNamesOfParentsOrCaregivers: number;
  receptivelyIdentifiesPeers: number;
  namesPeers: number;
  saysTheNamesOfPeers: number;
  saysTheNamesOfTeachersAndStaffWhenPresent: number;
  saysTheNamesOfTeachersAndStaff: number;
  describesTheRoleOfEachStaffMember: number;
  followsDirectionsToDifferentPartsOfTheRoomForVariousTypesOfInstructions: number;
  identifiesAreasOfTheSchool: number;
  receptivelyIdentifiesShapes: number;
  expressivelyIdentifiesShapes: number;
  receptivelyIdentifiesColors: number;
  namesColors: number;
  followsDirectionsUsingRightAndLeft: number;
  followsInstructionsUsingAdjectives: number;
  followsInstructionsUsingPrepositions: number;
  identifiesTheTimeOfDayThatCertainEventsHappen: number;
  describesItemsSeenDuringTheDayAndNight: number;
  describesTheDaysOfTheWeekInOrder: number;
  saysTheCurrentDayYesterdayAndTomorrow: number;
  describesTheMonthsInCorrectOrder: number;
  saysTheCurrentPreviousAndNextMonth: number;
  receptivelyIdentifiesTheDate: number;
  saysTheDate: number;
  identifiesWeekdaysAndWeekends: number;
  identifiesInformationOnTheCalendar: number;
  findsInformationOnTheCalendar: number;
  saysTheHolidays: number;
  identifiesEquivalentTime: number;
  receptivelyIdentifiesWeatherConditions: number;
  namesTheWeatherConditions: number;
  describesTheCurrentWeather: number;
  saysTheSeasons: number;
  describesClothesForEachSeason: number;
  identifiesLandforms: number;
  identifiesBodiesOfWater: number;
  namesAndLocatesOceans: number;
  namesAndLocatesContinents: number;
  namesAndLocatesStatesProvinces: number;
  identifiesOwnLocationOnAMap: number;
  identifiesDifferentCountries: number;
  identifiesTheLargestCityInCountries: number;
  namesSportsEventsAndAssociatedObjects: number;
  namesCommonCommunityAndFamilyEvents: number;
  identifiesPresidents: number;
}

interface LiteracyAndMathSkills {
  saysTheAlphabet: number;
  receptiveLetterNaming: number;
  expressiveLetterNaming: number;
  receptiveLetterSounds: number;
  readsWords: number;
  wordSkills: number; // Habilidade com as palavras (vocabulário, compreensão)
  readsSimpleSentences: number;
  readsParagraphs: number;
  readsWithVocalIntonation: number;
  demonstratesKnowledgeOfPartsOfSpeech: number;
  writesLetters: number;
  writesNumbers: number;
  spellsOwnName: number;
  copiesLists: number;
  copiesSentences: number;
  spellsWords: number;
  writesSentences: number;
  usesCapitalizationCorrectly: number;
  usesPunctuationWhenWritingOrTyping: number;
  usesCorrectVerbTense: number;
  usesPronouns: number;
  writesParagraphs: number;
  countsNumbers: number;
  receptiveNumbers: number;
  expressiveNumbers: number;
  countsGivenObjects: number;
  countsLargeSetsOfObjects: number;
  addsNumbers: number;
  subtractsNumbers: number;
  identifiesEvenAndOddNumbers: number;
  skipCountsNumbers: number;
  roundsNumbers: number;
  multipliesNumbers: number;
  dividesNumbers: number;
  usesACalculator: number;
  identifiesFractions: number;
  receptivelyIdentifiesCoins: number;
  namesTheCoins: number;
  receptivelyIdentifiesTheValueOfTheCoins: number;
  namesCoinsByValue: number;
  receptivelyIdentifiesBills: number;
  namesBills: number;
  addsCoinValues: number;
  exchangesCoinsToReachEqualValues: number;
  addsBillValues: number;
  addsBillAndCoinValues: number;
  tellsTimeOnADigitalClock: number;
  tellsTimeOnAnAnalogClock: number;
  digitalBeforeOrAfter: number;
  analogBeforeOrAfter: number;
}

interface ReadingWritingAppliedMathResearchAndTestTakingSkills {
  opensTheBookToSpecificPages: number;
  writesNameOnAssignments: number;
  fillsInMissingWords: number;
  readsAndFollowsSimpleActionInstructions: number;
  readsAndFollowsSimpleInstructionsOnWorksheets: number;
  followsMultiStepWrittenInstructions: number;
  completesClassTasksOnTheWhiteboard: number;
  copiesHomeworkFromTheBoard: number;
  correctsErrorsInAssignments: number;
  addressesAnEnvelope: number;
  followsAlongDuringGroupReading: number;
  readsAlongWithTheClass: number;
  identifiesTheMainCharactersInAStoryOrPassage: number;
  identifiesTheMainTopics: number;
  identifiesTheMainEventsOrPassagesOfAStory: number;
  readsPassagesAndAnswersSimpleComprehensionQuestions: number;
  readsPassagesAndAnswersComprehensionQuestionsInvolvingInferences: number;
  highlightsKeyInformationFromWrittenSources: number;
  takesNotes: number;
  makesSummaries: number;
  editsPunctuation: number;
  makesCorrections: number;
  proofreadsWrittenWork: number;
  writesASignature: number;
  calculatesChangeAfterAPurchase: number;
  calculatesPricePerUnit: number;
  demonstratesUnderstandingOfRelativeCosts: number;
  calculatesAndMakesPlansForSavings: number;
  calculatesAverage: number;
  solvesWordProblems: number;
  usesDiagramsChartsAndGraphs: number;
  usesTables: number;
  measuresVolumes: number;
  measuresWeights: number;
  measuresTheLengthOfObjects: number;
  saysAbbreviationsForMeasurementStandards: number;
  saysEquivalentMeasurements: number;
  estimatesDistances: number;
  organizesWordsInAlphabeticalOrder: number;
  locatesNamesInAlphabeticalOrder: number;
  locatesWordsInADictionary: number;
  usesADictionaryAndEncyclopedia: number;
  saysAntonyms: number;
  saysHomonyms: number;
  describesTemperatureMeasurements: number;
  readsAThermometer: number;
  borrowsBooksFromTheLibrary: number;
  usesTheIndexToFindKeyTopics: number;
  usesTheIndexToLocateAChapter: number;
  looksUpInformationInTheGlossary: number;
  keepsEyesOnOwnWorkDuringTests: number;
  answersMultipleChoiceQuestions: number;
  usesAScantronSheet: number;
  answersEssayQuestions: number;
}

