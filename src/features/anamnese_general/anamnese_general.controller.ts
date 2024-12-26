import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GeneralAnamneseService } from './anamnese_general.service';
import { CreateAnamneseGeneralDto } from './dto/create-anamnese_general.dto';
import { UpdateAnamneseGeneralDto } from './dto/update-anamnese_general.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Anamnese General')
@Controller('anamnese-general')
export class AnamneseGeneralController {
  constructor(private readonly anamneseGeneralService: GeneralAnamneseService) {}

  @Post()
  async create(@Body() data: CreateAnamneseGeneralDto) {
    return this.anamneseGeneralService.create(data);
  }

  @Get()
  async findAll() {
    return this.anamneseGeneralService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.anamneseGeneralService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateAnamneseGeneralDto) {
    return this.anamneseGeneralService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.anamneseGeneralService.delete(id);
  }
}
