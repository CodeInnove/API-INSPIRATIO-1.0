import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAnamneseCerebralEntity } from "src/entities/anamnesis-for-cerebral-palsy.entity";
import { CreateAfcpDto } from "./dto/create-anamnesis-for-cerebral-palsy.dto";
import { UpdateAfcpDto } from "./dto/update-anamnesis-for-cerebral-palsy.dto";

@Injectable()
export class AfcpRepository {
  constructor(
    @InjectModel('afcp') private readonly aflModel: Model<IAnamneseCerebralEntity>
  ) {}

  async create(data: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return await this.aflModel.create(data);
  }

  async findAll(): Promise<IAnamneseCerebralEntity[]> {
    return await this.aflModel.find().exec();
  }

  async findOne(id: string): Promise<IAnamneseCerebralEntity> {
    return await this.aflModel.findById(id).exec();
  }

  async update(id: string, data: UpdateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return await this.aflModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IAnamneseCerebralEntity> {
    return await this.aflModel.findByIdAndDelete(id).exec();
  }
}