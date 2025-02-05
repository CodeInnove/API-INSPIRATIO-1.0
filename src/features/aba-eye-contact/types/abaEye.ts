import { Document, Types } from 'mongoose';

export interface IAbaEyeContact extends Document {
  _id?: string; // ou Types.ObjectId; se estiver usando ObjectId
  atividades: { atividade: string; status: 'AF' | 'DV' | 'I' }[];
  patient: string; // ou Types.ObjectId; se estiver usando ObjectId
  doctor: string; // ou Types.ObjectId; se estiver usando ObjectId
}

export interface IAbaEyeContactDTO {
  atividades: { atividade: string; status: 'AF' | 'DV' | 'I' }[];
  patient: string; // ou Types.ObjectId; se estiver usando ObjectId
  doctor: string; // ou Types.ObjectId; se estiver usando ObjectId
}

export interface IAbaEyeContactQueryParams {
  atividade?: string;
  status?: 'AF' | 'DV' | 'I';
  patient?: string; // ou Types.ObjectId; se estiver usando ObjectId
  doctor?: string; // ou Types.ObjectId; se estiver usando ObjectId
  page?: number;
  limit?: number;
}