import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IGmfmEntity } from "src/entities/gmfm.entity";
import { CreateGmfmDto } from "./dto/create-gmfm.dto";
import { Model } from "mongoose";
import { UpdateGmfmDto } from "./dto/update-gmfm.dto";
import { QueryGmfmDto } from "./dto/query-gmfm.dto";

@Injectable()
export class GmfmRepository {
  constructor(
    @InjectModel('Gmfm') private readonly gmfmModel: Model<IGmfmEntity>
  ) {}

  async create(data: CreateGmfmDto): Promise<IGmfmEntity> {
    return await this.gmfmModel.create(data);
  }

   async findAll(options: QueryGmfmDto) {
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
  
      const data = await this.gmfmModel
        .find(query)
        .skip(skip)
        .limit(limit)
        .populate('patients')
        .populate('doctors')
        .populate('responsible')
        .lean()
        .exec();
  
      const total = await this.gmfmModel.countDocuments(query).exec();
      const pages = Math.ceil(total / limit);
  
      return { data, total, page: +page, pages };
    }

  async findById(id: string): Promise<IGmfmEntity> {
      return this.gmfmModel.findById(id)
        .populate('patients')
        .populate('doctors')
        .populate('responsible')
        .populate('speciality')
        .select('Consultation')
        .lean()
        .exec();
    }

  async update(id: string, data: UpdateGmfmDto): Promise<IGmfmEntity> {
      return this.gmfmModel
        .findOneAndUpdate({ _id: id }, data, { new: true })
        .populate('patients')
        .populate('doctors')
        .populate('responsible')
        .lean()
        .exec();
    }

  async delete(id: string): Promise<IGmfmEntity> {
    return await this.gmfmModel.findByIdAndDelete(id).exec();
  }
}