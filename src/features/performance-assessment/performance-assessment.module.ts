import { Module } from '@nestjs/common';
import { PerformanceAssessmentService } from './performance-assessment.service';
import { PerformanceAssessmentController } from './performance-assessment.controller';
import { PerformanceAssessmentRepository } from './performance-assesment.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceAssessmentSchema } from 'src/entities/performance-assessment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PerformanceAssessment', schema: PerformanceAssessmentSchema }
    ])
  ],
  providers: [PerformanceAssessmentService, PerformanceAssessmentRepository],
  controllers: [PerformanceAssessmentController],
})
export class PerformanceAssessmentModule {}
