import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/incomeTableCreate.dto";
import { UpdateIncomeTableDto } from "./dto/incomeTableUpdate.dto";
import { IncomeTableService } from "./incomeTable.service";

@ApiTags('Income Table')
@Controller('income-table')
export class IncomeTableController {
  constructor(private readonly incomeTableService: IncomeTableService) {}

  @Post()
  create(@Body() data: CreateTableDto) {
    return this.incomeTableService.create(data);
  }

  @Get()
  findAll() {
    return this.incomeTableService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.incomeTableService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateIncomeTableDto) {
    return this.incomeTableService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.incomeTableService.delete(id);
  }
}

