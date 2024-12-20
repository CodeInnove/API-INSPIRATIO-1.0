import { Schema, Document } from 'mongoose';
import { IFunctionalIndependencyMetric } from "../features/graphics/functionalIndependencyMetrics/types/functionalIndependecyMetrics";


export const VbmappSchema = new Schema({
    // modo de usario para todos os graficos
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patient: { type: Schema.Types.ObjectId, ref: "User", },
  date1: { type: String, required: true },
  date2: { type: String, required: true },
  date3: { type: String, required: true },
  date4: { type: String, required: true },
  evaluator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  age1: { type: Number, required: true },
  age2: { type: Number, required: true },
  age3: { type: Number, required: true },
  age4: { type: Number, required: true },

  // av milestones
  levelOne: {
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    imitation: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    spontaneousVocalBehavior: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelOne: { type: Number, required: true, default: 0 },
  },

  //NÍVEL 2 (1 ano e 6 meses a 2 anos e 6 meses)
  levelTwo: {
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    imitation: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    intraverbal: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    classroomRoutineGroupSkills:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    linguisticStructure: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelTwo: { type: Number, required: true },

  },

  //NÍVEL 3 (2 anos e 6 meses a 4 anos)
  levelThree:{
    command: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    touch:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listener: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    skilsVisual:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    independentPlay: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    behaviorSocialPlay:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    listenerResponseFunctioncharacteristicClass: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    intraverbal: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    classroomRoutineGroupSkills:{
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    linguisticStructure: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    reading: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    writing: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    math: {
        question: { type: String },
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    },

    totalLevelThree: { type: Number, required: true },
  },

  //subteste ecoico
  assessmentsTable:{
    totalScore: {
        av1: { type: Number, required: true },
        av2: { type: Number, required: true },
        av3: { type: Number, required: true },
        av4: { type: Number, required: true },
    }
  },
  
  assessments1: {
    groupOne:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupTwo:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupThree:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFor:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFive:{
        prosodia:{
            name: { type: String, required: true },
            intensity: { type: String, required: true },
            duration: { type: String, required: true },
        },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },
  },

  assessments2: {
    groupOne:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupTwo:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupThree:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFor:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFive:{
        prosodia:{
            name: { type: String, required: true },
            intensity: { type: String, required: true },
            duration: { type: String, required: true },
        },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },
  },

  assessments3: {
    groupOne:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupTwo:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupThree:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFor:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFive:{
        prosodia:{
            name: { type: String, required: true },
            intensity: { type: String, required: true },
            duration: { type: String, required: true },
        },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },
  },

  assessments4: {
    groupOne:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupTwo:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupThree:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFor:{
        name: { type: String, required: true },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },

    groupFive:{
        prosodia:{
            name: { type: String, required: true },
            intensity: { type: String, required: true },
            duration: { type: String, required: true },
        },
        score: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true }
    },
  },




  //AV TAREFAS...

  levelOneTasks: {
        commandTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        touchTask:{
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        listenerTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        skilsVisualTask:{
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        independentPlayTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        behaviorSocialPlayTask:{
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        imitationTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        spontaneousVocalBehaviorTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        totalLevelOneTask: { type: Number, required: true, default: 0 },
    },

    levelTwoTasks: {
            commandTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            touchTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            listenerTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            skilsVisualTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            independentPlayTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            behaviorSocialPlayTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            imitationTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            spontaneousVocalBehaviorTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            responseFunctionsFeaturesClassTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            intraverbalTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            classroomRoutineGroupSkillsTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            linguisticStructureTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            totalScoreTask2: { type: Number },

        },

        levelThreeTask:{
            commandTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            touchTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            listenerTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            skilsVisualTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            independentPlayTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            behaviorSocialPlayTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            imitationTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            spontaneousVocalBehaviorTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            responseFunctionsFeaturesClassTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            intraverbalTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            classroomRoutineGroupSkillsTask:{
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            linguisticStructureTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },

            readingTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
            writingTask: {
                question: { type: String },
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        
        mathTask: {
            question: { type: String },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },
    },

// AV Barreiras
    avBarreiras: {
        av1:{
            barriers:{ type: String},
            score: {type: Number, default: 0},
            description: { type: String},
            total: {type: Number, default: 0}
        },

        av2:{
            barriers:{ type: String},
            score: {type: Number, default: 0},
            description: { type: String},
            total: {type: Number, default: 0}
        },

        av3:{
            barriers:{ type: String},
            score: {type: Number, default: 0},
            description: { type: String},
            total: {type: Number, default: 0}
        },

        av4:{
            barriers:{ type: String},
            score: {type: Number, default: 0},
            description: { type: String},
            total: {type: Number, default: 0}
        },
    },

    // planilha AV transição
    avTransição: {
        category:{ type: String},
        item: { type: Number},
        skills: { type: String},
        av1: { type: Number},
        av2: { type: Number},
        av3: { type: Number},
        av4: { type: Number},
        descition: { type: String},
        total: { type: Number},

        totalScore: {
            category: { type: String, required: true },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
            total: { type: Number, required: true },
        },
    },

    consolidado: {
        levelOneMilestone: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },

        levelTwoMilestone: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },
        levelThreeMilestone: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },

        levelOneTaskAnalisys: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },

        levelTwoTaskAnalisys: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },
        levelThreeTaskAnalisys: { 
            area: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
            total: { type: Number, required: true },
        },


        levelBarrierAnalysis: { 
            barrier: { type: String, required: true },
            av1: { type: Number, required: true },
            av2: { type: Number, required: true },
            av3: { type: Number, required: true },
            av4: { type: Number, required: true },
        },

        levelTransitionAnalysis: { 
            skills: { type: String, required: true },
            score:{
                av1: { type: Number, required: true },
                av2: { type: Number, required: true },
                av3: { type: Number, required: true },
                av4: { type: Number, required: true },
            },
        },
    },
});

export interface IVbmappEntity extends Omit<IFunctionalIndependencyMetric, '_id'>, Document { }