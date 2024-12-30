import { Schema } from 'mongoose';
import  { Document } from 'mongoose';
import { IAutismBehaviorChecklist } from 'src/features/autism-behavior-checklist/types/autismBehaviorChecklist';



export const AutismBehaviorChecklistEntitySchema = new Schema({
    spinsAroundForLongPeriods: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    learnsTaskButForgetsQuickly: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    rarelyRespondsNonverbalSocialStimuli: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    absenceOfResponseToVerbalRequests: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    usesToysInappropriately: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    poorUseOfVisualDiscrimination: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    absenceOfSocialSmile: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    inappropriateUseOfPronouns: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    insistsOnKeepingCertainObjects: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    seemsNotToListen: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    monotonousAndRythmLessSpeech: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    swaysForLongPeriods: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    doesNotReachToBickUp: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    strongReactionsToEnvironmentalChanges: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    lackOfAttentionToOwnName: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    runsInterruptingWithSpins: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    absenceOfResponseToFacialExpression: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    rarelyUsesYesOrI: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    possessesSkillInOneAreaOfDevelopment: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    absenceOfResponseToVerbalRequestsInvolvingSpaceReferences: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    startleReactionToLoudSound: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    wavesHands: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    intenseTantrums: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    activelyAvoidsEyeContact: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    resistsToTouchOrCarry: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    doesNotReactToPainfulStimuli: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    difficultAndRigidToCarry: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    flaccidWhenCarried: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    pointsToIndicateDesiredObject: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    walksOnTiptoes: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    hurtsOthersByBitingAndHitting: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    repeatsTheSamePhraseManyTimes: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    absenceOfImitationOfOtherChildrensPlay: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    absenceOfBlinkingReaction: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    hurtsSelfByBitingAndHittingHead: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    doesNotWaitToBeServed: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    doesNotPointToMoreThanFiveObjects: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    difficultyMakingFriends: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    coversEarsForSeveralSounds: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    spinsAndHitsObjectsManyTimes: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    difficultyToiletTraining: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    uses0To5WordsToIndicateNeeds: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    frequentlyAnxiousOrFearful: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    frownsCoversOrTurnsEyes: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    doesNotDressWithoutHelp: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    constantlyRepeatsSameWordsOrSounds: {
        es: { type: Number},
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    looksThroughPeople: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    repeatsQuestionsAndPhrasesSaidByOthers: {
        es: { type: Number},
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    frequentlyUnawareOfDangers: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    prefersToManipulateInanimateObjects: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    touchesSmellsOrLicksObjects: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    frequentlyDoesNotReactToNewPeople: {
         es: { type: Number },
        re: { type: Number},
        co: { type: Number},
        lg: { type: Number},
        ps: { type: Number},
    },
    repeatsSequencesOfComplicatedBehaviors: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    destructiveWithToysAndFamilyStuff: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    delayIdentifiedBefore30Months: {
        es: { type: Number },
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    usesMoreThan15AndLessThan30PhrasesDaily: {
       es: { type: Number},
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
    },
    staresAtTheEnvironmentForLongPeriods: {
        re: { type: Number },
        co: { type: Number },
        lg: { type: Number },
        ps: { type: Number },
        es: { type: Number },
    },
})


export interface IAutismBehaviorChecklistEntity extends Omit<IAutismBehaviorChecklist, '_id'>, Document { }