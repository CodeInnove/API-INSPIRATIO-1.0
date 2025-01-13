import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AmiofeService } from './amiofe.service';
import { CreateAmiofeDto } from './dto/create-amiofe.dto';
import { UpdateAmiofeDto } from './dto/update-amiofe.dto';
import { query } from 'express';
import { QueryAmiofeDto } from './dto/query-amiofe.dto';

@ApiTags('Amiofe')
@Controller('amiofe')
export class AmiofeController {
  constructor(private readonly amiofeService: AmiofeService) {}

  @Post()
  create(@Body() createAmiofeDto: CreateAmiofeDto) {
    return this.amiofeService.create(createAmiofeDto);
  }

  @Get()
  findAll(@Query() query: QueryAmiofeDto) {
    return this.amiofeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amiofeService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAmiofeDto: UpdateAmiofeDto) {
    return this.amiofeService.update(id, updateAmiofeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.amiofeService.delete(id);
  }
}
