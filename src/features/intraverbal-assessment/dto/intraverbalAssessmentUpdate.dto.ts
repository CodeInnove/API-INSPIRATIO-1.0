import { PartialType } from '@nestjs/swagger';
import { CreateIntraverbalAssessmentDto } from './intraverbalAssessmentCreate.dto';

export class UpdateIntraverbalAssessmentDto extends PartialType(CreateIntraverbalAssessmentDto) {}
