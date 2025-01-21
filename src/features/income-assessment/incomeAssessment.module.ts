import { Module } from '@nestjs/common';
import { IncomeAssessmentService } from './incomeAssessment.service';
import { IncomeAssessmentController } from './incomeAssessment.controller';

@Module({
  controllers: [IncomeAssessmentController],
  providers: [IncomeAssessmentService],
})
export class IncomeAssessmentModule {}
