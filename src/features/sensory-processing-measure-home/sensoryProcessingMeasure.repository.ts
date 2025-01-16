import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureDto } from "./dto/createSensoryProcessingMeasure.dto";
import { ISensoryProcessingMeasureEntity } from "src/entities/sensoryProcessingMeasureHome.entity";
import { UpdateSensoryProcessingMeasureDto } from "./dto/updateSensoryProcessingMeasure.dto";

@Injectable()
export class SpmHomeRepository {
  constructor(
    @InjectModel('SPMHome') private readonly aflModel: Model<ISensoryProcessingMeasureEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
    return await this.aflModel.create(data);
  }

  async findAll(): Promise<ISensoryProcessingMeasureEntity[]> {
    return await this.aflModel.find().exec();
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasureEntity> {
    return await this.aflModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
    return await this.aflModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureEntity> {
    return await this.aflModel.findByIdAndDelete(id).exec();
  }
}