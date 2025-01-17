import { Module } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolPreschoolService } from './sensoryProcessingMeasureSchoolPreSchool.service';
import { SensoryProcessingMeasureSchoolPreschoolController } from './sensoryProcessingMeasureSchoolPreSchool.controller';
import { SpmSchoolPreSchoolRepository } from './sensoryProcessingMeasureSchoolPreSchool.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SensoryProcessingMeasureSchoolPreSchoolSchema } from 'src/entities/sensoryProcessingMeasureSchoolPreSchool.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SpmSchoolPreSchool', schema: SensoryProcessingMeasureSchoolPreSchoolSchema }
    ])
  ],
  providers: [SensoryProcessingMeasureSchoolPreschoolService, SpmSchoolPreSchoolRepository],
  controllers: [SensoryProcessingMeasureSchoolPreschoolController],
})
export class SensoryProcessingMeasureSchoolPreschoolModule {}
