import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IIncomeTableEntity } from "src/entities/incomeTable.entity";

@Injectable()
export class IncomeTableRepository {
  constructor(
    @InjectModel('IncomeTable') private readonly incomeTableModel: Model<IIncomeTableEntity>
  ) {}

  async create(data: IIncomeTableEntity): Promise<IIncomeTableEntity> {
    return this.incomeTableModel.create(data);
  }
  
  async findAll(): Promise<IIncomeTableEntity[]> {
    return this.incomeTableModel.find();
  }

  async findById(id: string): Promise<IIncomeTableEntity> {
    return this.incomeTableModel.findById(id);
  }

  async update(id: string, data: IIncomeTableEntity): Promise<IIncomeTableEntity> {
    return this.incomeTableModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IIncomeTableEntity> {
    return this.incomeTableModel.findByIdAndDelete(id);
  }
}