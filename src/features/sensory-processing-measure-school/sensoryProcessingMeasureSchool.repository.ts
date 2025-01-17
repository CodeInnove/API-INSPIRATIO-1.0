import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureSchoolDto } from "./dto/createSensoryProcessingMeasureSchool.dto";
import { UpdateSensoryProcessingMeasureSchoolDto } from "./dto/updateSensoryProcessingMeasureSchool.dto";
import { ISensoryProcessingMeasureSchoolEntity } from "src/entities/sensoryProcessingMeasureSchool.entity";

@Injectable()
export class SpmSchoolRepository {
  constructor(
    @InjectModel('SpmSchool') private readonly spmSchoolModel: Model<ISensoryProcessingMeasureSchoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.create(data);
  }

  async findAll(): Promise<ISensoryProcessingMeasureSchoolEntity[]> {
    return await this.spmSchoolModel.find().exec();
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndDelete(id).exec();
  }
}