import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IIncomeTableEntity } from "src/entities/incomeTable.entity";
import { IIncomeTable } from "./types/incomeTable";
import { QueryIncomeTableDto } from "./dto/incomeTableCreateQuery.dto";
import { CreateTableDto } from "./dto/incomeTableCreate.dto";
import { UpdateIncomeTableDto } from "./dto/incomeTableUpdate.dto";


@Injectable()
export class IncomeTableRepository {
  constructor(
    @InjectModel('incometable') private readonly incomeTableModel: Model<IIncomeTableEntity>
  ) {}
 

  async create(data: CreateTableDto): Promise<IIncomeTableEntity> {
      return this.incomeTableModel.create(data);
    }

     async findAll(options: QueryIncomeTableDto) {
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
  
  
    async findByToken(token: string): Promise<IIncomeTable> {
      return this.incomeTableModel.findOne({ passwordResetToken: token }).lean().exec();
    }
  
    async findById(id: string): Promise<IIncomeTableEntity> {
      return this.incomeTableModel.findById(id)
    }
  
    async update(id: string, data: UpdateIncomeTableDto): Promise<IIncomeTableEntity> {
      return this.incomeTableModel
        .findOneAndUpdate({ _id: id }, data, { new: true })
        .populate('consultation')
        .lean()
        .exec();
    }
  
  
    async delete(id: string): Promise<IIncomeTable> {
      return this.incomeTableModel.findByIdAndDelete(id).exec();
    }
  }