import { Schema, Document } from 'mongoose';
import { ISpmpSchool } from 'src/features/sensory-processing-measure-preschool-Home/types/sensoryProcessingMeasurePreschool';


export const SensoryProcessingMeasurePreschoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  responsable: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  relationshipWithChild: { type: String, required: false},
  date: { type: String, required: true, },
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  gender: { type: String, required: false, enum: ['M', 'F'] },
  age: { type: Number, required: false},
  birthDate: { type: String, required: false},
  comment: { type: String, required: false },
  participationSocialPreSchool: { 
    playsWithFriendsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    sharesThingsPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    participatesInGroupGamesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    participatesAtMealsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    participatesInFamilyOutingsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    participatesInFamilyMeetingsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    participatesWithFriendsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    helpsWithFamilyActivitiesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  visionPreSchool: { 
    botheredByBrightLightsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyFindingObjectsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyRecognizingObjectsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    likesWatchingMovingObjectsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    walksThroughObjectsPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    likesSwitchingLightsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    likesLookingAtMovingObjectsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyPayingAttentionPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    botheredByVisualStimuliPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    distractedWhileWalkingPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyCompletingTasksPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
   },
  hearingPreSchool: {
    botheredByNormalSoundsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    reactsNegativelyToLoudNoisesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    seemsNotToHearPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    overlySensitiveToSoundsPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    easilyDistractedByNoisesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    likesMakingCertainSoundsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    distressedBySharpNoisesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    distressedInLoudPlacesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    startledByLoudSoundsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  touchPreSchool: {
    avoidsBeingTouchedPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    prefersTouchingOthersPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    distressedByNailCuttingPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    botheredByFaceTouchPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    avoidsMessyActivitiesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    highPainTolerancePreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    dislikesBrushingTeethPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    enjoysPainfulSensationsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    dislikesHairCarePreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    dislikesHaircutsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    avoidsCertainTexturesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    vomitsDueToTexturesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    dislikesFaceCleaningPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    droolsExcessivelyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  smellAndTastePreSchool: { 
    eatsNonFoodItemsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    ignoresStrongOdorsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    prefersCertainFlavorsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    refusesToothpastePreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  bodyAwarenessPreSchool: { 
    holdsObjectsTooTightlyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    seeksPushPullActivitiesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    insecureDuringMovementPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    holdsObjectsTooLooselyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    excessivePressurePreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    jumpsExcessivelyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    roughWithAnimalsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    pushesOthersPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    chewsObjectsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  balanceAndMovementPreSchool: { 
    overlyAfraidOfMovementPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    avoidsBalanceActivitiesPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    fallsFromChairPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    failsToCatchSelfWhenFallingPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    doesntGetDizzyPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    spinsExcessivelyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    distressedByHeadTiltingPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    poorCoordinationPreSchool:{ type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    needsSupportToRisePreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    rocksBodyPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    afraidOfStairsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
  planningAndIdeationPreSchool: { 
    difficultyCarryingMultipleItemsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyOrganizingItemsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    confusedByRoutineStepsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyCompletingMultiStepTasksPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    troubleImitatingActionsPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    cantCopyOthersPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    difficultyWithNewIdeasPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    repetitiveInPlayPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
    troubleExitingCarSeatPreSchool: { type: String, required: false, enum: ['N', 'O', 'F', 'S']},
  },
   scores: {
        SOC: { type: Number, default: 0 },
        VIS: { type: Number, default: 0 },
        HEA: { type: Number, default: 0 },
        TOU: { type: Number, default: 0 },
        ITEMS: { type: Number, default: 0 },
        BOD: { type: Number, default: 0 },
        BAL: { type: Number, default: 0 },
        PLA: { type: Number, default: 0 },
    },
}, { timestamps: true, versionKey: false });

export interface ISensoryProcessingMeasurePreschoolEntity extends Omit<ISpmpSchool, '_id'>, Document {} 