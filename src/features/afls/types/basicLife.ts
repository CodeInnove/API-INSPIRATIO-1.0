export interface IBasicLifeSkills {
  selfManagement: ISelfManagement
  behavioralSkills: BehavioralSkills
  dressingSkills: DressingSkills
  toiletingSkills: ToiletingSkills
  personalHygieneSkills: PersonalHygieneSkills
  bathingSkills: BathingSkills
  safetyAndHealthSkills: SafetyAndHealthSkills
  sleepSkills: SleepSkills
}

export interface ISelfManagement {
  aggressionAgainstOthers: number
  selfHarmfulBehavior: number
  disruptiveBehavior: number
  sociallyAcceptableBehaviorInAVarietyOfEnvironments: number
  followsInstructionsFromMultipleCaregivers: number
  cooperatesAndObeysRulesInVariousLocations: number
  remainsCalmWhenHeSheNeedsToBeSitting: number
  remainsCalmWhenThereIsADirectionChangeWhenWalkingOrDriving: number
  remainsCalmWhenItemsAreMovedFromASpecificPosition: number
  remainsCalmWhenItIsNecessaryToWearDifferentClothesShoesEtc: number
  consumesAHealthyVarietyOfFoodsAndEatsFoodTheWayTheyArePrepared: number
  remainsCalmWhenLoudOrUnexpectedNoisesOccur: number
  remainsCalmWhenTheScheduleIsChangedCannotHaveRestrictedItemsActivitiesIsToldNoOrIsAskedToWait: number
  remainsCalmDuringSuddenOrUnexpectedEvents: number
  remainsCalmDuringSuddenOrUnexpectedEventsDuplicate: number
  remainsCalmWhenRequiredItemsAreMissing: number
  remainsCalmWhenHavingTroublePerformingDifficultOrMultiStepTasks: number
  remainsCalmWhenAGroupOrFriendMakesADecisionThatHeSheMustFollow: number
  remainsCalmDuringHygieneActivities: number
  allowsTheirHairToBeCut: number
  refrainsFromTouchingThePossessionsOfOthers: number
  identifiesTheMainNormsAndRulesInCommunityEnvironmentsAndIdentifiesWhichBehaviorsAreInappropriateInTheseEnvironments: number
  acceptsVariousAuthorityFigures: number
  takesAppropriateMeasuresToResolveOrReportMistakesMadeByOthers: number
  requestsReasonableModificationsToTheEnvironment: number
}

export interface BehavioralSkills {
  followsInstructions: number;
  followsASequenceOfInstructions: number;
  usesACommunicationDevice: number;
  requestsMissingItemsNeededForATask: number;
  requestsHelp: number;
  requestsInformationUsingWhatWhereWhoAndWhen: number;
  requestsInformationUsingHowAndWhy: number;
  namesKnownObjects: number;
  namesKnownPeopleRealIndividualsNotLabelingByProfession: number;
  identifiesCommonActionsObservedAtHomeSchoolOrCommunity: number;
  namesPlaces: number;
  namesAdjectives: number;
  namesPrepositions: number;
  answersQuestionsAboutPersonalInformation: number;
  answersTheWhereQuestionAboutTheirHomeSchoolAndCommunity: number;
  answersTheWhatQuestionAboutTheirHomeSchoolAndCommunity: number;
  namesPreviouslyObservedPeopleAndActivities: number;
  readsSimpleWords: number;
  functionalCommunityWordsUniversalSymbolsAndSafetySigns: number;
  writesOrTypesTheirOwnName: number;
  spellsDictatedWordsByWritingOrTyping: number;
}

