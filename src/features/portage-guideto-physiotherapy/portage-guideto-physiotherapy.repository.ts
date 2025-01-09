import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPortageGuidetoPhysiotherapyEntity } from "src/entities/portage-guideto-physiotherapy.entity";
import { CreatePortageGuidetoPhysiotherapyDto } from "./dto/create-portage-guideto-physiotherapy.dto";
import { UpdatePortageGuidetoPhysiotherapyDto } from "./dto/update-portage-guideto-physiotherapy.dto";

@Injectable()
export class PortageGuidetoPhysiotherapyRepository {
  constructor(
    @InjectModel('portageGuidetoPhysiotherapy') private readonly portagePhysiotherapyModel: Model<IPortageGuidetoPhysiotherapyEntity>
  ) {}

  async create(data: CreatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.create(data);
  }

  async findAll(): Promise<IPortageGuidetoPhysiotherapyEntity[]> {
    return await this.portagePhysiotherapyModel.find().exec();
  }

  async findOne(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.findById(id).exec();
  }

  async update(id: string, data: UpdatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.findByIdAndDelete(id).exec();
  }
}