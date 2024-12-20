import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VerbalBehaviorMilestonesAssessmentAndPlacementProgramService } from './verbal-behavior-milestones-assessment-and-placement-program.service';
import { CreateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto } from './dto/create-verbal-behavior-milestones-assessment-and-placement-program.dto';
import { UpdateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto } from './dto/update-verbal-behavior-milestones-assessment-and-placement-program.dto';

@Controller('verbal-behavior-milestones-assessment-and-placement-program')
export class VerbalBehaviorMilestonesAssessmentAndPlacementProgramController {
  constructor(private readonly verbalBehaviorMilestonesAssessmentAndPlacementProgramService: VerbalBehaviorMilestonesAssessmentAndPlacementProgramService) {}

  @Post()
  create(@Body() createVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto: CreateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto) {
    return this.verbalBehaviorMilestonesAssessmentAndPlacementProgramService.create(createVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto);
  }

  @Get()
  findAll() {
    return this.verbalBehaviorMilestonesAssessmentAndPlacementProgramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verbalBehaviorMilestonesAssessmentAndPlacementProgramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto: UpdateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto) {
    return this.verbalBehaviorMilestonesAssessmentAndPlacementProgramService.update(+id, updateVerbalBehaviorMilestonesAssessmentAndPlacementProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verbalBehaviorMilestonesAssessmentAndPlacementProgramService.remove(+id);
  }
}
