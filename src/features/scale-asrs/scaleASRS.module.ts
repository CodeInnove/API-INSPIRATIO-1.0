import { Module } from "@nestjs/common";
import { ScaleASRSService } from "./scaleASRS.service";
import { ScaleASRSController } from "./scaleASRS.controller";
import { ScaleASRSRepository } from "./scaleASRS.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { ScaleASRSSchema } from "src/entities/scaleASRS.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ScaleASRS', schema: ScaleASRSSchema }]),
  ],
  providers: [ScaleASRSService, ScaleASRSRepository],
  controllers: [ScaleASRSController],
  exports: [],
})
export class ScaleASRSModule {}
