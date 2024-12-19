import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnamneseGeneralService } from './anamnese_general.service';
import { CreateAnamneseGeneralDto } from './dto/create-anamnese_general.dto';
import { UpdateAnamneseGeneralDto } from './dto/update-anamnese_general.dto';

@Controller('anamnese-general')
export class AnamneseGeneralController {
  constructor(private readonly anamneseGeneralService: AnamneseGeneralService) {}

  @Post()
  create(@Body() createAnamneseGeneralDto: CreateAnamneseGeneralDto) {
    return this.anamneseGeneralService.create(createAnamneseGeneralDto);
  }

  @Get()
  findAll() {
    return this.anamneseGeneralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anamneseGeneralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnamneseGeneralDto: UpdateAnamneseGeneralDto) {
    return this.anamneseGeneralService.update(+id, updateAnamneseGeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anamneseGeneralService.remove(+id);
  }
}
