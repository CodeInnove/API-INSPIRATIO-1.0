import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbaEyeContactService } from './aba-eye-contact.service';
import { CreateAbaEyeContactDto } from './dto/create-aba-eye-contact.dto';
import { UpdateAbaEyeContactDto } from './dto/update-aba-eye-contact.dto';

@Controller('aba-eye-contact')
export class AbaEyeContactController {
  constructor(private readonly abaEyeContactService: AbaEyeContactService) {}

  @Post()
  create(@Body() createAbaEyeContactDto: CreateAbaEyeContactDto) {
    return this.abaEyeContactService.create(createAbaEyeContactDto);
  }

  @Get()
  findAll() {
    return this.abaEyeContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abaEyeContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbaEyeContactDto: UpdateAbaEyeContactDto) {
    return this.abaEyeContactService.update(+id, updateAbaEyeContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abaEyeContactService.remove(+id);
  }
}
