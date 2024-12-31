import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IIntraverbalAssessmentEntity } from "src/entities/intraverbalAssessment.entity";
import { CreateIntraverbalAssessmentDto } from "./dto/intraverbalAssessmentCreate.dto";

@Injectable()
export class IntraverbalAssessmentRepository {
  constructor(
    @InjectModel('IntraverbalAssessment') private readonly intraverbalAssessmentModel: Model<IIntraverbalAssessmentEntity>
  ) {}

  async create(data: CreateIntraverbalAssessmentDto): Promise<IIntraverbalAssessmentEntity> {
    return this.intraverbalAssessmentModel.create(data);
  }
  
  async findAll(): Promise<IIntraverbalAssessmentEntity[]> {
    return this.intraverbalAssessmentModel.find();
  }

  async findById(id: string): Promise<IIntraverbalAssessmentEntity> {
    return this.intraverbalAssessmentModel.findById(id);
  }

  async update(id: string, data: IIntraverbalAssessmentEntity): Promise<IIntraverbalAssessmentEntity> {
    return this.intraverbalAssessmentModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IIntraverbalAssessmentEntity> {
    return this.intraverbalAssessmentModel.findByIdAndDelete(id);
  }
}