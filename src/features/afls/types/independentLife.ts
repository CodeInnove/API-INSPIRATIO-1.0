export interface IIndependentLifeSkills {
  personalOrganization: PersonalOrganizationSkills;
  personalHygieneAndHealth: PersonalHygieneAndHealthSkills;
  housekeeping: HousekeepingSkills;
  homeMaintenanceAndRepair: HomeMaintenanceAndRepairSkills;
  communityNavigationAndSafety: CommunityNavigationAndSafetySkills;
  transportationAndTravel: TransportationAndTravelSkills;
  kitchenSkillsAndSafety: KitchenSkillsAndSafety;
  foodPreparationAndMealPlanning: FoodPreparationAndMealPlanningSkills;
  personalFinance: PersonalFinanceSkills;
  interpersonalAndEmotional: InterpersonalAndEmotionalSkills;
  safetyAndEmergency: SafetyAndEmergencySkills;
  problemSolving: ProblemSolvingSkills;
  socialSkillsAndEtiquette: SocialSkillsAndEtiquette;
  sharedLiving: SharedLivingSkills;
  relationshipsAndSexuality: RelationshipsAndSexualitySkills;
}

interface PersonalOrganizationSkills {
  keepsPersonalItemsInTheirProperPlaces: number;
  keepsPersonalItemsSafe: number;
  safelyStoresDocuments: number;
  organizesClosetsWardrobesAndDrawers: number;
  maintainsAContactList: number;
  usesTheCalendarToScheduleActivities: number; // Repetição unificada
  schedulesAppointments: number;
  usesACalendarAppAlert: number;
  schedulesWeeklyMonthlyAndAnnualAppointments: number;
  plansForSeasonsAndVacations: number;
  managesScheduleAndAppointments: number;
  allocatesTimeToCompleteProjects: number;
  renewsServiceDocuments: number;
  arrivesAtAppointmentsPunctually: number;
  honorsScheduledCommitments: number;
  keepsAgreements: number;
  returnsBorrowedItemsOrReplacesDamagedItems: number;
  returnsBorrowedMoney: number;
  calculatesPostageForLetters: number;
  sendsPackagesViaMailOrPrivateCarriers: number;
  signsForPackageDeliveries: number;
  sortsReceivedMail: number;
}

interface PersonalHygieneAndHealthSkills {
  takesShowersRegularly: number;
  brushesTeeth: number;
  takesCareOfHair: number;
  shaves: number;
  depilatesLegsAndUnderarms: number; // Repetição unificada
  maintainsAStockOfHygieneProducts: number;
  maintainsAnAdequateNumberOfCleanClothes: number; // Repetição unificada
  ironsClothes: number;
  polishesShoes: number;
  usesTheWeatherForecastToChooseWhatToWear: number;
  consumesAHealthyVarietyOfFood: number;
  sleepsAdequately: number;
  exercises: number;
  washesAndSanitizesHands: number;
  coversMouthWhenCoughing: number;
  usesTissues: number;
  avoidsSickPeople: number;
  takesCareWithBodilyFluids: number;
  goesToTheBathroomInCaseOfNausea: number;
  describesTheUseOfMedications: number; // Repetições unificadas
  carriesMedicationsWhenGoingOut: number;
  measuresOwnTemperature: number;
  replenishesMedication: number;
  distinguishesEmergencyTreatmentFromNonEmergencyTreatment: number;
  schedulesRoutineMedicalAndDentalExams: number;
  recognizesAllergicReactions: number;
  placesPadsOrTamponsInUnderwear: number;
  checksAndChangesPadsOrTamponsWhenNecessary: number;
  usesTampons: number;
  changesAndDisposesOfTampons: number;
  describesTheFemaleMenstrualCycle: number;
  countsAverageDaysOfTheMenstrualPeriodAndMarksOnTheCalendar: number;
  identifiesNecessaryFeminineHygieneProducts: number;
  monitorsTheNeedForHygieneProducts: number;
}

