import { Module } from "@nestjs/common";
import { AssessmentOfFunctionalLivingSkillsService } from "./assessment-of-functional-living-skills.service";
import { AssessmentOfFunctionalLivingSkillsController } from "./assessment-of-functional-living-skills.controller";
import {AssessmentOfFunctionalLivingSkillsRepository } from "./assessment-of-functional-living-skills.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { mchatRSchema } from "src/entities/mchat-R.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AssessmentOfFunctionalLivingSkills', schema: mchatRSchema }]),
  ],
  providers: [AssessmentOfFunctionalLivingSkillsService, AssessmentOfFunctionalLivingSkillsRepository],
  controllers: [AssessmentOfFunctionalLivingSkillsController],
  exports: [],
})
export class AssessmentOfFunctionalLivingSkillsModule {}
