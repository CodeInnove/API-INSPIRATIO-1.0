import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/incomeTableCreate.dto";
import { IIncomeTableEntity } from "src/entities/incomeTable.entity";
import { IncomeTableService } from "./incomeTable.service";
import { QueryIncomeTableDto } from "./dto/incomeTableCreateQuery.dto";


@ApiTags('IncomeTable')
@Controller('income-Table')
export class IncomeTableController {
  constructor(
    private readonly afcpService: IncomeTableService
  ) {}

  @Post()
  async createAfcp(@Body() data: CreateTableDto): Promise<IIncomeTableEntity> {
    return await this.afcpService.create(data);
  }

  @Get()
  async findAll(@Query() query: QueryIncomeTableDto) {
    return await this.afcpService.findAll(query);
  }

  @Get(':id')
  async findById(@Param() id: string) {
    return await this.afcpService.findById(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: CreateTableDto) {
    return await this.afcpService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return await this.afcpService.delete(id);
  }
}
