import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";



export class CreatePortageGuidetoPreschoolEducationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    birthDay: string;

    @ApiProperty()
    Date: Date;

    @ApiProperty()
    socialization0To1Years: socialization0To1Year

    @ApiProperty()
    socialization1To2Years: socialization1To2Years

    @ApiProperty()
    socialization2To3Years: socialization2To3Years

    @ApiProperty()
    socialization3To4Years : Socialization3To4Years

    @ApiProperty()
    socialization4To5Years: Socialization4To5Years

    @ApiProperty()
    socialization5To6Years: Socialization5To6Years

    @ApiProperty()
    language0To1Years: language0To1Years

    @ApiProperty()
    language1To2Years: language1To2Years

    @ApiProperty()
    language2To3Years:language2To3Years

    @ApiProperty()
    language3To4Years:language3To4Years

    @ApiProperty()
    language4To5Years:language4To5Years

    @ApiProperty()
    language5To6Years:language5To6Years

    @ApiProperty()
    cognition0To1Year:cognition0To1Year

    @ApiProperty()
    cognition1To2Years:cognition1To2Years

    @ApiProperty()
    Cognition2To3YearsDto:Cognition2To3YearsDto

    @ApiProperty()
    Cognition3To4YearsDto:Cognition3To4YearsDto

    @ApiProperty()
    Cognition4To5YearsDto:Cognition4To5YearsDto

    @ApiProperty()
    Cognition5To6YearsDto:Cognition5To6YearsDto

    @ApiProperty()
    SelfCare0To1YearDto: SelfCare0To1YearDto

    @ApiProperty()
    SelfCare1To2YearsDto:SelfCare1To2YearsDto

    @ApiProperty()
    SelfCare2To3YearsDto: SelfCare2To3YearsDto

    @ApiProperty()
    SelfCare3To4YearsDto:SelfCare3To4YearsDto

    @ApiProperty()
    SelfCare4To5YearsDto:SelfCare4To5YearsDto

    @ApiProperty()
    SelfCare5To6YearsDto:SelfCare5To6YearsDto

    @ApiProperty()
    MotorDevelopment0To1YearDto:MotorDevelopment0To1YearDto

    @ApiProperty()
    MotorDevelopment1To2YearsDto:MotorDevelopment1To2YearsDto

    @ApiProperty()
    MotorDevelopment2To3YearsDto:MotorDevelopment2To3YearsDto

    @ApiProperty()
    MotorDevelopment3To4YearsDto:MotorDevelopment3To4YearsDto

    @ApiProperty()
    MotorDevelopment4To5YearsDto:MotorDevelopment4To5YearsDto

    @ApiProperty()
    MotorDevelopment5To6YearsDto:MotorDevelopment5To6YearsDto
}

export class socialization0To1Year{ 
    @ApiProperty({ description: 'Observes a person moving in their visual field', example: 1 })
    @IsNumber()
    @IsOptional()
    observesAPersonMovingInTheirVisualField?: number;

    @ApiProperty({ description: 'Smiles in response to adult attention', example: 1 })
    @IsNumber()
    @IsOptional()
    smilesInResponseToAdultAttention?: number;

    @ApiProperty({ description: 'Vocalizes in response to attention', example: 1 })
    @IsNumber()
    @IsOptional()
    vocalizesInResponseToAttention?: number;

    @ApiProperty({ description: 'Looks at own hand, smiling or vocalizing', example: 1 })
    @IsNumber()
    @IsOptional()
    looksAtOwnHandSmilingOrVocalizing?: number;

    @ApiProperty({ description: 'Responds to family circle, smiling, vocalizing, or stopping crying', example: 1 })
    @IsNumber()
    @IsOptional()
    respondsToFamilyCircleSmilingVocalizingOrStoppingCrying?: number;

    @ApiProperty({ description: 'Smiles in response to others facial expressions', example: 1 })
    @IsNumber()
    @IsOptional()
    smilesInResponseToOthersFacialExpressions?: number;

    @ApiProperty({ description: 'Smiles and vocalizes when seeing image in mirror', example: 1 })
     @IsNumber()
    @IsOptional()
    smilesAndVocalizesWhenSeeingImageInMirror?: number;

    @ApiProperty({ description: 'Caresses or touches adults faces, pulls hair, nose, glasses etc', example: 1 })
    @IsNumber()
    @IsOptional()
    caressesOrTouchesAdultsFacesPullsHairNoseGlassesEtc?: number;

    @ApiProperty({ description: 'Reaches towards an offered object', example: 1 })
    @IsNumber()
    @IsOptional()
    reachesTowardsAnOfferedObject?: number;

    @ApiProperty({ description: 'Reaches arms towards family members', example: 1 })
    @IsNumber()
    @IsOptional()
    reachesArmsTowardsFamilyMembers?: number;

    @ApiProperty({ description: 'Extends hand and touches own reflected image in mirror', example: 1 })
    @IsNumber()
    @IsOptional()
     extendsHandAndTouchesOwnReflectedImageInMirror?: number;

     @ApiProperty({ description: 'Holds and examines given object for 1 minute', example: 1 })
    @IsNumber()
    @IsOptional()
     holdsAndExaminesGivenObjectFor1Minute?: number;

    @ApiProperty({ description: 'Shakes or squeezes an object placed in hand, producing involuntary sounds', example: 1 })
    @IsNumber()
    @IsOptional()
     shakesOrSqueezesAnObjectPlacedInHandProducingInvoluntarySounds?: number;

    @ApiProperty({ description: 'Plays alone for 10 minutes', example: 1 })
    @IsNumber()
    @IsOptional()
    playsAloneFor10Minutes?: number;

    @ApiProperty({ description: 'Seeks eye contact when someone pays attention for 2 to 3 minutes', example: 1 })
    @IsNumber()
    @IsOptional()
    seeksEyeContactWhenSomeonePaysAttentionFor2To3Minutes?: number;

    @ApiProperty({ description: 'Plays alone without complaining for 15 to 20 minutes near an adult', example: 1 })
    @IsNumber()
    @IsOptional()
    playsAloneWithoutComplainingFor15To20MinutesNearAnAdult?: number;

    @ApiProperty({ description: 'Vocalizes to get attention', example: 1 })
    @IsNumber()
    @IsOptional()
    vocalizesToGetAttention?: number;

    @ApiProperty({ description: 'Imitates adult in peek-a-boo games', example: 1 })
     @IsNumber()
    @IsOptional()
    imitatesAdultInPeekABooGames?: number;

    @ApiProperty({ description: 'Claps hands, imitating an adult', example: 1 })
    @IsNumber()
    @IsOptional()
    clapsHandsImitatingAnAdult?: number;

    @ApiProperty({ description: 'Waves hand, imitating an adult', example: 1 })
     @IsNumber()
    @IsOptional()
    wavesHandImitatingAnAdult?: number;

    @ApiProperty({ description: 'Raises arms to express "big," imitating an adult', example: 1 })
     @IsNumber()
    @IsOptional()
    raisesArmsToExpressBigImitatingAnAdult?: number;

    @ApiProperty({ description: 'Offers something but does not always deliver', example: 1 })
    @IsNumber()
    @IsOptional()
    offersSomethingButDoesNotAlwaysDeliver?: number;

    @ApiProperty({ description: 'Hugs, caresses, and kisses family members', example: 1 })
     @IsNumber()
    @IsOptional()
    hugsCaressesAndKissesFamilyMembers?: number;

    @ApiProperty({ description: 'Responds to own name, looking or extending arm to be picked up', example: 1 })
    @IsNumber()
    @IsOptional()
    respondsToOwnNameLookingOrExtendingArmToBePickedUp?: number;

     @ApiProperty({ description: 'Squeezes or shakes toy to produce sounds in imitation', example: 1 })
    @IsNumber()
    @IsOptional()
    squeezesOrShakesToyToProduceSoundsInImitation?: number;

     @ApiProperty({ description: 'Manipulates toy or object', example: 1 })
     @IsNumber()
    @IsOptional()
     manipulatesToyOrObject?: number;
    
    @ApiProperty({ description: 'Extends a toy or object to an adult and delivers it', example: 1 })
    @IsNumber()
    @IsOptional()
    extendsAToyOrObjectToAnAdultAndDeliversIt?: number;

    @ApiProperty({ description: 'Imitates movements of other children while playing', example: 1 })
     @IsNumber()
    @IsOptional()
    imitatesMovementsOfOtherChildrenWhilePlaying?: number;
}


export class socialization1To2Years {
    @ApiProperty({ description: 'Imitates an adult in a simple task', example: 1 })
    @IsNumber()
    @IsOptional()
    imitatesAnAdultInASimpleTask?: number;

  @ApiProperty({ description: 'Plays next to another child, each performing different tasks', example: 1 })
  @IsNumber()
  @IsOptional()
  playsNextToAnotherChildEachPerformingDifferentTasks?: number;

  @ApiProperty({ description: 'Takes part in a play with another child for 2 to 5 minutes', example: 1 })
  @IsNumber()
  @IsOptional()
  takesPartInAPlayWithAnotherChildFor2To5Minutes?: number;

  @ApiProperty({ description: 'Accepts parents absence, although may complain', example: 1 })
  @IsNumber()
  @IsOptional()
  acceptsParentsAbsenceAlthoughMayComplain?: number;

  @ApiProperty({ description: 'Actively explores its environment', example: 1 })
  @IsNumber()
  @IsOptional()
  activelyExploresItsEnvironment?: number;

  @ApiProperty({ description: 'Performs manipulative activity with another person', example: 1 })
  @IsNumber()
  @IsOptional()
  performsManipulativeActivityWithAnotherPerson?: number;

  @ApiProperty({ description: 'Hugs and carries a doll or soft toy', example: 1 })
  @IsNumber()
  @IsOptional()
  hugsAndCarriesADollOrSoftToy?: number;

  @ApiProperty({ description: 'Repeats actions that produce laughter and attention', example: 1 })
  @IsNumber()
  @IsOptional()
  repeatsActionsThatProduceLaughterAndAttention?: number;

  @ApiProperty({ description: 'Gives a book for an adult to read or for both to share', example: 1 })
  @IsNumber()
  @IsOptional()
  givesABookForAnAdultToReadOrForBothToShare?: number;

  @ApiProperty({ description: 'Pulls a person to show them something', example: 1 })
  @IsNumber()
  @IsOptional()
  pullsAPersonToShowThemSomething?: number;

  @ApiProperty({ description: 'Withdraws hand or says no when near forbidden object and someone reminds it', example: 1 })
   @IsNumber()
  @IsOptional()
  withdrawsHandOrSaysNoWhenNearForbiddenObjectAndSomeoneRemindsIt?: number;

  @ApiProperty({ description: 'When placed in chair or changing table, waits to be attended', example: 1 })
  @IsNumber()
  @IsOptional()
  whenPlacedInChairOrChangingTableWaitsToBeAttended?: number;

  @ApiProperty({ description: 'Plays with 2 or 3 children of same age', example: 1 })
  @IsNumber()
  @IsOptional()
  playsWith2Or3ChildrenOfSameAge?: number;

  @ApiProperty({ description: 'Shares an object or food with another child', example: 1 })
  @IsNumber()
  @IsOptional()
  sharesAnObjectOrFoodWithAnotherChild?: number;

  @ApiProperty({ description: 'Greets peers or adults when reminded', example: 1 })
    @IsNumber()
  @IsOptional()
  greetsPeersOrAdultsWhenReminded?: number;
}


export class socialization2To3Years{
    @ApiProperty({ description: 'Obeys parents orders at least half the time', example: 1 })
  @IsNumber()
  @IsOptional()
  obeysParentsOrdersAtLeastHalfTheTime?: number;

  @ApiProperty({ description: 'Seeks or takes an object or person when asked', example: 1 })
  @IsNumber()
  @IsOptional()
  seeksOrTakesAnObjectOrPersonWhenAsked?: number;

  @ApiProperty({ description: 'Pays attention to story or music for 5 to 10 minutes', example: 1 })
  @IsNumber()
  @IsOptional()
  paysAttentionToStoryOrMusicFor5To10Minutes?: number;

  @ApiProperty({ description: 'Says please or thank you when reminded', example: 1 })
  @IsNumber()
  @IsOptional()
  saysPleaseOrThankYouWhenReminded?: number;

  @ApiProperty({ description: 'Tries to help parents perform tasks by doing part of it', example: 1 })
  @IsNumber()
  @IsOptional()
  triesToHelpParentsPerformTasksByDoingPartOfIt?: number;

  @ApiProperty({ description: 'Plays at wearing adults clothes', example: 1 })
  @IsNumber()
  @IsOptional()
  playsAtWearingAdultsClothes?: number;

    @ApiProperty({ description: 'Makes a choice when asked', example: 1 })
  @IsNumber()
  @IsOptional()
  makesAChoiceWhenAsked?: number;

  @ApiProperty({ description: 'Demonstrates understanding of feelings, expressing them', example: 1 })
    @IsNumber()
  @IsOptional()
  demonstratesUnderstandingOfFeelingsExpressingThem?: number;
}

export class Socialization3To4Years{
    @ApiProperty({ description: 'Sings and dances when hearing music', example: 1 })
    @IsNumber()
    @IsOptional()
    singsAndDancesWhenHearingMusic: number;
    
    @ApiProperty({ description: 'Follows rules of a game, imitating actions of other children', example: 1 })
    @IsNumber()
    @IsOptional()
    followsRulesOfAGameImitatingActionsOfOtherChildren?: number;
    
    @ApiProperty({ description: 'Greets family members without being reminded', example: 1 })
    @IsNumber()
    @IsOptional()
    greetsFamilyMembersWithoutBeingReminded?: number;
    
