import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaToSit, AbaToSitDocument } from 'src/entities/AbaToSit.entity';
import { CreateAbaToSitDto } from './dto/createAbaToSit.dto';
import { UpdateAbaToSitDto } from './dto/updateAbaToSit.dto';
import { QueryAbaToSitDto } from './dto/queryAbaToSit.dto';

@Injectable()
export class AbaToSitRepository {
  constructor(
    @InjectModel(AbaToSit.name)
    private readonly abaToSitModel: Model<AbaToSitDocument>,
  ) {}

  async create(createAbaToSitDto: CreateAbaToSitDto): Promise<AbaToSitDocument> {
    const createdAbaToSit = new this.abaToSitModel(createAbaToSitDto);
    return createdAbaToSit.save();
  }

  async findAll(queryDto: QueryAbaToSitDto): Promise<{ data: AbaToSitDocument[]; total: number }> {
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
    const data = await this.abaToSitModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaToSitModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaToSitDocument> {
    return this.abaToSitModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaToSitDto: UpdateAbaToSitDto): Promise<AbaToSitDocument> {
    return this.abaToSitModel
      .findByIdAndUpdate(id, updateAbaToSitDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaToSitDocument> {
    return this.abaToSitModel.findByIdAndDelete(id).exec();
  }
}