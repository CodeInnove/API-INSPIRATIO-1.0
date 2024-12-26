import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IGeneralAnamneseEntity } from "src/entities/anamnese_general.entity";
import { CreateAnamneseGeneralDto } from "./dto/create-anamnese_general.dto";
import { UpdateAnamneseGeneralDto } from "./dto/update-anamnese_general.dto";


@Injectable()
export class GeneralAnamneseRepository {
  constructor(
    @InjectModel('generalAnamnese') private readonly generalAnamneseModel: Model<IGeneralAnamneseEntity>
  ) {}

  async create(data: CreateAnamneseGeneralDto): Promise<IGeneralAnamneseEntity> {
    return await this.generalAnamneseModel.create(data);
  }

  async findAll(): Promise<IGeneralAnamneseEntity[]> {
    return await this.generalAnamneseModel.find().exec();
  }

  async findOne(id: string): Promise<IGeneralAnamneseEntity> {
    return await this.generalAnamneseModel.findById(id).exec();
  }

  async update(id: string, data: UpdateAnamneseGeneralDto): Promise<IGeneralAnamneseEntity> {
    return await this.generalAnamneseModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IGeneralAnamneseEntity> {
    return await this.generalAnamneseModel.findByIdAndDelete(id).exec();
  }
}