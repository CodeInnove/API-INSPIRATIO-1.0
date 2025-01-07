import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/incomeTableCreate.dto";
import { IIncomeTableEntity } from "src/entities/incomeTable.entity";
import { IncomeTableService } from "./incomeTable.service";
import { QueryIncomeTableDto } from "./dto/incomeTableCreateQuery.dto";
import { UpdateIncomeTableDto } from "./dto/incomeTableUpdate.dto";


@ApiTags('IncomeTable')
@Controller('income-Table')
export class IncomeTableController {
  constructor(
    private readonly incomeTableService: IncomeTableService
  ) {}

  @Post()
  create(@Body() data: CreateTableDto): Promise<IIncomeTableEntity> {
    return  this.incomeTableService.create(data);
  }

  @Get()
  findAll(@Query() query: QueryIncomeTableDto) {
    return this.incomeTableService.findAll(query);
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
  delete(@Param() id: string) {
    return this.incomeTableService.delete(id);
  }
}
