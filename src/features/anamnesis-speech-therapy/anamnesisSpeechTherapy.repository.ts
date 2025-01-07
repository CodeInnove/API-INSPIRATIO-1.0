import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAnamnesisSpeechTherapyEntity } from "src/entities/anamnesisSpeechTherapy.entity"; 
import { UpdateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyUpdate.dto";
import { IAnamnesisSpeechTherapy } from "./types/anamnesisSpeechTherapy";
import { QueryAnamnesisTherapyDto } from "./dto/anamnesisSpeechTherapyQuery.dto";
import { CreateAnamnesisSpeechTherapyDto } from "./dto/anamnesisSpeechTherapyCreate.dto";

@Injectable()
export class AnamnesisSpeechTherapyRepository {
  constructor(
    @InjectModel('AnamnesisSpeechTherapy') private readonly anamnesisTherapyModel: Model<IAnamnesisSpeechTherapyEntity>
  ) {}
 

  async create(data: CreateAnamnesisSpeechTherapyDto): Promise<IAnamnesisSpeechTherapyEntity> {
      return this.anamnesisTherapyModel.create(data);
    }
  
    async findAll(options: QueryAnamnesisTherapyDto) {
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
  
      const data = await this.anamnesisTherapyModel
        .find(query)
        .populate('doctor')
        .populate('patient')
        .populate('speciality')
        .lean()
        .exec();
  
      const total = await this.anamnesisTherapyModel.countDocuments(query).exec();
  
      return { data, total,};
    }
  
  
    async findByToken(token: string): Promise<IAnamnesisSpeechTherapyEntity> {
      return this.anamnesisTherapyModel.findOne({ passwordResetToken: token }).lean().exec();
    }
  
    async findById(id: string): Promise<IAnamnesisSpeechTherapy> {
      return this.anamnesisTherapyModel.findById(id)
    }
  
    async update(id: string, data: UpdateAnamnesisSpeechTherapyDto): Promise<IAnamnesisSpeechTherapyEntity> {
      return this.anamnesisTherapyModel
        .findOneAndUpdate({ _id: id }, data, { new: true })
        .populate('consultation')
        .lean()
        .exec();
    }
  
  
    async delete(id: string): Promise<IAnamnesisSpeechTherapyEntity> {
      return this.anamnesisTherapyModel.findByIdAndDelete(id).exec();
    }
  }