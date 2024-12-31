import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyCreate.dto";
import { UpdateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyUpdate.dto";
import { AnamnesisSpeechTherapyService } from "./anamnesisSpeechTherapy.service";
import { QueryAnamnesisTherapyDto } from "./dto/anamnesisSpeechTherapyQuery.dto";

@ApiTags('Anamnesis Speech Therapy')
@Controller('anamnesis-speech-therapy')
export class AnamnesisSpeechTherapyController {
  constructor(private readonly anamnesisSpeechTherapyService: AnamnesisSpeechTherapyService) {}

  @Post()
  async create(@Body() data: CreateAnamnesisSpeechTherapyDto) {
    return await this.anamnesisSpeechTherapyService.create(data);
  }

  @Get()
  async findAll(@Query() query: QueryAnamnesisTherapyDto) {
    return await this.anamnesisSpeechTherapyService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.anamnesisSpeechTherapyService.findById(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: UpdateAnamnesisSpeechTherapyDto) {
    return await this.anamnesisSpeechTherapyService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.anamnesisSpeechTherapyService.delete(id);
  }
}

