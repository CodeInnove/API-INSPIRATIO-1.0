import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaEyeContactService } from './aba-eye-contact.service';
import { CreateAbaEyeContactDto } from './dto/create-aba-eye-contact.dto';
import { UpdateAbaEyeContactDto } from './dto/update-aba-eye-contact.dto';
import { QueryAbaEyeContactDto } from './dto/query-aba-eye-contact.dto';

@Controller('aba-eye-contacts')
export class AbaEyeContactController {
  constructor(private readonly abaEyeContactService: AbaEyeContactService) {}

  @Post()
  async create(@Body() createAbaEyeContactDto: CreateAbaEyeContactDto) {
    return await this.abaEyeContactService.create(createAbaEyeContactDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaEyeContactDto) {
    return await this.abaEyeContactService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaEyeContactService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaEyeContactDto: UpdateAbaEyeContactDto) {
    return await this.abaEyeContactService.update(id, updateAbaEyeContactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaEyeContactService.remove(id);
  }
}