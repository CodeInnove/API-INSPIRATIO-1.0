import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SensoryProcessingMeasurePreschoolService } from './sensoryProcessingMeasurePreschoolHome.service';
import { CreateSensoryProcessingMeasurePreschoolDto } from './dto/createSensoryProcessingMeasurePreschool.dto';
import { UpdateSensoryProcessingMeasurePreschoolDto } from './dto/updateSensoryProcessingMeasurePreschool.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SPM PreSchool Home')
@Controller('sensory-processing-measure-PreSchool-home')
export class SensoryProcessingMeasurePreschoolController {
  constructor(private readonly sensoryProcessingMeasurePreschool: SensoryProcessingMeasurePreschoolService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasurePreschoolDto) {
    return await this.sensoryProcessingMeasurePreschool.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAll() {
    return await this.sensoryProcessingMeasurePreschool.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sensoryProcessingMeasurePreschool.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSPMPreSchoolDto: UpdateSensoryProcessingMeasurePreschoolDto) {
    return await this.sensoryProcessingMeasurePreschool.update(id, updateSPMPreSchoolDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sensoryProcessingMeasurePreschool.delete(id);
  }
}
