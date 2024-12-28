import { PartialType } from '@nestjs/swagger';
import { CreateSensoryProcessingMeasureDto } from './create-sensory-processing-measure.dto';

export class UpdateSensoryProcessingMeasureDto extends PartialType(CreateSensoryProcessingMeasureDto) {}
