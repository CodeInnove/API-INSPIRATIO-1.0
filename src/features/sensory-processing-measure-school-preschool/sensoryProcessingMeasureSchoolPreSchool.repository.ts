import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from "./dto/createSensoryProcessingMeasureSchoolPreSchool.dto";
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from "./dto/updateSensoryProcessingMeasureSchoolPreSchool.dto";
import { ISensoryProcessingMeasureSchoolPreSchoolEntity } from "src/entities/sensoryProcessingMeasureSchoolPreSchool.entity";

@Injectable()
export class SpmSchoolPreSchoolRepository {
  constructor(
    @InjectModel('SpmSchoolPreSchool') private readonly spmSchoolModel: Model<ISensoryProcessingMeasureSchoolPreSchoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolModel.create(data);
  }

  async findAll(): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity[]> {
    return await this.spmSchoolModel.find().exec();
  }

  async findOne(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndDelete(id).exec();
  }
}