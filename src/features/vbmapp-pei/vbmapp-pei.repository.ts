import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VbmappEntity } from "src/entities/vbmapp-pei.entity";
import { UpdateVbmappPeiDto } from "./dto/update-vbmapp-pei.dto";
import { CreateVbmappPeiDto } from "./dto/create-vbmapp-pei.dto";

@Injectable()
export class VbmappRepository {
  constructor(
    @InjectModel('Vbmapp') private readonly vbmappModel: Model<VbmappEntity>
  ) {}

  async create(data: CreateVbmappPeiDto): Promise<VbmappEntity> {
    return await this.vbmappModel.create(data);
  }

  async findAll(): Promise<VbmappEntity[]> {
    return await this.vbmappModel.find().exec();
  }

  async findOne(id: string): Promise<VbmappEntity> {
    return await this.vbmappModel.findById(id).exec();
  }

  async update(id: string, data: UpdateVbmappPeiDto): Promise<VbmappEntity> {
    return await this.vbmappModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<VbmappEntity> {
    return await this.vbmappModel.findByIdAndDelete(id).exec();
  }
}