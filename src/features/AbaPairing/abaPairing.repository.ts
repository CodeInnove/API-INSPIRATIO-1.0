import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaPairingDocument, AbaPairing } from 'src/entities/AbaPairing.entity';
import { CreateAbaPairingDto } from './dto/createAbaPairing.dto';
import { UpdateAbaPairingDto } from './dto/updateAbaPairing';
import { QueryAbaPairingDto } from './dto/queryAbaPairing.dto';

@Injectable()
export class AbaPairingRepository {
  constructor(
    @InjectModel(AbaPairing.name)
    private readonly abaPairingModel: Model<AbaPairingDocument>,
  ) {}

  async create(createAbaPairingDto: CreateAbaPairingDto): Promise<AbaPairingDocument> {
    const createdAbaPairing = new this.abaPairingModel(createAbaPairingDto);
    return createdAbaPairing.save();
  }

  async findAll(queryDto: QueryAbaPairingDto): Promise<{ data: AbaPairingDocument[]; total: number }> {
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
    const data = await this.abaPairingModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaPairingModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaPairingDocument> {
    return this.abaPairingModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaPairingDto: UpdateAbaPairingDto): Promise<AbaPairingDocument> {
    return this.abaPairingModel
      .findByIdAndUpdate(id, updateAbaPairingDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaPairingDocument> {
    return this.abaPairingModel.findByIdAndDelete(id).exec();
  }
}