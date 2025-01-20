import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServiceEvolutionService } from './service-evolution.service';
import { CreateServiceEvolutionDto } from './dto/create-service-evolution.dto';
import { UpdateServiceEvolutionDto } from './dto/update-service-evolution.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Service Evolution')
@Controller('service-evolution')
export class ServiceEvolutionController {
  constructor(private readonly serviceEvolotuionService: ServiceEvolutionService) {}

  @Post()
  async createSpm(@Body() createSensoryProcessingMeasureDto: CreateServiceEvolutionDto) {
    return await this.serviceEvolotuionService.create(createSensoryProcessingMeasureDto);
  }

  @Get()
  async findAllSpm() {
    return await this.serviceEvolotuionService.findAll();
  }

  @Get(':id')
  async findOneSpm(@Param('id') id: string) {
    return await this.serviceEvolotuionService.findOne(id);
  }

  @Put(':id')
  async updateSpm(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateServiceEvolutionDto) {
    return await this.serviceEvolotuionService.update(id, updateSensoryProcessingMeasureDto);
  }

  @Delete(':id')
  async deleteSpm(@Param('id') id: string) {
    return await this.serviceEvolotuionService.delete(id);
  }
}
