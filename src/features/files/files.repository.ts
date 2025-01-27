import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IFileEntity } from "src/entities/file.entity";
import { FileQueryDTO } from "./dto/query.dto";

@Injectable()
export class FilesRepository {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<IFileEntity>
  ) { }

  async create(data: any): Promise<IFileEntity> {
    return this.fileModel.create(data);
  }

  async findAll(query: FileQueryDTO) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;

    const filter: any = {};

    if (query.name)
      filter.name = { $regex: query.name, $options: 'i' };


    if (query.type)
      filter.type = query.type;

    if (query.userId)
      filter.userId = query.userId;

    const count = await this.fileModel.countDocuments(filter);
    const files = await this.fileModel.find(filter).skip((page - 1) * limit).limit(limit);

    return {
      count,
      page,
      limit,
      data: files
    };
  }

  async findById(id: string): Promise<IFileEntity> {
    return this.fileModel.findById(id);
  }

  async update(id: string, data: any): Promise<IFileEntity> {
    return this.fileModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IFileEntity> {
    return this.fileModel.findByIdAndDelete(id);
  }
}