export interface DressingSkills {
  pullsPantsUpAndDown: number;
  takesPantsOffAndOn: number;
  putsShoesOnAndOff: number;
  putsBootsOnAndOff: number;
  putsSocksOnAndOff: number;
  tiesShoes: number;
  takesSweaterOffAndOn: number;
  buttonsAndUnbuttonsShirts: number;
  fastensButtons: number;
  buttonsAndUnbuttonsSleeveButtons: number;
  takesCoatOffAndOn: number;
  putsOnVariousHats: number;
  putsOnAndTakesOffMittens: number;
  putsOnAndTakesOffGloves: number;
  opensZippers: number;
  opensAndClosesAZipper: number;
  usesFasteners: number;
  opensAndClosesFasteners: number;
  usesVelcro: number;
  putsOnABelt: number;
  fastensAndUnfastensABeltBuckle: number;
  putsClothesOnRightSideOut: number;
  adjustsClothingWhenNecessary: number;
  identifiesClothesThatDoNotFitWell: number;
  identifiesAppropriateClothingForDifferentEnvironmentsAndOccasions: number;
  choosesShoesAccordingToActivityOrWeather: number;
  selectsClothesAppropriateForTheWeather: number;
  matchesClothingStylesAndColors: number;
  selectsOwnClothesAndDressesIndependently: number;
  bringsExtraClothesAsNeededForAnExcursion: number;
  selectsClothesToTakeOnATrip: number;
  packsABag: number;
  putsOnAndTakesOffABra: number;
  putsOnAndTakesOffEarrings: number;
  keepsEarringsClean: number;
  putsOnAClipOnTie: number;
  tiesATie: number;
}

export interface ToiletingSkills {
  consistentPreToiletingBehavior: number;
  respondsAppropriatelyToBeingWetDrySoiled: number;
  expressesWhenWet: number;
  expressesWhenSoiled: number;
  liftsAndLowersTheToiletSeatBeforeUsingTheToilet: number;
  sitsOnTheToiletAndKeepsHandsOutOfTheToiletWater: number;
  urinatesInTheToilet: number;
  defecatesInTheToilet: number;
  sitsOnTheToiletUntilFinished: number;
  usesToiletPaper: number;
  checksForToiletPaperBeforeUsingTheBathroom: number;
  flushesTheToilet: number;
  washesHandsAfterUsingTheBathroom: number;
  remainsDryDuringTheToiletingSchedule: number;
  asksToUseTheBathroom: number;
  staysDryDuringTheDay: number;
  staysDryDuringTheNight: number;
  usesTheBathroomExhaustFanAtHome: number;
  changesTheToiletPaperRollWhenEmpty: number;
  cleansUpUrineAfterMissingTheToilet: number;
  identifiesBathroomSigns: number;
  identifiesVacantOccupiedSignsInPublicRestrooms: number;
  determinesIfACubicleIsVacant: number;
  choosesAnAppropriateCubicle: number;
  flushesIfItHasNotBeenFlushedByOthersBeforeUsing: number;
  usesToiletSeatCovers: number;
  cleansADirtyPublicToiletSeat: number;
  waitsToEnterASingleStallCubicleNoLine: number;
  waitsToGoToTheNextAvailableUrinalOrCubicleNeedsToQueue: number;
  closesTheCubicleDoor: number;
  avoidsConversationsWithStrangersInPublicRestrooms: number;
  driesHandsWithTowelsPaperTowelsAndElectricDryersInPublicRestrooms: number;
  usesTheBathroomBeforeALongTrip: number;
  placesAPadInUnderwear: number;
  changesAndDisposesOfSanitaryProducts: number;
  identifiesNecessaryFeminineHygieneProducts: number;
  countsTheDaysOfTheMenstrualCycleAndMarksItOnTheCalendar: number;
  checksAndChangesThePadAsNeeded: number;
  urinatesInTheToiletWhileStanding: number;
  standsAppropriatelyAtTheUrinal: number;
  choosesTheCorrectUrinal: number;
}