    @ApiProperty({ description: 'Follows rules in group games directed by adults', example: 1 })
    @IsNumber()
    @IsOptional()
    followsRulesInGroupGamesDirectedByAdults?: number;
    
    @ApiProperty({ description: 'Asks permission to play with a toy being used by another child', example: 1 })
    @IsNumber()
    @IsOptional()
    asksPermissionToPlayWithAToyBeingUsedByAnotherChild?: number;
    
    @ApiProperty({ description: 'Says please and thank you without being reminded half the time', example: 1 })
    @IsNumber()
    @IsOptional()
    saysPleaseAndThankYouWithoutBeingRemindedHalfTheTime?: number;
    
    @ApiProperty({ description: 'Answers the phone, calling an adult, and speaking with family members', example: 1 })
    @IsNumber()
    @IsOptional()
    answersThePhoneCallingAnAdultAndSpeakingWithFamilyMembers?: number;
    
    @ApiProperty({ description: 'Waits its turn', example: 1 })
      @IsNumber()
    @IsOptional()
    waitsItsTurn?: number;
    
      @ApiProperty({ description: 'Follows rules in games directed by an older child', example: 1 })
    @IsNumber()
    @IsOptional()
    followsRulesInGamesDirectedByAnOlderChild?: number;
    
    @ApiProperty({ description: 'Obeys adults orders 75 percent of the time', example: 1 })
    @IsNumber()
    @IsOptional()
    obeysAdultsOrders75PercentOfTheTime?: number;
    
    @ApiProperty({ description: 'Stays in its own yard or garden', example: 1 })
     @IsNumber()
    @IsOptional()
    staysInItsOwnYardOrGarden?: number;
    
    @ApiProperty({ description: 'Plays near other children, talking to them while working on own project for 30 minutes', example: 1 })
      @IsNumber()
    @IsOptional()
    playsNearOtherChildrenTalkingToThemWhileWorkingOnOwnProject30Minutes?: number;
    }

export class Socialization4To5Years {
    @ApiProperty({ description: 'Asks for help when having difficulties', example: 1 })
    @IsNumber()
    @IsOptional()
    asksForHelpWhenHavingDifficulties?: number;

    @ApiProperty({ description: 'Contributes to adult conversation', example: 1 })
    @IsNumber()
    @IsOptional()
    contributesToAdultConversation?: number;

    @ApiProperty({ description: 'Repeats rhymes, songs, or dances for others', example: 1 })
    @IsNumber()
    @IsOptional()
    repeatsRhymesSongsOrDancesForOthers?: number;

    @ApiProperty({ description: 'Does a task alone for 20 to 30 minutes', example: 1 })
     @IsNumber()
    @IsOptional()
    doesATaskAloneFor20To30Minutes?: number;

    @ApiProperty({ description: 'Apologizes without being reminded 75 percent of the time', example: 1 })
    @IsNumber()
    @IsOptional()
    apologizesWithoutBeingReminded75PercentOfTheTime?: number;

    @ApiProperty({ description: 'Waits its turn in play involving 8 to 9 children', example: 1 })
    @IsNumber()
    @IsOptional()
    waitsItsTurnInPlayInvolving8To9Children?: number;

    @ApiProperty({ description: 'Plays with 2 to 3 children for 20 minutes in an activity involving cooperation', example: 1 })
    @IsNumber()
    @IsOptional()
    playsWith2To3ChildrenFor20MinutesInAnActivityInvolvingCooperation?: number;

    @ApiProperty({ description: 'When in public, presents a socially acceptable behavior', example: 1 })
    @IsNumber()
    @IsOptional()
    whenInPublicPresentsASociallyAcceptableBehavior?: number;

    @ApiProperty({ description: 'Asks permission to use others objects 75 percent of the time', example: 1 })
      @IsNumber()
    @IsOptional()
    asksPermissionToUseOthersObjects75PercentOfTheTime?: number;
}


export class Socialization5To6Years {
    @ApiProperty({ description: 'Expresses its feelings', example: 1 })
  @IsNumber()
  @IsOptional()
  expressesItsFeelings?: number;

  @ApiProperty({ description: 'Plays with 4 to 5 children in cooperative activity for 20 minutes without supervision', example: 1 })
  @IsNumber()
  @IsOptional()
  playsWith4To5ChildrenInCooperativeActivityFor20MinutesWithoutSupervision?: number;

  @ApiProperty({ description: 'Explains to others the rules of the game or activity', example: 1 })
  @IsNumber()
  @IsOptional()
  explainsToOthersTheRulesOfTheGameOrActivity?: number;

  @ApiProperty({ description: 'Imitates adult roles', example: 1 })
   @IsNumber()
  @IsOptional()
  imitatesAdultRoles?: number;

  @ApiProperty({ description: 'Collaborates in conversation during meals', example: 1 })
  @IsNumber()
  @IsOptional()
  collaboratesInConversationDuringMeals?: number;

  @ApiProperty({ description: 'Follows rules of a game involving verbal reasoning', example: 1 })
  @IsNumber()
  @IsOptional()
  followsRulesOfAGameInvolvingVerbalReasoning?: number;

  @ApiProperty({ description: 'Comforts peers when they are sad', example: 1 })
   @IsNumber()
  @IsOptional()
  comfortsPeersWhenTheyAreSad?: number;

  @ApiProperty({ description: 'Chooses its own friends', example: 1 })
   @IsNumber()
  @IsOptional()
  choosesItsOwnFriends?: number;

  @ApiProperty({ description: 'Plans and builds using simple tools', example: 1 })
    @IsNumber()
  @IsOptional()
  plansAndBuildsUsingSimpleTools?: number;

  @ApiProperty({ description: 'Sets goals for itself and performs activity to achieve them', example: 1 })
   @IsNumber()
  @IsOptional()
  setsGoalsForItselfAndPerformsActivityToAchieveThem?: number;

  @ApiProperty({ description: 'Dramatizes excerpts from stories, playing a role or using puppets', example: 1 })
   @IsNumber()
  @IsOptional()
  dramatizesExcerptsFromStoriesPlayingARoleOrUsingPuppets?: number;

}

export class language0To1Years {
    @ApiProperty({ description: 'Expresses its feelings', example: 1 })
  @IsNumber()
  @IsOptional()
  expressesItsFeelings?: number;

  @ApiProperty({ description: 'Plays with 4 to 5 children in cooperative activity for 20 minutes without supervision', example: 1 })
  @IsNumber()
  @IsOptional()
  playsWith4To5ChildrenInCooperativeActivityFor20MinutesWithoutSupervision?: number;

  @ApiProperty({ description: 'Explains to others the rules of the game or activity', example: 1 })
  @IsNumber()
  @IsOptional()
  explainsToOthersTheRulesOfTheGameOrActivity?: number;

  @ApiProperty({ description: 'Imitates adult roles', example: 1 })
   @IsNumber()
  @IsOptional()
  imitatesAdultRoles?: number;

  @ApiProperty({ description: 'Collaborates in conversation during meals', example: 1 })
  @IsNumber()
  @IsOptional()
  collaboratesInConversationDuringMeals?: number;

  @ApiProperty({ description: 'Follows rules of a game involving verbal reasoning', example: 1 })
  @IsNumber()
  @IsOptional()
  followsRulesOfAGameInvolvingVerbalReasoning?: number;

  @ApiProperty({ description: 'Comforts peers when they are sad', example: 1 })
   @IsNumber()
  @IsOptional()
  comfortsPeersWhenTheyAreSad?: number;

  @ApiProperty({ description: 'Chooses its own friends', example: 1 })
   @IsNumber()
  @IsOptional()
  choosesItsOwnFriends?: number;

  @ApiProperty({ description: 'Plans and builds using simple tools', example: 1 })
    @IsNumber()
  @IsOptional()
  plansAndBuildsUsingSimpleTools?: number;

  @ApiProperty({ description: 'Sets goals for itself and performs activity to achieve them', example: 1 })
   @IsNumber()
  @IsOptional()
  setsGoalsForItselfAndPerformsActivityToAchieveThem?: number;

  @ApiProperty({ description: 'Dramatizes excerpts from stories, playing a role or using puppets', example: 1 })
   @IsNumber()
  @IsOptional()
  dramatizesExcerptsFromStoriesPlayingARoleOrUsingPuppets?: number;
}

export class language1To2Years {
    @ApiProperty({ description: 'Says 5 different words', example: 1 })
  @IsNumber()
  @IsOptional()
  says5DifferentWords?: number;

  @ApiProperty({ description: 'Asks for more', example: 1 })
  @IsNumber()
  @IsOptional()
  asksForMore?: number;

  @ApiProperty({ description: 'Says "done"', example: 1 })
  @IsNumber()
  @IsOptional()
  saysDone?: number;

  @ApiProperty({ description: 'Obeys 3 different orders that are not accompanied by indicative gestures', example: 1 })
   @IsNumber()
  @IsOptional()
  obeys3DifferentOrdersThatAreNotAccompaniedByIndicativeGestures?: number;

  @ApiProperty({ description: 'Manages to give or show when asked', example: 1 })
   @IsNumber()
  @IsOptional()
   managesToGiveOrShowWhenAsked?: number;

  @ApiProperty({ description: 'Points to 12 objects when named', example: 1 })
  @IsNumber()
  @IsOptional()
  pointsTo12ObjectsWhenNamed?: number;

  @ApiProperty({ description: 'Points to 3 to 5 figures in a book', example: 1 })
    @IsNumber()
  @IsOptional()
  pointsTo3To5FiguresInABook?: number;

  @ApiProperty({ description: 'Points to 3 parts of own body', example: 1 })
    @IsNumber()
  @IsOptional()
   pointsTo3PartsOfOwnBody?: number;

  @ApiProperty({ description: 'Says own name or nickname when asked', example: 1 })
  @IsNumber()
  @IsOptional()
  saysOwnNameOrNicknameWhenAsked?: number;

  @ApiProperty({ description: 'Responds to the question "What is this?"', example: 1 })
  @IsNumber()
  @IsOptional()
  respondsToTheQuestionWhatIsThis?: number;

  @ApiProperty({ description: 'Combines words and gestures to express wishes', example: 1 })
  @IsNumber()
  @IsOptional()
  combinesWordsAndGesturesToExpressWishes?: number;

   @ApiProperty({ description: 'Names 5 family members, including animals', example: 1 })
  @IsNumber()
  @IsOptional()
    names5FamilyMembersIncludingAnimals?: number;

  @ApiProperty({ description: 'Names 4 toys', example: 1 })
  @IsNumber()
  @IsOptional()
   names4Toys?: number;

  @ApiProperty({ description: 'Produces animal sounds or names them by the sound', example: 1 })
   @IsNumber()
  @IsOptional()
   producesAnimalSoundsOrNamesThemByTheSound?: number;

    @ApiProperty({ description: 'Asks for known foods by name when shown', example: 1 })
  @IsNumber()
  @IsOptional()
     asksForKnownFoodsByNameWhenShown?: number;

    @ApiProperty({ description: 'Asks questions, varying intonation of voice', example: 1 })
  @IsNumber()
  @IsOptional()
      asksQuestionsVaryingIntonationOfVoice?: number;

    @ApiProperty({ description: 'Names 3 body parts on a doll or another person', example: 1 })
  @IsNumber()
  @IsOptional()
       names3BodyPartsOnADollOrAnotherPerson?: number;

    @ApiProperty({ description: 'Responds to yes/no questions', example: 1 })
  @IsNumber()
  @IsOptional()
    respondsToYesNoQuestions?: number;
}

export class language2To3Years {
    @ApiProperty({ description: 'Combines nouns or adjectives and nouns in 2-word sentences', example: 1 })
  @IsNumber()
  @IsOptional()
  combinesNounsOrAdjectivesAndNounsIn2WordSentences?: number;

  @ApiProperty({ description: 'Combines noun and verb in 2-word sentences', example: 1 })
  @IsNumber()
  @IsOptional()
  combinesNounAndVerbIn2WordSentences?: number;

    @ApiProperty({ description: 'Uses a word to indicate that wants to go to the bathroom', example: 1 })
    @IsNumber()
    @IsOptional()
   usesAWordToIndicateThatWantsToGoToTheBathroom?: number;

  @ApiProperty({ description: 'Combines verb or noun with "there" and "here" in 2-word sentences', example: 1 })
   @IsNumber()
  @IsOptional()
  combinesVerbOrNounWithThereAndHereIn2WordSentences?: number;

    @ApiProperty({ description: 'Combines 2 words to express possession', example: 1 })
   @IsNumber()
  @IsOptional()
    combines2WordsToExpressPossession?: number;

    @ApiProperty({ description: 'Uses "no" in speech', example: 1 })
   @IsNumber()
  @IsOptional()
   usesNoInSpeech?: number;

  @ApiProperty({ description: 'Responds to the question "What is doing?" for habitual activity', example: 1 })
    @IsNumber()
  @IsOptional()
   respondsToTheQuestionWhatIsDoingForHabitualActivity?: number;

    @ApiProperty({ description: 'Responds to questions like "Where is object?"', example: 1 })
   @IsNumber()
  @IsOptional()
    respondsToQuestionsLikeWhereIsObject?: number;

  @ApiProperty({ description: 'Names familiar environmental sounds', example: 1 })
  @IsNumber()
  @IsOptional()
  namesFamiliarEnvironmentalSounds?: number;

  @ApiProperty({ description: 'Gives more than one object when using the plural form in the request', example: 1 })
   @IsNumber()
  @IsOptional()
  givesMoreThanOneObjectWhenUsingThePluralFormInTheRequest?: number;

