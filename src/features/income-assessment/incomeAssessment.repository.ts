import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UpdateIncomeAssessmentDto } from "./dto/updateIncomeAssessment.dto";
import { CreateIncomeAssessmentDto } from "./dto/createIncomeAssessment.dto";
import { IIncomeAssessmentEntity } from "src/entities/incomeAssessment.entity";
import { QueryIncomeAssessmentDto } from "./dto/queryincomeAssessment.dto";



@Injectable()
export class IncomeAssessmentRepository {
  constructor(
    @InjectModel('IncomeAssessment') private readonly incomeTableModel: Model<IIncomeAssessmentEntity>
  ) {}
 

  async create(data: CreateIncomeAssessmentDto): Promise<IIncomeAssessmentEntity> {
      return this.incomeTableModel.create(data);
    }

     async findAll(options: QueryIncomeAssessmentDto) {
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
      
          const data = await this.incomeTableModel
            .find(query)
            .populate('doctor')
            .populate('patient')
            .populate('speciality')
            .lean()
            .exec();
      
          const total = await this.incomeTableModel.countDocuments(query).exec();
      
          return { data, total,};
        }
  
  
    async findByToken(token: string): Promise<IIncomeAssessmentEntity> {
      return this.incomeTableModel.findOne({ passwordResetToken: token }).lean().exec();
    }
  
    async findById(id: string): Promise<IIncomeAssessmentEntity> {
      return this.incomeTableModel.findById(id);
    }
  
    async update(id: string, data: UpdateIncomeAssessmentDto): Promise<IIncomeAssessmentEntity> {
      return this.incomeTableModel
        .findOneAndUpdate({ _id: id }, data, { new: true })
        .populate('consultation')
        .lean()
        .exec();
    }
  
  
    async delete(id: string): Promise<IIncomeAssessmentEntity> {
      return this.incomeTableModel.findByIdAndDelete(id).exec();
    }
  }