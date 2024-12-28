import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookCreate.dto";
import { UpdatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookUpdate.dto";
import { PhonologicalDiscriminationTestApplicationNotebookService } from "./phonologicalDiscriminationTestApplicationNotebook.service";

@ApiTags('Phonological Discrimination Test Application Notebook')
@Controller('phonological-discrimination-test-application-notebook')
export class PhonologicalDiscriminationTestApplicationNotebookController {
  constructor(private readonly phonologicalDiscriminationTestApplicationNotebookService: PhonologicalDiscriminationTestApplicationNotebookService) {}

  @Post()
  create(@Body() data: CreatePhonologicalDiscriminationTestApplicationNotebookDto) {
    return this.phonologicalDiscriminationTestApplicationNotebookService.create(data);
  }

  @Get()
  findAll() {
    return this.phonologicalDiscriminationTestApplicationNotebookService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.phonologicalDiscriminationTestApplicationNotebookService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdatePhonologicalDiscriminationTestApplicationNotebookDto) {
    return this.phonologicalDiscriminationTestApplicationNotebookService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.phonologicalDiscriminationTestApplicationNotebookService.delete(id);
  }
}

