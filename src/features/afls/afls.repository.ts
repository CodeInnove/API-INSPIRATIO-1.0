import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAflEntity } from "src/entities/afl.entity";
import { CreateAflDto } from "./dto/create-afl.dto";
import { UpdateAflDto } from "./dto/update-afl.dto";

@Injectable()
export class AflsRepository {
  constructor(
    @InjectModel('Afl') private readonly aflModel: Model<IAflEntity>
  ) {}

  async create(data: CreateAflDto): Promise<IAflEntity> {
    return await this.aflModel.create(data);
  }

  async findAll(): Promise<IAflEntity[]> {
    return await this.aflModel.find().exec();
  }

  async findOne(id: string): Promise<IAflEntity> {
    return await this.aflModel.findById(id).exec();
  }

  async update(id: string, data: UpdateAflDto): Promise<IAflEntity> {
    return await this.aflModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IAflEntity> {
    return await this.aflModel.findByIdAndDelete(id).exec();
  }
}