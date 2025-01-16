import { Module } from '@nestjs/common';
import { PediatricNeurologicalEvaluationService } from './pediatric-neurological-evaluation.service';
import { PediatricNeurologicalEvaluationController } from './pediatric-neurological-evaluation.controller';
import { PediatricNeurologicalEvaluationRepository } from './pediatric-neurological-evaluation.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PediatricNeurologicalEvaluationSchema } from 'src/entities/pediatric-neurological-evaluation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PediatricNeurologicalEvaluation', schema:  PediatricNeurologicalEvaluationSchema}
    ])
  ],
  providers: [PediatricNeurologicalEvaluationService, PediatricNeurologicalEvaluationRepository],
  controllers: [PediatricNeurologicalEvaluationController],
})
export class PediatricNeurologicalEvaluationModule {}
