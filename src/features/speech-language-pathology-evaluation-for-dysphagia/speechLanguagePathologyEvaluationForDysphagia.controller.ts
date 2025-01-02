import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeechLanguagePathologyEvaluationForDysphagiaService } from './speechLanguagePathologyEvaluationForDysphagia.service';
import { CreateSpeechLanguagePathologyEvaluationForDysphagiaDto } from './dto/createSpeechLanguagePathologyEvaluationForDysphagia.dto';
import { UpdateSpeechLanguagePathologyEvaluationForDysphagiaDto } from './dto/updateSpeechLanguagePathologyEvaluationForDysphagia.dto';

@Controller('speech-language-pathology-evaluation-for-dysphagia')
export class SpeechLanguagePathologyEvaluationForDysphagiaController {
  constructor(private readonly speechLanguagePathologyEvaluationForDysphagiaService: SpeechLanguagePathologyEvaluationForDysphagiaService) {}

  @Post()
  create(@Body() createSpeechLanguagePathologyEvaluationForDysphagiaDto: CreateSpeechLanguagePathologyEvaluationForDysphagiaDto) {
    return this.speechLanguagePathologyEvaluationForDysphagiaService.create(createSpeechLanguagePathologyEvaluationForDysphagiaDto);
  }

  @Get()
  findAll() {
    return this.speechLanguagePathologyEvaluationForDysphagiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speechLanguagePathologyEvaluationForDysphagiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeechLanguagePathologyEvaluationForDysphagiaDto: UpdateSpeechLanguagePathologyEvaluationForDysphagiaDto) {
    return this.speechLanguagePathologyEvaluationForDysphagiaService.update(+id, updateSpeechLanguagePathologyEvaluationForDysphagiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speechLanguagePathologyEvaluationForDysphagiaService.remove(+id);
  }
}
