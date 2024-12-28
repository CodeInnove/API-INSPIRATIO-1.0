import { PartialType } from '@nestjs/swagger';
import { CreateSensoryProcessingMeasureSchoolDto } from './createSensoryProcessingMeasureSchool.dto';

export class UpdateSensoryProcessingMeasureSchoolDto extends PartialType(CreateSensoryProcessingMeasureSchoolDto) {}
