import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScaleAsrsService } from './scale-asrs.service';
import { CreateScaleAsrDto } from './dto/create-scale-asr.dto';
import { UpdateScaleAsrDto } from './dto/update-scale-asr.dto';

@Controller('scale-asrs')
export class ScaleAsrsController {
  constructor(private readonly scaleAsrsService: ScaleAsrsService) {}

  @Post()
  create(@Body() createScaleAsrDto: CreateScaleAsrDto) {
    return this.scaleAsrsService.create(createScaleAsrDto);
  }

  @Get()
  findAll() {
    return this.scaleAsrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scaleAsrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScaleAsrDto: UpdateScaleAsrDto) {
    return this.scaleAsrsService.update(+id, updateScaleAsrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scaleAsrsService.remove(+id);
  }
}
