import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssessmentOfFunctionalLivingSkillsService } from './assessment-of-functional-living-skills.service';
import { CreateAssessmentOfFunctionalLivingSkillsDto } from './dto/create-assessment-of-functional-living-skill.dto';
import { UpdateAssessmentOfFunctionalLivingSkillDto } from './dto/update-assessment-of-functional-living-skill.dto';

@ApiTags('Assessment Of FunctionalLivingSkills')
@Controller('assessment-of-functional-living-skills')
export class AssessmentOfFunctionalLivingSkillsController {
  constructor(private readonly assessmentOfFunctionalLivingSkillsService: AssessmentOfFunctionalLivingSkillsService) {}

  @Post()
    create(@Body() data: CreateAssessmentOfFunctionalLivingSkillsDto) {
      return this.assessmentOfFunctionalLivingSkillsService.create(data);
    }
  
    @Get()
    findAll() {
      return this.assessmentOfFunctionalLivingSkillsService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.assessmentOfFunctionalLivingSkillsService.findById(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateAssessmentOfFunctionalLivingSkillDto) {
      return this.assessmentOfFunctionalLivingSkillsService.update(id, data);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.assessmentOfFunctionalLivingSkillsService.delete(id);
    }
}