interface HousekeepingSkills {
  emptiesTrashCans: number;
  cleansTablesAndCounters: number;
  dusts: number;
  cleansSpilledFoodOrLiquids: number;
  sweepsAndUsesADustpan: number;
  vacuums: number;
  mopsTheFloor: number;
  cleansOrReplacesSpongesClothsAndBrooms: number;
  vacuumsTheCarpet: number;
  emptiesTheVacuumCleanerBag: number;
  cleansCarpetStains: number;
  keepsFloorsAndCarpetsClean: number;
  keepsTheHouseTidy: number;
  cleansThePorch: number;
  washesSheets: number;
  putsAwayClothes: number;
  keepsTheBedroomClean: number;
  removesSpoiledFoodFromTheRefrigerator: number;
  cleansRefrigeratorDrawersAndShelves: number;
  safelyCleansTheToaster: number;
  cleansTheDishRackAsNeeded: number;
  safelyCleansTheStovetopAndBurners: number;
  controlsAndEliminatesInsects: number;
  keepsTheKitchenClean: number;
  changesTowels: number;
  cleansTheShowerOrBathtub: number;
  cleansTheBathroomSink: number;
  cleansTheToilet: number;
  cleansWindowsAndMirrors: number;
  keepsTheBathroomClean: number;
  followsTheHouseCleaningSchedule: number;
  maintainsAComfortableTemperatureInTheHouse: number;
  adjustsCurtainsAndBlinds: number;
  changesTheAirConditionerFilter: number;
  conservesResources: number;
}

interface HomeMaintenanceAndRepairSkills {
  opensPackages: number;
  usesAScrewdriver: number;
  usesAHammer: number;
  usesPliers: number;
  usesAnExtensionCord: number;
  tiesAndUntiesKnots: number;
  usesANeedleAndThread: number;
  hangsPictures: number;
  logsIntoWifiNetworks: number;
  usesAHomeSecuritySystem: number;
  changesBatteries: number;
  maintainsAndUsesAFlashlight: number;
  changesLightBulbs: number;
  usesCorrectLightBulbs: number;
  replenishesSoap: number;
  usesAPlunger: number;
  stopsARunningToiletByAdjustingTheFlapper: number;
  turnsOffTheWaterValve: number;
  identifiesWhenTheFireAlarmNeedsNewBatteries: number;
  cleansUpBrokenGlass: number;
  resetsACircuitBreaker: number;
}

interface CommunityNavigationAndSafetySkills {
  hasKnowledgeOfCommunityServices: number;
  describesKeyLocationsInTheCommunity: number;
  locatesPhoneNumbersOfStoresAndCommunityResources: number; // Repetição unificada
  knowsDirectionsOnAMap: number;
  readsMaps: number;
  usesPrintedMaps: number;
  usesMapApplications: number;
  estimatesTravelTime: number;
  determinesHowToGetToALocation: number; // Repetição unificada
  determinesArrivalTime: number;
  plansRoutesWithMultipleStops: number;
  plansTransportationForAnOuting: number;
  monitorsTrafficWhileWalking: number;
  variesRoutesToKnownPlaces: number;
  givesLocationAndDirectionForATrip: number;
  arrivesAtTheCorrectTimeAtAGivenPlace: number;
  staysWithOthersWhileWalkingTogether: number;
  signalsWhenWantingToStopWhileWalking: number;
  usesEmergencyStopButtons: number;
  usesTheElevatorEmergencyPhone: number;
  locksABicycle: number; // Repetição unificada
  wearsAHelmet: number;
  usesHandSignals: number;
  cyclesSafely: number;
}

interface TransportationAndTravelSkills {
  locatesTheBusOrTrainStop: number;
  usesBusAndTrainApplications: number;
  checksTheTrainAndBusNumber: number;
  buysPublicTransportationTickets: number; // Repetição unificada
  entersTheTrainStationAndGoesToTheCorrectPlatform: number;
  choosesTheAppropriateSeatOnPublicTransportation: number;
  requestsAStopFromTheBusDriver: number;
  usesATaxi: number;
  protectsValuablesAndEnsuresWindowsAreClosedBeforeLeavingTheCar: number;
  returnsToWhereTheCarIsParked: number;
  examinesParkingLotsToEnsureSafety: number;
  keepsKeysInHandUntilReachingTheCar: number;
  locksTheDoorsUponEnteringTheCar: number;
  observesTrafficLaws: number;
  maintainsVehicleInsuranceAndDocuments: number;
  performsSimpleMaintenanceTasks: number;
  recognizesMechanicalProblemsInTheCar: number;
  knowsProceduresInCaseOfMechanicalProblems: number;
  drivesAttentively: number;
  stopsAtRoadblocks: number;
  paysTrafficFines: number;
  identifiesTrafficSigns: number;
  knowsAboutTrafficAccidents: number;
  checksInForAFlight: number;
  goesThroughAirportSecurity: number;
  locatesTheGateAtTheAirport: number;
  followsBoardingProcedures: number;
  locatesTheSeatOnThePlane: number;
  locatesAnAvailableSeatWhenNotAssignedOnTheTicket: number;
  handlesBaggageProcedures: number;
  compliesWithFlightInstructions: number;
  usesTheAirplaneRestroom: number;
  knowsFlightEtiquette: number;
  handlesConnections: number;
  retrievesBaggage: number;
  locatesAirportStaff: number;
}

