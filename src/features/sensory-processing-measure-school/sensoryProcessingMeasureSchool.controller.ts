import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolService } from './sensoryProcessingMeasureSchool.service';
import { CreateSensoryProcessingMeasureSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';

@Controller('sensory-processing-measure-school')
export class SensoryProcessingMeasureSchoolController {
  constructor(private readonly sensoryProcessingMeasureSchoolService: SensoryProcessingMeasureSchoolService) {}

  @Post()
  create(@Body() createSensoryProcessingMeasureSchoolDto: CreateSensoryProcessingMeasureSchoolDto) {
    return this.sensoryProcessingMeasureSchoolService.create(createSensoryProcessingMeasureSchoolDto);
  }

  @Get()
  findAll() {
    return this.sensoryProcessingMeasureSchoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoryProcessingMeasureSchoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensoryProcessingMeasureSchoolDto: UpdateSensoryProcessingMeasureSchoolDto) {
    return this.sensoryProcessingMeasureSchoolService.update(+id, updateSensoryProcessingMeasureSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoryProcessingMeasureSchoolService.remove(+id);
  }
}
