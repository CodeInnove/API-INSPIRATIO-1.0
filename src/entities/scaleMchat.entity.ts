import { Schema, Document } from 'mongoose';
import { IScaleMchat } from 'src/features/scale-mchat/types/scaleMchat';

export const ScaleMchatSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    evaluator: {type: Schema.Types.ObjectId, ref: "User"},
    childLikesToSwing: { type: Boolean, required: true },
    hasInterestInOtherChildren: { type: Boolean, required: true },
    likesToClimbOnThings: { type: Boolean, required: true },
    likesToPlayHideAndSeek: { type: Boolean, required: true },
    hasPlayedPretend: { type: Boolean, required: true },
    hasUsedIndexFingerToPointToAskForSomething: { type: Boolean, required: true },
    hasUsedIndexFingerToPointToIndicateInterest: { type: Boolean, required: true },
    canPlayCorrectlyWithSmallToys: { type: Boolean, required: true },
    hasBroughtObjectsToYouToShowThem: { type: Boolean, required: true },
    looksAtYouInTheEyesForMoreThanASecondOrTwo: { type: Boolean, required: true },
    hasSeemedVerySensitiveToNoise: { type: Boolean, required: true },
    smilesInResponseToYourFacialExpressionsOrSmile: { type: Boolean, required: true },
    imitatesYou: { type: Boolean, required: true },
    respondsOrLooksWhenYouCallHerByName: { type: Boolean, required: true },
    doesChildFollowYourGazeWhenYouPoint: { type: Boolean, required: true },
    canWalk: { type: Boolean, required: true },
    looksAtThingsYouAreLookingAt: { type: Boolean, required: true },
    makesStrangeMovementsNearHisFace: { type: Boolean, required: true },
    triesToAttractYourAttentionToHisActivity: { type: Boolean, required: true },
    haveYouEverWonderedIfYourChildIsDeaf: { type: Boolean, required: true },
    understandsWhatPeopleSay: { type: Boolean, required: true },
    sometimesGetsSpaceyOrWalksWithoutDirection: { type: Boolean, required: true },
    looksAtYourFaceToCheckYourReactionWhenSeeingSomethingStrange: { type: Boolean, required: true }

    

});

export interface IScaleMchatEntity extends Omit<IScaleMchat, '_id'>, Document {}