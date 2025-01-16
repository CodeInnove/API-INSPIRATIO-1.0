import { Module } from '@nestjs/common';
import { SensoryProcessingMeasurePreschoolService } from './sensoryProcessingMeasurePreschoolHome.service';
import { SensoryProcessingMeasurePreschoolController } from './sensoryProcessingMeasurePreschoolHome.controller';

@Module({
  controllers: [SensoryProcessingMeasurePreschoolController],
  providers: [SensoryProcessingMeasurePreschoolService],
})
export class SensoryProcessingMeasurePreschoolModule {}
