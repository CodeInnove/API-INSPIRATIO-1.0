import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AnamnesisForCerebralPalsyService } from "./anamnesis-for-cerebral-palsy.service";
import { IAnamneseCerebralEntity } from "src/entities/anamnesis-for-cerebral-palsy.entity"; 
import { CreateAfcpDto} from './dto/create-anamnesis-for-cerebral-palsy.dto';
import { query } from "express";
import { QueryAfcpDto } from "./dto/query-anamnesis-for-cerebral-palsy.dto";

@ApiTags('Anamnesis For Cerebral Palsy')
@Controller('anamnesis-for-cerebral-palsy')
export class AfcpController {
  constructor(
    private readonly afcpService: AnamnesisForCerebralPalsyService
  ) {}

  @Post()
  async createAfcp(@Body() data: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return await this.afcpService.createAfcp(data);
  }

  @Get()
  async findAll(@Query() query:QueryAfcpDto) {
    return await this.afcpService.findAll(query);
  }

  @Get(':id')
  async findById(@Param() id: string) {
    return await this.afcpService.findById(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: CreateAfcpDto) {
    return await this.afcpService.updateAfl(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return await this.afcpService.deleteAfl(id);
  }
}
