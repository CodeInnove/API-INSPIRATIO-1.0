import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureService } from './sensoryProcessingMeasure.service';
import { SensoryProcessingMeasureController } from './sensoryProcessingMeasure.controller';

@Module({
  controllers: [SensoryProcessingMeasureController],
  providers: [SensoryProcessingMeasureService],
})
export class SensoryProcessingMeasureModule {}
