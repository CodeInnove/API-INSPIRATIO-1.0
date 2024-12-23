import { Module } from "@nestjs/common";
import { ScaleMchatService } from "./scaleMchat.service";
import { ScaleMchatController } from "./scaleMchat.controller";
import { ScaleMchatRepository } from "./scaleMchat.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { ScaleMchatSchema } from "src/entities/scaleMchat.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ScaleMchat', schema: ScaleMchatSchema }]),
  ],
  providers: [ScaleMchatService, ScaleMchatRepository],
  controllers: [ScaleMchatController],
  exports: [],
})
export class ScaleMchatModule {}
