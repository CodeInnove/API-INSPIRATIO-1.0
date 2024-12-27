import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
 
    
export class SomaticDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    sleep: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    disease: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hearingEarInfection: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    vision: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    allergies: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    surgeriesAndDates: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hospitalizations: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    medication: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    breastfed: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    untilWhen: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    lookedAtMotherBreastfeeding: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatEatsNow: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    chokedEasily: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    gastroesophagealReflux: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    usedBottle: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenStartedUsingBottle: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    forHowLongUsedBottle: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenChangedFromLiquidToPastyFoods: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    pastyToSolidFoods: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fever: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fainting: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    convulsions: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    otherProblems: string;
}


export class MotorDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    heldHeadUp: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    satWithSupport: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    satWithoutSupport: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    crawled: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    walked: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    diurnalSphincterControl: string; 

    @ApiProperty()
    @IsOptional()
    @IsString()
    nocturnalSphincterControl: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fellALot: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bumpedIntoThings: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    speechBabblingWhen: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    quietBaby: string;
}

export class NeurovegetativeFunctionsDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    suction: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    chewing: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    swallowing: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    breathing: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    presentsNoise: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    effort: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    leftOrRightHanded: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    usedPacifierBottleFinger: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    untilWhenUsed: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    otherHabits: string;
}

export class IdeomotorDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    bathesAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    eatsAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sinceWhenEatsAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoesItUse: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whichHandEatsWith: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    playsBall: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    jumpsRope: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    brushesTeethAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    dressesAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    putsOnShoes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    tiesShoes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    closesZipper: string;
}

export class  IdeatoryDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    hasOwnInitiative: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    demonstratesWishes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoesWhenAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    howSolvesProblems: string;
}
