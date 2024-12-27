import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class FoodsDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    headControlPrevious: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    suckingHowDidTheFirstFeedingOccur: string;
   @ApiProperty()
    @IsOptional()
    @IsString()
    explainHowTheLiquidFeedingWasGiven: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    typeOfLiquidFeeding: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    untilWhatTimeLiquidFeeding: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheSuckingInEachType: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    gagging: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    nasalEscape: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    vomiting: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    coughing?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    inWhatConditionsWasTheFeedingGiven?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    vertical?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    horizontal?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheAcceptanceOfTheBottle?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    typeOfNipple?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    orifice?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    doesItUseAStraw?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheUseOfCupsDone?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    chewingAndSwallowing?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    whenDidItStartEatingPastrySubstance?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     whatWasUsedToGiveItsFood?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    inWhatPositionWasTheChild?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    whatWasThePassageFromThePastyToTheSolid?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    blender?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    sieve?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    pastyFoodWithSemiSolidPieces?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    whenDidItSwitchToSolidFoods?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheAcceptanceOfSolids?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheAcceptanceOfTheSalty?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    howWasTheChewing?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    andTheSwallowing?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    difficultyInChewingSomeFoodWhich?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    dentition?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
     withLiquids?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     useOfCup?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     useOfStraw?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     currentDietSpecifyMealsWithTime?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    morning?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    afternoon?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    dinner?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoYouLikeToEatTheMost?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoYouNotLikeToEat?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    doPiecesOfFoodAppearInTheFeces?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    manipulation?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    pacifierUseUntilWhen?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     whatKindPacifier?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    suckedFinger?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     bitNails?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    grittedTeeth?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    drooling?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    hasDrooled?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    untilWhenDrooling?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    staysWithTheMouthOpen?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    sleepsWithTheMouthOpen?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     hasRespiratoryProblems?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    sensitivity?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    acceptedKissOnTheFace?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     alwaysAccepted?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    acceptedCaressesOnTheFace?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    presentedThePhaseOfPuttingObjectsInTheMouth?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    acceptedTeetherOrCheekToys?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    getsIrritatedWithTheBeardOrFabricOnTheFace?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    bDevelopmentCurrent?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoYouEatWith?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    doesItEatAlone?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    inWhatPositionIsSolidFoodGiven?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    whenLikeToSuckOrChewFood?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    doesTheTongueProjectWhileSwallowing?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    hasDifficultyInChewingOrSwallowingAnything?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    whatDifficultInChewingOrSwallowing?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    takesTimeToChew?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    leavesPiecesInTheMouthWithoutSwallowing?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    whyLeavesPiecesInTheMouthWithoutSwallowing?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    isThereFoodEscape?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     isThereGagging?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    isThereVomiting?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    isThereNasalEscape?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    chewsWithMouthOpen?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     drinksTooMuchLiquidDuringMeals?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    drinksTooMuchLiquidAfterHavingBittenSolid?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     putsALargeAmountOfFoodInTheMouth?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     feedingADevelopmentPrevious?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     doesTheChildEatTooFastOrSlow?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    chewsWithCorrectJawMovement?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
     vomitsEasily?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    letsYouBrushYourTeeth?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    withOrWithoutPaste?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     otherObservations?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    speechTherapist?: string;
   @ApiProperty()
    @IsOptional()
    @IsString()
    specificAspectsOfLanguageDevelopment?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     questioningAboutTheProcessOfAcquisitionDevelopmentScope?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
     howDidItProceed?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    conditionsOfExplorationOfTheEnvironment?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    typeAndConditionsOfStimulation?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     typeAndCommunicationChannel?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    interaction?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     intentionOfCommunication?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
    expressionAndEstablishmentOfExchanges?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    descriptionOfAllBehaviorInRelationToTheDomainOfTheCode?: string;
      @ApiProperty()
    @IsOptional()
    @IsString()
    understanding?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     canYouKeepUpWithTheConversationalTheme?: string;
     @ApiProperty()
    @IsOptional()
    @IsString()
     vocabulary?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
     doesItHaveAbilityForAllSoundsOfTheLanguage?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    intelligibilityOfSpeech?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    chainingAndSequentialThinking?: string;
   @ApiProperty()
    @IsOptional()
    @IsString()
    linguisticMarkers?: string;
    @ApiProperty()
    @IsOptional()
    @IsString()
    getsIrritatedWithGaseousLiquids?: string;
}