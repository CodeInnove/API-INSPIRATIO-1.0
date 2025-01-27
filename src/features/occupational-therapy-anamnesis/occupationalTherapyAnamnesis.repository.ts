import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IOccupationalTherapyAnamnesisEntity } from "src/entities/occupationalTherapyAnamnesis.entity";
import { UpdateOccupationalTherapyAnamnesisDto } from "./dto/updateOccupationalTherapyAnamnesis.dto";
import { CreateOccupationalTherapyAnamnesisDto } from "./dto/createOccupationalTherapyAnamnesis.dto";
import { QueryOccupationalAnamnesisTherapyDto } from "./dto/queryOccupationalTherapyAnamnesis.dto";

@Injectable()
export class OccupationalTherapyAnamnesisRepository {
  constructor(
    @InjectModel('OccupationalTherapyAnamnesis') private readonly anamnesisTOModel: Model<IOccupationalTherapyAnamnesisEntity>
  ) {}

  async create(data: CreateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.create(data);
  }

  
  async findAll(options: QueryOccupationalAnamnesisTherapyDto) {
      const {
        page = 1,
        limit = 10,
        name = '',
        cpf = '',
        dateEnd = null,
        dateInit = null,
        role = '',
        type = '',
      }= options;
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
    
        const data = await this.anamnesisTOModel
          .find(query)
          .skip(skip)
          .limit(limit)
          .populate('patients')
          .populate('doctors')
          .populate('responsible')
          .lean()
          .exec();
    
        const total = await this.anamnesisTOModel.countDocuments(query).exec();
        const pages = Math.ceil(total / limit);
    
        return { data, total, page: +page, pages };
      }

  async findById(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    return this.anamnesisTOModel.findById(id)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .populate('speciality')
      .select('Consultation')
      .lean()
      .exec();
  }    

  async update(id: string, data: UpdateOccupationalTherapyAnamnesisDto): Promise<IOccupationalTherapyAnamnesisEntity> {
    return this.anamnesisTOModel
        .findOneAndUpdate({ _id: id }, data, { new: true })
        .populate('patients')
        .populate('doctors')
        .populate('responsible')
        .lean()
        .exec();
  }

  async delete(id: string): Promise<IOccupationalTherapyAnamnesisEntity> {
    return await this.anamnesisTOModel.findByIdAndDelete(id).exec();
  }
}