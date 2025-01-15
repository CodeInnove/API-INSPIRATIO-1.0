import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPediatricNeurologicalEvaluationEntity } from "src/entities/pediatric-neurological-evaluation.entity";
import { UpdatePediatricNeurologicalEvaluationDto } from "./dto/update-pediatric-neurological-evaluation.dto";
import { CreatePediatricNeurologicalEvaluationDto } from "./dto/create-pediatric-neurological-evaluation.dto";

@Injectable()
export class PediatricNeurologicalEvaluationRepository {
  constructor(
    @InjectModel('PediatricNeurologicalEvaluation') private readonly aflModel: Model<IPediatricNeurologicalEvaluationEntity>
  ) {}

  async create(data: CreatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
    return await this.aflModel.create(data);
  }

  async findAll(): Promise<IPediatricNeurologicalEvaluationEntity[]> {
    return await this.aflModel.find().exec();
  }

  async findOne(id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
    return await this.aflModel.findById(id).exec();
  }

  async update(id: string, data: UpdatePediatricNeurologicalEvaluationDto): Promise<IPediatricNeurologicalEvaluationEntity> {
    return await this.aflModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPediatricNeurologicalEvaluationEntity> {
    return await this.aflModel.findByIdAndDelete(id).exec();
  }
}