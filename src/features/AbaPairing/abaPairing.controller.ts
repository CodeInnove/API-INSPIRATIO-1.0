import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaPairingService } from './abaPairing.service';
import { CreateAbaPairingDto } from './dto/createAbaPairing.dto';
import { UpdateAbaPairingDto } from './dto/updateAbaPairing';
import { QueryAbaPairingDto } from './dto/queryAbaPairing.dto';

@Controller('aba-pairing')
export class AbaPairingController {
  constructor(private readonly abaPairingService: AbaPairingService) {}

  @Post()
  async create(@Body() createAbaPairingDto: CreateAbaPairingDto) {
    return await this.abaPairingService.create(createAbaPairingDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaPairingDto) {
    return await this.abaPairingService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaPairingService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaPairingDto: UpdateAbaPairingDto) {
    return await this.abaPairingService.update(id, updateAbaPairingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaPairingService.remove(id);
  }
}