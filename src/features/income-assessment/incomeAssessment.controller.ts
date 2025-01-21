import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { IncomeAssessmentService } from './incomeAssessment.service';
import { CreateIncomeAssessmentDto } from './dto/createIncomeAssessment.dto';
import { UpdateIncomeAssessmentDto } from './dto/updateIncomeAssessment.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryIncomeAssessmentDto } from './dto/queryIncomeAssessment.dto';

@ApiTags('income-assessment')
@Controller('income-assessment')
export class IncomeAssessmentController {
  constructor(private readonly incomeAssessmentService: IncomeAssessmentService) {}

  @Post()
  async create(@Body() createIncomeAssessmentDto: CreateIncomeAssessmentDto) {
    return await this.incomeAssessmentService.create(createIncomeAssessmentDto);
  }

  @Get()
  async findAll(@Query() query: QueryIncomeAssessmentDto) {
    return await this.incomeAssessmentService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.incomeAssessmentService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateIncomeAssessmentDto: UpdateIncomeAssessmentDto) {
    return await this.incomeAssessmentService.update(id, updateIncomeAssessmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.incomeAssessmentService.delete(id);
  }
}
