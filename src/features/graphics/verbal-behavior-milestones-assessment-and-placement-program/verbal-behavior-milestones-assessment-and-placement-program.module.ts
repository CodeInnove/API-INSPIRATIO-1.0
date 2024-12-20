import { Module } from '@nestjs/common';
import { VerbalBehaviorMilestonesAssessmentAndPlacementProgramService } from './verbal-behavior-milestones-assessment-and-placement-program.service';
import { VerbalBehaviorMilestonesAssessmentAndPlacementProgramController } from './verbal-behavior-milestones-assessment-and-placement-program.controller';

@Module({
  controllers: [VerbalBehaviorMilestonesAssessmentAndPlacementProgramController],
  providers: [VerbalBehaviorMilestonesAssessmentAndPlacementProgramService],
})
export class VerbalBehaviorMilestonesAssessmentAndPlacementProgramModule {}