    @ApiProperty({ description: 'When speaking refers to itself by name', example: 1 })
   @IsNumber()
  @IsOptional()
    whenSpeakingRefersToItselfByName?: number;

  @ApiProperty({ description: 'Points to figures of common objects described by use (up to 10: What is used to eat - spoon)', example: 1 })
   @IsNumber()
  @IsOptional()
    pointsToFiguresOfCommonObjectsDescribedByUseUpTo10WhatIsUsedToEatSpoon?: number;

  @ApiProperty({ description: 'Shows age by fingers', example: 1 })
   @IsNumber()
  @IsOptional()
   showsAgeByFingers?: number;

    @ApiProperty({ description: 'Says sex when asked', example: 1 })
   @IsNumber()
  @IsOptional()
    saysSexWhenAsked?: number;

    @ApiProperty({ description: 'Obeys the sequence of two related orders', example: 1 })
   @IsNumber()
  @IsOptional()
    obeysTheSequenceOfTwoRelatedOrders?: number;

  @ApiProperty({ description: 'Uses the verb form in the gerund', example: 1 })
  @IsNumber()
  @IsOptional()
  usesTheVerbFormInTheGerund?: number;

  @ApiProperty({ description: 'Employs regular plural forms', example: 1 })
  @IsNumber()
  @IsOptional()
  employsRegularPluralForms?: number;

    @ApiProperty({ description: 'Employs some irregular forms of verbs in the past systematically', example: 1 })
   @IsNumber()
  @IsOptional()
    employsSomeIrregularFormsOfVerbsInThePastSystematically?: number;

  @ApiProperty({ description: 'Asks questions like "What is this?"', example: 1 })
  @IsNumber()
  @IsOptional()
  asksQuestionsLikeWhatIsThis?: number;

  @ApiProperty({ description: 'Controls volume of voice 90 percent of the time', example: 1 })
  @IsNumber()
  @IsOptional()
    controlsVolumeOfVoice90PercentOfTheTime?: number;

    @ApiProperty({ description: 'Uses "this" and "that" in speech', example: 1 })
    @IsNumber()
    @IsOptional()
    usesThisAndThatInSpeech?: number;

   @ApiProperty({ description: 'Employs "is" and "is located" in simple sentences', example: 1 })
   @IsNumber()
  @IsOptional()
    employsIsAndIsLocatedInSimpleSentences?: number;

    @ApiProperty({ description: 'Says "I", "me", "mine" instead of own name', example: 1 })
   @IsNumber()
  @IsOptional()
    saysIMeMineInsteadOfOwnName?: number;

     @ApiProperty({ description: 'Points to objects and says they are not other things', example: 1 })
   @IsNumber()
  @IsOptional()
    pointsToObjectsAndSaysTheyAreNotOtherThings?: number;

    @ApiProperty({ description: 'Responds to the question "Who?" giving a name', example: 1 })
    @IsNumber()
    @IsOptional()
    respondsToTheQuestionWhoGivingAName?: number;
  
    @ApiProperty({ description: 'Employs possessive forms of nouns', example: 1 })
    @IsNumber()
    @IsOptional()
    employsPossessiveFormsOfNouns?: number;

    @ApiProperty({ description: 'Uses articles when speaking', example: 1 })
    @IsNumber()
    @IsOptional()
    usesArticlesWhenSpeaking?: number;
  
    @ApiProperty({ description: 'Uses nouns that indicate a group or category', example: 1 })
    @IsNumber()
    @IsOptional()
    usesNounsThatIndicateAGroupOrCategory?: number;

   @ApiProperty({ description: 'Uses the verbs "to be", "to exist", and "to have" in the present with few errors', example: 1 })
   @IsNumber()
  @IsOptional()
   usesTheVerbsToBeToExistAndToHaveInThePresentWithFewErrors?: number;

    @ApiProperty({ description: 'Says if objects are open or closed', example: 1 })
    @IsNumber()
    @IsOptional()
    saysIfObjectsAreOpenOrClosed?: number;
}

export class language3To4Years {
    @ApiProperty({ description: 'Expresses diminutives and augmentatives when speaking', example: 1 })
  @IsNumber()
  @IsOptional()
  expressesDiminutivesAndAugmentativesWhenSpeaking?: number;

    @ApiProperty({ description: 'Pays attention for 5 minutes to a read story', example: 1 })
   @IsNumber()
  @IsOptional()
    paysAttentionFor5MinutesToAReadStory?: number;

  @ApiProperty({ description: 'Obeys sequence of 2 unrelated orders', example: 1 })
  @IsNumber()
  @IsOptional()
  obeysSequenceOf2UnrelatedOrders?: number;

  @ApiProperty({ description: 'Says full name when asked', example: 1 })
  @IsNumber()
  @IsOptional()
  saysFullNameWhenAsked?: number;

   @ApiProperty({ description: 'Responds simple questions involving "how"', example: 1 })
   @IsNumber()
  @IsOptional()
    respondsSimpleQuestionsInvolvingHow?: number;

  @ApiProperty({ description: 'Employs regular verbs in the past', example: 1 })
  @IsNumber()
  @IsOptional()
  employsRegularVerbsInThePast?: number;

  @ApiProperty({ description: 'Reports immediate experiences', example: 1 })
  @IsNumber()
  @IsOptional()
   reportsImmediateExperiences?: number;

   @ApiProperty({ description: 'Says how common objects are used', example: 1 })
   @IsNumber()
  @IsOptional()
    saysHowCommonObjectsAreUsed?: number;

  @ApiProperty({ description: 'Expresses future actions using verbs "to go", "to have", and "to want"', example: 1 })
  @IsNumber()
  @IsOptional()
  expressesFutureActionsUsingVerbsToGoToHaveAndToWant?: number;

   @ApiProperty({ description: 'Uses masculine and feminine appropriately in speech', example: 1 })
   @IsNumber()
  @IsOptional()
    usesMasculineAndFeminineAppropriatelyInSpeech?: number;

  @ApiProperty({ description: 'Uses imperative forms of verbs when asking for favors', example: 1 })
  @IsNumber()
  @IsOptional()
  usesImperativeFormsOfVerbsWhenAskingForFavors?: number;

   @ApiProperty({ description: 'Tells 2 facts in order of occurrence', example: 1 })
  @IsNumber()
  @IsOptional()
    tells2FactsInOrderOfOccurrence?: number;
}

export class language4To5Years {
    @ApiProperty({ description: 'Obeys a sequence involving 3 orders', example: 1 })
  @IsNumber()
  @IsOptional()
  obeysASequenceInvolving3Orders?: number;

    @ApiProperty({ description: 'Demonstrates understanding of reflexive verbs using them occasionally (ex: He got hurt)', example: 1 })
  @IsNumber()
  @IsOptional()
   demonstratesUnderstandingOfReflexiveVerbsUsingThemOccasionallyExHeGotHurt?: number;

  @ApiProperty({ description: 'Manages to identify objects/figures that form a pair upon request', example: 1 })
   @IsNumber()
  @IsOptional()
    managesToIdentifyObjectsFiguresThatFormAPairUponRequest?: number;

  @ApiProperty({ description: 'Employs future when speaking', example: 1 })
  @IsNumber()
  @IsOptional()
  employsFutureWhenSpeaking?: number;

  @ApiProperty({ description: 'Uses sentences composed by coordination', example: 1 })
   @IsNumber()
  @IsOptional()
  usesSentencesComposedByCoordination?: number;

  @ApiProperty({ description: 'Manages to identify the top and bottom part of objects when requested', example: 1 })
  @IsNumber()
  @IsOptional()
  managesToIdentifyTheTopAndBottomPartOfObjectsWhenRequested?: number;

  @ApiProperty({ description: 'Employs occasionally the conditional when speaking (could, would, could would make)', example: 1 })
   @IsNumber()
  @IsOptional()
   employsOccasionallyTheConditionalWhenSpeakingCouldWouldCouldWouldMake?: number;

   @ApiProperty({ description: 'Manages to identify absurdities in figures', example: 1 })
    @IsNumber()
    @IsOptional()
    managesToIdentifyAbsurditiesInFigures?: number;
  
  @ApiProperty({ description: 'Employs the following words: brother, sister, grandmother, grandfather', example: 1 })
    @IsNumber()
    @IsOptional()
    employsTheFollowingWordsBrotherSisterGrandmotherGrandfather?: number;

    @ApiProperty({ description: 'Completes sentences with antonyms', example: 1 })
  @IsNumber()
  @IsOptional()
     completesSentencesWithAntonyms?: number;

   @ApiProperty({ description: 'Tells a known story without help of figures', example: 1 })
   @IsNumber()
  @IsOptional()
    tellsAKnownStoryWithoutHelpOfFigures?: number;

  @ApiProperty({ description: 'In a figure, names the object that does not belong to a certain category', example: 1 })
  @IsNumber()
  @IsOptional()
  inAFigureNamesTheObjectThatDoesNotBelongToACertainCategory?: number;

  @ApiProperty({ description: 'Says if two words rhyme or not', example: 1 })
  @IsNumber()
  @IsOptional()
  saysIfTwoWordsRhymeOrNot?: number;

  @ApiProperty({ description: 'Uses complex sentences composed by subordination', example: 1 })
   @IsNumber()
  @IsOptional()
  usesComplexSentencesComposedBySubordination?: number;

  @ApiProperty({ description: 'Says if a sound is loud or soft', example: 1 })
    @IsNumber()
    @IsOptional()
    saysIfASoundIsLoudOrSoft?: number;
}

export class language5To6Years {
    @ApiProperty({ description: 'Manages to indicate "some," "many," and "several" elements', example: 1 })
    @IsNumber()
    @IsOptional()
    managesToIndicateSomeManyAndSeveralElements?: number;

    @ApiProperty({ description: 'Says own address', example: 1 })
    @IsNumber()
    @IsOptional()
    saysOwnAddress?: number;

    @ApiProperty({ description: 'Says own phone number', example: 1 })
     @IsNumber()
    @IsOptional()
    saysOwnPhoneNumber?: number;

    @ApiProperty({ description: 'Points to the set that has more, less, or few elements', example: 1 })
    @IsNumber()
    @IsOptional()
    pointsToTheSetThatHasMoreLessOrFewElements?: number;

    @ApiProperty({ description: 'Tells simple jokes', example: 1 })
    @IsNumber()
    @IsOptional()
    tellsSimpleJokes?: number;

    @ApiProperty({ description: 'Reports daily experiences', example: 1 })
      @IsNumber()
    @IsOptional()
    reportsDailyExperiences?: number;

    @ApiProperty({ description: 'Describes a location or movement through, between, away from, from, since, to, over, up to', example: 1 })
     @IsNumber()
    @IsOptional()
    describesALocationOrMovementThroughOrBetweenAwayFromFromSinceToOverUpTo?: number;

    @ApiProperty({ description: 'Answers the question "Why?" with an explanation', example: 1 })
    @IsNumber()
    @IsOptional()
    answersTheQuestionWhyWithAnExplanation?: number;

    @ApiProperty({ description: 'Orders and tells a story of 2 to 5 episodes in the correct sequence', example: 1 })
     @IsNumber()
    @IsOptional()
    ordersAndTellsAStoryOf2To5EpisodesInTheCorrectSequence?: number;

    @ApiProperty({ description: 'Defines words', example: 1 })
    @IsNumber()
    @IsOptional()
    definesWords?: number;

     @ApiProperty({ description: 'Responds appropriately to the question "What is the opposite of?"', example: 1 })
    @IsNumber()
    @IsOptional()
    respondsAppropriatelyToTheQuestionWhatIsTheOppositeOf?: number;

    @ApiProperty({ description: 'Responds to the question "What happens if?"', example: 1 })
    @IsNumber()
    @IsOptional()
    respondsToTheQuestionWhatHappensIf?: number;

    @ApiProperty({ description: 'Uses "yesterday" and "tomorrow" correctly', example: 1 })
     @IsNumber()
    @IsOptional()
    usesYesterdayAndTomorrowCorrectly?: number;
  
   @ApiProperty({ description: 'Asks the meaning of new or known questions', example: 1 })
  @IsNumber()
  @IsOptional()
     asksTheMeaningOfNewOrKnownQuestions?: number;
}

export class cognition0To1Year {
    @ApiProperty({ description: 'Removes a cloth from face that obscures vision', example: 1 })
    @IsNumber()
    @IsOptional()
    removesAClothFromFaceThatObscuresVision?: number;
  
    @ApiProperty({ description: 'Looks for object that has been removed from its visual field', example: 1 })
    @IsNumber()
    @IsOptional()
    looksForObjectThatHasBeenRemovedFromItsVisualField?: number;
  
    @ApiProperty({ description: 'Removes an object from a receptacle by putting hand inside it', example: 1 })
    @IsNumber()
    @IsOptional()
    removesAnObjectFromAReceptacleByPuttingHandInsideIt?: number;
  
    @ApiProperty({ description: 'Places an object in a receptacle, imitating an adult', example: 1 })
    @IsNumber()
    @IsOptional()
    placesAnObjectInAReceptacleImitatingAnAdult?: number;
  
      @ApiProperty({ description: 'Places an object in a receptacle when given instructions', example: 1 })
      @IsNumber()
      @IsOptional()
      placesAnObjectInAReceptacleWhenGivenInstructions?: number;
  
    @ApiProperty({ description: 'Shakes a toy that produces sound, hanging from a string', example: 1 })
    @IsNumber()
    @IsOptional()
    shakesAToyThatProducesSoundHangingFromAString?: number;
  
    @ApiProperty({ description: 'Places three objects in a receptacle and empties it', example: 1 })
     @IsNumber()
    @IsOptional()
    placesThreeObjectsInAReceptacleAndEmptiesIt?: number;
  
