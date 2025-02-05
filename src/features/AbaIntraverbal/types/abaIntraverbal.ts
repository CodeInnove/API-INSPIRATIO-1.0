import { Document, Types } from 'mongoose';

export interface IAbaIntraverbal extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AFT' | 'NF' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaIntraverbalDTO {
  atividades: { atividade: string; status: 'AFT' | 'NF' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaIntraverbalQueryParams {
  atividade?: string;
  status?: 'AFT' | 'NF' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

