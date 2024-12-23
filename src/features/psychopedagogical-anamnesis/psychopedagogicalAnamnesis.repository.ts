import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPsychopedagogicalAnamnesisEntity } from "src/entities/psychopedagogicalAnamnesis.entity";

@Injectable()
export class PsychopedagogicalAnamnesisRepository {
  constructor(
    @InjectModel('PsychopedagogicalAnamnesis') private readonly psychopedagogicalAnamnesisModel: Model<IPsychopedagogicalAnamnesisEntity>
  ) {}

  async create(data: IPsychopedagogicalAnamnesisEntity): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.create(data);
  }
  
  async findAll(): Promise<IPsychopedagogicalAnamnesisEntity[]> {
    return this.psychopedagogicalAnamnesisModel.find();
  }

  async findById(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findById(id);
  }

  async update(id: string, data: IPsychopedagogicalAnamnesisEntity): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndDelete(id);
  }
}