import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AutismBehaviorChecklistService } from "./autismBehaviorChecklist.service";
import { CreateAutismBehaviorChecklistDto } from "./dto/autismBehaviorChecklistCreate.dto";
import { IAutismBehaviorChecklistEntity } from "src/entities/autismBehaviorChecklist.entity";

@ApiTags('Autism Behavior Checklist')
@Controller('autism-behavior-checklist')
export class AutismBehaviorChecklistController {
  constructor(
    private readonly autismBehaviorChecklistService: AutismBehaviorChecklistService
  ) {}

  @Post()
  async create(@Body() data: CreateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistService.create(data);
  }

  @Get()
  async findAll(): Promise<IAutismBehaviorChecklistEntity[]> {
    return await this.autismBehaviorChecklistService.findAll();
  }

  @Get(':id')
  async findOne(@Param() id: string): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistService.findOne(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: CreateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistService.delete(id);
  }
}
