import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomeTableService } from './incomeTable.service';
import { CreateIncomeTableDto } from './dto/incomeTableCreate.dto';
import { UpdateIncomeTableDto } from './dto/incomeTableUpdate.dto';

@Controller('income-table')
export class IncomeTableController {
  constructor(private readonly incomeTableService: IncomeTableService) {}

  @Post()
  create(@Body() createIncomeTableDto: CreateIncomeTableDto) {
    return this.incomeTableService.create(createIncomeTableDto);
  }

  @Get()
  findAll() {
    return this.incomeTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeTableDto: UpdateIncomeTableDto) {
    return this.incomeTableService.update(+id, updateIncomeTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeTableService.remove(+id);
  }
}
