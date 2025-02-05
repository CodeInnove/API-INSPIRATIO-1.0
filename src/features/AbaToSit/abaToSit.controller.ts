import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaToSitService } from './abaToSit.service';
import { CreateAbaToSitDto } from './dto/createAbaToSit.dto';
import { UpdateAbaToSitDto } from './dto/updateAbaToSit.dto';
import { QueryAbaToSitDto } from './dto/queryAbaToSit.dto';

@Controller('aba-to-sit')
export class AbaToSitController {
  constructor(private readonly abaToSitService: AbaToSitService) {}

  @Post()
  async create(@Body() createAbaToSitDto: CreateAbaToSitDto) {
    return await this.abaToSitService.create(createAbaToSitDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaToSitDto) {
    return await this.abaToSitService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaToSitService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaToSitDto: UpdateAbaToSitDto) {
    return await this.abaToSitService.update(id, updateAbaToSitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaToSitService.remove(id);
  }
}