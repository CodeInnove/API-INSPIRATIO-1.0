import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PsychopedagogicalAnamnesisCreateDto } from "./dto/psychopedagogicalAnamnesisCreate.dto";
import { UpdatePsychopedagogicalAnamnesisDto } from "./dto/psychopedagogicalAnamnesisUpdate.dto";
import { PsychopedagogicalAnamnesisService } from "./psychopedagogicalAnamnesis.service";
import { QueryPsychopedagogicalDto } from "./dto/queryPsychocpedagogicalAnamnesis.dto";

@ApiTags('Psychopedagogical Anamnesis')
@Controller('psychopedagogical-anamnesis')
export class PsychopedagogicalAnamnesisController {
  constructor(private readonly psychopedagogicalAnamnesisService: PsychopedagogicalAnamnesisService) {}

  @Post()
  create(@Body() data: PsychopedagogicalAnamnesisCreateDto) {
    return this.psychopedagogicalAnamnesisService.create(data);
  }

  @Get()
  findAll(@Query() query: QueryPsychopedagogicalDto) {
    return this.psychopedagogicalAnamnesisService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.psychopedagogicalAnamnesisService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdatePsychopedagogicalAnamnesisDto) {
    return this.psychopedagogicalAnamnesisService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.psychopedagogicalAnamnesisService.delete(id);
  }
}

