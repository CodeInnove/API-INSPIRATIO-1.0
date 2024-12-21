import { Module } from "@nestjs/common";
import { IntraverbalAssessmentService } from "./intraverbalAssessment.service";
import { IntraverbalAssessmentController } from "./intraverbalAssessment.controller";
import { IntraverbalAssessmentRepository } from "./intraverbalAssessment.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { IntraverbalAssessmentSchema } from "src/entities/intraverbalAssessment.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'IntraverbalAssessment', schema: IntraverbalAssessmentSchema }]),
  ],
  providers: [IntraverbalAssessmentService, IntraverbalAssessmentRepository],
  controllers: [IntraverbalAssessmentController],
  exports: [],
})
export class IntraverbalAssessmentModule {}
