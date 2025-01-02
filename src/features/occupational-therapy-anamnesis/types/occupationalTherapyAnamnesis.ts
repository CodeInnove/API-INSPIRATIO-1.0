export class IOccupationalTherapyAnamnesis {
    dateOfApplication: Date;
    evaluator: string;
    fullName: string;
    birthDate: Date;
    gender: 'M' | 'F';
    age: number;
    diagnoses: string;
    fatherName: string;
    motherName: string;
    contactPhone: string;
    address: string;
}

export class IGeneralObservations {
    consultationReason: string;
    mainConcernOfResponsible: string;
}

export class IClinicalHistory {
    pregnancy: 'Planejada' | 'Não planejada';
    complicationsDuringPregnancy: string;
    birth: 'Normal' | 'Cesárea';
    prematurity: 'Sim' | 'Não';
    gestationalWeeks: number;
    apgarAtBirth: number;
    neonatalHospitalization: 'Sim' | 'Não';
    hospitalizationTime: string;
    pastDiseasesOrHospitalizations: string;
}

export class INeuropsychomotorDevelopment {
    headControlMonths: number;
    sittingWithoutSupportMonths: number;
    crawlingMonths: number;
    walkingMonths: number;
    firstWordsMonths: number;
    sphincterControlYears: number;
    regressionOrLossOfSkills: string;
}

export class IActivitiesOfDailyLiving {
    feeding: 'Independente' | 'Necessita de auxílio' | 'Alimentação por sonda';
    feedingHelpDetails: string;
    aversionToCertainFoods: 'Sim' | 'Não';
    aversionFoodDetails: string;
    acceptsNewFoodsEasily: 'Sim' | 'Não';
    needsSpecificStrategiesForFeeding: 'Sim' | 'Não';
    feedingStrategies: string;
    prefersSpecificFoodConsistency: string;
    personalHygiene: 'Independente' | 'Com auxílio parcial' | 'Necessita de supervisão total';
    hygieneDetails: string;
    bathing: 'Independente' | 'Auxílio para partes específicas (especificar)' | 'Necessita de supervisão completa';
    bathSpecificDetails: string;
    dressing: 'Completa independência' | 'Dificuldade com botões, zíperes, etc' | 'Auxílio completo';
    dressingDifficultyDetails: string;
    sphincterControl: 'Total' | 'Parcial (usa fralda em determinadas situações)' | 'Necessita de fralda o tempo todo';
    specificSituationsForDiaper: string;
    inToiletTraining: 'Sim' | 'Não';
    toiletTrainingDuration: string;
    strategiesUsedByCaregiversOrSchool: string;
}

export class ISignsOfReadiness {
    signsOfReadiness: 'Percepção de xixi/cocô' | 'Desconforto com a fralda' | 'Ser capaz de apontar o que deseja' | 'Ficar seco por 2h ou mais' | 'Seguir comandos' | 'Ficar sentado de 3 a 5 minutos';
    specificDifficultiesInToiletTraining: string;
}

export class IInstrumentalActivitiesOfDailyLiving {
    participatesInSchoolOrHomeTasks: 'Sim' | 'Não';
    taskDetails: string;
}

export class ISchoolAndSocialRoutine {
    enrolledInSchool: 'Sim' | 'Não';
    educationType: 'Regular' | 'Regular com apoio' | 'Especial';
}

export class ITeacherReportedDifficulties {
    participatesInGroupRecreationalActivities: 'Sim' | 'Não';
    interactionWithOtherChildrenAndAdults: 'Busca interação' | 'Evita interação' | 'Prefere brincar sozinho';
}

export class ISensoryAndBehavioralAspects {
    sensorySensitivities: 'Tátil' | 'Auditiva' | 'Visual' | 'Olfativa' | 'Outras';
	taskDetailsSensitivities: string;
    repetitiveOrStereotypedBehaviors: 'Sim' | 'Não';
    repetitiveBehaviorsDescription: string;
    responsesToRoutineChanges: 'Boa adaptação' | 'Dificuldade significativa';
    behaviorCrises: 'Sim' | 'Não';
    crisesDetails: string;
}

export class IPlayAndLeisureAspects {
    prefersStructuredOrFreePlay:  'Estruturadas' | 'Livres';
    favoriteToysOrActivities: string;
    difficultyStartingOrMaintainingPlay: 'Sim' | 'Não';
}

export class ISupportNetworkAndPreviousTreatments {
    previousTherapies: 'Fonoaudiologia' | 'Fisioterapia' | 'Psicologia' | 'Outros';
    familyOrCaregiversInTherapies: string;
}

export class IResponsibleGeneralObservations {
    essentialObservationsForTreatmentPlanning: 'Sim' | 'Não';
    responsibleObservations: string;
}
