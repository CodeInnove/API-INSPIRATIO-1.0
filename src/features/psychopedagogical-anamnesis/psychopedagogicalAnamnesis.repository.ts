import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPsychopedagogicalAnamnesisEntity } from "src/entities/psychopedagogicalAnamnesis.entity";
import { PsychopedagogicalAnamnesisCreateDto } from "./dto/psychopedagogicalAnamnesisCreate.dto";
import { UpdatePsychopedagogicalAnamnesisDto } from "./dto/psychopedagogicalAnamnesisUpdate.dto";
import { QueryPsychopedagogicalDto } from "./dto/queryPsychocpedagogicalAnamnesis.dto";

@Injectable()
export class PsychopedagogicalAnamnesisRepository {
  constructor(
    @InjectModel('psychopedagogicalAnamnesis') private readonly psychopedagogicalAnamnesisModel: Model<IPsychopedagogicalAnamnesisEntity>
  ) {}

  async create(data: PsychopedagogicalAnamnesisCreateDto): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.create(data);
  }
  
  async findAll(options: QueryPsychopedagogicalDto) {
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
        
            const data = await this.psychopedagogicalAnamnesisModel
              .find(query)
              .populate('doctor')
              .populate('patient')
              .populate('speciality')
              .lean()
              .exec();
        
            const total = await this.psychopedagogicalAnamnesisModel.countDocuments(query).exec();
        
            return { data, total,};
          }

  async findById(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findById(id);
  }

  async update(id: string, data: UpdatePsychopedagogicalAnamnesisDto): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPsychopedagogicalAnamnesisEntity> {
    return this.psychopedagogicalAnamnesisModel.findByIdAndDelete(id).exec();
  }
}