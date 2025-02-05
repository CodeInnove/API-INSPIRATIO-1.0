import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaTouchService } from './abaTouch.service';
import { CreateAbaTouchDto } from './dto/createAbaTouch.dto';
import { UpdateAbaTouchDto } from './dto/updateAbaTouch.dto';
import { QueryAbaTouchDto } from './dto/queryAbaTouch.dto';

@Controller('aba-touch')
export class AbaTouchController {
  constructor(private readonly abaTouchService: AbaTouchService) {}

  @Post()
  async create(@Body() createAbaTouchDto: CreateAbaTouchDto) {
    return await this.abaTouchService.create(createAbaTouchDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaTouchDto) {
    return await this.abaTouchService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaTouchService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaTouchDto: UpdateAbaTouchDto) {
    return await this.abaTouchService.update(id, updateAbaTouchDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaTouchService.remove(id);
  }
}