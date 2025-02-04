import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";


export class ParticipationSocial {
    @ApiProperty()
    @IsString()
    playsWithFriends: string;

    @ApiProperty()
    @IsString()
    interactsWithParents: string;


    @ApiProperty()
    @IsString()
    sharesThings: string;

    @ApiProperty()
    @IsString()
    maintainsConversation: string;

    @ApiProperty()
    @IsString()
    maintainsEyeContact: string;

    @ApiProperty()
    @IsString()
    joinsGames: string;

    @ApiProperty()
    @IsString()
    participatesInMeals: string;

    @ApiProperty()
    @IsString()
    participatesInFamilyOutings: string;

    @ApiProperty()
    @IsString()
    participatesInFamilyGatherings: string;

    @ApiProperty()
    @IsString()
    participatesInFriendActivities: string;
}

export class Vision {
    @ApiProperty()
    @IsString()
    botheredByLight: string;

    @ApiProperty()
    @IsString()
    difficultyFindingObjects: string;

    @ApiProperty()
    @IsString()
    closesOneEye: string;

    @ApiProperty()
    @IsString()
    botheredByVisualStimuli: string;

    @ApiProperty()
    @IsString()
    difficultyFollowingObjects: string;

    @ApiProperty()
    @IsString()
    difficultyIdentifyingObjects: string;

    @ApiProperty()
    @IsString()
    enjoysWatchingMovingObjects: string;


    @ApiProperty()
    @IsString()
    walksIntoObjects: string;

    @ApiProperty()
    @IsString()
    enjoysSwitchingLights: string;

    @ApiProperty()
    @IsString()
    dislikesCertainLights: string;

    @ApiProperty()
    @IsString()
    usesPeripheralVision: string;
}

export class Hearing {
    @ApiProperty()
    @IsString()
    botheredByNormalSounds: string;

    @ApiProperty()
    @IsString()
    reactsNegativelyToLoudNoises: string;

    @ApiProperty()
    @IsString()
    seemsNotToHearCertainSounds: string;

    @ApiProperty()
    @IsString()
    intenseInterestInUnnoticedSounds: string;

    @ApiProperty()
    @IsString()
    scaredByUnexpectedSounds: string;

    @ApiProperty()
    @IsString()
    distractedByBackgroundNoise: string;

    @ApiProperty()
    @IsString()
    enjoysMakingRepetitiveNoises: string;

    @ApiProperty()
    @IsString()
    botheredByHighPitchedSounds: string;
}

export class Touch {
    @ApiProperty()
    @IsString()
    withdrawsFromLightTouch: string;

    @ApiProperty()
    @IsString()
    doesNotNoticeBeingTouched: string;

    @ApiProperty()
    @IsString()
    botheredByNewClothes: string;

    @ApiProperty()
    @IsString()
    prefersTouchingOverBeingTouched: string;

    @ApiProperty()
    @IsString()
    botheredByNailCutting: string;

    @ApiProperty()
    @IsString()
    botheredByFaceTouch: string;

    @ApiProperty()
    @IsString()
    avoidsMessyActivities: string;

    @ApiProperty()
    @IsString()
    highPainTolerance: string;

    @ApiProperty()
    @IsString()
    dislikesToothbrushing: string;


    @ApiProperty()
    @IsString()
    enjoysPainfulSensations: string;


    @ApiProperty()
    @IsString()
    difficultyFindingThingsByTouch: string;
}

export class SmellAndTaste {
    @ApiProperty()
    @IsString()
    triesInedibleItems: string;

    @ApiProperty()
    @IsString()
    gagsAtUnlikedFoods: string;

    @ApiProperty()
    @IsString()
    enjoysSmellingObjects: string;

    @ApiProperty()
    @IsString()
    discomfortWithSmells: string;

    @ApiProperty()
    @IsString()
    ignoresStrongOdors: string;
}

export class BodyAwareness {
    @ApiProperty()
    @IsString()
    gripsObjectsTooTightly: string;

    @ApiProperty()
    @IsString()
    seeksPushingAndPulling: string;

    @ApiProperty()
    @IsString()
    unsureOfBodyMovements: string;

    @ApiProperty()
    @IsString()
    gripsObjectsTooLoosely: string;

    @ApiProperty()
    @IsString()
    exertsExcessiveForce: string;

    @ApiProperty()
    @IsString()
    jumpsFrequently: string;

    @ApiProperty()
    @IsString()
    petsAnimalsTooHard: string;

    @ApiProperty()
    @IsString()
    pushesOtherChildren: string;

    @ApiProperty()
    @IsString()
    chewsObjects: string;

    @ApiProperty()
    @IsString()
    breaksObjectsFromForce: string;
}

export class BalanceAndMovement {
    @ApiProperty()
    @IsString()
    exaggeratedFearOfMovement: string;

    @ApiProperty()
    @IsString()
    goodBalance: string;

    @ApiProperty()
    @IsString()
    avoidsBalanceActivities: string;

    @ApiProperty()
    @IsString()
    fallsFromChair: string;

    @ApiProperty()
    @IsString()
    poorBodyControlWhenFalling: string;
    @ApiProperty()
    @IsString()
    doesNotGetDizzy: string;

    @ApiProperty()
    @IsString()
    spinsBodyFrequently: string;

    @ApiProperty()
    @IsString()
    botheredByHeadPositionChanges: string;

    @ApiProperty()
    @IsString()
    clumsyMotorCoordination: string;

    @ApiProperty()
    @IsString()
    fearOfElevators: string;

    @ApiProperty()
    @IsString()
    leansOnObjects: string;
}

export class PlanningAndIdeation {
    @ApiProperty()
    @IsString()
    inconsistentDailyTasks: string;

    @ApiProperty()
    @IsString()
    difficultyCarryingMultipleObjects: string;

    @ApiProperty()
    @IsString()
    confusionOrganizingMaterials: string;

    @ApiProperty()
    @IsString()
    troubleSequentialTasks: string;

    @ApiProperty()
    @IsString()
    difficultyCompletingMultiStepTasks: string;

    @ApiProperty()
    @IsString()
    troubleImitatingActions: string;

    @ApiProperty()
    @IsString()
    difficultyCopyingModels: string;

    @ApiProperty()
    @IsString()
    troubleGeneratingActivityIdeas: string;

    @ApiProperty()
    @IsString()
    repeatsSameActivities: string;
}


export class CreateSensoryProcessingMeasureDto {
    @ApiProperty()
    @IsString()
    doctor: string;
    
    @ApiProperty()
    @IsString()
    //responsable: string;

    @ApiProperty()
    @IsString()
    //relationshipWithChild: string;

    @ApiProperty()
    @IsString()
    patient: string;

    @ApiProperty()
    @IsString()
    //gender: string;

    @ApiProperty()
    //age: number;

    @ApiProperty()
    //bitrhDate: string;

    @ApiProperty()
    //ethnicity: string;

    @ApiProperty()
    date: string;


    @ApiProperty()
    participationSocial: ParticipationSocial;

    @ApiProperty()
    vision: Vision;

    @ApiProperty()
    hearing: Hearing

    @ApiProperty()
    touch: Touch

    @ApiProperty()
    smellAndTaste:SmellAndTaste

    @ApiProperty()
    bodyAwareness: BodyAwareness

    @ApiProperty()
    balanceAndMovement:BalanceAndMovement

    @ApiProperty()
    planningAndIdeation:PlanningAndIdeation

}
