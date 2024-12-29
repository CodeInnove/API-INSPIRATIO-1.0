import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomeAssessmentService } from './incomeAssessment.service';
import { CreateIncomeAssessmentDto } from './dto/createIncomeAssessment.dto';
import { UpdateIncomeAssessmentDto } from './dto/updateIncomeAssessment.dto';

@Controller('income-assessment')
export class IncomeAssessmentController {
  constructor(private readonly incomeAssessmentService: IncomeAssessmentService) {}

  @Post()
  create(@Body() createIncomeAssessmentDto: CreateIncomeAssessmentDto) {
    return this.incomeAssessmentService.create(createIncomeAssessmentDto);
  }

  @Get()
  findAll() {
    return this.incomeAssessmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeAssessmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeAssessmentDto: UpdateIncomeAssessmentDto) {
    return this.incomeAssessmentService.update(+id, updateIncomeAssessmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeAssessmentService.remove(+id);
  }
}
