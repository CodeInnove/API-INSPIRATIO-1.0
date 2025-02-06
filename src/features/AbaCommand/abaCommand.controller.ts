import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaCommandService } from './abaCommand.service';
import { CreateAbaCommandDto } from './dto/createAbaCommand.dto';
import { UpdateAbaCommandDto } from './dto/updateAbaCommand.dto';
import { QueryAbaCommandDto } from './dto/queryAbaCommand.dto';

@Controller('aba-command')
export class AbaCommandController {
  constructor(private readonly abaCommandService: AbaCommandService) {}

  @Post()
  async create(@Body() createAbaCommandDto: CreateAbaCommandDto) {
    return await this.abaCommandService.create(createAbaCommandDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaCommandDto) {
    return await this.abaCommandService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaCommandService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaCommandDto: UpdateAbaCommandDto) {
    return await this.abaCommandService.update(id, updateAbaCommandDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaCommandService.remove(id);
  }
}