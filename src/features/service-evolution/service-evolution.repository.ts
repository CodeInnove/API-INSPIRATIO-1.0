import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ServiceEvolutionEntity } from "src/entities/service-evolution.entity";
import { CreateServiceEvolutionDto } from "./dto/create-service-evolution.dto";
import { UpdateServiceEvolutionDto } from "./dto/update-service-evolution.dto";

@Injectable()
export class ServiceEvolutionRepository {
  constructor(
    @InjectModel('ServiceEvolution') private readonly serviceEvolutionModel: Model<ServiceEvolutionEntity>
  ) {}

  async create(data: CreateServiceEvolutionDto): Promise<ServiceEvolutionEntity> {
    return await this.serviceEvolutionModel.create(data);
  }

  async findAll(): Promise<ServiceEvolutionEntity[]> {
    return await this.serviceEvolutionModel.find().exec();
  }

  async findOne(id: string): Promise<ServiceEvolutionEntity> {
    return await this.serviceEvolutionModel.findById(id).exec();
  }

  async update(id: string, data: UpdateServiceEvolutionDto): Promise<ServiceEvolutionEntity> {
    return await this.serviceEvolutionModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ServiceEvolutionEntity> {
    return await this.serviceEvolutionModel.findByIdAndDelete(id).exec();
  }
}