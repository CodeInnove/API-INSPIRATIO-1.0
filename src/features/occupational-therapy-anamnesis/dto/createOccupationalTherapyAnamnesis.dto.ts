import { ApiProperty } from "@nestjs/swagger";

export class CreateOccupationalTherapyAnamnesisDto {
    @ApiProperty()
    dateOfApplication: Date;

    @ApiProperty()
    doctor: string;

    @ApiProperty()
    patient: string;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty()
    gender: string

    @ApiProperty()
    age: number;

    @ApiProperty()
    diagnoses: string;

    @ApiProperty()
    fatherName: string;

    @ApiProperty()
    motherName: string;

    @ApiProperty()
    contactPhone: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    consultationReason: string;
    @ApiProperty()
    mainConcernOfResponsible: string;



    @ApiProperty()
    pregnancy: string;
    @ApiProperty()
    complicationsDuringPregnancy: string;
    @ApiProperty()
    birth: string;
    @ApiProperty()
    prematurity: string;
    @ApiProperty()
    gestationalWeeks: number;
    @ApiProperty()
    apgarAtBirth: number;
    @ApiProperty()
    neonatalHospitalization: string;
    @ApiProperty()
    hospitalizationTime: string;
    @ApiProperty()
    pastDiseasesOrHospitalizations: string;



    @ApiProperty()
    headControlMonths: number;
    @ApiProperty()
    sittingWithoutSupportMonths: number;
    @ApiProperty()
    crawlingMonths: number;
    @ApiProperty()
    walkingMonths: number;
    @ApiProperty()
    firstWordsMonths: number;
    @ApiProperty()
    sphincterControlYears: number;
    @ApiProperty()
    regressionOrLossOfSkills: string;



    @ApiProperty()
    feeding: string;
    @ApiProperty()
    feedingHelpDetails: string;
    @ApiProperty()
    aversionToCertainFoods: string;
    @ApiProperty()
    aversionFoodDetails: string;
    @ApiProperty()
    acceptsNewFoodsEasily: string;
    @ApiProperty()
    needsSpecificStrategiesForFeeding: string;
    @ApiProperty()
    feedingStrategies: string;
    @ApiProperty()
    prefersSpecificFoodConsistency: string;
    @ApiProperty()
    personalHygiene: string;
    @ApiProperty()
    hygieneDetails: string;
    @ApiProperty()
    bathing: string;
    @ApiProperty()
    bathSpecificDetails: string;
    @ApiProperty()
    dressing: string;
    @ApiProperty()
    dressingDifficultyDetails: string;
    @ApiProperty()
    sphincterControl: string;
    @ApiProperty()
    specificSituationsForDiaper: string;
    @ApiProperty()
    inToiletTraining: string;
    @ApiProperty()
    toiletTrainingDuration: string;
    @ApiProperty()
    strategiesUsedByCaregiversOrSchool: string;
    



    @ApiProperty()
    signsOfReadiness: string;
    @ApiProperty()
    specificDifficultiesInToiletTraining: string;



    @ApiProperty()
    participatesInSchoolOrHomeTasks:string;
    @ApiProperty()
    taskDetails: string;



    @ApiProperty()
    enrolledInSchool: string;
    @ApiProperty()
    educationType: string;


    @ApiProperty()
    participatesInGroupRecreationalActivities: string;
    @ApiProperty()
    interactionWithOtherChildrenAndAdults: string;



    @ApiProperty()
    sensorySensitivities: string;
    @ApiProperty()
	taskDetailsSensitivities: string;
    @ApiProperty()
    repetitiveOrStereotypedBehaviors: string;
    @ApiProperty()
    repetitiveBehaviorsDescription: string;
    @ApiProperty()
    responsesToRoutineChanges: string;
    @ApiProperty()
    behaviorCrises: string;
    @ApiProperty()
    crisesDetails: string;


    @ApiProperty()
    prefersStructuredOrFreePlay:  string;
    @ApiProperty()
    favoriteToysOrActivities: string;
    @ApiProperty()
    difficultyStartingOrMaintainingPlay: string;




    @ApiProperty()
    previousTherapies: string;
    @ApiProperty()
    familyOrCaregiversInTherapies: string;


    @ApiProperty()
    essentialObservationsForTreatmentPlanning: string;
    @ApiProperty()
    responsibleObservations: string;
}
