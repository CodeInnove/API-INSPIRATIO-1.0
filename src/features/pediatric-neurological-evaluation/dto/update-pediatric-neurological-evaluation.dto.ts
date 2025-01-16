import { PartialType } from '@nestjs/swagger';
import { CreatePediatricNeurologicalEvaluationDto } from './create-pediatric-neurological-evaluation.dto';

export class UpdatePediatricNeurologicalEvaluationDto extends PartialType(CreatePediatricNeurologicalEvaluationDto) {}
