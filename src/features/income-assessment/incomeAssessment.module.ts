import { Module } from '@nestjs/common';
import { IncomeAssessmentService } from './incomeAssessment.service';
import { IncomeAssessmentController } from './incomeAssessment.controller';
import { IncomeAssessmentRepository } from './incomeAssessment.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeAssessmentSchema } from 'src/entities/incomeAssessment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'IncomeAssessment', schema: IncomeAssessmentSchema },
    ])
  ],
  providers: [IncomeAssessmentService, IncomeAssessmentRepository],
  controllers: [IncomeAssessmentController],
})
export class IncomeAssessmentModule {}