interface KitchenSkillsAndSafety {
  measuresSolidVolumes: number;
  measuresLiquidVolumes: number; // Repetição unificada
  opensDifficultLids: number;
  usesTongs: number; // Repetição unificada
  usesAManualFoodCutter: number;
  slicesCutsAndGratesCheese: number;
  usesAKnifeToSpreadFoodOnBread: number;
  usesAColander: number;
  identifiesWhenTheStoveOrOtherApplianceIsHot: number;
  usesAToaster: number;
  usesTheOven: number;
  usesTheMicrowave: number;
  usesABlender: number;
  usesAGarbageDisposal: number;
  checksTheTemperatureBeforeHandlingHotDishes: number;
  handlesDishesInAndOutOfTheOven: number;
  usesTheStove: number; // Repetição unificada
  preventsKitchenOilFires: number;
  knowsWhatToDoIfClothingCatchesFireWhileCooking: number;
  demonstratesFireSafetyProcedures: number;
}

interface FoodPreparationAndMealPlanningSkills {
  demonstratesFireSafetyProcedures: number;
  storesLeftoversInBowlsAndCoversWithPlasticWrapOrLids: number;
  identifiesFoodsThatCanBeRefrigeratedAndThoseThatShouldBeFrozen: number;
  mixesIngredients: number;
  identifiesNonEdibleFoodBySmellAppearanceAndExpirationDate: number;
  disposesOfOil: number;
  safelyHandlesEggsMeatAndSeafood: number;
  keepsFliesAndInsectsAwayFromFood: number;
  determinesWhenMeatIsFullyCooked: number;
  determinesWhenNonMeatItemsAreCooked: number;
  knowsCookingMethods: number;
  usesACrockPot: number;
  decoratesCakes: number;
  cooksEggs: number;
  plansMeals: number;
  identifiesWhichFoodTakesLongerToPrepare: number;
  preparesMeals: number;
  plansAWeeklyMenu: number;
  createsShoppingListsForRecipes: number;
}

interface PersonalFinanceSkills {
  hasASavingsAccount: number;
  understandsSavingsVsCheckingAccounts: number;
  writesChecks: number;
  makesBankDepositsAndWithdrawals: number;
  usesACheckingAccount: number;
  balancesACheckingAccount: number;
  usesATellerMachine: number;
  usesOnlineBankingServices: number;
  usesDirectDeposit: number;
  cancelsElectronicTransactions: number; // Repetição unificada
  describesTheConceptOfWorkingEarningSpendingAndBeingInDebt: number;
  calculatesTips: number;
  developsBudgets: number;
  spendsWithinBudget: number;
  managesCashFlow: number;
  plansFinancialConsiderationsForOutings: number;
  paysBillsOnTime: number;
  readsBillingStatements: number;
  paysCreditCardInterest: number;
  managesSubscriptionsAndMemberships: number;
  understandsAutomaticRenewalServices: number; // Repetição unificada
  understandsInsurancePolicies: number;
  understandsIncomeTax: number;
  carriesAReasonableAmountOfCash: number;
  practicesATMAndBankSecurity: number;
  makesDecisionsAboutCharitableDonations: number;
  lendsMoney: number;
  understandsFinancialInstrumentManagement: number;
}

