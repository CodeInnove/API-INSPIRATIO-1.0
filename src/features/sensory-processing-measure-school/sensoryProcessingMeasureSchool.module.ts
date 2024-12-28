import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolService } from './sensoryProcessingMeasureSchool.service';
import { SensoryProcessingMeasureSchoolController } from './sensoryProcessingMeasureSchool.controller';

@Module({
  controllers: [SensoryProcessingMeasureSchoolController],
  providers: [SensoryProcessingMeasureSchoolService],
})
export class SensoryProcessingMeasureSchoolModule {}
