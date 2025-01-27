import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilesRepository } from "./files.repository";
import { Query } from "mongoose";
import { FileQueryDTO } from "./dto/query.dto";

@Injectable()
export class FilesService {
  constructor(private readonly fileRepository: FilesRepository) { }

  async create(data: any, files: Express.MulterS3.File[]) {
    const filesData = files.map(async (file) => await this.fileRepository.create({
      name: file.filename,
      url: file.location,
      type: data.type,
      userId: data.userId,
    }));

    return this.fileRepository.create(data);
  }

  async findAll(query: FileQueryDTO) {
    return this.fileRepository.findAll(query);
  }

  async findById(id: string) {
    return this.fileRepository.findById(id);
  }
}