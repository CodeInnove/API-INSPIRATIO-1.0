import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VbmappService } from './vbmapp-pei.service';
import { CreateVbmappPeiDto } from './dto/create-vbmapp-pei.dto';
import { UpdateVbmappPeiDto } from './dto/update-vbmapp-pei.dto';
import { ApiTags } from '@nestjs/swagger';
import { VbmappEntity } from 'src/entities/vbmapp-pei.entity';

@ApiTags('Vbmapp')
@Controller('vbmapp')
export class VbmappPeiController {
  constructor(
    private readonly vbmappService: VbmappService
  ) {}

  @Post()
  async create(@Body() data: CreateVbmappPeiDto): Promise<VbmappEntity> {
    return await this.vbmappService.create(data);
  }

  @Get()
  async findAll(): Promise<VbmappEntity[]> {
    return await this.vbmappService.findAll();
  }

  @Get(':id')
  async findOne(@Param() id: string): Promise<VbmappEntity> {
    return await this.vbmappService.findOne(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: UpdateVbmappPeiDto): Promise<VbmappEntity> {
    return await this.vbmappService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<VbmappEntity> {
    return await this.vbmappService.delete(id);
  }
}
