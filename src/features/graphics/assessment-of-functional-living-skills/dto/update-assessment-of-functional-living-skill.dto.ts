import { PartialType } from '@nestjs/swagger';
import { CreateAssessmentOfFunctionalLivingSkillsDto } from './create-assessment-of-functional-living-skill.dto';

export class UpdateAssessmentOfFunctionalLivingSkillDto extends PartialType(CreateAssessmentOfFunctionalLivingSkillsDto) {}
