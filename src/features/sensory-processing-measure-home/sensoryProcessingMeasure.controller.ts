import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SensoryProcessingMeasureService } from './sensoryProcessingMeasure.service';
import { CreateSensoryProcessingMeasureDto } from './dto/createSensoryProcessingMeasure.dto';
import { UpdateSensoryProcessingMeasureDto } from './dto/updateSensoryProcessingMeasure.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SPM Home')
@Controller('sensory-processing-measure')
export class SensoryProcessingMeasureController {
  constructor(private readonly sensoryProcessingMeasureService: SensoryProcessingMeasureService) {}

  @Post()
  async createSpm(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureDto) {
    return await this.sensoryProcessingMeasureService.createSpm(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAllSpm() {
    return await this.sensoryProcessingMeasureService.findAllSpm();
  }

  @Get(':id')
  async findOneSpm(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureService.findOneSpm(id);
  }

  @Put(':id')
  async updateSpm(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateSensoryProcessingMeasureDto) {
    return await this.sensoryProcessingMeasureService.updateSpm(id, updateSensoryProcessingMeasureDto);
  }

  @Delete(':id')
  async deleteSpm(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureService.deleteSpm(id);
  }
}
