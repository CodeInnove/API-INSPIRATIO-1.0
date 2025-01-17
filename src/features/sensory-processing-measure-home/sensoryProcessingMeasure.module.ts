import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureService } from './sensoryProcessingMeasure.service';
import { SensoryProcessingMeasureController } from './sensoryProcessingMeasure.controller';
import { SpmHomeRepository } from './sensoryProcessingMeasure.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SensoryProcessingMeasureSchema } from 'src/entities/sensoryProcessingMeasureHome.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SPMHome', schema:  SensoryProcessingMeasureSchema},
    ])
  ],
  providers: [SensoryProcessingMeasureService, SpmHomeRepository],
  controllers: [SensoryProcessingMeasureController],
})
export class SensoryProcessingMeasureModule {}
