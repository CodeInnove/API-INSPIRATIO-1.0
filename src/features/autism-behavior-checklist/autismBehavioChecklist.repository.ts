import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAutismBehaviorChecklistDto } from "./dto/autismBehaviorChecklistCreate.dto";
import { UpdateAutismBehaviorChecklistDto } from "./dto/autismBehaviorChecklistUpdate.dto";
import { IAutismBehaviorChecklistEntity } from "src/entities/autismBehaviorChecklist.entity";

@Injectable()
export class AutismBehaviorChecklistRepository {
  constructor(
    @InjectModel('autismBehaviorChecklist') private readonly autismBehaviorChecklistModel: Model<IAutismBehaviorChecklistEntity>
  ) {}

  async create(data: CreateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistModel.create(data);
  }

  async findAll(): Promise<IAutismBehaviorChecklistEntity[]> {
    return await this.autismBehaviorChecklistModel.find().exec();
  }

  async findOne(id: string): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistModel.findById(id).exec();
  }

  async update(id: string, data: UpdateAutismBehaviorChecklistDto): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IAutismBehaviorChecklistEntity> {
    return await this.autismBehaviorChecklistModel.findByIdAndDelete(id).exec();
  }
}