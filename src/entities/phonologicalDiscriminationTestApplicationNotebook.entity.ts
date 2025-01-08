import { Schema, Document } from 'mongoose';
import { PhonologicalDiscriminationTestApplicationNotebook } from 'src/features/phonological-discrimination-test-application-notebook/entities/phonologicalDiscriminationTestApplicationNotebook'; 

export const PhonologicalDiscriminationTestApplicationNotebookSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  dateOfApplication: { type: String },
  doctor: {type: Schema.Types.ObjectId, ref: "User"},
  
  QuestionsPhonologicalDiscriminationTestApplicationNotebook:{
    question1: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question2: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question3: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question4: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question5: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question6: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question7: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question8: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question9: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question10: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question11: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question12: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question13: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question14: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question15: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question16: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question17: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question18: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question19: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question20: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question21: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question22: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },

    question23: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
      score: {type: Number}
    },
},

});

export interface IPhonologicalDiscriminationTestApplicationNotebookEntity extends Omit<PhonologicalDiscriminationTestApplicationNotebook, '_id'>, Document {}
