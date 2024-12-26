import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AnamnesisForCerebralPalsyService } from "./anamnesis-for-cerebral-palsy.service";
import { IAnamneseCerebralEntity } from "src/entities/anamnesis-for-cerebral-palsy.entity"; 
import { CreateAfcpDto} from './dto/create-anamnesis-for-cerebral-palsy.dto';

@ApiTags('Anamnesis For Cerebral Palsy')
@Controller('anamnesis-for-cerebral-palsy')
export class AfcpController {
  constructor(
    private readonly afcpService: AnamnesisForCerebralPalsyService
  ) {}

  @Post()
  async create(@Body() data: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return await this.afcpService.createAfl(data);
  }

  @Get()
  async findAll(): Promise<IAnamneseCerebralEntity[]> {
    return await this.afcpService.findAllAfls();
  }

  @Get(':id')
  async findOne(@Param() id: string): Promise<IAnamneseCerebralEntity> {
    return await this.afcpService.findOneAfl(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return await this.afcpService.updateAfl(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<IAnamneseCerebralEntity> {
    return await this.afcpService.deleteAfl(id);
  }
}
