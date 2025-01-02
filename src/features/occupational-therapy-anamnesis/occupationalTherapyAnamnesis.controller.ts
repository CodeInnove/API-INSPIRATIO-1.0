import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OccupationalTherapyAnamnesisService } from './occupationalTherapyAnamnesis.service';
import { CreateOccupationalTherapyAnamnesisDto } from './dto/createOccupationalTherapyAnamnesis.dto';
import { UpdateOccupationalTherapyAnamnesisDto } from './dto/updateOccupationalTherapyAnamnesis.dto';

@Controller('occupational-therapy-anamnesis')
export class OccupationalTherapyAnamnesisController {
  constructor(private readonly occupationalTherapyAnamnesisService: OccupationalTherapyAnamnesisService) {}

  @Post()
  create(@Body() createOccupationalTherapyAnamnesisDto: CreateOccupationalTherapyAnamnesisDto) {
    return this.occupationalTherapyAnamnesisService.create(createOccupationalTherapyAnamnesisDto);
  }

  @Get()
  findAll() {
    return this.occupationalTherapyAnamnesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.occupationalTherapyAnamnesisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOccupationalTherapyAnamnesisDto: UpdateOccupationalTherapyAnamnesisDto) {
    return this.occupationalTherapyAnamnesisService.update(+id, updateOccupationalTherapyAnamnesisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.occupationalTherapyAnamnesisService.remove(+id);
  }
}
