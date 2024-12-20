import { Module } from "@nestjs/common";
import { SociallySavvyChecklistService } from "./sociallySavvyChecklist.service";
import { SociallySavvyChecklistController } from "./sociallySavvyChecklist.controller";
import { SociallySavvyChecklistRepository } from "./sociallySavvyChecklist.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { SociallySavvyChecklistSchema } from "src/entities/sociallySavvyChecklist.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SociallySavvyChecklist', schema: SociallySavvyChecklistSchema }]),
  ],
  providers: [SociallySavvyChecklistService, SociallySavvyChecklistRepository],
  controllers: [SociallySavvyChecklistController],
  exports: [],
})
export class SociallySavvyChecklistModule {}
