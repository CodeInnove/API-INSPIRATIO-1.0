import { Document, Types } from 'mongoose';

export interface IAbaTouch extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AFT' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaTouchDTO {
  atividades: { atividade: string; status: 'AFT' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaTouchQueryParams {
  atividade?: string;
  status?: 'AFT' | 'DG' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}
