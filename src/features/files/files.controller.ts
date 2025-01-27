import { Controller, HttpException, Get, Post, Put, Delete, Param, Query, HttpStatus } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FileQueryDTO } from "./dto/query.dto";

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService
  ) { }

  @Get()
  async findAll(@Query() query: FileQueryDTO) {
    try {
      return await this.filesService.findAll(query);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.filesService.findById(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async create(@Param() data: any) {
    try {
      return await this.filesService.create(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Param() data: any) {
    try {
      return await this.filesService.update(id, data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.filesService.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}