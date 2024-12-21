import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IScaleAsrsEntity } from "src/entities/scaleASRS.entity";

@Injectable()
export class ScaleAsrsRepository {
  constructor(
    @InjectModel('ScaleASRS') private readonly scaleAsrsModel: Model<IScaleAsrsEntity>
  ) {}

  async create(data: IScaleAsrsEntity): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.create(data);
  }
  
  async findAll(): Promise<IScaleAsrsEntity[]> {
    return this.scaleAsrsModel.find();
  }

  async findById(id: string): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findById(id);
  }

  async update(id: string, data: IScaleAsrsEntity): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findByIdAndDelete(id);
  }
}