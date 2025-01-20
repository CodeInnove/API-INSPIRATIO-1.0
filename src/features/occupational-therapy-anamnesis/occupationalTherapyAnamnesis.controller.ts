import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OccupationalTherapyAnamnesisService } from './occupationalTherapyAnamnesis.service';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('occupational-therapy-anamnesis')
@Controller('occupational-therapy-anamnesis')
export class OccupationalTherapyAnamnesisController {
  constructor(private readonly occupationalTherapyAnamnesisService: OccupationalTherapyAnamnesisService) {}

  @Post()
     async create(@Body() createSensoryProcessingMeasureDto: CreateOccupationalTherapyAnamnesisDto) {
       return await this.occupationalTherapyAnamnesisService.create(createSensoryProcessingMeasureDto);
     }
   
     @Get()
     async findAll() {
       return await this.occupationalTherapyAnamnesisService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: string) {
       return await this.occupationalTherapyAnamnesisService.findOne(id);
     }
   
     @Put(':id')
     async update(@Param('id') id: string, @Body() updateSensoryProcessingMeasureDto: UpdateOccupationalTherapyAnamnesisDto) {
       return await this.occupationalTherapyAnamnesisService.update(id, updateSensoryProcessingMeasureDto);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: string) {
       return await this.occupationalTherapyAnamnesisService.delete(id);
     }
   }
