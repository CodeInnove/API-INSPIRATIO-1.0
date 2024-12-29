import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolPreschoolService } from './sensoryProcessingMeasureSchoolPreSchool.service';
import { SensoryProcessingMeasureSchoolPreschoolController } from './sensoryProcessingMeasureSchoolPreSchool.controller';

@Module({
  controllers: [SensoryProcessingMeasureSchoolPreschoolController],
  providers: [SensoryProcessingMeasureSchoolPreschoolService],
})
export class SensoryProcessingMeasureSchoolPreschoolModule {}
