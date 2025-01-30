import { ISensoryProcessingMeasurePreschoolEntity } from "src/entities/sensoryProcessingMeasurePreschoolHome.entity";
import { CreateSensoryProcessingMeasurePreschoolDto } from "./dto/createSensoryProcessingMeasurePreschool.dto";
import { UpdateSensoryProcessingMeasurePreschoolDto } from "./dto/updateSensoryProcessingMeasurePreschool.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { QuerySpmPreSchoolHomeDto } from "./dto/querySensoryProcessingMeasurePreschool.dto";

@Injectable()
export class SpmPreSchoolHomeRepository {
  constructor(
    @InjectModel('SensoryProcessingMeasurePreSchoolHome') private readonly spmPreSchoolHomeModel: Model<ISensoryProcessingMeasurePreschoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.create(data);
  }

 async findAll(options: QuerySpmPreSchoolHomeDto) {
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
  
      const data = await this.spmPreSchoolHomeModel
        .find(query)
        .skip(skip)
        .limit(limit)
        .populate('patients')
        .populate('doctors')
        .populate('responsible')
        .lean()
        .exec();
  
      const total = await this.spmPreSchoolHomeModel.countDocuments(query).exec();
      const pages = Math.ceil(total / limit);
  
      return { data, total, page: +page, pages };
    }
 

  async findById(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return this.spmPreSchoolHomeModel.findById(id)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .populate('speciality')
      .select('Consultation')
      .lean()
      .exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasurePreschoolDto): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasurePreschoolEntity> {
    return await this.spmPreSchoolHomeModel.findByIdAndDelete(id).exec();
  }
}