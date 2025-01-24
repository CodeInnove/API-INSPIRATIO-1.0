import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { OccupationalTherapyAnamnesisService } from './occupationalTherapyAnamnesis.service';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryOccupationalAnamnesisTherapyDto } from './dto/queryOccupationalTherapyAnamnesis.dto';

@ApiTags('occupational-therapy-anamnesis')
@Controller('occupational-therapy-anamnesis')
export class OccupationalTherapyAnamnesisController {
  constructor(private readonly occupationalTherapyAnamnesisService: OccupationalTherapyAnamnesisService) {}

  @Post()
     async create(@Body() createSensoryProcessingMeasureDto: CreateOccupationalTherapyAnamnesisDto) {
       return await this.occupationalTherapyAnamnesisService.create(createSensoryProcessingMeasureDto);
     }
   
     @Get()
     async findAll(@Query() query: QueryOccupationalAnamnesisTherapyDto) {
       return await this.occupationalTherapyAnamnesisService.findAll(query);
     }
   
     @Get(':id')
     async findById(@Param('id') id: string) {
       return await this.occupationalTherapyAnamnesisService.findById(id);
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
