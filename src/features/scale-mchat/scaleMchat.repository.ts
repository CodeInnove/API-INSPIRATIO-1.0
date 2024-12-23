import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IScaleMchatEntity } from "src/entities/scaleMchat.entity";

@Injectable()
export class ScaleMchatRepository {
  constructor(
    @InjectModel('ScaleMchat') private readonly scaleMchatModel: Model<IScaleMchatEntity>
  ) {}

  async create(data: IScaleMchatEntity): Promise<IScaleMchatEntity> {
    return this.scaleMchatModel.create(data);
  }
  
  async findAll(): Promise<IScaleMchatEntity[]> {
    return this.scaleMchatModel.find();
  }

  async findById(id: string): Promise<IScaleMchatEntity> {
    return this.scaleMchatModel.findById(id);
  }

  async update(id: string, data: IScaleMchatEntity): Promise<IScaleMchatEntity> {
    return this.scaleMchatModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IScaleMchatEntity> {
    return this.scaleMchatModel.findByIdAndDelete(id);
  }
}