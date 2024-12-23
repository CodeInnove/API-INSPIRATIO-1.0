export interface IDomesticLifeSkills {
  eatingAndTableMannersSkills: EatingAndTableMannersSkills;
  dishwashingAndDishCareSkills: DishwashingAndDishCareSkills;
  laundryAndClothingCareSkills: LaundryAndClothingCareSkills;
  homeOrganizationCleaningAndCareSkills: HomeOrganizationCleaningAndCareSkills;
  objectOperationAndBasicHomeMaintenanceSkills: ObjectOperationAndBasicHomeMaintenanceSkills;
  leisureAndRecreationSkills: LeisureAndRecreationSkills;
  snackPreparationFoodHandlingAndUtensilUseSkills: SnackPreparationFoodHandlingAndUtensilUseSkills;
  mealPreparationAndKitchenSafetySkills: MealPreparationAndKitchenSafetySkills;
}

interface EatingAndTableMannersSkills {
  identifiesFoodEatenWithUtensils: number;
  usesASpoonWithSolids: number;
  usesASpoonWithLiquids: number;
  usesAFork: number;
  cutsWithAFork: number;
  usesAKnifeAndForkTogether: number;
  drinksWithAStraw: number;
  drinksFromAWideMouthCup: number;
  placesCupsGlassesInASafeLocationOnTheTable: number;
  carriesPlatesWithFoodAndOrFullCupsWithoutSpilling: number;
  servesOneselfSolidFoodFromALargerDish: number;
  servesOneselfLiquidFood: number;
  takesAppropriatelySizedPortions: number;
  placesDirtyUtensilsOnThePlate: number;
  usesANapkin: number;
  sitsAtTheTableForTheMeal: number;
  takesAppropriateSizedBitesOfFood: number;
  eatsAtAnAppropriatePace: number;
  chewsWithMouthClosed: number;
  passesFoodWhenRequested: number;
  excusesOneselfBeforePassingInFrontOfOthersToEat: number;
  asksForFoodToBePassed: number;
  usesAppropriateConversationAndNoisesDuringMeals: number;
  maintainsSpeechVolumeAtTheCorrectLevel: number;
  speaksWhenMouthIsClearOfFood: number;
  placesTrashInTheTrashCanAfterTheMeal: number;
  clearsTheTable: number;
  wipesTheTableAfterAMeal: number;
  waitsForAResponseWhenAPersonHasFoodInTheirMouth: number;
}

interface DishwashingAndDishCareSkills {
  retrievesDishesFromCabinets: number;
  handlesFragileDishes: number;
  selectsAppropriateDishesForFoodItems: number;
  setsTheTableWithAppropriateItems: number;
  takesDirtyDishesToTheSink: number;
  loadsDishesIntoTheDishwasher: number;
  operatesTheDishwasher: number;
  unloadsTheDishwasher: number;
  preparesTheDishwasherForLoading: number; // Adicionado para melhor clareza
  washesDishesByHand: number;
  rinsesDishes: number;
  placesDishesInTheDishRack: number;
  cleansGreasyPotsAndPans: number;
  cleansSharpKnives: number;
  cleansUpSpilledLiquidWhileWashingDishes: number;
  driesDishes: number;
  sortsSilverware: number;
  storesCupsAndDishes: number;
}

interface LaundryAndClothingCareSkills {
  identifiesCleanClothesFromDirtyClothes: number;
  placesDirtyClothesInTheLaundryBasket: number;
  sortsClothesByColor: number;
  sortsMachineWashableClothes: number;
  usesTheWashingMachine: number;
  sortsDryClothesFromNotDryClothes: number;
  hangsClothesToDry: number;
  placesClothesInTheDryer: number;
  usesDryerSheets: number;
  cleansTheDryerLintFilter: number;
  operatesTheDryer: number;
  emptiesTheDryer: number;
  bringsClothesToAFoldingArea: number;
  separatesClothingItemsBeforeFoldingAndStoringThem: number;
  identifiesPersonalClothing: number;
  identifiesStorageLocationsForClothes: number;
  foldsAndSortsTowels: number;
  matchesAndStoresPairsOfSocks: number;
  foldsAndStoresPants: number;
  storesUnderwear: number;
  foldsAndStoresUndershirts: number;
  placesClothesInDrawers: number;
  foldsSheets: number;
  storesTowelsAndSheets: number;
  selectsTheAppropriateHanger: number;
  hangsShirtsCoatsAndJackets: number;
  fastensPantsOnTheCorrectHanger: number;
  hangsClothesInTheCloset: number;
  identifiesDamagedClothing: number;
}

