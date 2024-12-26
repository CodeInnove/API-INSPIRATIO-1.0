import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';
import { CreateAutismBehaviorChecklistDto } from './dto/autismBehaviorChecklistCreate.dto';
import { UpdateAutismBehaviorChecklistDto } from './dto/autismBehaviorChecklistUpdate.dto';

@Controller('autism-behavior-checklist')
export class AutismBehaviorChecklistController {
  constructor(private readonly autismBehaviorChecklistService: AutismBehaviorChecklistService) {}

  @Post()
  create(@Body() createAutismBehaviorChecklistDto: CreateAutismBehaviorChecklistDto) {
    return this.autismBehaviorChecklistService.create(createAutismBehaviorChecklistDto);
  }

  @Get()
  findAll() {
    return this.autismBehaviorChecklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autismBehaviorChecklistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutismBehaviorChecklistDto: UpdateAutismBehaviorChecklistDto) {
    return this.autismBehaviorChecklistService.update(+id, updateAutismBehaviorChecklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autismBehaviorChecklistService.remove(+id);
  }
}
