import { Document, Types } from 'mongoose';

export interface IAbaPairing extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AF' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaPairingDTO {
  atividades: { atividade: string; status: 'AF' | 'DG' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaPairingQueryParams {
  atividade?: string;
  status?: 'AF' | 'DG' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

