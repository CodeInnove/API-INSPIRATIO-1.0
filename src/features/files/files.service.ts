import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilesRepository } from "./files.repository";
import { Query } from "mongoose";
import { FileQueryDTO } from "./dto/query.dto";

@Injectable()
export class FilesService {
  constructor(private readonly fileRepository: FilesRepository) {}

  async create(data: any) {
    return this.fileRepository.create(data);
  }

  async findAll(query: FileQueryDTO) {
    return this.fileRepository.findAll(query);
  }

  async findById(id: string) {
    return this.fileRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.fileRepository.update(id, data);
  }

  async delete(id: string) {
    return this.fileRepository.delete(id);
  }
}