import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePerformanceAssessmentDto } from "./dto/create-performance-assessment.dto";
import { IPerformanceAssessmenteEntity } from "src/entities/performance-assessment.entity";
import { UpdatePerformanceAssessmentDto } from "./dto/update-performance-assessment.dto";

@Injectable()
export class PerformanceAssessmentRepository {
  constructor(
    @InjectModel('PerformanceAssessment') private readonly gmfmModel: Model<IPerformanceAssessmenteEntity>
  ) {}

  async create(data: CreatePerformanceAssessmentDto): Promise<IPerformanceAssessmenteEntity> {
    return await this.gmfmModel.create(data);
  }

  async findAll(): Promise<IPerformanceAssessmenteEntity[]> {
    return await this.gmfmModel.find().exec();
  }

  async findOne(id: string): Promise<IPerformanceAssessmenteEntity> {
    return await this.gmfmModel.findById(id).exec();
  }

  async update(id: string, data: UpdatePerformanceAssessmentDto): Promise<IPerformanceAssessmenteEntity> {
    return await this.gmfmModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPerformanceAssessmenteEntity> {
    return await this.gmfmModel.findByIdAndDelete(id).exec();
  }
}