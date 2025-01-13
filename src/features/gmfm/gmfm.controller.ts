import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GmfmService } from './gmfm.service';
import { CreateGmfmDto } from './dto/create-gmfm.dto';
import { UpdateGmfmDto } from './dto/update-gmfm.dto';
import { IGmfmEntity } from 'src/entities/gmfm.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('GMFM')
@Controller('gmfm')
export class GmfmController {
  constructor(private readonly gmfmService: GmfmService) {}

  @Post()
  async create(@Body() data: CreateGmfmDto) {
    return await this.gmfmService.create(data);
  }

  @Get()
  async findAll(): Promise<IGmfmEntity[]> {
    return await this.gmfmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IGmfmEntity> {
    return await this.gmfmService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGmfmDto: UpdateGmfmDto) {
    return this.gmfmService.update(id, updateGmfmDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.gmfmService.delete(id);
  }
}
