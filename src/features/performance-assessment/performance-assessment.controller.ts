import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PerformanceAssessmentService } from './performance-assessment.service';
import { CreatePerformanceAssessmentDto } from './dto/create-performance-assessment.dto';
import { UpdatePerformanceAssessmentDto } from './dto/update-performance-assessment.dto';
import { ApiTags } from '@nestjs/swagger';
import { IPerformanceAssessmenteEntity } from 'src/entities/performance-assessment.entity';

@ApiTags(' Performance Assessment')
@Controller('performance-assessment')
export class PerformanceAssessmentController {
  constructor(private readonly performanceAssessmentService: PerformanceAssessmentService) {}

  @Post()
    async create(@Body() data: CreatePerformanceAssessmentDto) {
      return await this.performanceAssessmentService.create(data);
    }
  
    @Get()
    async findAll(): Promise<IPerformanceAssessmenteEntity[]> {
      return await this.performanceAssessmentService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IPerformanceAssessmenteEntity> {
      return await this.performanceAssessmentService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateGmfmDto: UpdatePerformanceAssessmentDto) {
      return this.performanceAssessmentService.update(id, updateGmfmDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.performanceAssessmentService.delete(id);
    }
  }
