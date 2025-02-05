import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaListenerDocument, AbaListener } from 'src/entities/AbaListener.entity';
import { CreateAbaListenerDto } from './dto/createAbaListener.dto';
import { UpdateAbaListenerDto } from './dto/updateAbaListener.dto';
import { QueryAbaListenerDto } from './dto/queryAbaListener.dto';

@Injectable()
export class AbaListenerRepository {
  constructor(
    @InjectModel(AbaListener.name)
    private readonly abaListenerModel: Model<AbaListenerDocument>,
  ) {}

  async create(createAbaListenerDto: CreateAbaListenerDto): Promise<AbaListenerDocument> {
    const createdAbaListener = new this.abaListenerModel(createAbaListenerDto);
    return createdAbaListener.save();
  }

  async findAll(queryDto: QueryAbaListenerDto): Promise<{ data: AbaListenerDocument[]; total: number }> {
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
    const data = await this.abaListenerModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaListenerModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaListenerDocument> {
    return this.abaListenerModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaListenerDto: UpdateAbaListenerDto): Promise<AbaListenerDocument> {
    return this.abaListenerModel
      .findByIdAndUpdate(id, updateAbaListenerDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaListenerDocument> {
    return this.abaListenerModel.findByIdAndDelete(id).exec();
  }
}