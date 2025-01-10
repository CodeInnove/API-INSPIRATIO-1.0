import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GmfmService } from './gmfm.service';
import { CreateGmfmDto } from './dto/create-gmfm.dto';
import { UpdateGmfmDto } from './dto/update-gmfm.dto';

@Controller('gmfm')
export class GmfmController {
  constructor(private readonly gmfmService: GmfmService) {}

  @Post()
  create(@Body() createGmfmDto: CreateGmfmDto) {
    return this.gmfmService.create(createGmfmDto);
  }

  @Get()
  findAll() {
    return this.gmfmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gmfmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGmfmDto: UpdateGmfmDto) {
    return this.gmfmService.update(+id, updateGmfmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gmfmService.remove(+id);
  }
}
