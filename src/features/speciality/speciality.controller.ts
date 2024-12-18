import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { UpdateSpecialityDto } from './dto/update_speciality.dto';
import { QuerySpecialityDto } from './dto/query_speciality.dto';




@ApiTags('Speciality')
// @UseGuards(JwtAuthGuard)
@Controller('specialities')
export class SpecialityController {
  constructor(
    private readonly speciality: SpecialityService,
  ) {}

  @Post()
  create(@Body() data: CreateSpecialityDto) {
    return this.speciality.create(data);
  }

  // @HasRoles(ImportedRoles.ADMIN)
  // @UseGuards(RolesGuard)
  @Get()
  findAll(@Query() query: QuerySpecialityDto) {
    return this.speciality.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.speciality.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateSpecialityDto) {
    return this.speciality.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.speciality.delete(id);
  }
}
