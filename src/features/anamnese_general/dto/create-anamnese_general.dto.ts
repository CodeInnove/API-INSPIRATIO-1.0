import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Address } from 'src/types/Address';
import { Responsible } from 'src/types/responsible';
import { Roles, UserTypes } from 'src/types/Roles';

export class CreateGeneralAnamneseDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsArray()
    patient: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    dateBirth: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    age: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    maritalStatus: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sex: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    naturalization: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schoolName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schoolPeriod: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    @IsArray()
    responsible: Responsible[]
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    forwarded: string;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    dateAnamnese: string;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    professional: string;

}

export class AffiliationDto extends CreateGeneralAnamneseDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    fatherName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ageFather: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fatherProfession: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schooling: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    motherName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ageMother: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    motherProfession: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    schoolingMother: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    brotherName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    brotherAge: Number;

    @ApiProperty()
    @IsString()
    address: Address[];

}

export class complaintAndDuration{
    @ApiProperty()
    @IsOptional()
    @IsString()
    empty: string;
}


export class constitutional{
    @ApiProperty()
    @IsOptional()
    @IsString()
    gestation: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    childbirth: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    complications: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    useMedications: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    medicalAdvice: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    which: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    prenatal: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    why: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    problems: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whichProblem: string;
}


export class circumtantial{ 

    @ApiProperty()
    @IsOptional()
    @IsString()
    hoursWorkParents: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    responsibleChild: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    weeklyRoutine: string;
}

// development - olhar na entidade para entender
// fisico 
export class semanticsDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    sleep: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    illness: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    HearingInfection: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    vision: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    allergy: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Surgery: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hospitalization: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    medication: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    breastfed: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    lookedAtMotherWhileBreastfeeding: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatDoYouEatNow: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    didyouChokeEasily: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    gastroesophagealReflux: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    didYouUseaBottle: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenDidYouStartUsingIt: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenDidYouSwitchFromLiquidToPastyFoods: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    softFoodsToSolids: string;

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
    seizures: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    otherProblema: string;
} 


export class motorDto{

    @ApiProperty()
    @IsOptional()
    @IsString()
    supportedHead: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    satWithSupport: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    WithoutSupport: string;

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
    dayTimeSphincterControl: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Nighttime: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fallsALot: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    didHeBumpIntoEverything: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    speechbBabble: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    when: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    heWasAquietBaby: string;
}


export class neurovegetativeFunctionsDto{

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
    isItNoisy: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    effort: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    leftRightHanded: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    didYouUse: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    untilWhen: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    otherHabits: string;
}

export class IdeomotorDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    bathAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    eatAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sinceWhen: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whatUse: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    withWhichHand: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    playBall: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    jumpRope: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    brushTeethAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    dressHimself: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    putOnHisShoes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    tieHisSneakers: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    zipThemUp: string;
}

export class IdeatoryDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    ownInitiative: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    showDesires: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    whenYouAreAlone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    solveProblems: string;
}


// socio cultural 

export class interactiveDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithParents: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithAdults: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    relationshipWithChildren: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bestFriends: string;
}

export class IntegrativeDto{
    @ApiProperty()
    @IsOptional()
    @IsString()
    theyLike: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    pressuredSpeckCorrectly: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    familySpeechDifficulties: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    difficultyUnderstanding: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    eyeContact: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    biteChildrenAggressive: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    initiativeCommunication: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    maintainDialogue: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    contactWithThingsLike: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    dontLike: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    wellSchool: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    startSchool: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    adaptWell: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    howBehave: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    respondYourName: string;
}

export class importantObservationsDto{
    @ApiProperty()
    @IsOptional()
    @IsString()
    importantObservations: string;
}