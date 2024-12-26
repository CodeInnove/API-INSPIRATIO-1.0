import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ISociallySavvyChecklistEntity } from "src/entities/sociallySavvyChecklist.entity";

@Injectable()
export class SociallySavvyChecklistRepository {
  constructor(
    @InjectModel('SociallySavvyChecklist') private readonly sociallySavvyChecklistModel: Model<ISociallySavvyChecklistEntity>
  ) {}

  async create(data: ISociallySavvyChecklistEntity): Promise<ISociallySavvyChecklistEntity> {
    return this.sociallySavvyChecklistModel.create(data);
  }
  
  async findAll(): Promise<ISociallySavvyChecklistEntity[]> {
    return this.sociallySavvyChecklistModel.find();
  }

  async findById(id: string): Promise<ISociallySavvyChecklistEntity> {
    return this.sociallySavvyChecklistModel.findById(id);
  }

  async update(id: string, data: ISociallySavvyChecklistEntity): Promise<ISociallySavvyChecklistEntity> {
    return this.sociallySavvyChecklistModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<ISociallySavvyChecklistEntity> {
    return this.sociallySavvyChecklistModel.findByIdAndDelete(id);
  }
}