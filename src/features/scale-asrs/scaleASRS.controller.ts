import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateScaleAsrsDto } from "./dto/scaleASRSCreate.dto";
import { UpdateScaleAsrDto } from "./dto/scaleASRSUpdate.dto";
import { ScaleAsrsService } from "./scaleASRS.service";
import { QueryScaleASRSpDto } from "./dto/scaleASRSQuery.dto";

@ApiTags('ScaleASRS')
@Controller('scale-asrs')
export class ScaleASRSController {
  constructor(private readonly scaleAsrService: ScaleAsrsService) {}

  @Post()
  create(@Body() data: CreateScaleAsrsDto) {
    return this.scaleAsrService.create(data);
  }

  @Get()
  findAll(@Query() query: QueryScaleASRSpDto) {
    return this.scaleAsrService.findAll(query);
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