    @ApiProperty({ description: 'Transfers an object from one hand to another to pick up another object', example: 1 })
    @IsNumber()
    @IsOptional()
    transfersAnObjectFromOneHandToAnotherToPickUpAnotherObject?: number;
  
    @ApiProperty({ description: 'Drops and picks up a toy', example: 1 })
      @IsNumber()
      @IsOptional()
      dropsAndPicksUpAToy?: number;
    
    @ApiProperty({ description: 'Discovers an object hidden under a receptacle', example: 1 })
      @IsNumber()
      @IsOptional()
      discoversAnObjectHiddenUnderAReceptacle?: number;
  
    @ApiProperty({ description: 'Pushes 3 blocks as if it were a train', example: 1 })
      @IsNumber()
      @IsOptional()
      pushes3BlocksAsIfItWereATrain?: number;
  
    @ApiProperty({ description: 'Removes a circle from a board by imitation', example: 1 })
    @IsNumber()
    @IsOptional()
      removesACircleFromABoardByImitation?: number;
  
    @ApiProperty({ description: 'Places a round pin in a pin board when requested', example: 1 })
      @IsNumber()
      @IsOptional()
     placesARoundPinInAPinBoardWhenRequested?: number;
  
    @ApiProperty({ description: 'Performs simple gestures when requested', example: 1 })
    @IsNumber()
    @IsOptional()
    performsSimpleGesturesWhenRequested?: number;
}
export class cognition1To2Years{
    @ApiProperty({ description: 'Removes 6 objects from a receptacle one at a time', example: 1 })
  @IsNumber()
  @IsOptional()
  removes6ObjectsFromAReceptacleOneAtATime?: number;

    @ApiProperty({ description: 'Points to a part of the body', example: 1 })
    @IsNumber()
    @IsOptional()
    pointsToAPartOfTheBody?: number;

  @ApiProperty({ description: 'Stacks 3 blocks given the order', example: 1 })
  @IsNumber()
  @IsOptional()
  stacks3BlocksGivenTheOrder?: number;

  @ApiProperty({ description: 'Matches similar objects', example: 1 })
  @IsNumber()
  @IsOptional()
  matchesSimilarObjects?: number;

  @ApiProperty({ description: 'Scribbles on paper', example: 1 })
   @IsNumber()
  @IsOptional()
  scribblesOnPaper?: number;

    @ApiProperty({ description: 'Points to itself when asked "Where is [name]?"', example: 1 })
   @IsNumber()
  @IsOptional()
   pointsToItselfWhenAskedWhereIsName?: number;

  @ApiProperty({ description: 'Places 5 round pins given the order', example: 1 })
  @IsNumber()
  @IsOptional()
  places5RoundPinsGivenTheOrder?: number;

   @ApiProperty({ description: 'Matches objects with the figure of the same name', example: 1 })
    @IsNumber()
    @IsOptional()
     matchesObjectsWithTheFigureOfTheSameName?: number;

  @ApiProperty({ description: 'Points to the named figure', example: 1 })
    @IsNumber()
    @IsOptional()
    pointsToTheNamedFigure?: number;

  @ApiProperty({ description: 'Turns the pages of a book 2-3 at a time to find the named figure', example: 1 })
   @IsNumber()
  @IsOptional()
  turnsThePagesOfABook23AtATimeToFindTheNamedFigure?: number;
}

export class Cognition2To3YearsDto  {
    @ApiProperty({ description: 'Finds a certain book when requested', example: 1 })
    @IsNumber()
    @IsOptional()
    findsACertainBookWhenRequested?: number;

    @ApiProperty({ description: 'Completes a 3-piece jigsaw puzzle', example: 1 })
    @IsNumber()
    @IsOptional()
    completesA3PieceJigsawPuzzle?: number;

    @ApiProperty({ description: 'Names 4 common objects in figures', example: 1 })
    @IsNumber()
    @IsOptional()
    names4CommonObjectsInFigures?: number;

    @ApiProperty({ description: 'Draws a vertical line, imitating an adult', example: 1 })
      @IsNumber()
    @IsOptional()
    drawsAVerticalLineImitatingAnAdult?: number;

    @ApiProperty({ description: 'Draws a horizontal line, imitating an adult', example: 1 })
     @IsNumber()
    @IsOptional()
    drawsAHorizontalLineImitatingAnAdult?: number;

    @ApiProperty({ description: 'Copies a circle', example: 1 })
      @IsNumber()
    @IsOptional()
    copiesACircle?: number;

    @ApiProperty({ description: 'Matches objects with the same texture', example: 1 })
      @IsNumber()
    @IsOptional()
    matchesObjectsWithTheSameTexture?: number;

    @ApiProperty({ description: 'Points to "small" and "big" when requested', example: 1 })
     @IsNumber()
    @IsOptional()
    pointsToSmallAndBigWhenRequested?: number;

     @ApiProperty({ description: 'Draws a plus sign, imitating an adult', example: 1 })
    @IsNumber()
    @IsOptional()
    drawsAPlusSignImitatingAnAdult?: number;

    @ApiProperty({ description: 'Matches 3 colors', example: 1 })
      @IsNumber()
    @IsOptional()
    matches3Colors?: number;

   @ApiProperty({ description: 'Places objects inside, on top, and under a receptacle, given the order', example: 1 })
    @IsNumber()
    @IsOptional()
   placesObjectsInsideOnTopAndUnderAReceptacleGivenTheOrder?: number;

    @ApiProperty({ description: 'Names objects when hears the noise they make', example: 1 })
     @IsNumber()
    @IsOptional()
     namesObjectsWhenHearsTheNoiseTheyMake?: number;

    @ApiProperty({ description: 'Mounts a 4-piece fitting toy', example: 1 })
      @IsNumber()
    @IsOptional()
    mountsA4PieceFittingToy?: number;

    @ApiProperty({ description: 'Names actions in figures (What is doing?)', example: 1 })
     @IsNumber()
    @IsOptional()
     namesActionsInFiguresWhatIsDoing?: number;

    @ApiProperty({ description: 'Matches geometric shape with the figure of the same', example: 1 })
      @IsNumber()
    @IsOptional()
    matchesGeometricShapeWithTheFigureOfTheSame?: number;

    @ApiProperty({ description: 'Stacks 5 or more rings on a rod in order', example: 1 })
      @IsNumber()
    @IsOptional()
    stacks5OrMoreRingsOnARodInOrder?: number;
}

export class Cognition3To4YearsDto  {
  @ApiProperty({ description: 'Names objects as being big or small', example: 1 })
  @IsNumber()
  @IsOptional()
    namesObjectsAsBeingBigOrSmall?: number;

  @ApiProperty({ description: 'Points to 10 parts of the body when requested', example: 1 })
  @IsNumber()
  @IsOptional()
    pointsTo10PartsOfTheBodyWhenRequested?: number;

  @ApiProperty({ description: 'Points to boy and girl, given the order', example: 1 })
  @IsNumber()
  @IsOptional()
    pointsToBoyAndGirlGivenTheOrder?: number;

  @ApiProperty({ description: 'Says if an object is heavy or light', example: 1 })
  @IsNumber()
  @IsOptional()
   saysIfAnObjectIsHeavyOrLight?: number;

  @ApiProperty({ description: 'Unites 2 parts of a figure to form the whole', example: 1 })
  @IsNumber()
  @IsOptional()
   unites2PartsOfAFigureToFormTheWhole?: number;

  @ApiProperty({ description: 'Describes 2 events or characters from a familiar story or TV program', example: 1 })
   @IsNumber()
  @IsOptional()
   describes2EventsOrCharactersFromAFamiliarStoryOrTvProgram?: number;

  @ApiProperty({ description: 'Repeats games, rhymes, or songs that involve coordinated movements', example: 1 })
    @IsNumber()
    @IsOptional()
    repeatsGamesRhymesOrSongsThatInvolveCoordinatedMovements?: number;

  @ApiProperty({ description: 'Matches 3 or more objects', example: 1 })
    @IsNumber()
    @IsOptional()
   matches3OrMoreObjects?: number;

  @ApiProperty({ description: 'Points to long or short objects', example: 1 })
   @IsNumber()
  @IsOptional()
   pointsToLongOrShortObjects?: number;

  @ApiProperty({ description: 'Associates corresponding objects (ex: sock-shoe)', example: 1 })
  @IsNumber()
  @IsOptional()
   associatesCorrespondingObjectsExSockShoe?: number;

    @ApiProperty({ description: 'Counts up to 3, imitating an adult', example: 1 })
   @IsNumber()
  @IsOptional()
   countsUpTo3ImitatingAnAdult?: number;

  @ApiProperty({ description: 'Groups objects into categories', example: 1 })
  @IsNumber()
  @IsOptional()
    groupsObjectsIntoCategories?: number;

    @ApiProperty({ description: 'Traces a V in imitation', example: 1 })
  @IsNumber()
  @IsOptional()
  tracesAVInImitation?: number;

  @ApiProperty({ description: 'Traces a diagonal line, given the example', example: 1 })
   @IsNumber()
  @IsOptional()
    tracesADiagonalLineGivenTheExample?: number;

  @ApiProperty({ description: 'Counts up to 10 objects, imitating an adult', example: 1 })
   @IsNumber()
  @IsOptional()
   countsUpTo10ObjectsImitatingAnAdult?: number;

    @ApiProperty({ description: 'Builds a bridge with 3 blocks by imitation', example: 1 })
    @IsNumber()
    @IsOptional()
    buildsABridgeWith3BlocksByImitation?: number;

  @ApiProperty({ description: 'Matches a sequence or pattern (size, color) of blocks or beads', example: 1 })
   @IsNumber()
  @IsOptional()
  matchesASequenceOrPatternSizeColorOfBlocksOrBeads?: number;

  @ApiProperty({ description: 'Copies a series of interconnected V\'s', example: 1 })
  @IsNumber()
  @IsOptional()
  copiesASeriesOfInterconnectedV?: number;

  @ApiProperty({ description: 'Adds a leg or arm to an incomplete drawing of the human figure', example: 1 })
   @IsNumber()
  @IsOptional()
    addsALegOrArmToAnIncompleteDrawingOfTheHumanFigure?: number;

  @ApiProperty({ description: 'Completes a 6-piece puzzle', example: 1 })
    @IsNumber()
    @IsOptional()
   completesA6PiecePuzzle?: number;

    @ApiProperty({ description: 'Indicates if objects are equal or different', example: 1 })
    @IsNumber()
    @IsOptional()
   indicatesIfObjectsAreEqualOrDifferent?: number;

    @ApiProperty({ description: 'Draws a square, imitating an adult', example: 1 })
  @IsNumber()
  @IsOptional()
     drawsASquareImitatingAnAdult?: number;

  @ApiProperty({ description: 'Names 3 colors when requested', example: 1 })
    @IsNumber()
    @IsOptional()
   names3ColorsBeingRequested?: number;

    @ApiProperty({ description: 'Names 3 geometric shapes (square, triangle, and circle)', example: 1 })
  @IsNumber()
  @IsOptional()
   names3GeometricShapesSquareTriangleAndCircle?: number;
}
export class Cognition4To5YearsDto  {
    @ApiProperty({ description: 'Picks up from 1 to 5 objects when requested', example: 1 })
    @IsNumber()
    @IsOptional()
    picksUpFrom1To5ObjectsWhenRequested?: number;

    @ApiProperty({ description: 'Names 5 different textures', example: 1 })
    @IsNumber()
    @IsOptional()
    names5DifferentTextures?: number;

    @ApiProperty({ description: 'Copies a triangle when requested', example: 1 })
     @IsNumber()
    @IsOptional()
    copiesATriangleWhenRequested?: number;

     @ApiProperty({ description: 'Remembers 4 objects that had been seen in a figure', example: 1 })
     @IsNumber()
    @IsOptional()
    remembers4ObjectsThatHadBeenSeenInAFigure?: number;

    @ApiProperty({ description: 'Says the time of the day associated with each activity', example: 1 })
     @IsNumber()
    @IsOptional()
   saysTheTimeOfTheDayAssociatedWithEachActivity?: number;

    @ApiProperty({ description: 'Repeats familiar rhymes', example: 1 })
     @IsNumber()
    @IsOptional()
   repeatsFamiliarRhymes?: number;

  @ApiProperty({ description: 'Says if an object is heavier or lighter (objects with a difference of 0.5 kilo)', example: 1 })
  @IsNumber()
  @IsOptional()
  saysIfAnObjectIsHeavierOrLighterObjectsWithADifferenceOf05Kilo?: number;

  @ApiProperty({ description: 'Says what is missing when an object is removed from a group of 3 objects', example: 1 })
  @IsNumber()
  @IsOptional()
   saysWhatIsMissingWhenAnObjectIsRemovedFromAGroupOf3Objects?: number;

  @ApiProperty({ description: 'Names 8 colors', example: 1 })
  @IsNumber()
  @IsOptional()
  names8Colors?: number;

  @ApiProperty({ description: 'Identifies the value of 3 coins', example: 1 })
  @IsNumber()
  @IsOptional()
   identifiesTheValueOf3Coins?: number;

    @ApiProperty({ description: 'Matches symbols, letters, and numbers', example: 1 })
   @IsNumber()
  @IsOptional()
   matchesSymbolsLettersAndNumbers?: number;

  @ApiProperty({ description: 'Says the color of named objects', example: 1 })
   @IsNumber()
  @IsOptional()
   saysTheColorOfNamedObjects?: number;

  @ApiProperty({ description: 'Reports 5 main facts of a story told 3 times', example: 1 })
   @IsNumber()
  @IsOptional()
    reports5MainFactsOfAStoryTold3Times?: number;

