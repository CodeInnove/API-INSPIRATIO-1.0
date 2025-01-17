import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolService } from './sensoryProcessingMeasureSchool.service';
import { SensoryProcessingMeasureSchoolController } from './sensoryProcessingMeasureSchool.controller';
import { SpmSchoolRepository } from './sensoryProcessingMeasureSchool.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SensoryProcessingMeasureSchoolSchema } from 'src/entities/sensoryProcessingMeasureSchool.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SpmSchool', schema: SensoryProcessingMeasureSchoolSchema }
    ])
  ],
  providers: [SensoryProcessingMeasureSchoolService, SpmSchoolRepository],
  controllers: [SensoryProcessingMeasureSchoolController],
})
export class SensoryProcessingMeasureSchoolModule {}
