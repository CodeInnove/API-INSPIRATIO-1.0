import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePortageGuidetoPreschoolEducationDto } from "./dto/create-portage-guideto-preschool-education.dto";
import { UpdatePortageGuidetoPreschoolEducationDto } from "./dto/update-portage-guideto-preschool-education.dto";
import { IPortageGuidetoPreschoolEducationEntity } from "src/entities/portage-guideto-preschool-education.entity";


@Injectable()
export class PortageGuidetoPreschoolEducationRepository {
  constructor(
    @InjectModel('portageGuidetoPreschoolEducation') private readonly portageGuidetoModel: Model<IPortageGuidetoPreschoolEducationEntity>
  ) {}

  async create(data: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.create(data);
  }

  async findAll(): Promise<IPortageGuidetoPreschoolEducationEntity[]> {
    return await this.portageGuidetoModel.find().exec();
  }

  async findOne(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.findById(id).exec();
  }

  async update(id: string, data: UpdatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.findByIdAndDelete(id).exec();
  }
}