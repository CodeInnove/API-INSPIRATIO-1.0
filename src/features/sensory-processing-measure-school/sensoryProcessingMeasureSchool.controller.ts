import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolService } from './sensoryProcessingMeasureSchool.service';
import { CreateSensoryProcessingMeasureSchoolDto } from './dto/createSensoryProcessingMeasureSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolDto } from './dto/updateSensoryProcessingMeasureSchool.dto';
import { ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { QuerySpmSchoolDto } from './dto/querySensoryProcessingMeasureSchool.dto';

@ApiTags('SPM School')
@Controller('sensory-processing-measure-School')
export class SensoryProcessingMeasureSchoolController {
  constructor(private readonly sensoryProcessingMeasureSchool: SensoryProcessingMeasureSchoolService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureSchoolDto) {
    return await this.sensoryProcessingMeasureSchool.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAll(@Query() query: QuerySpmSchoolDto) {
    return await this.sensoryProcessingMeasureSchool.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureSchool.findById(id);
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
