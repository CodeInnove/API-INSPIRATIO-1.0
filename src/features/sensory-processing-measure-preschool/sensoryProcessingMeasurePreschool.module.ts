import { Module } from '@nestjs/common';
import { SensoryProcessingMeasurePreschoolService } from './sensoryProcessingMeasurePreschool.service';
import { SensoryProcessingMeasurePreschoolController } from './sensoryProcessingMeasurePreschool.controller';

@Module({
  controllers: [SensoryProcessingMeasurePreschoolController],
  providers: [SensoryProcessingMeasurePreschoolService],
})
export class SensoryProcessingMeasurePreschoolModule {}
