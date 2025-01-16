import { PartialType } from '@nestjs/swagger';
import { CreateSensoryProcessingMeasurePreschoolDto } from './createSensoryProcessingMeasurePreschool.dto';

export class UpdateSensoryProcessingMeasurePreschoolDto extends PartialType(CreateSensoryProcessingMeasurePreschoolDto) {}
