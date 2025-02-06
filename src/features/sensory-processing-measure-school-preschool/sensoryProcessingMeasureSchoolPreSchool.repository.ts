import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSensoryProcessingMeasureSchoolPreschoolDto } from "./dto/createSensoryProcessingMeasureSchoolPreSchool.dto";
import { UpdateSensoryProcessingMeasureSchoolPreschoolDto } from "./dto/updateSensoryProcessingMeasureSchoolPreSchool.dto";
import { ISensoryProcessingMeasureSchoolPreSchoolEntity } from "src/entities/sensoryProcessingMeasureSchoolPreSchool.entity";
import { QuerySpmSchoolPreSchoolDto } from "./dto/querySensoryProcessingMeasureSchoolPreSchool.dto";

@Injectable()
export class SpmSchoolPreSchoolRepository {
  constructor(
    @InjectModel('SpmSchoolPreSchool') private readonly spmSchoolPreSchoolModel: Model<ISensoryProcessingMeasureSchoolPreSchoolEntity>
  ) {}

  async create(data: CreateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolPreSchoolModel.create(data);
  }

  async findAll(options: QuerySpmSchoolPreSchoolDto) {
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

    const data = await this.spmSchoolPreSchoolModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();

    const total = await this.spmSchoolPreSchoolModel.countDocuments(query).exec();
    const pages = Math.ceil(total / limit);

    return { data, total, page: +page, pages };
  }

  async findById(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return this.spmSchoolPreSchoolModel.findById(id)
    .lean()
    .exec();
  }

  async update(id: string, data: UpdateSensoryProcessingMeasureSchoolPreschoolDto): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolPreSchoolModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISensoryProcessingMeasureSchoolPreSchoolEntity> {
    return await this.spmSchoolPreSchoolModel.findByIdAndDelete(id).exec();
  }
}