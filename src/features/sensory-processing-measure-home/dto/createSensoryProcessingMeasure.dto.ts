import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export interface ScoreHomeDto {  // Renomeei para ScoreDto para consistência
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
    @IsOptional() // Adicionado para tornar opcional
    playsWithFriends?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    interactsWithParents?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    sharesThings?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    maintainsConversation?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    maintainsEyeContact?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    joinsGames?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    participatesInMeals?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    participatesInFamilyOutings?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    participatesInFamilyGatherings?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    participatesInFriendActivities?: string;
}

class Vision {
    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByLight?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyFindingObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    closesOneEye?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByVisualStimuli?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyFollowingObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyIdentifyingObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    enjoysWatchingMovingObjects?: string;


    @ApiProperty()
    @IsString()
    @IsOptional()
    walksIntoObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    enjoysSwitchingLights?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    dislikesCertainLights?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    usesPeripheralVision?: string;
}

// Classes Hearing, Touch, SmellAndTaste, BodyAwareness, BalanceAndMovement, PlanningAndIdeation...
// (Adicione @IsOptional() a todas as propriedades string destas classes)

class Hearing {
    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByNormalSounds?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    reactsNegativelyToLoudNoises?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    seemsNotToHearCertainSounds?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    intenseInterestInUnnoticedSounds?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    scaredByUnexpectedSounds?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    distractedByBackgroundNoise?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    enjoysMakingRepetitiveNoises?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByHighPitchedSounds?: string;
}

class Touch {
    @ApiProperty()
    @IsString()
    @IsOptional()
    withdrawsFromLightTouch?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    doesNotNoticeBeingTouched?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByNewClothes?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    prefersTouchingOverBeingTouched?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByNailCutting?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    botheredByFaceTouch?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    avoidsMessyActivities?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    highPainTolerance?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    dislikesToothbrushing?: string;


    @ApiProperty()
    @IsString()
    @IsOptional()
    enjoysPainfulSensations?: string;


    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyFindingThingsByTouch?: string;
}

class SmellAndTaste {
    @ApiProperty()
    @IsString()
    @IsOptional()
    triesInedibleItems?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    gagsAtUnlikedFoods?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    enjoysSmellingObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    discomfortWithSmells?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ignoresStrongOdors?: string;
}

class BodyAwareness {
    @ApiProperty()
    @IsString()
    @IsOptional()
    gripsObjectsTooTightly?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    seeksPushingAndPulling?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    unsureOfBodyMovements?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    holdsObjectsTooLoosely?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    exertsExcessiveForce?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    jumpsFrequently?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    petsAnimalsTooHard?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    pushesOtherChildren?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    chewsObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    breaksObjectsFromForce?: string;
}

class BalanceAndMovement {
    @ApiProperty()
    @IsString()
    @IsOptional()
    exaggeratedFearOfMovement?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    goodBalance?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    avoidsBalanceActivities?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fallsFromChair?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    poorBodyControlWhenFalling?: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    doesNotGetDizzy?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    spinsBodyFrequently?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    distressedByHeadTilting?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    clumsyMotorCoordination?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fearOfElevators?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    leansOnObjects?: string;
}

class PlanningAndIdeation {
    @ApiProperty()
    @IsString()
    @IsOptional()
    inconsistentDailyTasks?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyCarryingMultipleObjects?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    confusionOrganizingMaterials?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    troubleSequentialTasks?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyCompletingMultiStepTasks?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    troubleImitatingActions?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    difficultyCopyingModels?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    troubleGeneratingActivityIdeas?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    repeatsSameActivities?: string;
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
    date: string;

    @ApiProperty()
    @IsOptional()
    comment?: string;


    @ApiProperty()
    @IsOptional()
    participationSocial?: SocialParticipation;

    @ApiProperty()
    @IsOptional()
    vision?: Vision;

    @ApiProperty()
    @IsOptional()
    hearing?: Hearing;

    @ApiProperty()
    @IsOptional()
    touch?: Touch;

    @ApiProperty()
    @IsOptional()
    smellAndTaste?: SmellAndTaste;

    @ApiProperty()
    @IsOptional()
    bodyAwareness?: BodyAwareness;

    @ApiProperty()
    @IsOptional()
    balanceAndMovement?: BalanceAndMovement;

    @ApiProperty()
    @IsOptional()
    planningAndIdeation?: PlanningAndIdeation;
    @ApiProperty()
    scoresHome?: ScoreHomeDto; // Renomeado e movido para dentro do DTO principal
}