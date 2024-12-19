import { Schema, Document } from 'mongoose';
import { IMchatR } from 'src/features/graphics/mchat-r/types/mchat-r.types';

export const mchatRSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  dateBirth: { type: String, required: true },
  evaluator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  date: { type: String, required: true },
  question1: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
   
  },
  
  question2: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },

  question3: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },

  question4: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },

  question5: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },

  question6: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
   
  },

  question7: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
    
  },
  
  question8: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
    
  },
  
  question9: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
    
  },
  
  question10: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
    
  },
  
  question11: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
    
  },
  
  question12: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question13: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question14: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question15: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question16: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question17: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question18: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question19: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },
  
  question20: {
    fail_pass: { type: String, required: true },
    score: { type: Number, required: true , default: 0 },
  },

  total: { type: Number, required: true, default: 0 },
  
});

export interface IMchatREntity extends Omit<IMchatR, '_id'>, Document { }