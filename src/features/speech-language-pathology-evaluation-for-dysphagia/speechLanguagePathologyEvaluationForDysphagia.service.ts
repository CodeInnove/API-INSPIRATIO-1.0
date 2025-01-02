import { Injectable } from '@nestjs/common';
import { CreateSpeechLanguagePathologyEvaluationForDysphagiaDto } from './dto/createSpeechLanguagePathologyEvaluationForDysphagia.dto';
import { UpdateSpeechLanguagePathologyEvaluationForDysphagiaDto } from './dto/updateSpeechLanguagePathologyEvaluationForDysphagia.dto';

@Injectable()
export class SpeechLanguagePathologyEvaluationForDysphagiaService {
  create(createSpeechLanguagePathologyEvaluationForDysphagiaDto: CreateSpeechLanguagePathologyEvaluationForDysphagiaDto) {
    return 'This action adds a new speechLanguagePathologyEvaluationForDysphagia';
  }

  findAll() {
    return `This action returns all speechLanguagePathologyEvaluationForDysphagia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speechLanguagePathologyEvaluationForDysphagia`;
  }

  update(id: number, updateSpeechLanguagePathologyEvaluationForDysphagiaDto: UpdateSpeechLanguagePathologyEvaluationForDysphagiaDto) {
    return `This action updates a #${id} speechLanguagePathologyEvaluationForDysphagia`;
  }

  remove(id: number) {
    return `This action removes a #${id} speechLanguagePathologyEvaluationForDysphagia`;
  }
}
