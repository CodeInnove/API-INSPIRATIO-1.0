import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaMotorImitationDocument = AbaMotorImitation & Document;

@Schema({ timestamps: true })
export class AbaMotorImitation {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AFT', 'AFP', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AFT' | 'AFP' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaMotorImitationSchema = SchemaFactory.createForClass(AbaMotorImitation);