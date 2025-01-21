import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IFunctionalIndependencyMetricsEntity } from "src/entities/functionalIndependencyMetrics.entity";
import { CreateFunctionalIndependencyMetricDTO } from "./dto/functionalIndependencyMetricsCreate.dto";
import { FunctionalIndependencyMetricsUpdateDTO } from "./dto/functionalIndependencyMetricsUpdate.dto";

@Injectable()
export class FunctionalIndependencyMetricsRepository {
  constructor(
    @InjectModel('FunctionalIndependencyMetric') private readonly functionalIndependencyMetricModel: Model<IFunctionalIndependencyMetricsEntity>
  ) {}

  async create(data: CreateFunctionalIndependencyMetricDTO): Promise<IFunctionalIndependencyMetricsEntity> {
    return this.functionalIndependencyMetricModel.create(data);
  }

  async findAll(): Promise<IFunctionalIndependencyMetricsEntity[]> {
    return this.functionalIndependencyMetricModel.find();
  }

  async findById(id: string): Promise<IFunctionalIndependencyMetricsEntity> {
    return this.functionalIndependencyMetricModel.findById(id);
  }

  async update(id: string, data: FunctionalIndependencyMetricsUpdateDTO): Promise<IFunctionalIndependencyMetricsEntity> {
    return this.functionalIndependencyMetricModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IFunctionalIndependencyMetricsEntity> {
    return this.functionalIndependencyMetricModel.findByIdAndDelete(id);
  }
}