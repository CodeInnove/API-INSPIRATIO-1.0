import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaCommandDocument = AbaCommand & Document;

@Schema({ timestamps: true })
export class AbaCommand {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AFT', 'AFP', 'D', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AFT' | 'AFP'| 'D' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaCommandSchema = SchemaFactory.createForClass(AbaCommand);