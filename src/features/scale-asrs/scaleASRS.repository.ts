import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IScaleAsrsEntity } from "src/entities/scaleASRS.entity";
import { QueryScaleASRSpDto } from "./dto/scaleASRSQuery.dto";
import { CreateScaleAsrsDto } from "./dto/scaleASRSCreate.dto";
import { UpdateScaleAsrDto } from "./dto/scaleASRSUpdate.dto";

@Injectable()
export class ScaleAsrsRepository {
  constructor(
    @InjectModel('ScaleASRS') private readonly scaleAsrsModel: Model<IScaleAsrsEntity>
  ) {}

  async create(data: CreateScaleAsrsDto): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.create(data);
  }
  
  async findAll(options: QueryScaleASRSpDto) {
      const {
        dateEnd = null,
        dateInit = null,
        role = '',
      } = options; 
  
      let query = {};
  
  
      if (role) {
        query = { ...query, roles: { $in: role } };
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
  
      const data = await this.scaleAsrsModel
        .find(query)
        .populate('doctor')
        .populate('patient')
        .lean()
        .exec();
  
      const total = await this.scaleAsrsModel.countDocuments(query).exec();
  
      return { data, total,};
    }

  async findById(id: string): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findById(id)
    .populate('doctor')
    .populate('patient')
    .lean().exec();
  }

  async update(id: string, data: UpdateScaleAsrDto): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IScaleAsrsEntity> {
    return this.scaleAsrsModel.findByIdAndDelete(id);
  }
}
