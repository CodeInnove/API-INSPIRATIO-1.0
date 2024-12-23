import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAnamnesisSpeechTherapyEntity } from "src/entities/anamnesisSpeechTherapy.entity";

@Injectable()
export class AnamnesisSpeechTherapyRepository {
  constructor(
    @InjectModel('AnamnesisSpeechTherapy') private readonly anamnesisSpeechTherapyModel: Model<IAnamnesisSpeechTherapyEntity>
  ) {}

  async create(data: IAnamnesisSpeechTherapyEntity): Promise<IAnamnesisSpeechTherapyEntity> {
    return this.anamnesisSpeechTherapyModel.create(data);
  }
  
  async findAll(): Promise<IAnamnesisSpeechTherapyEntity[]> {
    return this.anamnesisSpeechTherapyModel.find();
  }

  async findById(id: string): Promise<IAnamnesisSpeechTherapyEntity> {
    return this.anamnesisSpeechTherapyModel.findById(id);
  }

  async update(id: string, data: IAnamnesisSpeechTherapyEntity): Promise<IAnamnesisSpeechTherapyEntity> {
    return this.anamnesisSpeechTherapyModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IAnamnesisSpeechTherapyEntity> {
    return this.anamnesisSpeechTherapyModel.findByIdAndDelete(id);
  }
}