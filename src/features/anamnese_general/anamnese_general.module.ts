import { Module } from '@nestjs/common';
import { AnamneseGeneralService } from './anamnese_general.service';
import { AnamneseGeneralController } from './anamnese_general.controller';

@Module({
  controllers: [AnamneseGeneralController],
  providers: [AnamneseGeneralService],
})
export class AnamneseGeneralModule {}
