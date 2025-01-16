import { PartialType } from '@nestjs/swagger';
import { CreateSensoryProcessingMeasureDto } from './createSensoryProcessingMeasure.dto';

export class UpdateSensoryProcessingMeasureDto extends PartialType(CreateSensoryProcessingMeasureDto) {}
