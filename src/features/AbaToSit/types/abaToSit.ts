import { Document, Types } from 'mongoose';

export interface IAbaToSitg extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AF' | 'DV' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaToSitDTO {
  atividades: { atividade: string; status: 'AF' | 'DV' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaToSitQueryParams {
  atividade?: string;
  status?: 'AF' | 'DV' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

