import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { SensoryProcessingMeasureSchoolPreschoolService } from './sensoryProcessingMeasureSchoolPreSchool.service';
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/createSensoryProcessingMeasureSchoolPreSchool.dto';
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from './dto/updateSensoryProcessingMeasureSchoolPreSchool.dto';
import { ApiTags } from '@nestjs/swagger';
import { QuerySpmSchoolPreSchoolDto } from './dto/querySensoryProcessingMeasureSchoolPreSchool.dto';

@ApiTags('SPM PreSchool School')
@Controller('sensory-processing-measure-PreSchool-School')
export class SensoryProcessingMeasureSchoolPreschoolController {
  constructor(private readonly sensoryProcessingMeasureSchool: SensoryProcessingMeasureSchoolPreschoolService) {}

  @Post()
  async create(@Body() createSensoryProcessingMeasureDto: CreateSensoryProcessingMeasureSchoolPreschoolDto) {
    return await this.sensoryProcessingMeasureSchool.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAll(@Query() query: QuerySpmSchoolPreSchoolDto) {
    return await this.sensoryProcessingMeasureSchool.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.sensoryProcessingMeasureSchool.findById (id);
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
