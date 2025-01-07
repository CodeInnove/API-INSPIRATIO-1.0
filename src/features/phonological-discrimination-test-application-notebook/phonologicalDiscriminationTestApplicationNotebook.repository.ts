import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPhonologicalDiscriminationTestApplicationNotebookEntity } from "src/entities/phonologicalDiscriminationTestApplicationNotebook.entity";
import { CreatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookCreate.dto";
import { QuerPDTANDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookQuery.dto";
import { UpdatePhonologicalDiscriminationTestApplicationNotebookDto } from "./dto/phonologicalDiscriminationTestApplicationNotebookUpdate.dto";

@Injectable()
export class PhonologicalDiscriminationTestApplicationNotebookRepository {
  constructor(
    @InjectModel('PhonologicalDiscriminationTestApplicationNotebook') private readonly phonologicalDiscriminationTestApplicationNotebookModel: Model<IPhonologicalDiscriminationTestApplicationNotebookEntity>
  ) {}

  async create(data: CreatePhonologicalDiscriminationTestApplicationNotebookDto): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.create(data);
  }
  
  async findAll(options: QuerPDTANDto) {
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
    
        const data = await this.phonologicalDiscriminationTestApplicationNotebookModel
          .find(query)
          .populate('doctor')
          .populate('patient')
          .populate('speciality')
          .lean()
          .exec();
    
        const total = await this.phonologicalDiscriminationTestApplicationNotebookModel.countDocuments(query).exec();
    
        return { data, total,};
      }

  async findById(id: string): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.findById(id);
  }

  async update(id: string, data: UpdatePhonologicalDiscriminationTestApplicationNotebookDto): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.
    findByIdAndUpdate({ _id: id }, data, { new: true })
    .populate('doctor')
    .populate('patient')
    .lean()
    .exec()
  }

  async delete(id: string): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.findByIdAndDelete(id);
  }
}