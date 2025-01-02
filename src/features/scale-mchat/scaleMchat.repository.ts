import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IScaleMchatEntity } from "src/entities/scaleMchat.entity";
import { CreateScaleMchatDto } from "./dto/scaleMchatCreate.dto";
import { QueryScaleMchatDto } from "./dto/scaleMchatQuery";
import { IScaleMchat } from "./types/scaleMchat";

@Injectable()
export class ScaleMchatRepository {
  constructor(
    @InjectModel('ScaleMchat') private readonly scaleMchatModel: Model<IScaleMchatEntity>
  ) {}

  async create(data: CreateScaleMchatDto): Promise<IScaleMchatEntity> {
    return this.scaleMchatModel.create(data);
  }
  
   async findAll(options: QueryScaleMchatDto) {
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
    
        const data = await this.scaleMchatModel
          .find(query)
          .populate('doctor')
          .populate('patient')
          .populate('speciality')
          .lean()
          .exec();
    
        const total = await this.scaleMchatModel.countDocuments(query).exec();
    
        return { data, total,};
      }

  async findByToken(token: string): Promise<IScaleMchat> {
      return this.scaleMchatModel.findOne({ passwordResetToken: token }).lean().exec();
    }

  async findById(id: string): Promise<IScaleMchat> {
    return this.scaleMchatModel.findById(id);
  }

  async update(id: string, data: IScaleMchatEntity): Promise<IScaleMchat> {
    return this.scaleMchatModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IScaleMchat> {
    return this.scaleMchatModel.findByIdAndDelete(id);
  }
}