interface InterpersonalAndEmotionalSkills {
  toleratesShortTermDisagreements: number;
  performsUndesirableTasks: number;
  evaluatesOwnPerformance: number;
  showsConcernForOthersWellBeing: number;
  identifiesOwnStrengthsAndWeaknesses: number;
  remainsCalmInTheFaceOfUndesirableOutcomes: number;
  waitsPatientlyAndRemainsCalmWhenOthersAreLate: number;
  dealsAppropriatelyWithFearsAndAnxiety: number;
  talksAboutDiscomforts: number;
  persistsWhenQuestionedWhenCertain: number;
  physicallyProjectsConfidence: number;
  dealsWithManipulationAttempts: number; // Repetição unificada
  identifiesWhenToEndATopic: number;
  isFlexibleWithEstablishedRules: number;
  seeksAdviceFromTrustedPeople: number;
  knowsAndRespectsTheRightsOfOthers: number;
  remindsOthersOfCommitments: number;
  respondsToFigurativeComments: number;
  asksForClarification: number;
  doesNotMindSmallThings: number;
  considersTheIntentionsOfOthers: number;
  considersThePotentialReactionOfOthers: number;
  receivesCorrectiveSuggestionsAndAdvice: number;
  offersSuggestions: number;
  acceptsApologies: number;
  forgivesOthers: number;
  isCommittedToResults: number;
  avoidsConfrontations: number;
  respondsAppropriatelyToAuthorities: number;
}

interface SafetyAndEmergencySkills {
  treatsMinorIllnessesAndInjuries: number;
  stopsBleedingFromSmallCuts: number;
  seeksMedicalAssistance: number;
  maintainsEmergencySupplies: number;
  showsCareWithSharpObjects: number;
  handlesPoisonousOrHazardousMaterials: number;
  avoidsHazardsRelatedToMovingVehiclesOrEquipment: number;
  keepsTheDoorLocked: number;
  adjustsCurtainsOrBlinds: number;
  checksBeforeOpeningTheDoor: number;
  keepsFlammableMaterialsAwayFromFlamesAndHeat: number;
  turnsOffHeatingAppliances: number;
  keepsElectricalAppliancesAwayFromWater: number;
  recognizesDefectsInElectricalDevices: number;
  avoidsOverloadingElectricalCircuits: number;
  avoidsFlamesAndElectricalCoilsWhileCooking: number;
  identifiesWhenTheStovetopAndAppliancesAreHot: number;
  removesHotPotsAndPans: number;
  preventsOilFires: number;
  knowsTheStepsToTakeIfClothingCatchesFireWhileCooking: number;
  demonstratesFireSafetyProcedures: number;
  describesHowToExitThePremisesInCaseOfFire: number;
  performsSecurityVigilance: number;
  identifiesUnsafeSituations: number;
  identifiesWhoToIgnoreAndWhoToRespondTo: number;
  providesPersonalIdentification: number;
  maintainsEmergencyContacts: number;
  identifiesWhoToCallForHelp: number;
  describesProblemsWhenAskingForHelp: number;
  usesThePhoneToContactTheCaregiverOrAnotherSourceOfHelp: number;
  adjustsToChangingSituations: number;
  keepsConfidentialInformationSafe: number;
  safeguardsPersonalInformationOnline: number;
  notifiesOthersWhenMeetingPeopleMetOnline: number;
}

interface ProblemSolvingSkills {
  identifiesProblemsThatRequireImmediateAction: number;
  usesSearchStrategiesForLostItems: number;
  searchesForInformationOnline: number;
  makesSmallRepairs: number;
  asksNeighborsForHelp: number;
  knowsWhoToAskForHelp: number;
  solvesClimateControlProblems: number;
  replacesOtherItems: number;
  resetsElectronicDevices: number;
  solvesProblemsWithWater: number;
  solvesProblemsWithSmoke: number;
  attemptsToTroubleshootElectricalProblems: number;
  solvesPrinterProblems: number;
  handlesTravelRelatedProblems: number;
  checksTheSpamFolder: number;
  tracksOrders: number;
  returnsIncorrectOrDamagedItems: number;
  handlesUnauthorizedPurchases: number;
  dealsWithLossOfWalletOrCreditCard: number;
}

