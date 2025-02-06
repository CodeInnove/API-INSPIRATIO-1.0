import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaTouchDocument, AbaTouch } from 'src/entities/AbaTouch.entity';
import { CreateAbaTouchDto } from './dto/createAbaTouch.dto';
import { UpdateAbaTouchDto } from './dto/updateAbaTouch.dto';
import { QueryAbaTouchDto } from './dto/queryAbaTouch.dto';

@Injectable()
export class AbaTouchRepository {
  constructor(
    @InjectModel(AbaTouch.name)
    private readonly abaTouchModel: Model<AbaTouchDocument>,
  ) {}

  async create(createAbaTouchDto: CreateAbaTouchDto): Promise<AbaTouchDocument> {
    const createdAbaTouch = new this.abaTouchModel(createAbaTouchDto);
    return createdAbaTouch.save();
  }

  async findAll(queryDto: QueryAbaTouchDto): Promise<{ data: AbaTouchDocument[]; total: number }> {
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
    const data = await this.abaTouchModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaTouchModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaTouchDocument> {
    return this.abaTouchModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaTouchDto: UpdateAbaTouchDto): Promise<AbaTouchDocument> {
    return this.abaTouchModel
      .findByIdAndUpdate(id, updateAbaTouchDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaTouchDocument> {
    return this.abaTouchModel.findByIdAndDelete(id).exec();
  }
}