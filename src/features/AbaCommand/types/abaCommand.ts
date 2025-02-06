import { Document, Types } from 'mongoose';

export interface IAbaCommand extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AFT' | 'AFP' | 'D' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaCommandDTO {
  atividades: { atividade: string; status: 'AFT' | 'AFP' | 'D' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaCommandQueryParams {
  atividade?: string;
  status?: 'AFT' | 'AFP' | 'D' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}