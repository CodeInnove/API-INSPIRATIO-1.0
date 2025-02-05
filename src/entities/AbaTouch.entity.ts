import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaTouchDocument = AbaTouch & Document;

@Schema({ timestamps: true })
export class AbaTouch {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AFT', 'DG', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AFT' | 'DG' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaTouchSchema = SchemaFactory.createForClass(AbaTouch);