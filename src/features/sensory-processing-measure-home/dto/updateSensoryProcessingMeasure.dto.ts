import { PartialType } from '@nestjs/swagger';
import { CreateSensoryProcessingMeasureHomeDto } from './createSensoryProcessingMeasure.dto';

export class UpdateSensoryProcessingMeasureDto extends PartialType(CreateSensoryProcessingMeasureHomeDto) {}
