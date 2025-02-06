import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaWaitService } from './abaWait.service';
import { CreateAbaWaitDto } from './dto/createAbaWait.dto';
import { UpdateAbaWaitDto } from './dto/updateAbaWait.dto';
import { QueryAbaWaitDto } from './dto/queryAbaWait.dto';

@Controller('aba-wait')
export class AbaWaitController {
  constructor(private readonly abaWaitService: AbaWaitService) {}

  @Post()
  async create(@Body() createAbaWaitDto: CreateAbaWaitDto) {
    return await this.abaWaitService.create(createAbaWaitDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaWaitDto) {
    return await this.abaWaitService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaWaitService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaWaitDto: UpdateAbaWaitDto) {
    return await this.abaWaitService.update(id, updateAbaWaitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaWaitService.remove(id);
  }
}