import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaWaitDocument, AbaWait } from 'src/entities/AbaWait.entity';
import { CreateAbaWaitDto } from './dto/createAbaWait.dto';
import { UpdateAbaWaitDto } from './dto/updateAbaWait.dto';
import { QueryAbaWaitDto } from './dto/queryAbaWait.dto';

@Injectable()
export class AbaWaitRepository {
  constructor(
    @InjectModel(AbaWait.name)
    private readonly abaWaitModel: Model<AbaWaitDocument>,
  ) {}

  async create(createAbaWaitDto: CreateAbaWaitDto): Promise<AbaWaitDocument> {
    const createdAbaWait = new this.abaWaitModel(createAbaWaitDto);
    return createdAbaWait.save();
  }

  async findAll(queryDto: QueryAbaWaitDto): Promise<{ data: AbaWaitDocument[]; total: number }> {
    const { atividade, status, patient, doctor, page = 1, limit = 10 } = queryDto;

    const filter = {};

    if (atividade) {
      filter['atividades.atividade'] = { $regex: atividade, $options: 'i' };
    }
    if (status) {
      filter['atividades.status'] = status;
    }
    if (patient) {
      filter['patient'] = patient;
    }
    if (doctor) {
      filter['doctor'] = doctor;
    }

    const skip = (page - 1) * limit;
    const data = await this.abaWaitModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaWaitModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaWaitDocument> {
    return this.abaWaitModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaWaitDto: UpdateAbaWaitDto): Promise<AbaWaitDocument> {
    return this.abaWaitModel
      .findByIdAndUpdate(id, updateAbaWaitDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaWaitDocument> {
    return this.abaWaitModel.findByIdAndDelete(id).exec();
  }
}