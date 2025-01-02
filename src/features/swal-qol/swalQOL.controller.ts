import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwalQolService } from './swalQOL.service';
import { CreateSwalQolDto } from './dto/create-swal-qol.dto';
import { UpdateSwalQolDto } from './dto/update-swal-qol.dto';

@Controller('swal-qol')
export class SwalQolController {
  constructor(private readonly swalQolService: SwalQolService) {}

  @Post()
  create(@Body() createSwalQolDto: CreateSwalQolDto) {
    return this.swalQolService.create(createSwalQolDto);
  }

  @Get()
  findAll() {
    return this.swalQolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swalQolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwalQolDto: UpdateSwalQolDto) {
    return this.swalQolService.update(+id, updateSwalQolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swalQolService.remove(+id);
  }
}
