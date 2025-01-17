import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolPreschoolService } from './sensoryProcessingMeasureSchoolPreSchool.service';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SPM PreSchool School')
@Controller('sensory-processing-measure-PreSchool-School')
export class SensoryProcessingMeasureSchoolPreschoolController {
  constructor(private readonly sensoryProcessingMeasureSchool: SensoryProcessingMeasureSchoolPreschoolService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureSchoolPreschoolDto) {
    return await this.sensoryProcessingMeasureSchool.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAll() {
    return await this.sensoryProcessingMeasureSchool.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureSchool.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSPMPreSchoolDto: UpdateSensoryProcessingMeasureSchoolPreschoolDto) {
    return await this.sensoryProcessingMeasureSchool.update(id, updateSPMPreSchoolDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureSchool.delete(id);
  }
}
