import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaListenerService } from './abaListener.service';
import { CreateAbaListenerDto } from './dto/createAbaListener.dto';
import { UpdateAbaListenerDto } from './dto/updateAbaListener.dto';
import { QueryAbaListenerDto } from './dto/queryAbaListener.dto';

@Controller('aba-listener')
export class AbaListenerController {
  constructor(private readonly abaListenerService: AbaListenerService) {}

  @Post()
  async create(@Body() createAbaListenerDto: CreateAbaListenerDto) {
    return await this.abaListenerService.create(createAbaListenerDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaListenerDto) {
    return await this.abaListenerService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaListenerService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaListenerDto: UpdateAbaListenerDto) {
    return await this.abaListenerService.update(id, updateAbaListenerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaListenerService.remove(id);
  }
}