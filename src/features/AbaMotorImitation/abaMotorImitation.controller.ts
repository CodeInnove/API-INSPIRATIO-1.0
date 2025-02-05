import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbaMotorImitationService } from './abaMotorImitation.service';
import { CreateAbaMotorImitationDto } from './dto/createAbaMotorImitation.dto';
import { UpdateAbaMotorImitationDto } from './dto/updateAbaMotorImitation.dto';
import { QueryAbaMotorImitationDto } from './dto/queryAbaMotorImitation.dto';

@Controller('aba-motor-imitation')
export class AbaMotorImitationController {
  constructor(private readonly abaMotorImitationService: AbaMotorImitationService) {}

  @Post()
  async create(@Body() createAbaMotorImitationDto: CreateAbaMotorImitationDto) {
    return await this.abaMotorImitationService.create(createAbaMotorImitationDto);
  }

  @Get()
  async findAll(@Query() query: QueryAbaMotorImitationDto) {
    return await this.abaMotorImitationService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abaMotorImitationService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAbaMotorImitationDto: UpdateAbaMotorImitationDto) {
    return await this.abaMotorImitationService.update(id, updateAbaMotorImitationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abaMotorImitationService.remove(id);
  }
}