interface SocialSkillsAndEtiquette {
  shakesHands: number;
  introducesSelf: number;
  introducesFriendsAndFamilyToOthers: number;
  saysThankYou: number;
  excusesSelfToUseTheRestroomOrAnswerThePhone: number;
  acceptsCompliments: number;
  givesCompliments: number;
  keepsSecrets: number;
  avoidsQuestionsOneDoesNotWantToAnswer: number;
  participatesWithOthersInActivitiesOfCommonInterest: number;
  participatesInSocialGatheringsOrEvents: number;
  joinsAGroup: number;
  understandsCulturalEventsAndFamilyTraditions: number;
  givesGifts: number;
  writesThankYouNotes: number;
  identifiesWhoIsInterestedInTheTopic: number;
  allowsOthersToSpeakWithoutBeingInterrupted: number;
  isAGoodListener: number;
  changesTheSubjectAppropriately: number;
  identifiesInterestAndBoredomAboutTheTopic: number;
  endsConversationsPolitely: number;
  toleratesBriefAbsencesDuringConversations: number;
  avoidsCriticizingOthers: number;
  avoidsBoasting: number;
  keepsOneselfOccupiedWhenNoOneIsPresent: number;
  avoidsThoseWhoMakeJokesOrAreUnfriendly: number;
  describesSituations: number;
  avoidsPeopleWhoActInAnUnusualManner: number;
  practicesSafetyDuringARobbery: number;
}

interface SharedLivingSkills {
  cleansTheLivingSpace: number;
  sharesCleaningTasks: number;
  keepsCommonAreasTidy: number;
  respectsRoommatesPrivacy: number;
  negotiatesHouseRules: number;
  followsHouseRules: number;
  acceptsSmallVariationsInMethodsAndStandards: number;
  appropriateUseOfSharedSupplies: number;
  keepsPersonalBelongingsSafe: number;
  knocksOnTheBathroomDoorBeforeEntering: number;
  wearsClothesWhenInSharedAreasOfTheHouse: number;
  keepsNoiseAtReasonableLevels: number;
  remainsFlexibleRegardingLeisureActivitiesWithRoommates: number;
  leavesALightOnToAvoidReturningInTheDark: number;
  asksForApprovalToHaveGuests: number;
  receivesGuests: number;
  asksGuestsToLeave: number;
  controlsGuestsBehavior: number;
}

interface RelationshipsAndSexualitySkills {
  invitesFriendsToJoinActivities: number;
  goesOutWithFriends: number;
  respondsAppropriatelyWhenAttractedToSomeone: number;
  respondsAppropriatelyWhenOthersAreAttractedToThem: number;
  knowsTheDifferenceBetweenCasualFriendshipAndRomanticRelationship: number;
  describesTheConceptOfCohabitationEngagementAndMarriage: number;
  statesWhatIsExpectedWhenEnteringARelationship: number;
  dealsWithTheBeginningAndEndOfRelationships: number;
  identifiesWhenOthersAreInappropriatelyTakingAdvantage: number;
  statesWhatIsSexualBehavior: number;
  statesWhenWhereAndWithWhomItIsAppropriateToHaveSex: number;
  identifiesWhenOthersAttemptToInitiateSexualContact: number; // Repetição unificada
  understandsTouchesDuringMedicalExamination: number;
  isDiscreetWhenDiscussingSexualMatters: number;
  statesThePotentialOutcomesOfHavingSex: number;
  describesMedicalConditionsThatCanResultFromSex: number;
  dealsWithPeopleWhoWantToTakeSexualRisks: number; // Repetição unificada
  statesTheProblemsAssociatedWithHavingManySexualPartners: number;
  describesTheReproductiveCycleAndPregnancy: number;
  statesMethodsForPreventingPregnancy: number;
  describesContraceptiveMethods: number;
  recognizesSignsOfPregnancy: number;
  understandsRisksOfSendingOrPostingContentOnline: number;
  avoidsOnlinePredators: number;
  researchesBeforeMeetingSomeone: number;
  notifiesOthersWhenMeetingSomeoneMetOnline: number; // Repetição unificada
  knowsHowWhenWhereAndWithWhomItIsAppropriateToHaveSex: number; // Repetição unificada
  statesHowClothesOrActionsCanBeInterpretedAsSexualAvailability: number;
  reportsInappropriateTouching: number;
  statesHowToStopUnwantedSexualAdvances: number;
  understandsHowToStopSexualAssault:number;
  statesTheNeedToReportSexualViolence: number;
}