import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IMchatREntity } from "src/entities/mchat-R.entity"; 

@Injectable()
export class MchatRRepository {
  constructor(
    @InjectModel('Mchat-R') private readonly MchatRModel: Model<IMchatREntity>
  ) {}

  async create(data: IMchatREntity): Promise<IMchatREntity> {
    return this.MchatRModel.create(data);
  }

  async findAll(): Promise<IMchatREntity[]> {
    return this.MchatRModel.find();
  }

  async findById(id: string): Promise<IMchatREntity> {
    return this.MchatRModel.findById(id);
  }

  async update(id: string, data: IMchatREntity): Promise<IMchatREntity> {
    return this.MchatRModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IMchatREntity> {
    return this.MchatRModel.findByIdAndDelete(id);
  }
}