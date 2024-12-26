import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PortageGuidetoPreschoolEducationService } from './portage-guideto-preschool-education.service';
import { CreatePortageGuidetoPreschoolEducationDto } from './dto/create-portage-guideto-preschool-education.dto';
import { ApiTags } from '@nestjs/swagger';
import { IPortageGuidetoPreschoolEducationEntity } from 'src/entities/portage-guideto-preschool-education.entity';

@ApiTags('PortageGuidetoPreschoolEducation')
@Controller('portage-guideto-preschool-education')
export class PortageGuidetoPreschoolEducationController {
  constructor(private readonly portageGuidetoPreschoolEducationService: PortageGuidetoPreschoolEducationService) {}

   @Post()
    async create(@Body() data: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
      return await this.portageGuidetoPreschoolEducationService.create(data);
    }
  
    @Get()
    async findAll(): Promise<IPortageGuidetoPreschoolEducationEntity[]> {
      return await this.portageGuidetoPreschoolEducationService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param() id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
      return await this.portageGuidetoPreschoolEducationService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param() id: string, @Body() data: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
      return await this.portageGuidetoPreschoolEducationService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param() id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
      return await this.portageGuidetoPreschoolEducationService.delete(id);
    }
  }
