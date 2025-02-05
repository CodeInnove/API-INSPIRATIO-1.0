import { Document, Types } from 'mongoose';

export interface IAbaMotorImitation extends Document {
  _id?: string;
  atividades: { atividade: string; status: 'AFT' | 'AFP' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaMotorImitationDTO {
  atividades: { atividade: string; status: 'AFT' | 'AFP' | 'I' }[];
  patient: string;
  doctor: string;
}

export interface IAbaMotorImitationQueryParams {
  atividade?: string;
  status?: 'AFT' | 'AFP' | 'I';
  patient?: string;
  doctor?: string;
  page?: number;
  limit?: number;
}

