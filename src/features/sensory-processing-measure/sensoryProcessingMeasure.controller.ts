import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensoryProcessingMeasureService } from './sensoryProcessingMeasure.service';
import { CreateSensoryProcessingMeasureDto } from './dto/createSensoryProcessingMeasure.dto';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';

@Controller('sensory-processing-measure')
export class SensoryProcessingMeasureController {
  constructor(private readonly sensoryProcessingMeasureService: SensoryProcessingMeasureService) {}

  @Post()
  create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureDto) {
    return this.sensoryProcessingMeasureService.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  findAll() {
    return this.sensoryProcessingMeasureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoryProcessingMeasureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateSensoryProcessingMeasureDto) {
    return this.sensoryProcessingMeasureService.update(+id, updateSensoryProcessingMeasureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoryProcessingMeasureService.remove(+id);
  }
}
