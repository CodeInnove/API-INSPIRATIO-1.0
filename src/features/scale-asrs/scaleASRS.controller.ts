import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateScaleAsrsDTO } from "./dto/scaleASRSCreate.dto";
import { UpdateScaleAsrDto } from "./dto/scaleASRSUpdate.dto";
import { ScaleAsrsService } from "./scaleASRS.service";

@ApiTags('ScaleASRS')
@Controller('scale-asrs')
export class ScaleASRSController {
  constructor(private readonly scaleAsrService: ScaleAsrsService) {}

  @Post()
  create(@Body() data: CreateScaleAsrsDTO) {
    return this.scaleAsrService.create(data);
  }

  @Get()
  findAll() {
    return this.scaleAsrService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.scaleAsrService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateScaleAsrDto) {
    return this.scaleAsrService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.scaleAsrService.delete(id);
  }
}

