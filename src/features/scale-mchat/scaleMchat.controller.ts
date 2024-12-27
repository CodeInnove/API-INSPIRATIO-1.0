import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateScaleMchatDto } from "./dto/scaleMchatCreate.dto";
import { UpdateScaleMchatDto } from "./dto/scaleMchatUpdate.dto";
import { ScaleMchatService } from "./scaleMchat.service";
import { QueryScaleMchatDto } from "./dto/scaleMchatQuery";

@ApiTags('Scale Mchat')
@Controller('scale-mchat')
export class ScaleMchatController {
  constructor(private readonly scaleMchatService: ScaleMchatService) {}

  @Post()
  create(@Body() data: CreateScaleMchatDto) {
    return this.scaleMchatService.create(data);
  }

  @Get()
  findAll(@Query() query:QueryScaleMchatDto) {
    return this.scaleMchatService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.scaleMchatService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateScaleMchatDto) {
    return this.scaleMchatService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.scaleMchatService.delete(id);
  }
}

