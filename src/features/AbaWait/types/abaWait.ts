import { Document, Types } from 'mongoose';

export interface IAbaWait extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AF' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaWaitDTO {
  atividades: { atividade: string; status: 'AF' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaWaitQueryParams {
  atividade?: string;
  status?: 'AF' | 'DG' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

