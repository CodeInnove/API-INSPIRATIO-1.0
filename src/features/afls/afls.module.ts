import { Module } from "@nestjs/common";
import { AflService } from "./afls.service";
import { AflsRepository } from "./afls.repository";
import { AflsController } from "./afls.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AflSchema } from "src/entities/afl.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Afl', schema: AflSchema }
    ])
  ],
  providers: [AflService, AflsRepository],
  controllers: [AflsController],
})
export class AflsModule {}