import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IScaleASRSEntity } from "src/entities/scaleASRS.entity";

@Injectable()
export class ScaleASRSRepository {
  constructor(
    @InjectModel('ScaleASRS') private readonly scaleASRSModel: Model<IScaleASRSEntity>
  ) {}

  async create(data: IScaleASRSEntity): Promise<IScaleASRSEntity> {
    return this.scaleASRSModel.create(data);
  }
  
  async findAll(): Promise<IScaleASRSEntity[]> {
    return this.scaleASRSModel.find();
  }

  async findById(id: string): Promise<IScaleASRSEntity> {
    return this.scaleASRSModel.findById(id);
  }

  async update(id: string, data: IScaleASRSEntity): Promise<IScaleASRSEntity> {
    return this.scaleASRSModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IScaleASRSEntity> {
    return this.scaleASRSModel.findByIdAndDelete(id);
  }
}