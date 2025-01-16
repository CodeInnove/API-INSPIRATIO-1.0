import { Module } from '@nestjs/common';
import { SensoryProcessingMeasurePreschoolService } from './sensoryProcessingMeasurePreschoolHome.service';
import { SensoryProcessingMeasurePreschoolController } from './sensoryProcessingMeasurePreschoolHome.controller';
import { SpmPreSchoolHomeRepository } from './sensoryProcessingMeasurePreSchoolHome.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SensoryProcessingMeasurePreschoolSchema } from 'src/entities/sensoryProcessingMeasurePreschoolHome.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SensoryProcessingMeasurePreSchoolHome', schema: SensoryProcessingMeasurePreschoolSchema }
    ])
  ],
  providers: [SensoryProcessingMeasurePreschoolService, SpmPreSchoolHomeRepository],
  controllers: [SensoryProcessingMeasurePreschoolController],
})
export class SensoryProcessingMeasurePreschoolModule {}
