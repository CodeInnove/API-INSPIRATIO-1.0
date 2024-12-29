import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EessaTestService } from './eessaTest.service';
import { CreateEessaTestDto } from './dto/createEessaTest.dto';
import { UpdateEessaTestDto } from './dto/updateEessaTest.dto';

@Controller('eessa-test')
export class EessaTestController {
  constructor(private readonly eessaTestService: EessaTestService) {}

  @Post()
  create(@Body() createEessaTestDto: CreateEessaTestDto) {
    return this.eessaTestService.create(createEessaTestDto);
  }

  @Get()
  findAll() {
    return this.eessaTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eessaTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEessaTestDto: UpdateEessaTestDto) {
    return this.eessaTestService.update(+id, updateEessaTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eessaTestService.remove(+id);
  }
}
