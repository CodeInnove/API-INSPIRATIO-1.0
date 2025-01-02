import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPsychopedagogicalAnamnesisEntity } from "src/entities/psychopedagogicalAnamnesis.entity";
import { PsychopedagogicalAnamnesisCreateDto } from "./dto/psychopedagogicalAnamnesisCreate.dto";
import { UpdatePsychopedagogicalAnamnesisDto } from "./dto/psychopedagogicalAnamnesisUpdate.dto";

@Injectable()
export class PsychopedagogicalAnamnesisRepository {
  constructor(
    @InjectModel('psychopedagogicalAnamnesis') private readonly psychopedagogicalAnamnesisModel: Model<IPsychopedagogicalAnamnesisEntity>
  ) {}

  async create(data: PsychopedagogicalAnamnesisCreateDto): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.create(data);
  }
  
  async findAll(): Promise<IPsychopedagogicalAnamnesisEntity[]> {
    return this.psychopedagogicalAnamnesisModel.find();
  }

  async findById(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findById(id);
  }

  async update(id: string, data: UpdatePsychopedagogicalAnamnesisDto): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndDelete(id).exec();
  }
}