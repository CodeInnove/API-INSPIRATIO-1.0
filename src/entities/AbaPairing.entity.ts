import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaPairingDocument = AbaPairing & Document;

@Schema({ timestamps: true })
export class AbaPairing {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AF', 'DG', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AF' | 'DG' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaPairingSchema = SchemaFactory.createForClass(AbaPairing);