    @ApiProperty({ description: 'Draws human figure (head, torso, and 4 limbs)', example: 1 })
  @IsNumber()
  @IsOptional()
  drawsHumanFigureHeadTorsoAnd4Limbs?: number;

    @ApiProperty({ description: 'Sings 5 verses of a song', example: 1 })
   @IsNumber()
  @IsOptional()
  sings5VersesOfASong?: number;

   @ApiProperty({ description: 'Builds a pyramid of 10 blocks by imitation', example: 1 })
   @IsNumber()
  @IsOptional()
    buildsAPyramidOf10BlocksByImitation?: number;

  @ApiProperty({ description: 'Names objects as being long or short', example: 1 })
    @IsNumber()
    @IsOptional()
    namesObjectsAsBeingLongOrShort?: number;

  @ApiProperty({ description: 'Places objects behind, beside, or next to others', example: 1 })
  @IsNumber()
  @IsOptional()
   placesObjectsBehindBesideOrNextToOthers?: number;

  @ApiProperty({ description: 'Makes equal sets of 10 objects according to a model', example: 1 })
  @IsNumber()
  @IsOptional()
  makesEqualSetsOf10ObjectsAccordingToModel?: number;

   @ApiProperty({ description: 'Names or points to the missing part of a figure', example: 1 })
  @IsNumber()
  @IsOptional()
  namesOrPointsToTheMissingPartOfTheFigure?: number;
 
  @ApiProperty({ description: 'Counts from 1 to 20', example: 1 })
  @IsNumber()
  @IsOptional()
    countsFrom1To20?: number;

  @ApiProperty({ description: 'Identifies the object that is placed in the middle, in first, and last place', example: 1 })
    @IsNumber()
    @IsOptional()
    identifiesTheObjectThatIsPlacedInTheMiddleInFirstAndLastPlace?: number;
}

export class Cognition5To6YearsDto {
  @ApiProperty({ description: 'Counts up to 20 objects and answers appropriately to the question "How many did you count?"', example: 1 })
  @IsNumber()
  @IsOptional()
  countsUpTo20ObjectsAndAnswersAppropriatelyToTheQuestionHowManyDidYouCount?: number;

    @ApiProperty({ description: 'Names 10 numerals', example: 1 })
    @IsNumber()
    @IsOptional()
    names10Numerals?: number;

    @ApiProperty({ description: 'Identifies which is its left and which is its right', example: 1 })
     @IsNumber()
    @IsOptional()
    identifiesWhichIsItsLeftAndWhichIsItsRight?: number;

    @ApiProperty({ description: 'Says the vowels in order', example: 1 })
    @IsNumber()
    @IsOptional()
     saysTheVowelsInOrder?: number;

    @ApiProperty({ description: 'Writes own name with block letters', example: 1 })
    @IsNumber()
    @IsOptional()
    writesOwnNameWithBlockLetters?: number;

    @ApiProperty({ description: 'Names 5 letters of the alphabet', example: 1 })
     @IsNumber()
    @IsOptional()
    names5LettersOfTheAlphabet?: number;

   @ApiProperty({ description: 'Orders objects in sequence of length and width', example: 1 })
   @IsNumber()
  @IsOptional()
   ordersObjectsInSequenceOfLengthAndWidth?: number;

    @ApiProperty({ description: 'Names the uppercase letters of the alphabet', example: 1 })
   @IsNumber()
  @IsOptional()
     namesTheUppercaseLettersOfTheAlphabet?: number;

    @ApiProperty({ description: 'Places numerals from 1 to 10 in the correct sequence', example: 1 })
    @IsNumber()
    @IsOptional()
    placesNumeralsFrom1To10InTheCorrectSequence?: number;

    @ApiProperty({ description: 'Identifies the position of objects in first, second, and third place', example: 1 })
   @IsNumber()
  @IsOptional()
  identifiesThePositionOfObjectsInFirstSecondAndThirdPlace?: number;

  @ApiProperty({ description: 'Names the lowercase letters of the alphabet', example: 1 })
    @IsNumber()
    @IsOptional()
    namesTheLowercaseLettersOfTheAlphabet?: number;

   @ApiProperty({ description: 'Matches uppercase letters with lowercase ones', example: 1 })
   @IsNumber()
  @IsOptional()
    matchesUppercaseLettersWithLowercaseOnes?: number;

  @ApiProperty({ description: 'Points to numerals from 1 to 25', example: 1 })
  @IsNumber()
  @IsOptional()
   pointsToNumeralsFrom1To25?: number;
  
   @ApiProperty({ description: 'Copies a rhombus', example: 1 })
  @IsNumber()
  @IsOptional()
     copiesARhombus?: number;

   @ApiProperty({ description: 'Completes a simple labyrinth', example: 1 })
  @IsNumber()
  @IsOptional()
    completesASimpleLabyrinth?: number;

   @ApiProperty({ description: 'Says the days of the week in order', example: 1 })
  @IsNumber()
  @IsOptional()
  saysTheDaysOfTheWeekInOrder?: number;

  @ApiProperty({ description: 'Adds and subtracts combinations of up to 3 elements', example: 1 })
   @IsNumber()
  @IsOptional()
   addsAndSubtractsCombinationsOfUpTo3Elements?: number;

   @ApiProperty({ description: 'Says the month and day of own birthday', example: 1 })
    @IsNumber()
    @IsOptional()
   saysTheMonthAndDayOfOwnBirthday?: number;

   @ApiProperty({ description: 'Reads 10 printed words', example: 1 })
   @IsNumber()
  @IsOptional()
    reads10PrintedWords?: number;
  
   @ApiProperty({ description: 'Predicts what will occur', example: 1 })
   @IsNumber()
  @IsOptional()
    predictsWhatWillOccur?: number;

   @ApiProperty({ description: 'Points to whole and half objects', example: 1 })
  @IsNumber()
  @IsOptional()
   pointsToWholeAndHalfObjects?: number;

    @ApiProperty({ description: 'Counts from memory from 1 to 100 (ask to stop at 40 and continue at 80 if no errors until 40)', example: 1 })
    @IsNumber()
    @IsOptional()
   countsFromMemoryFrom1To100AskToStopAt40AndContinueAt80IfNoErrorsUntil40?: number;
}
export class SelfCare0To1YearDto  {
  @ApiProperty({ description: 'Sucks and swallows liquids', example: 1 })
  @IsNumber()
  @IsOptional()
  sucksAndSwallowsLiquids?: number;

   @ApiProperty({ description: 'Eats porridge or soup', example: 1 })
  @IsNumber()
  @IsOptional()
    eatsPorridgeOrSoup?: number;

  @ApiProperty({ description: 'Extends hands towards baby bottle, trying to grab it', example: 1 })
   @IsNumber()
  @IsOptional()
  extendsHandsTowardsBabyBottleTryingToGrabIt?: number;

  @ApiProperty({ description: 'Eats pureed foods given by parents', example: 1 })
   @IsNumber()
  @IsOptional()
    eatsPureedFoodsGivenByParents?: number;

  @ApiProperty({ description: 'Holds baby bottle without help while drinking', example: 1 })
    @IsNumber()
    @IsOptional()
    holdsBabyBottleWithoutHelpWhileDrinking?: number;

  @ApiProperty({ description: 'Brings bottle to mouth or refuses it, pushing it away', example: 1 })
   @IsNumber()
  @IsOptional()
    bringsBottleToMouthOrRefusesItPushingItAway?: number;

    @ApiProperty({ description: 'Eats mashed foods given by parents', example: 1 })
    @IsNumber()
    @IsOptional()
    eatsMashedFoodsGivenByParents?: number;

  @ApiProperty({ description: 'Drinks from a mug held by parents', example: 1 })
  @IsNumber()
  @IsOptional()
   drinksFromAMugHeldByParents?: number;

  @ApiProperty({ description: 'Eats semisolid foods given by parents', example: 1 })
  @IsNumber()
  @IsOptional()
    eatsSemisolidFoodsGivenByParents?: number;

    @ApiProperty({ description: 'Feeds itself using fingers', example: 1 })
    @IsNumber()
    @IsOptional()
    feedsItselfUsingFingers?: number;

  @ApiProperty({ description: 'Holds the mug with both hands and drinks', example: 1 })
   @IsNumber()
  @IsOptional()
    holdsTheMugWithBothHandsAndDrinks?: number;

  @ApiProperty({ description: 'Brings a spoonful of food to mouth with help', example: 1 })
  @IsNumber()
  @IsOptional()
   bringsASpoonFullOfFoodToMouthWithHelp?: number;

    @ApiProperty({ description: 'Stretches arms and legs when being dressed', example: 1 })
    @IsNumber()
    @IsOptional()
   stretchesArmsAndLegsWhenBeingDressed?: number;
}
export class SelfCare1To2YearsDto {
    @ApiProperty({ description: 'Eats with spoon independently', example: 1 })
    @IsNumber()
    @IsOptional()
    eatsWithSpoonIndependently?: number;

  @ApiProperty({ description: 'Holds mug with one hand and drinks', example: 1 })
  @IsNumber()
  @IsOptional()
   holdsMugWithOneHandAndDrinks?: number;

    @ApiProperty({ description: 'Puts hand in water and pats face with wet hands, imitating someone', example: 1 })
    @IsNumber()
    @IsOptional()
    putsHandInWaterAndPatsFaceWithWetHandsImitatingSomeone?: number;

  @ApiProperty({ description: 'Sits on a potty or child\'s toilet for 5 minutes', example: 1 })
  @IsNumber()
  @IsOptional()
   sitsOnAPottyOrChildsToiletFor5Minutes?: number;

  @ApiProperty({ description: 'Puts a hat on head and removes it', example: 1 })
  @IsNumber()
  @IsOptional()
   putsAHatOnHeadAndRemovesIt?: number;

    @ApiProperty({ description: 'Takes off socks', example: 1 })
    @IsNumber()
    @IsOptional()
    takesOffSocks?: number;

    @ApiProperty({ description: 'Pushes arms through sleeves and feet through trouser legs', example: 1 })
    @IsNumber()
    @IsOptional()
    pushesArmsThroughSleevesAndFeetThroughTrouserLegs?: number;
   
  @ApiProperty({ description: 'Takes off shoes when laces are untied', example: 1 })
  @IsNumber()
  @IsOptional()
   takesOffShoesWhenLacesAreUntied?: number;

  @ApiProperty({ description: 'Takes off coat when unbuttoned', example: 1 })
   @IsNumber()
  @IsOptional()
    takesOffCoatWhenUnbuttoned?: number;

  @ApiProperty({ description: 'Takes off trousers when unbuttoned', example: 1 })
    @IsNumber()
    @IsOptional()
    takesOffTrousersWhenUnbuttoned?: number;

   @ApiProperty({ description: 'Pulls a large zipper up and down', example: 1 })
    @IsNumber()
    @IsOptional()
    pullsALargeZipperUpAndDown?: number;
  
    @ApiProperty({ description: 'Uses words or gestures indicating need to go to the bathroom', example: 1 })
    @IsNumber()
    @IsOptional()
     usesWordsOrGesturesIndicatingNeedToGoToTheBathroom?: number;
}
export class SelfCare2To3YearsDto  {
  @ApiProperty({ description: 'Eats alone using spoon or mug, spilling a little food or liquid', example: 1 })
  @IsNumber()
  @IsOptional()
    eatsAloneUsingSpoonOrMugSpillingALittleFoodOrLiquid?: number;

  @ApiProperty({ description: 'When given a towel, dries hands and face with help', example: 1 })
    @IsNumber()
    @IsOptional()
    whenGivenATowelDriesHandsAndFaceWithHelp?: number;
  
    @ApiProperty({ description: 'Sucks liquid from the glass or mug using a straw', example: 1 })
    @IsNumber()
    @IsOptional()
    sucksLiquidFromTheGlassOrMugUsingAStraw?: number;

  @ApiProperty({ description: 'Takes forkfuls', example: 1 })
    @IsNumber()
    @IsOptional()
    takesForkfuls?: number;

    @ApiProperty({ description: 'Chews and swallows only edible substances', example: 1 })
    @IsNumber()
    @IsOptional()
    chewsAndSwallowsOnlyEdibleSubstances?: number;

   @ApiProperty({ description: 'Dries hands without help when given a towel', example: 1 })
    @IsNumber()
    @IsOptional()
   driesHandsWithoutHelpWhenGivenATowel?: number;

  @ApiProperty({ description: 'Warns that wants to go to the bathroom, even if it is too late', example: 1 })
   @IsNumber()
  @IsOptional()
    warnsThatWantsToGoToTheBathroomEvenIfItIsTooLate?: number;

   @ApiProperty({ description: 'Controls own drool', example: 1 })
  @IsNumber()
  @IsOptional()
    controlsOwnDrool?: number;

  @ApiProperty({ description: 'Urinates or defecates when placed in potty at least 3 times a week', example: 1 })
    @IsNumber()
    @IsOptional()
    urinatesOrDefecatesWhenPlacedInPottyAtLeast3TimesAWeek?: number;

  @ApiProperty({ description: 'Puts on shoes', example: 1 })
    @IsNumber()
    @IsOptional()
    putsOnShoes?: number;

  @ApiProperty({ description: 'Brushes teeth, imitating an adult', example: 1 })
   @IsNumber()
  @IsOptional()
   brushesTeethImitatingAnAdult?: number;

  @ApiProperty({ description: 'Removes simple clothes that have been unbuttoned', example: 1 })
    @IsNumber()
    @IsOptional()
    removesSimpleClothesThatHaveBeenUnbuttoned?: number;

