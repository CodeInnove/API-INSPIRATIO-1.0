import { Schema, Document } from 'mongoose';
import { IScaleMchat } from 'src/features/scale-mchat/types/scaleMchat';

export const ScaleMchatSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String },
    doctor: {type: Schema.Types.ObjectId, ref: "User"},
    QuestionsScaleMchat: {
        childLikesToSwing: { type: Boolean },
        hasInterestInOtherChildren: { type: Boolean },
        likesToClimbOnThings: { type: Boolean },
        likesToPlayHideAndSeek: { type: Boolean },
        hasPlayedPretend: { type: Boolean},
        hasUsedIndexFingerToPointToAskForSomething: { type: Boolean},
        hasUsedIndexFingerToPointToIndicateInterest: { type: Boolean},
        canPlayCorrectlyWithSmallToys: { type: Boolean},
        hasBroughtObjectsToYouToShowThem: { type: Boolean},
        looksAtYouInTheEyesForMoreThanASecondOrTwo: { type: Boolean},
        hasSeemedVerySensitiveToNoise: { type: Boolean},
        smilesInResponseToYourFacialExpressionsOrSmile: { type: Boolean},
        imitatesYou: { type: Boolean},
        respondsOrLooksWhenYouCallHerByName: { type: Boolean},
        doesChildFollowYourGazeWhenYouPoint: { type: Boolean},
        canWalk: { type: Boolean},
        looksAtThingsYouAreLookingAt: { type: Boolean },
        makesStrangeMovementsNearHisFace: { type: Boolean },
        triesToAttractYourAttentionToHisActivity: { type: Boolean},
        haveYouEverWonderedIfYourChildIsDeaf: { type: Boolean },
        understandsWhatPeopleSay: { type: Boolean },
        sometimesGetsSpaceyOrWalksWithoutDirection: { type: Boolean},
        looksAtYourFaceToCheckYourReactionWhenSeeingSomethingStrange: { type: Boolean}
    }

});

export interface IScaleMchatEntity extends Omit<IScaleMchat, '_id'>, Document {}