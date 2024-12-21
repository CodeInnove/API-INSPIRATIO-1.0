import { ObjectId } from 'mongoose';

export interface IScaleASRS {
    identification: IIdentification;
    groupA: IGroup;
    groupB: IGroup;
  }
export interface IAnswer {
  option: number;
  value: number;
}export interface IQuestion {
  id: number;
  text: string;
  answers: IAnswer[];
}
export interface IGroup {
  questions: IQuestion[];
  total: number;
}

export interface IIdentification {
  patient: ObjectId;
  dateOfApplication: string;
  evaluator: ObjectId;
}

