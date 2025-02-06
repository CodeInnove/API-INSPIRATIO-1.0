import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaIntraverbalDocument = AbaIntraverbal & Document;

@Schema({ timestamps: true })
export class AbaIntraverbal {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AFT', 'NF', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AFT' | 'NF' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaIntraverbalSchema = SchemaFactory.createForClass(AbaIntraverbal);