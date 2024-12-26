import { Schema, Document } from 'mongoose';
import { IPhonologicalDiscriminationTestApplicationNotebook } from 'src/features/phonological-discrimination-test-application-notebook/entities/phonologicalDiscriminationTestApplicationNotebook';

export const PhonologicalDiscriminationTestApplicationNotebookSchema = new Schema({
  identification: {
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    evaluator: {type: Schema.Types.ObjectId, ref: "User"}
    },
  
  QuestionsPhonologicalDiscriminationTestApplicationNotebook:{
    question1: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question2: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question3: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question4: {
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question5: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question6: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question7: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question8: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question9: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question10: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question11: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question12: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question13: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question14: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question15: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question16: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question17: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question18: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question19: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question20: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question21: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question22: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },

    question23: {    
      optionFigure1:{type: String},
      optionFigure2:{type: String},
    },
},
  
    resultsFigure1: { type: Number, default: 0 },
    resultsFigure2: { type: Number, default: 0 }

});

export interface IPhonologicalDiscriminationTestApplicationNotebookEntity extends Omit<IPhonologicalDiscriminationTestApplicationNotebook, '_id'>, Document {}