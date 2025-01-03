import { Schema, Document } from 'mongoose';
import { AnamnesisForCerebralPalsy } from 'src/features/anamnesis-for-cerebral-palsy/types/anamneseForCerebralPalsy';
 

export const AnamneseCerebralSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patient: { type: Schema.Types.ObjectId, required: true, ref: 'patient' },
  doctor: { type: Schema.Types.ObjectId, required: true, ref: 'doctor' },
  age: { type: Schema.Types.ObjectId, required: true, ref: 'patient'},
  bitrhDate: { type: Schema.Types.ObjectId, required: true, ref: 'patient'},
  date: { type: Date, required: true, },
  

  relevantEvents: { type: String },
  useOfMedications: { type: String },
  generalHealth: { type: String },
  birthGeneralConditions: { type: String },
  birthConditionsOfChild: { type: String },
  didTheBabyCryRightAway: { type: String },
  coloration: { type: String },
  wasTheBabyInTheIncubator: { type: String },
  howLongAndWhyInIncubator: { type: String },
  didTheBabyHaveFeedingProblemsInitially: { type: String },
  whichFeedingProblems: { type: String },
  specialMedicalObservationsAndRecommendations: { type: String },
  childsReleaseTimeAfterBirth: { type: String },
  planning2WasDesiredOrNot: { type: String },
  howDidItTranspire: { type: String },
  
  developmentMotor: {
    headControlCurrent: { type: String },
    sittingInitialPhase: { type: String },
    sittingWithSupport: { type: String },
    sittingWithoutSupport: { type: String },
    sittingCurrently: { type: String },
    crawling: { type: String },
    gettingOnAllFoursAndCrawling: { type: String },
    standingBalancePrevious: { type: String },
    standingBalanceCurrent: { type: String },
    walkingInitial: { type: String },
    walkingCurrently: { type: String },
    coordinationOfMovementsInGrossAndFineMotorActivities: { type: String },
    conditionsOfSelfStimulationAndExplorationOfTheEnvironmentAndObjects: { type: String },
  },
  foods: {
    headControlPrevious: { type: String },
    suckingHowDidTheFirstFeedingOccur: { type: String },
    explainHowTheLiquidFeedingWasGiven: { type: String },
    typeOfLiquidFeeding: { type: String },
    untilWhatTimeLiquidFeeding: { type: String },
    howWasTheSuckingInEachType: { type: String },
    gagging: { type: String },
    nasalEscape: { type: String },
    vomiting: { type: String },
    coughing: { type: String },
    inWhatConditionsWasTheFeedingGiven: { type: String },
    vertical: { type: String },
    horizontal: { type: String },
    howWasTheAcceptanceOfTheBottle: { type: String },
    typeOfNipple: { type: String },
    orifice: { type: String },
    doesItUseAStraw: { type: String },
    howWasTheUseOfCupsDone: { type: String },
    chewingAndSwallowing: { type: String },
    whenDidItStartEatingPastrySubstance: { type: String },
    whatWasUsedToGiveItsFood: { type: String },
    inWhatPositionWasTheChild: { type: String },
    whatWasThePassageFromThePastyToTheSolid: { type: String },
    blender: { type: String },
    sieve: { type: String },
    pastyFoodWithSemiSolidPieces: { type: String },
    whenDidItSwitchToSolidFoods: { type: String },
    howWasTheAcceptanceOfSolids: { type: String },
    howWasTheAcceptanceOfTheSalty: { type: String },
    howWasTheChewing: { type: String },
    andTheSwallowing: { type: String },
    difficultyInChewingSomeFoodWhich: { type: String },
    dentition: { type: String },
    withLiquids: { type: String },
    useOfCup: { type: String },
    useOfStraw: { type: String },
    currentDietSpecifyMealsWithTime: { type: String },
    morning: { type: String },
    afternoon: { type: String },
    dinner: { type: String },
    whatDoYouLikeToEatTheMost: { type: String },
    whatDoYouNotLikeToEat: { type: String },
    doPiecesOfFoodAppearInTheFeces: { type: String },
    manipulation: { type: String },
    pacifierUseUntilWhen: { type: String },
    whatKindPacifier: { type: String },
    suckedFinger: { type: String },
    bitNails: { type: String },
    grittedTeeth: { type: String },
    drooling: { type: String },
    hasDrooled: { type: String },
    untilWhenDrooling: { type: String },
    staysWithTheMouthOpen: { type: String },
    sleepsWithTheMouthOpen: { type: String },
    hasRespiratoryProblems: { type: String },
    sensitivity: { type: String },
    acceptedKissOnTheFace: { type: String },
    alwaysAccepted: { type: String },
    acceptedCaressesOnTheFace: { type: String },
    presentedThePhaseOfPuttingObjectsInTheMouth: { type: String },
    acceptedTeetherOrCheekToys: { type: String },
    getsIrritatedWithTheBeardOrFabricOnTheFace: { type: String },
    bDevelopmentCurrent: { type: String },
    whatDoYouEatWith: { type: String },
    doesItEatAlone: { type: String },
    inWhatPositionIsSolidFoodGiven: { type: String },
    whenLikeToSuckOrChewFood: { type: String },
    doesTheTongueProjectWhileSwallowing: { type: String },
    hasDifficultyInChewingOrSwallowingAnything: { type: String },
    whatDifficultInChewingOrSwallowing: { type: String },
    takesTimeToChew: { type: String },
    leavesPiecesInTheMouthWithoutSwallowing: { type: String },
    whyLeavesPiecesInTheMouthWithoutSwallowing: { type: String },
    isThereFoodEscape: { type: String },
    isThereGagging: { type: String },
    isThereVomiting: { type: String },
    isThereNasalEscape: { type: String },
    chewsWithMouthOpen: { type: String },
    drinksTooMuchLiquidDuringMeals: { type: String },
    drinksTooMuchLiquidAfterHavingBittenSolid: { type: String },
    putsALargeAmountOfFoodInTheMouth: { type: String },
    feedingADevelopmentPrevious: { type: String },
    doesTheChildEatTooFastOrSlow: { type: String },
    chewsWithCorrectJawMovement: { type: String },
    vomitsEasily: { type: String },
    letsYouBrushYourTeeth: { type: String },
    withOrWithoutPaste: { type: String },
    otherObservations: { type: String },
    speechTherapist: { type: String },
    specificAspectsOfLanguageDevelopment: { type: String },
    questioningAboutTheProcessOfAcquisitionDevelopmentScope: { type: String },
    howDidItProceed: { type: String },
    conditionsOfExplorationOfTheEnvironment: { type: String },
    typeAndConditionsOfStimulation: { type: String },
    typeAndCommunicationChannel: { type: String },
    interaction: { type: String },
    intentionOfCommunication: { type: String },
    expressionAndEstablishmentOfExchanges: { type: String },
    descriptionOfAllBehaviorInRelationToTheDomainOfTheCode: { type: String },
    understanding: { type: String },
    canYouKeepUpWithTheConversationalTheme: { type: String },
    vocabulary: { type: String },
    doesItHaveAbilityForAllSoundsOfTheLanguage: { type: String },
    intelligibilityOfSpeech: { type: String },
    chainingAndSequentialThinking: { type: String },
    linguisticMarkers: { type: String },
    generalPsychologicalState: { type: String },
          getsIrritatedWithGaseousLiquids: { type: String },
      }
});

export interface IAnamneseCerebralEntity extends Omit<AnamnesisForCerebralPalsy, '_id'>, Document {}