export interface PersonalHygieneSkills {
  turnsFaucetOnAndOff: number;
  washesHands: number;
  toleratesTeethBeingBrushedByOthers: number;
  removesAndReplacesToothpasteCap: number;
  putsToothpasteOnToothbrush: number;
  brushesTeeth: number;
  removesToothpasteFromBrush: number;
  putsToothbrushAndToothpasteInTheAppropriatePlace: number;
  cleansTheSink: number;
  usesMouthwash: number;
  flossesTeeth: number;
  completesOralHygieneProcessAtLeastTwiceADay: number;
  regulatesWaterTemperature: number;
  washesAndDriesFace: number;
  combsOrBrushesHair: number;
  usesLipBalm: number;
  usesBodyLotion: number;
  cutsAndCleansFingernails: number;
  cutsAndCleansToenails: number;
  usesDeodorant: number;
  usesTheBathroomMirror: number;
  cleansGlassesOrSunglasses: number;
  packsPersonalHygieneItemsForTravel: number;
  shavesLegs: number;
  appliesMakeup: number;
  removesMakeup: number;
  appliesNailPolishToFingernailsAndToenails: number;
  shavesFace: number;
  cleansOrthodonticAppliances: number;
  putsInAndRemovesContactLenses: number;
  caresForContactLenses: number;
  appliesAcneMedication: number;
  putsOnHearingAidS: number;
}

export interface BathingSkills {
  ensuresNecessaryItemsAreInTheBathroom: number;
  putsDirtyClothesInTheLaundryBasket: number;
  usesTheBathtubOrShowerFaucet: number;
  regulatesWaterTemperature: number;
  fillsTheBathtubWithWater: number;
  washesTheBody: number;
  rinsesTheBodyInTheBathtubOrShower: number;
  drainsTheBathtub: number;
  keepsTheShowerCurtainDoorClosed: number;
  washesHair: number;
  driesTheBodyAfterBathing: number;
  hangsTheTowelOnTheTowelRackOrHook: number;
  driesHairWithAHairdryer: number;
}

export interface SafetyAndHealthSkills {
  staysInTheDesignatedArea: number;
  demonstratesSafeBehaviorNearWater: number;
  locatesThePoolEdgeAndHoldsOn: number;
  swimsDoggyStyle: number;
  floatsInTheWater: number;
  labelsThingsThatCanBeHot: number;
  checksIfThingsAreHot: number;
  receptivelyIdentifiesToxicOrDangerousHouseholdMaterials: number;
  knowsTheDifferenceBetweenAFriendAnAcquaintanceAndAStranger: number;
  keepsDoorsClosedAndLockedWhenAStrangerKnocks: number;
  indicatesDifferentDangerousSituations: number;
  locatesAndRetrievesTheFirstAidKit: number;
  stopsBleedingFromMinorCuts: number;
  appliesABandage: number;
  treatsMinorBurns: number;
  treatsBurnsWithBurnLotion: number;
  seeksAssistanceForSevereCutsBurnsOrWounds: number;
  locatesAndUsesAFlashlight: number;
  reportsSmokeAndFire: number;
  respondsToSmokeDetectorsAndFireAlarms: number;
  indicatesHowToExitInCaseOfFire: number;
  calls911AndReportsTheIncident: number;
  protectsSelfFromSun: number;
  appliesHandSanitizer: number;
  maintainsHydration: number;
  reportsPainLevelOnTheFacesPainScale: number;
  reportsPainVerbally: number;
  determinesIfThereIsAFever: number;
  swallowsLiquidMedication: number;
  swallowsPills: number;
  cooperatesWithPhysicalExaminations: number;
  cooperatesWithDentalExaminationAndTeethCleaning: number;
  receptiveIdentificationOfMedications: number;
  identificationOfOverTheCounterMedications: number;
  describesMedicationsUsedForSymptoms: number;
  indicatesConditionsThatRequireADoctor: number;
  avoidsAllergens: number;
  informsOthersOfPersonalMedicalConditionsAllergiesEtc: number;
  usesAnAsthmaInhaler: number;
}

export interface SleepSkills {
  goesToSleepWhenTold: number;
  goesToSleepAtASetTime: number;
  gathersDesiredBedtimeItems: number;
  closesCurtainsOrBlinds: number;
  turnsNightLightOnOrOff: number;
  turnsOffTheLights: number;
  goesToSleepWithoutAnAdultPresent: number;
  sleepsInOwnBedEveryNight: number;
  makesTheBedInTheMorning: number;
  setsTheAlarmClock: number;
  followsAllTheStepsToPrepareForSleep: number;
  goesToSleepIndependentlyAtAnAppropriateTime: number;
  sleepsForAnAppropriateAmountOfTime: number;
  wakesUpIndependentlyWhenTheAlarmGoesOff: number;
}

