import { Module } from "@nestjs/common";
import { ScaleAsrsService } from "./scaleASRS.service";
import { ScaleASRSController } from "./scaleASRS.controller";
import { ScaleAsrsRepository } from "./scaleASRS.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { ScaleAsrsSchema } from "src/entities/scaleASRS.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ScaleASRS', schema: ScaleAsrsSchema }]),
  ],
  providers: [ScaleAsrsService, ScaleAsrsRepository],
  controllers: [ScaleASRSController],
  exports: [],
})
export class ScaleAsrsModule {}
