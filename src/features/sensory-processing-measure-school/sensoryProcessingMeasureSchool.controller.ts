import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolService } from './sensoryProcessingMeasureSchool.service';
import { CreateSensoryProcessingMeasureSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SPM School')
@Controller('sensory-processing-measure-School')
export class SensoryProcessingMeasureSchoolController {
  constructor(private readonly sensoryProcessingMeasureSchool: SensoryProcessingMeasureSchoolService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureSchoolDto) {
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
  async update(@Param('id') id: string, @Body() updateSPMPreSchoolDto: UpdateSensoryProcessingMeasureSchoolDto) {
    return await this.sensoryProcessingMeasureSchool.update(id, updateSPMPreSchoolDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureSchool.delete(id);
  }
}
