import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutisticTraitScalesService } from './autisticTraitScales.service';
import { CreateAutisticTraitScaleDto } from './dto/createAutisticTraitScales.dto';
import { UpdateAutisticTraitScaleDto } from './dto/updateAutisticTraitScales.dto';

@Controller('autistic-trait-scales')
export class AutisticTraitScalesController {
  constructor(private readonly autisticTraitScalesService: AutisticTraitScalesService) {}

  @Post()
  create(@Body() createAutisticTraitScaleDto: CreateAutisticTraitScaleDto) {
    return this.autisticTraitScalesService.create(createAutisticTraitScaleDto);
  }

  @Get()
  findAll() {
    return this.autisticTraitScalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autisticTraitScalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutisticTraitScaleDto: UpdateAutisticTraitScaleDto) {
    return this.autisticTraitScalesService.update(+id, updateAutisticTraitScaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autisticTraitScalesService.remove(+id);
  }
}
