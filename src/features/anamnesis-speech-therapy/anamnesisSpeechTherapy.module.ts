import { Module } from "@nestjs/common";
import { AnamnesisSpeechTherapyService } from "./anamnesisSpeechTherapy.service";
import { AnamnesisSpeechTherapyController } from "./anamnesisSpeechTherapy.controller";
import { AnamnesisSpeechTherapyRepository } from "./anamnesisSpeechTherapy.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { AnamnesisSpeechTherapySchema } from "src/entities/anamnesisSpeechTherapy.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AnamnesisSpeechTherapy', schema: AnamnesisSpeechTherapySchema }]),
  ],
  providers: [AnamnesisSpeechTherapyService, AnamnesisSpeechTherapyRepository],
  controllers: [AnamnesisSpeechTherapyController],
  exports: [],
})
export class AnamnesisSpeechTherapyModule {}
