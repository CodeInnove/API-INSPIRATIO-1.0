import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolPreschoolService } from './sensoryProcessingMeasureSchoolPreSchool.service';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';

@Controller('sensory-processing-measure-school-preschool')
export class SensoryProcessingMeasureSchoolPreschoolController {
  constructor(private readonly sensoryProcessingMeasureSchoolPreschoolService: SensoryProcessingMeasureSchoolPreschoolService) {}

  @Post()
  create(@Body() createSensoryProcessingMeasureSchoolPreschoolDto: CreateSensoryProcessingMeasureSchoolPreschoolDto) {
    return this.sensoryProcessingMeasureSchoolPreschoolService.create(createSensoryProcessingMeasureSchoolPreschoolDto);
  }

  @Get()
  findAll() {
    return this.sensoryProcessingMeasureSchoolPreschoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoryProcessingMeasureSchoolPreschoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensoryProcessingMeasureSchoolPreschoolDto: UpdateSensoryProcessingMeasureSchoolPreschoolDto) {
    return this.sensoryProcessingMeasureSchoolPreschoolService.update(+id, updateSensoryProcessingMeasureSchoolPreschoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoryProcessingMeasureSchoolPreschoolService.remove(+id);
  }
}
