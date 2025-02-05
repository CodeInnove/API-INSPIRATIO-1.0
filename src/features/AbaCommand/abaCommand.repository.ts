import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaCommandDocument, AbaCommand } from 'src/entities/AbaCommand.entity';
import { CreateAbaCommandDto } from './dto/createAbaCommand.dto';
import { UpdateAbaCommandDto } from './dto/updateAbaCommand.dto';
import { QueryAbaCommandDto } from './dto/queryAbaCommand.dto';

@Injectable()
export class AbaCommandRepository {
  constructor(
    @InjectModel(AbaCommand.name)
    private readonly abaCommandModel: Model<AbaCommandDocument>,
  ) {}

  async create(createAbaCommandDto: CreateAbaCommandDto): Promise<AbaCommandDocument> {
    const createAbaCommand = new this.abaCommandModel(createAbaCommandDto);
    return createAbaCommand.save();
  }

  async findAll(queryDto: QueryAbaCommandDto): Promise<{ data: AbaCommandDocument[]; total: number }> {
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
    const data = await this.abaCommandModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaCommandModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaCommandDocument> {
    return this.abaCommandModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaCommandDto: UpdateAbaCommandDto): Promise<AbaCommandDocument> {
    return this.abaCommandModel
      .findByIdAndUpdate(id, updateAbaCommandDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaCommandDocument> {
    return this.abaCommandModel.findByIdAndDelete(id).exec();
  }
}