interface HomeOrganizationCleaningAndCareSkills {
  packsAndUnpacksBackpacks: number;
  storesPersonalBelongings: number;
  identifiesStorageLocationsForPersonalAndHouseholdItems: number;
  placesBooksOnShelves: number;
  linesUpPairsOfShoes: number;
  placesTrashInTheTrashCan: number;
  sortsRecyclableItemsFromTrash: number;
  takesTrashFromInsideTheHouseOutside: number;
  takesTheTrashCanToTheStreet: number;
  cleansTables: number;
  cleansTheFloorAroundTheEatingArea: number;
  usesCleaningSpray: number;
  replacesThePaperTowelRollWhenEmpty: number;
  usesABroomAndDustpan: number;
  mopsTheFloor: number;
  removesBedding: number;
  placesThePillowcaseOnThePillow: number;
  placesASheetOnTheBed: number;
  makesTheBed: number;
  replacesTheToiletPaperRollWhenEmpty: number;
  cleansTheToiletSeat: number;
  cleansTheToiletUsingAToiletBrush: number;
  dustsObjects: number;
  cleansTheStoveWithADampCloth: number;
  cleansTheMicrowaveWithADampCloth: number;
  cleansTheBathroomSink: number;
  cleansTheBathtub: number;
  cleansWindowsAndMirrors: number;
  feedsPets: number;
  cleansLitterBoxCatHouseOrPetCages: number;
  watersPlants: number;
  shovelsSnow: number;
  sweepsLeaves: number;
  placesLeavesInBags: number;
}

interface ObjectOperationAndBasicHomeMaintenanceSkills {
  operatesLightSwitches: number;
  pushesChairs: number;
  pushesAndPullsADoorOpen: number;
  opensAndClosesDoorsWithKnobsAndLeverHandles: number;
  locksAndUnlocksButtonLocksToOpenTheDoor: number;
  locksAndUnlocksTheDoorWithAPushAndTwistButtonLock: number;
  usesAKeyToLockAndUnlockDoors: number;
  locksAndUnlocksDoorsWithDeadbolts: number;
  opensAndClosesTheGarageDoor: number;
  expressivelyIdentifiesCommonRooms: number;
  identifiesObjectsInCommonRooms: number;
  listsObjectsFoundInDifferentRooms: number;
  answersQuestionsAboutWhichRoomItemsAreLocatedIn: number;
  repairsItemsWithGlueOrSuperglue: number;
  flushesTheToilet: number;
  usesAPlungerToClearAToilet: number;
  adjustsTemperatureControls: number;
  keepsKeysInAEstablishedLocation: number;
  identifiesSmokeDetectorsByTouchingForBatteryReplacement: number;
  preparesALetter: number;
  mailsAnEnvelope: number;
  placesStampsOnALetter: number;
  placesAndRemovesLettersFromTheMailbox: number;
  identifiesBatteries: number;
  replacesBatteries: number;
}

interface LeisureAndRecreationSkills {
  looksAtBooksOrMagazines: number;
  watchesTV: number;
  operatesATelevision: number;
  operatesADVDPlayer: number;
  operatesAStéreoOrDigitalSoundSystem: number;
  operatesARadio: number;
  listensToMusic: number;
  completesArtProjects: number;
  usesIPadOrElectronicGames: number;
  usesTheComputerToBrowseTheInternetWatchYouTubeOrPlayOnlineGames: number;
  playsVideoGamesWithPeers: number;
  playsBoardGames: number;
  playsCardGames: number;
  playsInteractiveBallGames: number;
  playsOutdoorGames: number;
  participatesInOutdoorRecreation: number;
  participatesInCommunityBasedRecreationalActivitiesWithFriends: number;
  participatesInStructuredGroupActivities: number;
  participatesInLeisureActivitiesWithMultiplePartners: number;
  goesOutWithPeers: number;
  stopsLeisureActivitiesWhenRequestedOrWithinAnAllottedAmountOfTime: number;
  invitesOthersToParticipateAsksToJoinALeisureActivity: number;
  engagesInSpecialInterestsOrHobbies: number;
  initiatesAppropriateLeisureChoices: number;
}

