import { Schema, Document } from 'mongoose';
import { IMchatR } from 'src/features/graphics/mchat-r/types/mchat-r.types';

export const mchatRSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  patient: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  evaluator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  date: { type: String, required: true },
  dateBirth: { type: String, required: true },
  calcAge: { 
    year: { type: Number, default: 0 },
    month: { type: Number },
  },

  area: {
    selfManagement: { 
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    basicComunnication: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    clothing: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    usingBathroom: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    hygiene: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    bathing: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    healthSafetyFirstAid: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
    nightRoutine: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
    },
  },

  selfManagement: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
       
    },
    
      total: { type: Number, required: true, default: 0 },
  },


  basicCommunication: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
       
    },

      total: { type: Number, required: true, default: 0 },
  },


// 
  clothing: {
    question1: {  
        tasks: { type: String, required: true },
        score: { type: Number, required: true , default: 0 },   
      }, 
      
    total: { type: Number, required: true, default: 0 },
  },

/////////////////////////////////////////////////////////////////////////////////

  usingBathroom: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
           
    },

      total: { type: Number, required: true, default: 0 },
  },

      ///////////////////////////////////////////////////


  hygiene: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
  },
        
  healthSafetyFirstAid: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },  
  },


  area2: {
    basicModality: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    knowledgeCommunity: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    shopping: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    eatingInPublic: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    money: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    time: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    socialAwarenessGoodManners: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
  },

  basicModality:{
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  knowledgeCommunity: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  shopping: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  eatingInPublic: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  money: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  time: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  socialAwarenessGoodManners: {
    question1: {
      tasks: { type: String, required: true },
      score: { type: Number, required: true , default: 0 },
    },
    total: { type: Number, required: true, default: 0 },
  },

  area3: {
    mealsAtHome: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    }, 

    dishware: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    clothingLaundry: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    cleaningTask: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    householdFunctions: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    leisure: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    kitchen: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    cooking: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
  },

  mealsAtHome: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  dishware:{
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  clothingLaundry: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  cleaningTask:{
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  householdFunctions: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  leisure:{
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  kitchen: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  cooking: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  area4: {
    classroomMechanics:{
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    schoolFood: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    routineAndExpectations: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    socialSkills:{
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    technology:{
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    commonKnowledge: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    academicCore: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    academicApplication:{
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    }
  },
///////////                                                 
  classroomMechanics: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  schoolFood: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  routineAndExpectations: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  socialSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },


  technology: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  commonKnowledge: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  academicCore: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  academicApplication: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
//////                                               
  area5:{
    jobSearch: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    interview: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    basicSkills: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },

    collegeRelations: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    workplaceSafety: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    repairSkills: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    careAndCleaning: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    laundry: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    retail: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    personalSupport: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    officeActivities: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    computerSkills: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    restaurantSkills: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    kitchenSkills: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    warehouse: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    tools: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    tradesAndConstruction: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    gardening: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
  },

  jobSearch: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  interview: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  basicSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  collegeRelations: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  workplaceSafety: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  repairSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  careAndCleaning: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  laundry: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  retail: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  personalSupport: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  officeActivities: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  computerSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  restaurantSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  kitchenSkills: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  warehouse: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  tools: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  tradesAndConstruction: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  gardening: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

//////                                                  

  area6: {
    organization: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    personalcCare: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    maintenanceAndCleaning: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    mechanicsAndRepairs: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    communityTravel: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    transportation: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    kitchenAppliances: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    foodPlanning: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    managingMoney: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    personalManagement: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    safety: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    problemSolving: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    socialInteraction: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    livingOthers: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
    interpersonalRelationships: {
      TotalScore: { type: Number, default: 0 },
      hits: { type: Number, default: 0 },
    },
  },


  organization: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  personalcCare: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  maintenanceAndCleaning: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  mechanicsAndRepairs: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  communityTravel: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  transportation: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  kitchenAppliances: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  foodPlanning: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  managingMoney: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  personalManagement: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  safety: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  problemSolving: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  socialInteraction: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  livingOthers: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },
  interpersonalRelationship: {
    tasks: { type: String, required: true },
    score: { type: Number, required: true },
  },

  //////                                                      


  totalGraphic:{
    name: { type: Schema.Types.ObjectId, ref: 'User' },
    age: { type: Number },
    date: { type: Date },
    evaluator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },

  ability:{
    basicLife:{
        area1:{
          selfManagement: { 
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        basicComunnication: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        clothing: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        usingBathroom: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        hygiene: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        bathing: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        healthSafetyFirstAid: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
        nightRoutine: {
            TotalScore: { type: Number, default: 0 },
            hits: { type: Number, default: 0 },
        },
      },
      total:{ type: Number, default: 0 },
    },

    communityParticipation:{
      area2:{
        basicModality: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        knowledgeCommunity: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        shopping: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        eatingInPublic: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        money: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        time: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        socialAwarenessGoodManners: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        total: { type: Number, default: 0 },
      },
      total:{ type: Number, default: 0 },
    },

    domesticLife:{
      area3:{
        mealsAtHome: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        }, 
    
        dishware: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        clothingLaundry: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        cleaningTask: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        householdFunctions: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        leisure: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        kitchen: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        cooking: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
      },

      total:{ type: Number, default: 0 },
    },

    schools:{
      area4:{
        classroomMechanics:{
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        schoolFood: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        routineAndExpectations: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        socialSkills:{
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        technology:{
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        commonKnowledge: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        academicCore: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
    
        academicApplication:{
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        }
      },
      total:{ type: Number, default: 0 },
    },

    vocational:{
      jobSearch: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
  
      interview: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
  
      basicSkills: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
  
      collegeRelations: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      workplaceSafety: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      repairSkills: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      careAndCleaning: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      laundry: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      retail: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      personalSupport: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      officeActivities: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      computerSkills: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      restaurantSkills: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      kitchenSkills: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      warehouse: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      tools: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      tradesAndConstruction: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },
      gardening: {
        TotalScore: { type: Number, default: 0 },
        hits: { type: Number, default: 0 },
      },

      total:{ type: Number, default: 0 },
    },

    independencyLife:{
      area6:{
        organization: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        personalcCare: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        maintenanceAndCleaning: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        mechanicsAndRepairs: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        communityTravel: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        transportation: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        kitchenAppliances: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        foodPlanning: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        managingMoney: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        personalManagement: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        safety: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        problemSolving: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        socialInteraction: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        livingOthers: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        interpersonalRelationships: {
          TotalScore: { type: Number, default: 0 },
          hits: { type: Number, default: 0 },
        },
        total:{ type: Number, default: 0 },
      }

      // faltou total de tudo...
    }
  }
});

export interface IMchatREntity extends Omit<IMchatR, '_id'>, Document { }