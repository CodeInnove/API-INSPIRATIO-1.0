import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PortageGuidetoPhysiotherapyService } from './portage-guideto-physiotherapy.service';
import { CreatePortageGuidetoPhysiotherapyDto } from './dto/create-portage-guideto-physiotherapy.dto';
import { UpdatePortageGuidetoPhysiotherapyDto } from './dto/update-portage-guideto-physiotherapy.dto';
import { IPortageGuidetoPhysiotherapyEntity } from 'src/entities/portage-guideto-physiotherapy.entity';
import { ApiTags } from '@nestjs/swagger';
import { QueryPortageMotorPhysioDto } from './dto/query-portage-guideto-physiotherapy.dto';

@ApiTags('PortageGuidetoPhysiotherapy')
@Controller('portage-guideto-physiotherapy')
export class PortageGuidetoPhysioterapyController {
  constructor(private readonly portageGuidetoPhysiotherapyService: PortageGuidetoPhysiotherapyService) {}

   @Post()
    async create(@Body() data: CreatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
      return await this.portageGuidetoPhysiotherapyService.create(data);
    }
  
    @Get()
    async findAll(@Query() query: QueryPortageMotorPhysioDto) {
      return await this.portageGuidetoPhysiotherapyService.findAll(query);
    }
  
    @Get(':id')
    async findById(@Param('id') id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
      return await this.portageGuidetoPhysiotherapyService.findById(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
      return await this.portageGuidetoPhysiotherapyService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
      return await this.portageGuidetoPhysiotherapyService.delete(id);
    }
  }