interface SnackPreparationFoodHandlingAndUtensilUseSkills {
  obtainsSnacks: number;
  opensAndClosesJars: number;
  opensScrewTopBottlesAndContainers: number;
  opensJuiceBoxesAndMilkCartons: number;
  opensCansWithPullTabs: number;
  removesProtectiveSealsFoundUnderLidsOnContainers: number;
  opensAndClosesPlasticFoodStorageContainers: number;
  opensAndClosesFoodStorageBoxes: number;
  placesLeftoversInPlasticBags: number;
  placesLeftoversInBowlsAndCoversWithPlasticWrap: number;
  storesLeftoverFood: number;
  identifiesCannedAndBoxedFoodsThroughTheirLabels: number;
  sortsAndStoresFoodGroceries: number;
  findsItemsInTheRefrigerator: number;
  returnsFoodItemsToTheRefrigerator: number;
  getsIce: number;
  transfersFoodToAPlateOrBowl: number;
  servesOneselfLiquidFoodFromALargerDish: number;
  cleansUpSpilledLiquids: number;
  cleansUpSpilledSolidFood: number;
  discardsUnfinishedPortions: number;
  identifiesLeftoversToBeDiscarded: number;
  determinesNonEdibleFoodsBySmellAppearanceAndPassageOfTime: number;
  usesACanOpener: number;
  usesABottleOpener: number;
  usesAnIceCreamScoop: number;
  usesAButterKnifeForSpreading: number;
  holdsAndPassesSharpKnives: number;
  walksAndMovesWithASharpKnife: number;
  cutsSafelyUsingASharpKnife: number;
  cutsFoodItemsIntoPieces: number;
  usesAPeelers: number;
  preparesCheese: number;
  measuresLiquidVolumes: number;
  measuresSolidVolumes: number;
  usesABlender: number;
  usesTheGarbageDisposal: number;
}

interface MealPreparationAndKitchenSafetySkills {
  obtainsFoodAndKitchenItemsToPrepareADish: number;
  wearsAnApron: number;
  washesHands: number;
  poursPreMeasuredLiquidsAndSolidsIntoARecipient: number;
  poursLiquidsIntoBowlsAndGlasses: number;
  stirsItemsInABowl: number;
  makesAColdSandwich: number;
  makesAPeanutButterAndJellySandwich: number;
  washesFruitsAndVegetables: number;
  makesASalad: number;
  bakesCookies: number;
  followsSimpleRecipesForColdFood: number;
  identifiesWhenTheStoveAndAppliancesAreHot: number;
  checksTheTemperatureBeforeHandlingDishesFromTheKitchen: number;
  usesOvenMittensForHotItems: number;
  makesMicrowavePopcorn: number;
  identifiesMicrowaveSafeDishes: number;
  placesAndRemovesItemsFromTheMicrowave: number;
  determinesApproximatelyTheTimeToHeatFoodInTheMicrowave: number;
  usesAToaster: number;
  usesAToasterOven: number;
  avoidsFlamesAndHotElectricalCoilsWhileCooking: number;
  knowsWhatActionsToTakeWhenClothingCatchesFireWhileCooking: number;
  demonstratesStovetopFireSafety: number;
  avoidsSteamWhileCooking: number;
  adjustsStoveBurners: number;
  turnsOffTheStoveWhenFinished: number;
  usesTheKitchenExhaustHood: number;
  boilsWater: number;
  adjustsTheStoveToBoilAndSimmer: number;
  preparesInstantHotCerealsOatmealCreamOfWheatEtc: number;
  preparesHotChocolateCoffeeOrTea: number;
  makesPasta: number;
  stirsFoodWithASpoonWhileCooking: number;
  usesASpatula: number;
  observesOverheatingWhenUsingTheStove: number;
  followsARecipeForCookingFood: number;
  placesHotPotsPansOnTrivetsOrHotPads: number;
  adjustsOvenSettings: number;
  usesAKitchenTimer: number;
  describesUnhealthyFoods: number;
  plansAMeal: number;
  makesAGroceryList: number;
}
