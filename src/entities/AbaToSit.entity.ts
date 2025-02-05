import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AbaToSitDocument = AbaToSit & Document;

@Schema({ timestamps: true })
export class AbaToSit {
  @Prop({
    type: [
      {
        atividade: { type: String, required: true },
        status: { type: String, enum: ['AF', 'DV', 'I'], required: true },
      },
    ],
    required: true,
  })
  atividades: { atividade: string; status: 'AF' | 'DV' | 'I' }[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  doctor: Types.ObjectId;
}

export const AbaToSitSchema = SchemaFactory.createForClass(AbaToSit);