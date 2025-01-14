import { PartialType } from '@nestjs/swagger';
import { CreatePerformanceAssessmentDto } from './create-performance-assessment.dto';

export class UpdatePerformanceAssessmentDto extends PartialType(CreatePerformanceAssessmentDto) {}
