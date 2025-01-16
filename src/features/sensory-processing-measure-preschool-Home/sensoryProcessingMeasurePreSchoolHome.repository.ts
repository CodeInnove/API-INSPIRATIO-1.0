import { ISensoryProcessingMeasurePreschoolEntity } from "src/entities/sensoryProcessingMeasurePreschoolHome.entity";
import { CreateSensoryProcessingMeasurePreschoolDto } from "./dto/createSensoryProcessingMeasurePreschool.dto";
import { UpdateSensoryProcessingMeasurePreschoolDto } from "./dto/updateSensoryProcessingMeasurePreschool.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SpmPreSchoolHomeRepository {
  constructor(
    @InjectModel('SensoryProcessingMeasurePreSchoolHome') private readonly spmPreSchoolHomeModel: Model<ISensoryProcessingMeasurePreschoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.create(data);
  }

  async findAll(): Promise<ISensoryProcessingMeasurePreschoolEntity[]> {
    return await this.spmPreSchoolHomeModel.find().exec();
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.findByIdAndDelete(id).exec();
  }
}