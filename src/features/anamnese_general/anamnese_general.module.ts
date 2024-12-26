import { Module } from '@nestjs/common';
import { GeneralAnamneseService } from './anamnese_general.service';
import { AnamneseGeneralController } from './anamnese_general.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { generalAnamneseSchema } from 'src/entities/anamnese_general.entity';
import { GeneralAnamneseRepository } from './anamnese_geral.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'generalAnamnese', schema: generalAnamneseSchema }]),
  ],
  controllers: [AnamneseGeneralController],
  providers: [GeneralAnamneseService, GeneralAnamneseRepository],
})
export class AnamneseGeneralModule {}
