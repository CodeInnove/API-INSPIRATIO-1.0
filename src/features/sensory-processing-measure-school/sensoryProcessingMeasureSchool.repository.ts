import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureSchoolDto } from "./dto/createSensoryProcessingMeasureSchool.dto";
import { UpdateSensoryProcessingMeasureSchoolDto } from "./dto/updateSensoryProcessingMeasureSchool.dto";
import { ISensoryProcessingMeasureSchoolEntity } from "src/entities/sensoryProcessingMeasureSchool.entity";
import { QuerySpmSchoolDto } from "./dto/querySensoryProcessingMeasureSchool.dto";

@Injectable()
export class SpmSchoolRepository {
  constructor(
    @InjectModel('SpmSchool') private readonly spmSchoolModel: Model<ISensoryProcessingMeasureSchoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.create(data);
  }

   async findAll(options: QuerySpmSchoolDto) {
        const {
          page = 1,
          limit = 10,
          name = '',
          cpf = '',
          dateEnd = null,
          dateInit = null,
          role = '',
          type = '',
        } = options;
        const skip = (page - 1) * limit;
        let query = {};
    
        if (name) {
          query = { ...query, name: { $regex: new RegExp(name, 'i') } };
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
    
        const data = await this.spmSchoolModel
          .find(query)
          .skip(skip)
          .limit(limit)
          .populate('patients')
          .populate('doctors')
          .populate('responsible')
          .lean()
          .exec();
    
        const total = await this.spmSchoolModel.countDocuments(query).exec();
        const pages = Math.ceil(total / limit);
    
        return { data, total, page: +page, pages };
      }


  async findById(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return this.spmSchoolModel.findById(id)
      .lean()
      .exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasureSchoolDto): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolEntity> {
    return await this.spmSchoolModel.findByIdAndDelete(id).exec();
  }
}