import { PartialType } from '@nestjs/swagger';
import { CreateIncomeAssessmentDto } from './createIncomeAssessment.dto';

export class UpdateIncomeAssessmentDto extends PartialType(CreateIncomeAssessmentDto) {}
