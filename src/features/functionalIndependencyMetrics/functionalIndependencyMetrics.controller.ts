import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FunctionalIndependencyMetricsService } from "./functionalIndependencyMetrics.service";
import { FunctionalIndependencyMetricsUpdateDTO } from "./dto/functionalIndependencyMetricsUpdate.dto";
import { CreateFunctionalIndependencyMetricDTO } from "./dto/functionalIndependencyMetricsCreate.dto";

@ApiTags('Functional Independency Metrics')
@Controller('functional-independency-metrics')
export class FunctionalIndependencyMetricsController {
  constructor(private readonly functionalIndependencyMetricsService: FunctionalIndependencyMetricsService) {}

  @Post()
  async create(@Body() data: CreateFunctionalIndependencyMetricDTO) {
    return await this.functionalIndependencyMetricsService.create(data);
  }

  @Get()
  async findAll() {
    return await this.functionalIndependencyMetricsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.functionalIndependencyMetricsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: FunctionalIndependencyMetricsUpdateDTO) {
    return await this.functionalIndependencyMetricsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.functionalIndependencyMetricsService.delete(id);
  }
}