    @ApiProperty({ description: 'Uses the bathroom to defecate, fails only once a week', example: 1 })
   @IsNumber()
  @IsOptional()
    usesTheBathroomToDefecateFailsOnlyOnceAWeek?: number;

    @ApiProperty({ description: 'Obtains water from a faucet without help', example: 1 })
  @IsNumber()
  @IsOptional()
  obtainsWaterFromAFaucetWithoutHelp?: number;

   @ApiProperty({ description: 'Washes hands and face with soap', example: 1 })
    @IsNumber()
    @IsOptional()
    washesHandsAndFaceWithSoap?: number;

  @ApiProperty({ description: 'Warns that wants to go to the bathroom during the day, in time', example: 1 })
    @IsNumber()
    @IsOptional()
     warnsThatWantsToGoToTheBathroomDuringTheDayInTime?: number;

  @ApiProperty({ description: 'Hangs coat on a hook at its own height', example: 1 })
    @IsNumber()
    @IsOptional()
   hangsCoatOnAHookAtItsOwnHeight?: number;

    @ApiProperty({ description: 'Stays dry when sleeping during the day', example: 1 })
    @IsNumber()
    @IsOptional()
    staysDryWhenSleepingDuringTheDay?: number;

   @ApiProperty({ description: 'Avoids risks (ex: sharp edges on furniture and stairs without handrail)', example: 1 })
   @IsNumber()
  @IsOptional()
     avoidsRisksExSharpEdgesOnFurnitureAndStairsWithoutHandrail?: number;

  @ApiProperty({ description: 'Uses a napkin when recommended', example: 1 })
   @IsNumber()
  @IsOptional()
  usesANapkinWhenRecommended?: number;

    @ApiProperty({ description: 'Pierces the fork in the food, taking it to the mouth', example: 1 })
    @IsNumber()
    @IsOptional()
    piercesTheForkInTheFoodTakingItToTheMouth?: number;

    @ApiProperty({ description: 'Pours liquid from a small pitcher into a glass without help', example: 1 })
   @IsNumber()
  @IsOptional()
   poursLiquidFromASmallPitcherIntoAGlassWithoutHelp?: number;

    @ApiProperty({ description: 'Unfastens clothes fastened with a snap fastener', example: 1 })
   @IsNumber()
  @IsOptional()
    unfastensClothesFastenedWithASnapFastener?: number;

     @ApiProperty({ description: 'Washes arms and legs when given a bath', example: 1 })
    @IsNumber()
    @IsOptional()
    washesArmsAndLegsWhenGivenABath?: number;

     @ApiProperty({ description: 'Puts on socks', example: 1 })
    @IsNumber()
    @IsOptional()
    putsOnSocks?: number;

    @ApiProperty({ description: 'Wears coat, jacket, or shirt', example: 1 })
    @IsNumber()
    @IsOptional()
    wearsCoatJacketOrShirt?: number;
   
   @ApiProperty({ description: 'Identifies the front part of clothes', example: 1 })
    @IsNumber()
    @IsOptional()
    identifiesTheFrontPartOfClothes?: number;
}
export class SelfCare3To4YearsDto {
    @ApiProperty({ description: 'Feeds itself alone for entire meal', example: 1 })
    @IsNumber()
    @IsOptional()
    feedsItselfAloneForEntireMeal?: number;

   @ApiProperty({ description: 'Dresses itself alone, needing help only when there are jackets or t-shirts with closed collars or buttons and fasteners', example: 1 })
    @IsNumber()
    @IsOptional()
    dressesItselfAloneNeedingHelpOnlyWhenThereAreJacketsOrTShirtsWithClosedCollarsOrButtonsAndFasteners?: number;

  @ApiProperty({ description: 'Wipes nose when reminded', example: 1 })
    @IsNumber()
    @IsOptional()
    wipesNoseWhenReminded?: number;

  @ApiProperty({ description: 'Wakes up dry 2 mornings a week', example: 1 })
    @IsNumber()
    @IsOptional()
    wakesUpDry2MorningsAWeek?: number;

    @ApiProperty({ description: 'If boy, urinates in the toilet while standing', example: 1 })
     @IsNumber()
    @IsOptional()
    ifBoyUrinatesInTheToiletWhileStanding?: number;

    @ApiProperty({ description: 'Dresses and undresses itself alone, except for buttons and fasteners, 75 percent of the time', example: 1 })
  @IsNumber()
  @IsOptional()
  dressesAndUndressesItselfAloneExceptForButtonsAndFasteners75PercentOfTheTime?: number;

  @ApiProperty({ description: 'Fastens clothes with snaps or hooks', example: 1 })
   @IsNumber()
  @IsOptional()
    fastensClothesWithSnapsOrHooks?: number;

   @ApiProperty({ description: 'Blows nose when reminded', example: 1 })
  @IsNumber()
  @IsOptional()
     blowsNoseWhenReminded?: number;

    @ApiProperty({ description: 'Avoids common dangers (ex: broken glass)', example: 1 })
  @IsNumber()
  @IsOptional()
   avoidsCommonDangersExBrokenGlass?: number;

    @ApiProperty({ description: 'Hangs clothes on a hanger and puts in closet when asked', example: 1 })
   @IsNumber()
  @IsOptional()
   hangsClothesOnAHangerAndPutsInClosetWhenAsked?: number;
  
  @ApiProperty({ description: 'Brushes teeth when receives instruction', example: 1 })
   @IsNumber()
  @IsOptional()
   brushesTeethWhenReceivesInstruction?: number;

  @ApiProperty({ description: 'Puts on gloves', example: 1 })
   @IsNumber()
  @IsOptional()
  putsOnGloves?: number;

  @ApiProperty({ description: 'Puts on boots', example: 1 })
    @IsNumber()
    @IsOptional()
    putsOnBoots?: number;

   @ApiProperty({ description: 'Unbuttons large buttons', example: 1 })
    @IsNumber()
    @IsOptional()
    unbuttonsLargeButtons?: number;

    @ApiProperty({ description: 'Buttons large buttons', example: 1 })
    @IsNumber()
    @IsOptional()
    buttonsLargeButtons?: number;
}

export class SelfCare4To5YearsDto  {
    @ApiProperty({ description: 'Cleans what it spilled on own', example: 1 })
    @IsNumber()
    @IsOptional()
    cleansWhatItSpilledOnOwn?: number;

  @ApiProperty({ description: 'Avoids poison and all harmful substances', example: 1 })
   @IsNumber()
  @IsOptional()
  avoidsPoisonAndAllHarmfulSubstances?: number;

   @ApiProperty({ description: 'Unbuttons own clothes', example: 1 })
    @IsNumber()
    @IsOptional()
    unbuttonsOwnClothes?: number;

   @ApiProperty({ description: 'Buttons own clothes', example: 1 })
    @IsNumber()
    @IsOptional()
    buttonsOwnClothes?: number;

   @ApiProperty({ description: 'Removes plate and cutlery from the table', example: 1 })
   @IsNumber()
  @IsOptional()
    removesPlateAndCutleryFromTheTable?: number;

   @ApiProperty({ description: 'Fits zipper into its termination', example: 1 })
    @IsNumber()
    @IsOptional()
    fitsZipperIntoItsTermination?: number;

    @ApiProperty({ description: 'Washes hands and face', example: 1 })
  @IsNumber()
  @IsOptional()
  washesHandsAndFace?: number;

    @ApiProperty({ description: 'Uses appropriate cutlery to eat', example: 1 })
   @IsNumber()
  @IsOptional()
    usesAppropriateCutleryToEat?: number;

   @ApiProperty({ description: 'Wakes up at night to go to the bathroom or wakes up dry', example: 1 })
  @IsNumber()
  @IsOptional()
     wakesUpAtNightToGoToTheBathroomOrWakesUpDry?: number;

  @ApiProperty({ description: 'Cleans and blows its nose 75 percent of the time without being reminded', example: 1 })
  @IsNumber()
  @IsOptional()
    cleansAndBlowsItsNose75PercentOfTheTimeWithoutBeingReminded?: number;

    @ApiProperty({ description: 'Bathes alone, needing help only to wash back, neck, and ears', example: 1 })
    @IsNumber()
    @IsOptional()
   bathesAloneNeedingHelpOnlyToWashBackNeckAndEars?: number;

    @ApiProperty({ description: 'Uses a knife to spread butter on bread', example: 1 })
    @IsNumber()
    @IsOptional()
   usesAKnifeToSpreadButterOnBread?: number;

  @ApiProperty({ description: 'Tightens and loosens belts or buckles', example: 1 })
   @IsNumber()
  @IsOptional()
   tightensAndLoosensBeltsOrBuckles?: number;

  @ApiProperty({ description: 'Dresses itself alone but does not tie laces', example: 1 })
  @IsNumber()
  @IsOptional()
    dressesItselfAloneButDoesNotTieLaces?: number;
  
   @ApiProperty({ description: 'Serves itself at the table while holding the food platter', example: 1 })
    @IsNumber()
    @IsOptional()
    servesItselfAtTheTableWhileHoldingTheFoodPlatter?: number;

    @ApiProperty({ description: 'Helps set the table correctly when receives instructions', example: 1 })
   @IsNumber()
  @IsOptional()
   helpsSetTheTableCorrectlyWhenReceivesInstructions?: number;
  
  @ApiProperty({ description: 'Brushes teeth', example: 1 })
    @IsNumber()
    @IsOptional()
    brushesTeeth?: number;

     @ApiProperty({ description: 'Goes to the bathroom in time, removes clothes, uses toilet paper, flushes, and dresses without help', example: 1 })
    @IsNumber()
    @IsOptional()
   goesToTheBathroomInTimeRemovesClothesUsesToiletPaperFlushesAndDressesWithoutHelp?: number;

   @ApiProperty({ description: 'Combs or brushes hair', example: 1 })
  @IsNumber()
  @IsOptional()
   combsOrBrushesHair?: number;

  @ApiProperty({ description: 'Hangs clothes on hangers', example: 1 })
  @IsNumber()
  @IsOptional()
    hangsClothesOnHangers?: number;

   @ApiProperty({ description: 'Walks around the neighborhood without constant supervision', example: 1 })
  @IsNumber()
  @IsOptional()
   walksAroundTheNeighborhoodWithoutConstantSupervision?: number;

     @ApiProperty({ description: 'Threads laces into shoes', example: 1 })
    @IsNumber()
    @IsOptional()
    threadsLacesIntoShoes?: number;

     @ApiProperty({ description: 'Ties or laces shoelaces', example: 1 })
    @IsNumber()
    @IsOptional()
    tiesOrLacesShoelaces?: number;
}
export class SelfCare5To6YearsDto  {
  @ApiProperty({ description: 'Is responsible for a weekly task and performs it when reminded', example: 1 })
  @IsNumber()
  @IsOptional()
    isResponsibleForAWeeklyTaskAndPerformsItWhenReminded?: number;

  @ApiProperty({ description: 'Selects appropriate clothing for climate and occasion', example: 1 })
  @IsNumber()
  @IsOptional()
   selectsAppropriateClothingForClimateAndOccasion?: number;

  @ApiProperty({ description: 'Stops on the sidewalk, looks both ways, and crosses the street without needing to be reminded', example: 1 })
  @IsNumber()
  @IsOptional()
   stopsOnTheSidewalkLooksBothWaysAndCrossesTheStreetWithoutNeedingToBeReminded?: number;

    @ApiProperty({ description: 'Serves itself at the table and passes the pot of food to others', example: 1 })
  @IsNumber()
  @IsOptional()
    servesItselfAtTheTableAndPassesThePotOfFoodToOthers?: number;

  @ApiProperty({ description: 'Prepares own cup of coffee with milk', example: 1 })
  @IsNumber()
  @IsOptional()
   preparesOwnCupOfCoffeeWithMilk?: number;

  @ApiProperty({ description: 'Is responsible for a daily task at home', example: 1 })
   @IsNumber()
  @IsOptional()
  isResponsibleForADailyTaskAtHome?: number;

   @ApiProperty({ description: 'Adjusts the temperature of water for bathing', example: 1 })
    @IsNumber()
    @IsOptional()
    adjustsTheTemperatureOfWaterForBathing?: number;

     @ApiProperty({ description: 'Prepares own snack', example: 1 })
   @IsNumber()
  @IsOptional()
     preparesOwnSnack?: number;

   @ApiProperty({ description: 'Walks alone up to a distance of 2 blocks from home', example: 1 })
    @IsNumber()
    @IsOptional()
    walksAloneUpToADistanceOf2BlocksFromHome?: number;

   @ApiProperty({ description: 'Cuts tender foods with a knife', example: 1 })
    @IsNumber()
    @IsOptional()
    cutsTenderFoodsWithAKnife?: number;

  @ApiProperty({ description: 'Finds the bathroom in a public place correctly', example: 1 })
   @IsNumber()
  @IsOptional()
    findsTheBathroomInAPublicPlaceCorrectly?: number;
  
    @ApiProperty({ description: 'Opens the milk package', example: 1 })
  @IsNumber()
  @IsOptional()
    opensTheMilkPackage?: number;

    @ApiProperty({ description: 'Picks up a tray with food, carrying it, and placing it on the table', example: 1 })
    @IsNumber()
    @IsOptional()
    picksUpATrayWithFoodCarryingItAndPlacingItOnTheTable?: number;

    @ApiProperty({ description: 'Ties the laces on jackets with hood', example: 1 })
    @IsNumber()
    @IsOptional()
    tiesTheLacesOnJacketsWithHood?: number;

