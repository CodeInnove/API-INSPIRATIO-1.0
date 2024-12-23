import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AflService } from "./afls.service";
import { IAflEntity } from "src/entities/afl.entity";
import { CreateAflDto } from "./dto/create-afl.dto";

@ApiTags('AFLs')
@Controller('afls')
export class AflsController {
  constructor(
    private readonly aflService: AflService
  ) {}

  @Post()
  async create(@Body() data: CreateAflDto): Promise<IAflEntity> {
    return await this.aflService.createAfl(data);
  }

  @Get()
  async findAll(): Promise<IAflEntity[]> {
    return await this.aflService.findAllAfls();
  }

  @Get(':id')
  async findOne(@Param() id: string): Promise<IAflEntity> {
    return await this.aflService.findOneAfl(id);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() data: CreateAflDto): Promise<IAflEntity> {
    return await this.aflService.updateAfl(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<IAflEntity> {
    return await this.aflService.deleteAfl(id);
  }
}
