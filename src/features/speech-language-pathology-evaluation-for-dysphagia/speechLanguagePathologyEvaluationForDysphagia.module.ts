import { Module } from '@nestjs/common';
import { SpeechLanguagePathologyEvaluationForDysphagiaService } from './speechLanguagePathologyEvaluationForDysphagia.service';
import { SpeechLanguagePathologyEvaluationForDysphagiaController } from './speechLanguagePathologyEvaluationForDysphagia.controller';

@Module({
  controllers: [SpeechLanguagePathologyEvaluationForDysphagiaController],
  providers: [SpeechLanguagePathologyEvaluationForDysphagiaService],
})
export class SpeechLanguagePathologyEvaluationForDysphagiaModule {}
