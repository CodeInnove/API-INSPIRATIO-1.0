import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { SensoryProcessingMeasureService } from './sensoryProcessingMeasure.service';
import { CreateSensoryProcessingMeasureHomeDto } from './dto/createSensoryProcessingMeasure.dto';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';
import { ApiTags } from '@nestjs/swagger';
import { QuerySpmHomeDto } from './dto/querySensoryProcessingMeasure.dto';

@ApiTags('SPM Home')
@Controller('sensory-processing-measure')
export class SensoryProcessingMeasureController {
  constructor(private readonly sensoryProcessingMeasureService: SensoryProcessingMeasureService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureHomeDto) {
    return await this.sensoryProcessingMeasureService.create(createSensoryProcessingMeasureDto);
  }

  @Get()
   async findAll(@Query() query: QuerySpmHomeDto) {
      return await this.sensoryProcessingMeasureService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureService.findById(id);
  }

  @Put(':id')
  async updateSpm(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateSensoryProcessingMeasureDto) {
    return await this.sensoryProcessingMeasureService.update(id, updateSensoryProcessingMeasureDto);
  }

  @Delete(':id')
  async deleteSpm(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureService.delete(id);
  }
}
