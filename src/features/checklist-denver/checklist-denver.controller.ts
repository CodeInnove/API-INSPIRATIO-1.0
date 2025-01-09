import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChecklistDenverService } from './checklist-denver.service';
import { CreateChecklistDenverDto } from './dto/create-checklist-denver.dto';
import { UpdateChecklistDenverDto } from './dto/update-checklist-denver.dto';
import { ApiTags } from '@nestjs/swagger';
import { IChecklistDenverEntity } from 'src/entities/checklist-denver.entity';

@ApiTags('Checklist Denver')
@Controller('checklist-denver')
export class ChecklistDenverController {
  constructor(private readonly checklistDenverService: ChecklistDenverService) {}

  @Post()
  async create(@Body() data: CreateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.checklistDenverService.create(data);
  }

  @Get()
  async findAll(): Promise<IChecklistDenverEntity[]> {
    return await this.checklistDenverService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IChecklistDenverEntity> {
    return await this.checklistDenverService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.checklistDenverService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IChecklistDenverEntity> {
    return await this.checklistDenverService.delete(id);
  }
}
