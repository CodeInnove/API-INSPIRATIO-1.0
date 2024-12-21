import { Schema, Document } from 'mongoose';
import { IScaleASRS } from 'src/features/scale-asrs/types/scaleASRS';

export const ScaleAsrsSchema = new Schema({
  identification: {
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfApplication: { type: String, required: true },
    evaluator: {type: Schema.Types.ObjectId, ref: "User"}
    },
  
  groupA:{
    questionOne: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionTwo: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionThree: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionFour: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionFive: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionSix: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionSeven: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionEight: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    }},
  
  totalGroupA: { type: Number, default: 0 },

  groupB:{
    questionOne: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
      },
    questionTwo: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionThree: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionFour: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionFive: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionSix: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionSeven: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    questionEight: {
      optionOne:{ type: Number},
      optionTwo:{ type: Number},
      optionThree:{ type: Number},
      optionFour:{ type: Number},
      optionFive:{ type: Number},
    },
    
    totalGroupB: { type: Number, default: 0 }
}});

export interface IScaleAsrsEntity extends Omit<IScaleASRS, '_id'>, Document {}