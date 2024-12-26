import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePortageGuidetoPreschoolEducationDto } from "./dto/create-portage-guideto-preschool-education.dto";
import { UpdatePortageGuidetoPreschoolEducationDto } from "./dto/update-portage-guideto-preschool-education.dto";
import { IPortageGuidetoPreschoolEducationEntity } from "src/entities/portage-guideto-preschool-education.entity";


@Injectable()
export class PortageGuidetoPreschoolEducationRepository {
  constructor(
    @InjectModel('PortageGuidetoPreschoolEducation') private readonly aflModel: Model<IPortageGuidetoPreschoolEducationEntity>
  ) {}

  async create(data: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.aflModel.create(data);
  }

  async findAll(): Promise<IPortageGuidetoPreschoolEducationEntity[]> {
    return await this.aflModel.find().exec();
  }

  async findOne(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.aflModel.findById(id).exec();
  }

  async update(id: string, data: UpdatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.aflModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.aflModel.findByIdAndDelete(id).exec();
  }
}