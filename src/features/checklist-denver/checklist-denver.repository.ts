import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IChecklistDenverEntity } from "src/entities/checklist-denver.entity";
import { CreateChecklistDenverDto } from "./dto/create-checklist-denver.dto";
import { UpdateChecklistDenverDto } from "./dto/update-checklist-denver.dto";

@Injectable()
export class ChecklistDenverRepository {
  constructor(
    @InjectModel('checklistDenver') private readonly denverModel: Model<IChecklistDenverEntity>
  ) {}

  async create(data: CreateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.denverModel.create(data);
  }

  async findAll(): Promise<IChecklistDenverEntity[]> {
    return await this.denverModel.find().exec();
  }

  async findOne(id: string): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findById(id).exec();
  }

  async update(id: string, data: UpdateChecklistDenverDto): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IChecklistDenverEntity> {
    return await this.denverModel.findByIdAndDelete(id).exec();
  }
}