    @ApiProperty({ description: 'Fastens the car seat belt', example: 1 })
    @IsNumber()
    @IsOptional()
    fastensTheCarSeatBelt?: number;
}
export class MotorDevelopment0To1YearDto  {
    @ApiProperty({ description: 'Reaches for an object placed in front of it (15 to 20 cm)', example: 1 })
    @IsNumber()
    @IsOptional()
    reachesForAnObjectPlacedInFrontOfIt15To20Cm?: number;

    @ApiProperty({ description: 'Grabs an object placed in front of it (8 cm)', example: 1 })
    @IsNumber()
    @IsOptional()
    grabsAnObjectPlacedInFrontOfIt8Cm?: number;

    @ApiProperty({ description: 'Extends arms toward an object in front of it and grabs it', example: 1 })
    @IsNumber()
    @IsOptional()
    extendsArmsTowardAnObjectInFrontOfItAndGrabsIt?: number;

    @ApiProperty({ description: 'Reaches for a preferred object', example: 1 })
     @IsNumber()
    @IsOptional()
    reachesForAPreferredObject?: number;

    @ApiProperty({ description: 'Puts objects in mouth', example: 1 })
     @IsNumber()
    @IsOptional()
     putsObjectsInMouth?: number;

    @ApiProperty({ description: 'Raises head and torso, supporting self on arms when lying on stomach', example: 1 })
     @IsNumber()
    @IsOptional()
    raisesHeadAndTorsoSupportingSelfOnArmsWhenLyingOnStomach?: number;

    @ApiProperty({ description: 'Raises head and torso, supporting self on one arm', example: 1 })
    @IsNumber()
    @IsOptional()
    raisesHeadAndTorsoSupportingSelfOnOneArm?: number;

  @ApiProperty({ description: 'Touches and explores objects with mouth', example: 1 })
    @IsNumber()
    @IsOptional()
   touchesAndExploresObjectsWithMouth?: number;

  @ApiProperty({ description: 'In prone position, turns to the side and maintains this position half the time', example: 1 })
    @IsNumber()
    @IsOptional()
   inPronePositionTurnsToTheSideAndMaintainsThisPositionHalfTheTime?: number;

  @ApiProperty({ description: 'In prone position, turns on back', example: 1 })
    @IsNumber()
    @IsOptional()
    inPronePositionTurnsOnBack?: number;

  @ApiProperty({ description: 'In prone position, moves forward the equivalent of its height', example: 1 })
    @IsNumber()
    @IsOptional()
    inPronePositionMovesForwardTheEquivalentOfItsHeight?: number;

    @ApiProperty({ description: 'In supine position, rolls to the side', example: 1 })
    @IsNumber()
    @IsOptional()
    inSupinePositionRollsToTheSide?: number;

     @ApiProperty({ description: 'In supine position, turns from stomach to back', example: 1 })
    @IsNumber()
    @IsOptional()
    inSupinePositionTurnsFromStomachToBack?: number;

   @ApiProperty({ description: 'Makes effort to sit, holding onto adults fingers', example: 1 })
  @IsNumber()
  @IsOptional()
    makesEffortToSitHoldingOntoAdultsFingers?: number;
  
    @ApiProperty({ description: 'Turns head easily when the body is supported', example: 1 })
  @IsNumber()
  @IsOptional()
   turnsHeadEasilyWhenTheBodyIsSupported?: number;
  
    @ApiProperty({ description: 'Sits for 2 minutes', example: 1 })
    @IsNumber()
    @IsOptional()
   sitsFor2Minutes?: number;
  
  @ApiProperty({ description: 'Releases an object to grab another', example: 1 })
    @IsNumber()
    @IsOptional()
    releasesAnObjectToGrabAnother?: number;

   @ApiProperty({ description: 'Grabs and drops an object purposefully', example: 1 })
    @IsNumber()
    @IsOptional()
    grabsAndDropsAnObjectPurposefully?: number;

    @ApiProperty({ description: 'Stands with maximum support', example: 1 })
    @IsNumber()
    @IsOptional()
   standsWithMaximumSupport?: number;
  
   @ApiProperty({ description: 'While standing with support, jumps up and down', example: 1 })
    @IsNumber()
    @IsOptional()
   whileStandingWithSupportJumpsUpAndDown?: number;
   
   @ApiProperty({ description: 'Crawls to grab an object distant its height', example: 1 })
    @IsNumber()
    @IsOptional()
    crawlsToGrabAnObjectDistantItsHeight?: number;
  
   @ApiProperty({ description: 'Sits supporting self alone', example: 1 })
   @IsNumber()
  @IsOptional()
   sitsSupportingSelfAlone?: number;
  
   @ApiProperty({ description: 'While sitting, turns to crawling', example: 1 })
    @IsNumber()
    @IsOptional()
    whileSittingTurnsToCrawling?: number;
  
  @ApiProperty({ description: 'While in prone position, manages to sit', example: 1 })
   @IsNumber()
  @IsOptional()
   whileInPronePositionManagesToSit?: number;

   @ApiProperty({ description: 'Sits without hand support', example: 1 })
  @IsNumber()
  @IsOptional()
    sitsWithoutHandSupport?: number;

  @ApiProperty({ description: 'Throws objects at random', example: 1 })
   @IsNumber()
  @IsOptional()
   throwsObjectsAtRandom?: number;

   @ApiProperty({ description: 'Sways back and forth when crawling', example: 1 })
   @IsNumber()
  @IsOptional()
   swaysBackAndForthWhenCrawling?: number;

  @ApiProperty({ description: 'Transfers objects from one hand to another when sitting', example: 1 })
  @IsNumber()
  @IsOptional()
  transfersObjectsFromOneHandToAnotherWhenSitting?: number;

   @ApiProperty({ description: 'Retains 2 cubes of 2.5 cm in one hand', example: 1 })
    @IsNumber()
    @IsOptional()
    retains2CubesOf25CmInOneHand?: number;

   @ApiProperty({ description: 'Gets on knees', example: 1 })
    @IsNumber()
    @IsOptional()
    getsOnKnees?: number;
  
   @ApiProperty({ description: 'Stands supporting self on something', example: 1 })
  @IsNumber()
  @IsOptional()
  standsSupportingSelfOnSomething?: number;
  
  @ApiProperty({ description: 'Uses pincer grip to pick up objects', example: 1 })
    @IsNumber()
    @IsOptional()
    usesPincerGripToPickUpObjects?: number;

    @ApiProperty({ description: 'Crawls', example: 1 })
    @IsNumber()
    @IsOptional()
    crawls?: number;
  
   @ApiProperty({ description: 'While crawling, extends one hand upwards', example: 1 })
    @IsNumber()
    @IsOptional()
    whileCrawlingExtendsOneHandUpwards?: number;
  
    @ApiProperty({ description: 'Stands with minimum support', example: 1 })
    @IsNumber()
    @IsOptional()
   standsWithMinimumSupport?: number;

   @ApiProperty({ description: 'Licks food around mouth', example: 1 })
   @IsNumber()
  @IsOptional()
  licksFoodAroundMouth?: number;

   @ApiProperty({ description: 'Maintains self standing alone for 1 minute', example: 1 })
  @IsNumber()
  @IsOptional()
    maintainsSelfStandingAloneFor1Minute?: number;

   @ApiProperty({ description: 'Knocks down an object that is inside a receptacle', example: 1 })
   @IsNumber()
  @IsOptional()
    knocksDownAnObjectThatIsInsideAReceptacle?: number;

   @ApiProperty({ description: 'Turns several pages of a book at the same time', example: 1 })
   @IsNumber()
  @IsOptional()
   turnsSeveralPagesOfABookAtTheSameTime?: number;
  
    @ApiProperty({ description: 'Scoops with a spoon or spade', example: 1 })
    @IsNumber()
    @IsOptional()
     scoopsWithASpoonOrSpade?: number;

   @ApiProperty({ description: 'Places small objects inside a receptacle', example: 1 })
   @IsNumber()
  @IsOptional()
    placesSmallObjectsInsideAReceptacle?: number;

    @ApiProperty({ description: 'While standing, lowers itself and sits', example: 1 })
    @IsNumber()
    @IsOptional()
    whileStandingLowersItselfAndSits?: number;

    @ApiProperty({ description: 'Claps hands', example: 1 })
    @IsNumber()
    @IsOptional()
    clapsHands?: number;

     @ApiProperty({ description: 'Walks with minimum support', example: 1 })
   @IsNumber()
  @IsOptional()
   walksWithMinimumSupport?: number;
    
    @ApiProperty({ description: 'Takes a few steps without support', example: 1 })
    @IsNumber()
    @IsOptional()
    takesAFewStepsWithoutSupport?: number;
}
export class MotorDevelopment1To2YearsDto {
   @ApiProperty({ description: 'Climbs stairs crawling', example: 1 })
    @IsNumber()
    @IsOptional()
    climbsStairsCrawling?: number;

    @ApiProperty({ description: 'Places itself standing while sitting', example: 1 })
    @IsNumber()
    @IsOptional()
   placesItselfStandingWhileSitting?: number;

   @ApiProperty({ description: 'Rolls a ball, imitating an adult', example: 1 })
    @IsNumber()
    @IsOptional()
   rollsABallImitatingAnAdult?: number;

   @ApiProperty({ description: 'Climbs onto an adult chair, turns, and sits', example: 1 })
    @IsNumber()
    @IsOptional()
    climbsOntoAnAdultChairTurnsAndSits?: number;

    @ApiProperty({ description: 'Puts 4 rings on a small stake', example: 1 })
    @IsNumber()
    @IsOptional()
   puts4RingsOnASmallStake?: number;

  @ApiProperty({ description: 'Removes 2.5 cm pins from a board or tray', example: 1 })
    @IsNumber()
    @IsOptional()
   removes25CmPinsFromABoardOrTray?: number;

  @ApiProperty({ description: 'Fits 2.5 cm pins into a fitting board', example: 1 })
  @IsNumber()
  @IsOptional()
  fits25CmPinsIntoAFittingBoard?: number;

   @ApiProperty({ description: 'Builds a tower of 3 blocks', example: 1 })
    @IsNumber()
    @IsOptional()
   buildsATowerOf3Blocks?: number;

    @ApiProperty({ description: 'Makes traces on paper with pencil or crayon', example: 1 })
    @IsNumber()
    @IsOptional()
    makesTracesOnPaperWithPencilOrCrayon?: number;

   @ApiProperty({ description: 'Walks alone', example: 1 })
    @IsNumber()
    @IsOptional()
    walksAlone?: number;

   @ApiProperty({ description: 'Goes down stairs sitting, putting feet first', example: 1 })
  @IsNumber()
  @IsOptional()
   goesDownStairsSittingPuttingFeetFirst?: number;

    @ApiProperty({ description: 'Sits in a small chair', example: 1 })
    @IsNumber()
    @IsOptional()
   sitsInASmallChair?: number;
  
   @ApiProperty({ description: 'Crouches and returns to stand', example: 1 })
  @IsNumber()
  @IsOptional()
    crouchesAndReturnsToStand?: number;

    @ApiProperty({ description: 'Pushes and pulls toys when walking', example: 1 })
    @IsNumber()
    @IsOptional()
    pushesAndPullsToysWhenWalking?: number;

    @ApiProperty({ description: 'Uses a chair or rocking horse', example: 1 })
    @IsNumber()
    @IsOptional()
    usesAChairOrRockingHorse?: number;

   @ApiProperty({ description: 'Climbs stairs with help', example: 1 })
  @IsNumber()
  @IsOptional()
  climbsStairsWithHelp?: number;

    @ApiProperty({ description: 'Bends the body without falling to pick up objects on the floor', example: 1 })
   @IsNumber()
  @IsOptional()
    bendsTheBodyWithoutFallingToPickUpObjectsOnTheFloor?: number;
  
   @ApiProperty({ description: 'Imitates a circular movement', example: 1 })
   @IsNumber()
  @IsOptional()
    imitatesACircularMovement?: number;
}

export class MotorDevelopment2To3YearsDto {
   @ApiProperty({ description: 'Threads 4 large beads on a cord in 2 minutes', example: 1 })
    @IsNumber()
    @IsOptional()
    threads4LargeBeadsOnACordIn2Minutes?: number;

   @ApiProperty({ description: 'Turns latches or doorknobs on doors', example: 1 })
   @IsNumber()
  @IsOptional()
  turnsLatchesOrDoorknobsOnDoors?: number;

   @ApiProperty({ description: 'Jumps in the same place with both feet', example: 1 })
    @IsNumber()
    @IsOptional()
    jumpsInTheSamePlaceWithBothFeet?: number;

  @ApiProperty({ description: 'Walks backwards', example: 1 })
  @IsNumber()
  @IsOptional()
  walksBackwards?: number;

  @ApiProperty({ description: 'Goes down stairs without help', example: 1 })
  @IsNumber()
  @IsOptional()
    goesDownStairsWithoutHelp?: number;

   @ApiProperty({ description: 'Throws a ball to an adult at a 1.5-meter distance', example: 1 })
  @IsNumber()
  @IsOptional()
   throwsABallToAnAdultAtA1HalfDistance?: number;

   @ApiProperty({ description: 'Builds a tower of 5 to 6 blocks', example: 1 })
  @IsNumber()
  @IsOptional()
    buildsATowerOf5To6Blocks?: number;

  @ApiProperty({ description: 'Turns pages of a book one at a time', example: 1 })
   @IsNumber()
  @IsOptional()
  turnsPagesOfABookOneAtATime?: number;

  @ApiProperty({ description: 'Unwraps a small object', example: 1 })
   @IsNumber()
  @IsOptional()
    unwrapsASmallObject?: number;

