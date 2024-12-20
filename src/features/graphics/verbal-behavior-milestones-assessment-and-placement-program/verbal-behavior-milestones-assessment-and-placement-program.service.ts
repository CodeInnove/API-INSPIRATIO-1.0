import { Injectable } from '@nestjs/common';
import { CreateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto } from './dto/create-verbal-behavior-milestones-assessment-and-placement-program.dto';
import { UpdateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto } from './dto/update-verbal-behavior-milestones-assessment-and-placement-program.dto';

@Injectable()
export class VerbalBehaviorMilestonesAssessmentAndPlacementProgramService {
  create(createVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto: CreateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto) {
    return 'This action adds a new verbalBehaviorMilestonesAssessmentAndPlacementProgram';
  }

  findAll() {
    return `This action returns all verbalBehaviorMilestonesAssessmentAndPlacementProgram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} verbalBehaviorMilestonesAssessmentAndPlacementProgram`;
  }

  update(id: number, updateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto: UpdateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto) {
    return `This action updates a #${id} verbalBehaviorMilestonesAssessmentAndPlacementProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} verbalBehaviorMilestonesAssessmentAndPlacementProgram`;
  }
}
