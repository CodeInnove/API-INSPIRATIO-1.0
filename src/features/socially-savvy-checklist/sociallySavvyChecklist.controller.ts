import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateSociallySavvyChecklistDto } from "./dto/sociallySavvyChecklistCreate.dto";
import { UpdateSociallySavvyChecklistDto } from "./dto/sociallySavvyChecklistUpdate.dto";
import { SociallySavvyChecklistService } from "./sociallySavvyChecklist.service";

@ApiTags('Socially Savvy Checklist')
@Controller('socially-savvy-checklist')
export class SociallySavvyChecklistController {
  constructor(private readonly sociallySavvyChecklistService: SociallySavvyChecklistService) {}

  @Post()
  create(@Body() data: CreateSociallySavvyChecklistDto) {
    return this.sociallySavvyChecklistService.create(data);
  }

  @Get()
  findAll() {
    return this.sociallySavvyChecklistService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.sociallySavvyChecklistService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateSociallySavvyChecklistDto) {
    return this.sociallySavvyChecklistService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sociallySavvyChecklistService.delete(id);
  }
}