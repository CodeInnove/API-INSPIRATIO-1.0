import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaIntraverbalService } from './abaIntraverbal.service';
import { CreateAbaIntraverbalDto } from './dto/createAbaIntraverbal.dto';
import { UpdateAbaIntraverbalDto } from './dto/updateAbaIntraverbal.dto';
import { QueryAbaIntraverbalDto } from './dto/queryAbaIntraverbal.dto';

@Controller('aba-intraverbal')
export class AbaIntraverbalController {
  constructor(private readonly abaIntraverbalService: AbaIntraverbalService) {}

  @Post()
  async create(@Body() createAbaIntraverbalDto: CreateAbaIntraverbalDto) {
    return await this.abaIntraverbalService.create(createAbaIntraverbalDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaIntraverbalDto) {
    return await this.abaIntraverbalService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaIntraverbalService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaIntraverbalDto: UpdateAbaIntraverbalDto) {
    return await this.abaIntraverbalService.update(id, updateAbaIntraverbalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaIntraverbalService.remove(id);
  }
}