import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureHomeDto } from "./dto/createSensoryProcessingMeasure.dto";
import { ISensoryProcessingMeasureEntity } from "src/entities/sensoryProcessingMeasureHome.entity";
import { UpdateSensoryProcessingMeasureDto } from "./dto/updateSensoryProcessingMeasure.dto";
import { QuerySpmHomeDto } from "./dto/querySensoryProcessingMeasure.dto";

@Injectable()
export class SpmHomeRepository {
  constructor(
    @InjectModel('SPMHome') private readonly spmHomeModel: Model<ISensoryProcessingMeasureEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureHomeDto): Promise<ISensoryProcessingMeasureEntity> {
    return await this.spmHomeModel.create(data);
  }

  async findAll(options: QuerySpmHomeDto) {
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

    const data = await this.spmHomeModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();

    const total = await this.spmHomeModel.countDocuments(query).exec();
    const pages = Math.ceil(total / limit);

    return { data, total, page: +page, pages };
  }

 async findById(id: string): Promise<ISensoryProcessingMeasureEntity> {
     return this.spmHomeModel.findById(id)
       .populate('patients')
       .populate('doctors')
       .populate('responsible')
       .populate('speciality')
       .select('Consultation')
       .lean()
       .exec();
   }

  async update(id: string, data: UpdateSensoryProcessingMeasureDto): Promise<ISensoryProcessingMeasureEntity> {
    return await this.spmHomeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureEntity> {
    return await this.spmHomeModel.findByIdAndDelete(id).exec();
  }
}