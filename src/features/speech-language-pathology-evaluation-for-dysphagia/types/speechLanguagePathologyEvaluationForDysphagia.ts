export class ISpeechLanguagePathologyEvaluationForDysphagia{
    nameParentOrId: string;
    relationshipWithChild: string;
    date: Date;
    nameOrId: string;
    gender: 'M' | 'F';
    age: number;
}

export class IInitialPatientEvaluationSlpefd{
    levelOfConsciousness: 'Acordado' | 'Sonolento' | 'Cooperativo' | 'Não-cooperativo';
    language: 'Verbal' | 'Não-verbal' | 'Alteração na fala';
    describeTheImpairment:string;
    comprehension: 'Preservada' | 'Comprometida';
    respiratoryStatus: 'Ar Ambiente' | 'VM (Ventilação Mecânica)' | 'CN (Cateter Nasal)' | 'MV (Máscara de Venturi)' | 'Hood';
    tracheostomy: 'Cuff Insuflado' | 'Cuff Desinsuflado' | 'Metálico';
    secretion: 'Hiper-secretivo' | 'Hipo-secretivo' | 'Não-secretivo';
    currentFeeding: 'Via Oral Plena Sem Restrição de Consistências' | 'Via Oral Plena Com Restrição de Consistências' | 'Via Alternativa de Alimentação' | 'Mista (Via Oral + Via Alternativa)' | 'Dieta Zero';
    describeTheAlternative: string;
}

export class IEvaluationOfArticulatoryOrgansSlpefd{
    intraoralSensitivity: 'Normal' | 'Aumentada' | 'Diminuída';
    facialAsymmetry: 'Presente' | 'Ausente';
    extraoralSensitivity: 'Normal' | 'Aumentada' | 'Diminuída';
    lips: 'Normal' | 'Fechados' | 'Aberto' | 'Assimetria';
    cheeks: 'Normal' | 'Flacidez' | 'Aumentada';
    tongue: 'Normal' | 'Alargada' | 'Malformação';
    tongueMobility: 'Normal' | 'Reduzida' | 'Aumentada';
    ObservationOfTheArticulatoryOrgansEvaluation: string;
}
    
export class IFunctionalSwallowingEvaluationSlpefd{
    bolusIntake: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    bolusIntakeVolume: string;
    lipSeal: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    lipSealVolume: string;
    oralEscapeOfFood: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    oralFoodVolume: string;
    bolusPreparationChange: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    bolusPreparationVolume: string;
    bolusPropulsion: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    bolusPropulsionVolume: string;
    oralCavityResidues: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    oralCavityVolume: string; 
    increasedOralTransit: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    increasedOralVolume: string;
    nasalRegurgitation: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    nasalVolume: string;
    odynophagia: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    odynophagiaVolume: string;
    swallowingReflexAlteration: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    swallowingReflexVolume: string;
    laryngealMobilityAlteration: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    laryngealMobilityVolume: string;
    multipleSwallows: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    multipleSwallowsVolume: string;
    cough: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    coughVolume: string;
    throatClearingOurNeedForLaryngealCleaning: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    laryngealCleaningVolume: string;
    choking: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    chokingVolume: string;
    weakOrIneffectiveCough: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    weakCoughVolume: string;
    voiceAlterationAfterSwallowing: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    voiceVolume: string;
    respiratoryAlteration: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    respiratoryVolume: string;
    cervicalAuscultationAlteration: 'Líquido 5 mL' | 'Líquido 10 mL' | 'Líquido 30 mL' | 'Líquido Espessado 5 mL' | 'Líquido Espessado 10 mL' | 'Líquido Espessado 30 mL' | 'Pastoso' | 'Sólido'
    cervicalAuscultationVolume: string;
}


export class IPatientEvaluationWithTracheostomyAndUseOfColoredDietSlpefd{
    TCA: '+' | '-' | 'Não se Aplica'
    TCAM: '+' | '-' | 'Não se Aplica'
}

export class IResultsSlpefd{
    result: 'Deglutição Normal' | 'Deglutição Funcional'
    dysphagia: 'Leve' | 'Moderada' | 'Moderada a Grave' | 'Grave'
}
    
export class IConductSlpefd{
    conducts: 'Via Oral Volume Pleno' | 'Líquido' | 'Líquido Espessado' | 'Pastoso'| 'Sólido' | 'Via Oral + Via Alternativa de Alimentação' | 'Dieta Via Oral Apenas Orientada Pelo Fonoaudiólogo' | 'Via Oral Suspensa' | 'Sugestão de Via Alternativa de Alimentação'| 'Fonoterapia'
    describeAlternativeFeedingVolumeInMl: string;
    suggestedConsistency: 'Líquida' | 'Líquida Espessada' | 'Pastosa' | 'Sólida'
    suggestedInstrumentalSwallowingExamination: string;
}
    
export class IObservationsSlpefd{
    observation: string;
}