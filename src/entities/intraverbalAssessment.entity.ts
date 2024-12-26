import { Schema, Document } from 'mongoose';
import { IIntraverbalAssessment } from 'src/features/intraverbal-assessment/types/intraverbalAssessment';

export const IntraverbalAssessmentSchema = new Schema({
  identification: {
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    evaluator: {type: Schema.Types.ObjectId, ref: "User"}
    },
  
  groupAnimalSoundsAndCompleteSongs:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    totalGroupAnimalSoundsAndCompleteSongs: { type: Number}
        
    }],
        
groupNameAndCompletesAndAssociations:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    totalGroupNameAndCompletesAndAssociations: { type: Number}

    }],
        
        
groupSimpleQuestions1:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    totalGroupSimpleQuestions1: { type:Number },
        
    }],
        
        
groupSimpleQuestions2:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    totalGroupSimpleQuestions2: { type: Number },
    }],
        
        
groupCategoriesAndFunctionsAndCharacteristics:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    totalGroupCategoriesAndFunctionsAndCharacteristics: { type: Number},
    }],
        
        
groupAdjectivesAndPrepositionsAndAdverbs:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    totalGroupAdjectivesAndPrepositionsAndAdverbs:{ type:Number},
    
    }],
        
        
groupIssuesWithMultipleParts1:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    totalGroupIssuesWithMultipleParts1:{ type: Number}
        
    }],
        
        
groupIssuesWithMultipleParts2:[{
    question1: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question2: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question3: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question4: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question5: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question6: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question7: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question8: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question9: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },

    question10: {
        writtenAnswer:{ type: String},
        replyIndicated:{ type: Number},
        },
        
    totalGroupIssuesWithMultipleParts2:{ type: Number}

    }],
});
          

export interface IIntraverbalAssessmentEntity extends Omit<IIntraverbalAssessment, '_id'>, Document {}