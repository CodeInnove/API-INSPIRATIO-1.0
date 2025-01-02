import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensoryProcessingMeasurePreschoolService } from './sensoryProcessingMeasurePreschool.service';
import { CreateSensoryProcessingMeasurePreschoolDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';

@Controller('sensory-processing-measure-preschool')
export class SensoryProcessingMeasurePreschoolController {
  constructor(private readonly sensoryProcessingMeasurePreschoolService: SensoryProcessingMeasurePreschoolService) {}

  @Post()
  create(@Body() createSensoryProcessingMeasurePreschoolDto: CreateSensoryProcessingMeasurePreschoolDto) {
    return this.sensoryProcessingMeasurePreschoolService.create(createSensoryProcessingMeasurePreschoolDto);
  }

  @Get()
  findAll() {
    return this.sensoryProcessingMeasurePreschoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoryProcessingMeasurePreschoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensoryProcessingMeasurePreschoolDto: UpdateSensoryProcessingMeasurePreschoolDto) {
    return this.sensoryProcessingMeasurePreschoolService.update(+id, updateSensoryProcessingMeasurePreschoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoryProcessingMeasurePreschoolService.remove(+id);
  }
}
