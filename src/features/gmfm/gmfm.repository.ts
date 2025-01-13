import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IGmfmEntity } from "src/entities/gmfm.entity";
import { CreateGmfmDto } from "./dto/create-gmfm.dto";
import { Model } from "mongoose";
import { UpdateGmfmDto } from "./dto/update-gmfm.dto";

@Injectable()
export class GmfmRepository {
  constructor(
    @InjectModel('Gmfm') private readonly gmfmModel: Model<IGmfmEntity>
  ) {}

  async create(data: CreateGmfmDto): Promise<IGmfmEntity> {
    return await this.gmfmModel.create(data);
  }

  async findAll(): Promise<IGmfmEntity[]> {
    return await this.gmfmModel.find().exec();
  }

  async findOne(id: string): Promise<IGmfmEntity> {
    return await this.gmfmModel.findById(id).exec();
  }

  async update(id: string, data: UpdateGmfmDto): Promise<IGmfmEntity> {
    return await this.gmfmModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IGmfmEntity> {
    return await this.gmfmModel.findByIdAndDelete(id).exec();
  }
}