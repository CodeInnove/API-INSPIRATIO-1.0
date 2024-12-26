import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentCreate.dto";
import { UpdateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentUpdate.dto";
import { IntraverbalAssessmentService } from "./intraverbalAssessment.service";

@ApiTags('Intraverbal Assessment')
@Controller('intraverbal-assessment')
export class IntraverbalAssessmentController {
  constructor(private readonly intraverbalAssessmentService: IntraverbalAssessmentService) {}

  @Post()
  create(@Body() data: CreateIntraverbalAssessmentDto) {
    return this.intraverbalAssessmentService.create(data);
  }

  @Get()
  findAll() {
    return this.intraverbalAssessmentService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.intraverbalAssessmentService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateIntraverbalAssessmentDto) {
    return this.intraverbalAssessmentService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.intraverbalAssessmentService.delete(id);
  }
}

