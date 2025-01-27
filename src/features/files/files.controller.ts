import { Controller, HttpException, Get, Post, Param, Query, HttpStatus, UseInterceptors, UploadedFiles, Body } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FileQueryDTO } from "./dto/query.dto";
import { FilesInterceptor } from "@nestjs/platform-express";
import storageTypes from "src/core/file/storage-types";
import { CreateFileDTO } from "./dto/create-file.dto";

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
  @UseInterceptors(
    FilesInterceptor('file', 20, {
      limits: {
        fileSize: 7 * 1024 * 1024,
        files: 20,
        fields: 100,
      },
      fileFilter: (req, file, cb) => {
        cb(null, true);
      },
      storage: storageTypes['s3'],
    }),
  )
  async create(@UploadedFiles() files: Express.MulterS3.File[], @Body() data: CreateFileDTO) {
    try {
      return await this.filesService.create(data, files);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}