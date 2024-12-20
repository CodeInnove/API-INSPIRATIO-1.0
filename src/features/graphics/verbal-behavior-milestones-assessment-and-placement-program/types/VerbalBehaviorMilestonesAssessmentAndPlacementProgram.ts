
export interface ILevelOne{
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
}

export interface ILevelTwo{
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    imitation: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
    intraVerbal: IRepetFunctions;
    classroomRoutineGroupSkills: IRepetFunctions;
    linguisticStructure: IRepetFunctions;
}

export interface ILevelThree{
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
    intraVerbal: IRepetFunctions;
    classroomRoutineGroupSkills: IRepetFunctions;
    linguisticStructure: IRepetFunctions;
    reading: IRepetFunctions;
    weriting: IRepetFunctions;
    math: IRepetFunctions;
}

export interface Iprosodia{
    name: string;
    intensity: string;
    duration: string;
}  

export interface IAssessments{
    groupOne: {
        name: string;
        score: number;
        total: number;
    }

    groupTwo: {
        name: string;
        score: number;
        total: number;
    }

    groupThree: {
        name: string;
        score: number;
        total: number;
    }

    groupFor: {
        name: string;
        score: number;
        total: number;
    }

    groupFive: {
        prosodia: Iprosodia;
        score: number;
        total: number;
    }
}

export interface ILevelTask {
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
}

export interface ILevelTaskTwo {
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    imitation: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
    intraVerbal: IRepetFunctions;
    classroomRoutineGroupSkills: IRepetFunctions;
    linguisticStructure: IRepetFunctions;
}

export interface ILevelTaskThree {
    comand: IRepetFunctions;
    touch: IRepetFunctions;
    listener: IRepetFunctions;
    skilsVisual: IRepetFunctions;
    independentPlay: IRepetFunctions;
    behaviorSocialPlay: IRepetFunctions;
    spontaneousVocalBehavior: IRepetFunctions;
    intraVerbal: IRepetFunctions;
    classroomRoutineGroupSkills: IRepetFunctions;
    linguisticStructure: IRepetFunctions;
    reading: IRepetFunctions;
    weriting: IRepetFunctions;
    math: IRepetFunctions;
}

export interface IAvaliations{ 
    av1: {
        barriers: string;
        score : number;
        description: string;
        total: number;
    }

    av2: {
        barriers: string;
        score : number;
        description: string;
        total: number;
    }

    av3: {
        barriers: string;
        score : number;
        description: string;
        total: number;
    }

    av4: {
        barriers: string;
        score : number;
        description: string;
        total: number;
    }

}

export interface IAvtransition {
    category: string;
    item: number;
    skills: string;
    av1: IAvaliations;
    av2: IAvaliations;
    av3: IAvaliations;
    av4: IAvaliations;
    total: number;
}
export interface ITotalscore {
    category: IAvtransition;
    av1: IAvaliations;
    av2: IAvaliations;
    av3: IAvaliations;
    av4: IAvaliations;
    total: IAvaliations;
}

export interface IConsolidado{
    LevelOne: ILevelOne;
    LevelTwo: ILevelTwo;
    LevelThree: ILevelThree;
}

export interface ILevelOneTaskAnalisys {
    area: string;
    score: IRepetFunctions;
    total: number;
}

export interface ILevelTwoTaskAnalisys {
    area: string;
    score: IRepetFunctions;
    total: number;
}

export interface ILevelThreeTaskAnalisys {
    area: string;
    score: IRepetFunctions;
    total: number;
}

export interface IBarrierAnalisys {
    barriers: string;
    av1: IRepetFunctions;
    av2: IRepetFunctions;
    av3: IRepetFunctions;
    av4: IRepetFunctions;
}

export interface ILevelTransitionAnalisys {
    skills: string;
    score: IRepetFunctions;
    total: number;
}

export interface IRepetFunctions{
    question: string;
    av1: number;
    av2: number;
    av3: number;
    av4: number;
}


