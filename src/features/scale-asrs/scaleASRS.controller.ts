import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateScaleAsrsDTO } from "./dto/scaleASRSCreate.dto";
import { UpdateScaleAsrDto } from "./dto/scaleASRSUpdate.dto";
import { ScaleASRSService } from "./scaleASRS.service";

@ApiTags('Scale ASRS')
@Controller('scale-asrs')
export class ScaleASRSController {
  constructor(private readonly scaleASRSService: ScaleASRSService) {}

  @Post()
  create(@Body() data: CreateScaleAsrsDTO) {
    return this.scaleASRSService.create(data);
  }

  @Get()
  findAll() {
    return this.scaleASRSService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.scaleASRSService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateScaleAsrDto) {
    return this.scaleASRSService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.scaleASRSService.delete(id);
  }
}

