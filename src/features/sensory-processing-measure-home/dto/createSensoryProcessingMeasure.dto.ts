import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export interface ScoreHomeDto {
    SOC: number;
    VIS: number;
    HEA: number;
    TOU: number;
    ITEMS: number;
    BOD: number;
    BAL: number;
    PLA: number;
}

class SocialParticipation {
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

class Vision {
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

class Hearing {
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

class Touch {
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

class SmellAndTaste {
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

class BodyAwareness {
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
    holdsObjectsTooLoosely: string;

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

class BalanceAndMovement {
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
    distressedByHeadTilting: string;

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

class PlanningAndIdeation {
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


export class CreateSensoryProcessingMeasureHomeDto {
    @ApiProperty()
    @IsString()
    doctor: string;

    @ApiProperty()
    @IsString()
    responsable: string;

    @ApiProperty()
    @IsString()
    relationshipWithChild: string;

    @ApiProperty()
    @IsString()
    patient: string;

    @ApiProperty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsNumber()
    age: number;

    @ApiProperty()
    @IsString()
    birthDate: string;

    @ApiProperty()
    @IsString()
    ethnicity: string;

    @ApiProperty()
    @IsString()
    date: string;

    @ApiProperty()
    @IsOptional()
    comment?: string;


    @ApiProperty()
    @IsOptional()
    participationSocial: SocialParticipation;

    @ApiProperty()
    @IsOptional()
    vision: Vision;

    @ApiProperty()
    @IsOptional()
    hearing: Hearing;

    @ApiProperty()
    @IsOptional()
    touch: Touch;

    @ApiProperty()
    @IsOptional()
    smellAndTaste: SmellAndTaste;

    @ApiProperty()
    @IsOptional()
    bodyAwareness: BodyAwareness;

    @ApiProperty()
    @IsOptional()
    balanceAndMovement: BalanceAndMovement;

    @ApiProperty()
    @IsOptional()
    planningAndIdeation: PlanningAndIdeation;
    
    @ApiProperty()
    scoresHome: ScoreHomeDto;
}