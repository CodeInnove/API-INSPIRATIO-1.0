import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MchatRService } from './mchat-r.service';
import { TotalDto } from './dto/create-mchat-r.dto';
import { UpdateMchatRDto } from './dto/update-mchat-r.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mchat-R')
@Controller('mchat-r')
export class MchatRController {
  constructor(private readonly mchatRService: MchatRService) {}

  @Post()
  create(@Body() createMchatRDto: TotalDto) {
    return this.mchatRService.create(createMchatRDto);
  }

  @Get()
  findAll() {
    return this.mchatRService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mchatRService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMchatRDto: UpdateMchatRDto) {
    return this.mchatRService.update(id, updateMchatRDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mchatRService.remove(id);
  }
}
