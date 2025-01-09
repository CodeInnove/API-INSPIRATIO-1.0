import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChecklistDenverService } from './checklist-denver.service';
import { CreateChecklistDenverDto } from './dto/create-checklist-denver.dto';
import { UpdateChecklistDenverDto } from './dto/update-checklist-denver.dto';

@Controller('checklist-denver')
export class ChecklistDenverController {
  constructor(private readonly checklistDenverService: ChecklistDenverService) {}

  @Post()
  create(@Body() createChecklistDenverDto: CreateChecklistDenverDto) {
    return this.checklistDenverService.create(createChecklistDenverDto);
  }

  @Get()
  findAll() {
    return this.checklistDenverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checklistDenverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChecklistDenverDto: UpdateChecklistDenverDto) {
    return this.checklistDenverService.update(+id, updateChecklistDenverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checklistDenverService.remove(+id);
  }
}
