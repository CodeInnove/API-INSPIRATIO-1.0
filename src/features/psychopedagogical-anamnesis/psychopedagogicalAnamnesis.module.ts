import { Module } from "@nestjs/common";
import { PsychopedagogicalAnamnesisService } from "./psychopedagogicalAnamnesis.service";
import { PsychopedagogicalAnamnesisController } from "./psychopedagogicalAnamnesis.controller";
import { PsychopedagogicalAnamnesisRepository } from "./psychopedagogicalAnamnesis.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { PsychopedagogicalAnamnesisSchema } from "src/entities/psychopedagogicalAnamnesis.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'psychopedagogicalAnamnesis', schema: PsychopedagogicalAnamnesisSchema }
    ])],
  providers: [PsychopedagogicalAnamnesisService, PsychopedagogicalAnamnesisRepository],
  controllers: [PsychopedagogicalAnamnesisController],
  exports: [],
})
export class PsychopedagogicalAnamnesisModule {}
