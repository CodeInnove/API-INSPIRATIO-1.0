import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaListenerDocument = AbaListener & Document;

@Schema({ timestamps: true })
export class AbaListener {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AG', 'NF', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AG' | 'NF' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaListenerSchema = SchemaFactory.createForClass(AbaListener);