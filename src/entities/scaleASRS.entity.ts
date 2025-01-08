import { Schema, Document } from 'mongoose';
import { IScaleASRS } from 'src/features/scale-asrs/types/scaleASRS';

export const ScaleAsrsSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  dateOfApplication: { type: String, required: true },
  doctor: {type: Schema.Types.ObjectId, ref: "User"},
  
  
  GroupA:{
    questionOne: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionTwo: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionThree: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionFour: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionFive: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionSix:{ type: Number, enum: [0, 1, 2, 3, 4]},
    questionSeven: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionEight:{ type: Number, enum: [0, 1, 2, 3, 4]},
    //totalGroupA: { type: Number, default: 0 },
  },
  

  GroupB:{
    questionOne: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionTwo: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionThree: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionFour: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionFive: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionSix: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionSeven: { type: Number, enum: [0, 1, 2, 3, 4]},
    questionEight: { type: Number, enum: [0, 1, 2, 3, 4]},
    
    //totalGroupB: { type: Number, default: 0 }
}});

export interface IScaleAsrsEntity extends Omit<IScaleASRS, '_id'>, Document {}
