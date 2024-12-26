import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateAnamnesisSpeechTherapyDTO } from "./dto/anamnesisSpeechTherapyCreate.dto";
import { UpdateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyUpdate.dto";
import { AnamnesisSpeechTherapyService } from "./anamnesisSpeechTherapy.service";

@ApiTags('Anamnesis Speech Therapy')
@Controller('anamnesis-speech-therapy')
export class AnamnesisSpeechTherapyController {
  constructor(private readonly anamnesisSpeechTherapyService: AnamnesisSpeechTherapyService) {}

  @Post()
  create(@Body() data: CreateAnamnesisSpeechTherapyDTO) {
    return this.anamnesisSpeechTherapyService.create(data);
  }

  @Get()
  findAll() {
    return this.anamnesisSpeechTherapyService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.anamnesisSpeechTherapyService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateAnamnesisSpeechTherapyDto) {
    return this.anamnesisSpeechTherapyService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.anamnesisSpeechTherapyService.delete(id);
  }
}

