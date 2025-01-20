import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IOccupationalTherapyAnamnesisEntity } from "src/entities/occupationalTherapyAnamnesis.entity";
import { UpdateOccupationalTherapyAnamnesisDto } from "./dto/updateOccupationalTherapyAnamnesis.dto";
import { CreateOccupationalTherapyAnamnesisDto } from "./dto/createOccupationalTherapyAnamnesis.dto";

@Injectable()
export class OccupationalTherapyAnamnesisRepository {
  constructor(
    @InjectModel('OccupationalTherapyAnamnesis') private readonly anamnesisTOModel: Model<IOccupationalTherapyAnamnesisEntity>
  ) {}

  async create(data: CreateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.create(data);
  }

  async findAll(): Promise<IOccupationalTherapyAnamnesisEntity[]> {
    return await this.anamnesisTOModel.find().exec();
  }

  async findOne(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.findById(id).exec();
  }

  async update(id: string, data: UpdateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.findByIdAndDelete(id).exec();
  }
}