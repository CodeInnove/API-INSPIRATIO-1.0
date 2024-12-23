import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPhonologicalDiscriminationTestApplicationNotebookEntity } from "src/entities/phonologicalDiscriminationTestApplicationNotebook.entity";

@Injectable()
export class PhonologicalDiscriminationTestApplicationNotebookRepository {
  constructor(
    @InjectModel('PhonologicalDiscriminationTestApplicationNotebook') private readonly phonologicalDiscriminationTestApplicationNotebookModel: Model<IPhonologicalDiscriminationTestApplicationNotebookEntity>
  ) {}

  async create(data: IPhonologicalDiscriminationTestApplicationNotebookEntity): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.create(data);
  }
  
  async findAll(): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity[]> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.find();
  }

  async findById(id: string): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.findById(id);
  }

  async update(id: string, data: IPhonologicalDiscriminationTestApplicationNotebookEntity): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IPhonologicalDiscriminationTestApplicationNotebookEntity> {
    return this.phonologicalDiscriminationTestApplicationNotebookModel.findByIdAndDelete(id);
  }
}