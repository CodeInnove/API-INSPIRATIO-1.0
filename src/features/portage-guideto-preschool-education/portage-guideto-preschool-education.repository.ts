import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePortageGuidetoPreschoolEducationDto } from "./dto/create-portage-guideto-preschool-education.dto";
import { UpdatePortageGuidetoPreschoolEducationDto } from "./dto/update-portage-guideto-preschool-education.dto";
import { IPortageGuidetoPreschoolEducationEntity } from "src/entities/portage-guideto-preschool-education.entity";
import { QueryPortageGuidetoDto } from "./dto/query-portage-guideto-preschool-educational.dto";


@Injectable()
export class PortageGuidetoPreschoolEducationRepository {
  constructor(
    @InjectModel('portageGuidetoPreschoolEducation') private readonly portageGuidetoModel: Model<IPortageGuidetoPreschoolEducationEntity>
  ) {}

  async create(data: CreatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.create(data);
  }

  async findAll(options: QueryPortageGuidetoDto) {
        const {
          page = 1,
          limit = 10,
          name = '',
          cpf = '',
          dateEnd = null,
          dateInit = null,
          email = '',
          role = '',
          type = '',
        } = options;
        const skip = (page - 1) * limit;
        let query = {};
    
        if (name) {
          query = { ...query, name: { $regex: new RegExp(name, 'i') } };
        }
    
        if (email) {
          query = { ...query, email: { $regex: new RegExp(email, 'i') } };
        }
    
        if (cpf) {
          query = { ...query, cpf: { $regex: new RegExp(cpf, 'i') } };
        }
    
        if (role) {
          query = { ...query, roles: { $in: role } };
        }
    
        if (type) {
          query = { ...query, type: { $in: type } };
        }
    
        if (dateInit && dateEnd) {
          query = {
            ...query,
            createdAt: {
              $gte: new Date(dateInit),
              $lte: new Date(dateEnd),
            },
          };
        }
    
        const data = await this.portageGuidetoModel
          .find(query)
          .skip(skip)
          .limit(limit)
          .populate('patients')
          .populate('doctors')
          .populate('responsible')
          .lean()
          .exec();
    
        const total = await this.portageGuidetoModel.countDocuments(query).exec();
        const pages = Math.ceil(total / limit);
    
        return { data, total, page: +page, pages };
      }

  async findById(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
        return this.portageGuidetoModel.findById(id)
  }

  async update(id: string, data: UpdatePortageGuidetoPreschoolEducationDto): Promise<IPortageGuidetoPreschoolEducationEntity> {
        return this.portageGuidetoModel.findOneAndUpdate({ _id: id }, data, { new: true })
  }

  async delete(id: string): Promise<IPortageGuidetoPreschoolEducationEntity> {
    return await this.portageGuidetoModel.findByIdAndDelete(id).exec();
  }
}