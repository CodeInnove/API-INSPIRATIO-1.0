import { Document, Types } from 'mongoose';

export interface IListener extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AG' | 'NF' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IListenerDTO {
  atividades: { atividade: string; status: 'AG' | 'NF' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IListenerQueryParams {
  atividade?: string;
  status?: 'AG' | 'NF' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