    @ApiProperty({ description: 'Folds a paper in half, imitating an adult', example: 1 })
    @IsNumber()
    @IsOptional()
    foldsAPaperInHalfImitatingAnAdult?: number;

    @ApiProperty({ description: 'Dismantles and rebuilds pressure-fit toys', example: 1 })
    @IsNumber()
    @IsOptional()
    dismantlesAndRebuildsPressureFitToys?: number;

  @ApiProperty({ description: 'Unscrews toys that fit with threads', example: 1 })
  @IsNumber()
  @IsOptional()
    unscrewsToysThatFitWithThreads?: number;
 
  @ApiProperty({ description: 'Kicks a large ball that is still', example: 1 })
    @IsNumber()
    @IsOptional()
    kicksALargeBallThatIsStill?: number;

   @ApiProperty({ description: 'Makes balls of clay, mud, or plasticine', example: 1 })
   @IsNumber()
  @IsOptional()
    makesBallsOfClayMudOrPlasticine?: number;

  @ApiProperty({ description: 'Holds the pencil between the thumb and index finger, resting it on the middle finger', example: 1 })
   @IsNumber()
  @IsOptional()
    holdsThePencilBetweenTheThumbAndIndexFingerRestingItOnTheMiddleFinger?: number;

  @ApiProperty({ description: 'Does forward tumble with help', example: 1 })
   @IsNumber()
  @IsOptional()
  doesForwardTumbleWithHelp?: number;

  @ApiProperty({ description: 'Hammers to fit 5 pins in their holes', example: 1 })
  @IsNumber()
  @IsOptional()
   hammersToFit5PinsInTheirHoles?: number;
}

export class MotorDevelopment3To4YearsDto {
    @ApiProperty({ description: 'Makes a puzzle of 3 pieces', example: 1 })
    @IsNumber()
    @IsOptional()
    makesAPuzzleOf3Pieces?: number;

    @ApiProperty({ description: 'Cuts something into pieces with scissors', example: 1 })
    @IsNumber()
    @IsOptional()
    cutsSomethingIntoPiecesWithScissors?: number;

    @ApiProperty({ description: 'Jumps from a height of 20 cm', example: 1 })
     @IsNumber()
    @IsOptional()
    jumpsFromAHeightOf20Cm?: number;

    @ApiProperty({ description: 'Kicks a large ball when sent to you', example: 1 })
     @IsNumber()
    @IsOptional()
    kicksALargeBallWhenSentToYou?: number;

    @ApiProperty({ description: 'Walks on tiptoes', example: 1 })
    @IsNumber()
    @IsOptional()
    walksOnTiptoes?: number;

    @ApiProperty({ description: 'Runs 10 steps, coordinating and alternating the movement of arms and feet', example: 1 })
    @IsNumber()
    @IsOptional()
    runs10StepsCoordinatingAndAlternatingTheMovementOfArmsAndFeet?: number;

   @ApiProperty({ description: 'Pedals with tricycle the distance of 1.5 meters', example: 1 })
    @IsNumber()
    @IsOptional()
    pedalsWithTricycleTheDistanceOf1AndAHalfMeters?: number;

   @ApiProperty({ description: 'Swings on a swing when it is in motion', example: 1 })
    @IsNumber()
    @IsOptional()
    swingsOnASwingWhenItIsInMotion?: number;

   @ApiProperty({ description: 'Climbs on a slide of 1.20m to 1.80m and slides down', example: 1 })
    @IsNumber()
    @IsOptional()
    climbsOnASlideOf120MTo180MAndSlidesDown?: number;

  @ApiProperty({ description: 'Does forward tumbles', example: 1 })
    @IsNumber()
    @IsOptional()
    doesForwardTumbles?: number;

    @ApiProperty({ description: 'Climbs stairs, alternating feet', example: 1 })
    @IsNumber()
    @IsOptional()
    climbsStairsAlternatingFeet?: number;

    @ApiProperty({ description: 'Marches (walks in a rhythmical way)', example: 1 })
    @IsNumber()
    @IsOptional()
    marchesWalksInARhythmicalWay?: number;

  @ApiProperty({ description: 'Parries the ball with both hands', example: 1 })
    @IsNumber()
    @IsOptional()
    parriesTheBallWithBothHands?: number;

    @ApiProperty({ description: 'Draws figures following outlines or dotted lines', example: 1 })
    @IsNumber()
    @IsOptional()
    drawsFiguresFollowingOutlinesOrDottedLines?: number;

    @ApiProperty({ description: 'Cuts along a straight line (20 cm), moving slightly away from the line', example: 1 })
     @IsNumber()
    @IsOptional()
    cutsAlongAStraightLine20CmMovingSlightlyAwayFromTheLine?: number;
}

export class MotorDevelopment4To5YearsDto {
     @ApiProperty({ description: 'Stands on one foot without support for 4 to 8 seconds', example: 1 })
    @IsNumber()
    @IsOptional()
     standsOnOneFootWithoutSupportFor4To8Seconds?: number;
   
     @ApiProperty({ description: 'Changes direction when running', example: 1 })
   @IsNumber()
  @IsOptional()
   changesDirectionWhenRunning?: number;
 
    @ApiProperty({ description: 'Walks on a beam or board, maintaining balance', example: 1 })
   @IsNumber()
  @IsOptional()
   walksOnABeamOrBoardMaintainingBalance?: number;

    @ApiProperty({ description: 'Jumps forward 10 times without falling', example: 1 })
  @IsNumber()
  @IsOptional()
    jumpsForward10TimesWithoutFalling?: number;

    @ApiProperty({ description: 'Jumps over a rope suspended 5 cm from the ground', example: 1 })
   @IsNumber()
  @IsOptional()
   jumpsOverARopeSuspended5CmFromTheGround?: number;

     @ApiProperty({ description: 'Jumps backwards 6 times', example: 1 })
    @IsNumber()
    @IsOptional()
    jumpsBackwards6Times?: number;

   @ApiProperty({ description: 'Rebounds and catches a large ball', example: 1 })
   @IsNumber()
  @IsOptional()
    reboundsAndCatchesALargeBall?: number;

   @ApiProperty({ description: 'Joins 2 to 3 pieces of plasticine', example: 1 })
  @IsNumber()
  @IsOptional()
    joins2To3PiecesOfPlasticine?: number;
    
    @ApiProperty({ description: 'Cuts around curved lines', example: 1 })
   @IsNumber()
  @IsOptional()
    cutsAroundCurvedLines?: number;

   @ApiProperty({ description: 'Fits screw objects', example: 1 })
    @IsNumber()
    @IsOptional()
    fitsScrewObjects?: number;

  @ApiProperty({ description: 'Goes down stairs, alternating feet', example: 1 })
  @IsNumber()
  @IsOptional()
  goesDownStairsAlternatingFeet?: number;

   @ApiProperty({ description: 'Pedals a tricycle, making turns', example: 1 })
  @IsNumber()
  @IsOptional()
    pedalsATricycleMakingTurns?: number;

   @ApiProperty({ description: 'Jumps on one foot 5 consecutive times', example: 1 })
  @IsNumber()
  @IsOptional()
    jumpsOnOneFoot5ConsecutiveTimes?: number;

    @ApiProperty({ description: 'Cuts a circle in 5 cm', example: 1 })
   @IsNumber()
  @IsOptional()
    cutsACircleIn5Cm?: number;
  
   @ApiProperty({ description: 'Draws simple, easily identifiable figures (ex: house)', example: 1 })
    @IsNumber()
    @IsOptional()
    drawsSimpleEasilyIdentifiableFiguresExHouse?: number;

    @ApiProperty({ description: 'Cuts and pastes simple shapes', example: 1 })
    @IsNumber()
    @IsOptional()
    cutsAndPastesSimpleShapes?: number;
}

export class MotorDevelopment5To6YearsDto {
    @ApiProperty({ description: 'Writes uppercase letters (isolated and large) anywhere on the paper', example: 1 })
     @IsNumber()
     @IsOptional()
    writesUppercaseLettersIsolatedAndLargeAnywhereOnThePaper?: number;
 
      @ApiProperty({ description: 'Walks on a board (backwards, forwards, and sideways), maintaining balance', example: 1 })
     @IsNumber()
     @IsOptional()
     walksOnABoardBackwardsForwardsAndSidewaysMaintainingBalance?: number;
 
      @ApiProperty({ description: 'Walks while hopping', example: 1 })
     @IsNumber()
     @IsOptional()
    walksWhileHopping?: number;
  
     @ApiProperty({ description: 'Swings on a swing, starting and maintaining the movement', example: 1 })
    @IsNumber()
   @IsOptional()
     swingsOnASwingStartingAndMaintainingTheMovement?: number;
   
    @ApiProperty({ description: 'Stretches fingers, touching thumb to each of them', example: 1 })
   @IsNumber()
   @IsOptional()
     stretchesFingersTouchingThumbToEachOfThem?: number;
 
      @ApiProperty({ description: 'Copies capital letters', example: 1 })
     @IsNumber()
     @IsOptional()
     copiesCapitalLetters?: number;
  
     @ApiProperty({ description: 'Climbs on ladders or a slide of 3 meters', example: 1 })
     @IsNumber()
     @IsOptional()
    climbsOnLaddersOrASlideOf3M?: number;
 
     @ApiProperty({ description: 'Hammers a nail with a hammer', example: 1 })
     @IsNumber()
     @IsOptional()
     hammersANailWithAHammer?: number;
 
     @ApiProperty({ description: 'Rebounds the ball as it walks (with direction)', example: 1 })
    @IsNumber()
   @IsOptional()
     reboundsTheBallAsItWalksWithDirection?: number;
 
    @ApiProperty({ description: 'Manages to color without going out of the margin 95 percent of the time', example: 1 })
   @IsNumber()
   @IsOptional()
     managesToColorWithoutGoingOutOfTheMargin95PercentOfTheTime?: number;
   
     @ApiProperty({ description: 'Cuts out figures without leaving more than 6 mm from the margin', example: 1 })
   @IsNumber()
   @IsOptional()
     cutsOutFiguresWithoutLeavingMoreThan6MmFromTheMargin?: number;
 
     @ApiProperty({ description: 'Uses pencil sharpener', example: 1 })
     @IsNumber()
     @IsOptional()
    usesPencilSharpener?: number;
 
    @ApiProperty({ description: 'Copies complex drawings (school, ship)', example: 1 })
     @IsNumber()
     @IsOptional()
     copiesComplexDrawingsSchoolShip?: number;
 
     @ApiProperty({ description: 'Tears simple figures from the paper', example: 1 })
    @IsNumber()
   @IsOptional()
    tearsSimpleFiguresFromThePaper?: number;
 
     @ApiProperty({ description: 'Folds a square paper 2x diagonally by imitation', example: 1 })
     @IsNumber()
     @IsOptional()
    foldsASquarePaper2XDiagonallyByImitation?: number;
 
     @ApiProperty({ description: 'Catches a light ball with one hand', example: 1 })
    @IsNumber()
   @IsOptional()
     catchesALightBallWithOneHand?: number;
 
    @ApiProperty({ description: 'Jumps rope alone', example: 1 })
   @IsNumber()
   @IsOptional()
     jumpsRopeAlone?: number;
 
    @ApiProperty({ description: 'Strikes a ball with a stick or piece of wood', example: 1 })
     @IsNumber()
     @IsOptional()
     strikesABallWithAStickOrPieceOfWood?: number;
     
    @ApiProperty({ description: 'Catches an object on the floor while running', example: 1 })
     @IsNumber()
     @IsOptional()
     catchesAnObjectOnTheFloorWhileRunning?: number;
   
    @ApiProperty({ description: 'Skates a distance of 3m or uses a skateboard', example: 1 })
     @IsNumber()
     @IsOptional()
     skatesADistanceOf3MOrUsesASkateboard?: number;
 
    @ApiProperty({ description: 'Rides a bicycle', example: 1 })
     @IsNumber()
     @IsOptional()
    ridesABicycle?: number;
 
   @ApiProperty({ description: 'Slides down a hill of sand or earth', example: 1 })
     @IsNumber()
     @IsOptional()
     slidesDownAHillOfSandOrEarth?: number;
 
    @ApiProperty({ description: 'Walks or plays in a swimming pool having water up to its waist', example: 1 })
    @IsNumber()
   @IsOptional()
     walksOrPlaysInASwimmingPoolHavingWaterUpToItsWaist?: number;
 
    @ApiProperty({ description: 'Drives a scooter, giving impulse with one foot only', example: 1 })
     @IsNumber()
     @IsOptional()
     drivesAScooterGivingImpulseWithOneFootOnly?: number;
     
     @ApiProperty({ description: 'Jumps and turns on one foot', example: 1 })
     @IsNumber()
     @IsOptional()
     jumpsAndTurnsOnOneFoot?: number;
 
     @ApiProperty({ description: 'Writes own name with block letters in a lined notebook', example: 1 })
     @IsNumber()
     @IsOptional()
      writesOwnNameWithBlockLettersInLinedNotebook?: number;
 
     @ApiProperty({ description: 'Jumps from a height of 30 cm and falls on tiptoes', example: 1 })
     @IsNumber()
     @IsOptional()
      jumpsFromAHeightOf30CmAndFallsOnTiptoes?: number;
 
    @ApiProperty({ description: 'Stops on one foot without support, with eyes closed for 10 seconds', example: 1 })
    @IsNumber()
   @IsOptional()
      stopsOnOneFootWithoutSupportWithEyesClosedFor10Seconds?: number;
 
     @ApiProperty({ description: 'Hangs for 10 seconds on a horizontal bar', example: 1 })
     @IsNumber()
     @IsOptional()
    hangsFor10SecondsOnAHorizontalBar?: number;
 }