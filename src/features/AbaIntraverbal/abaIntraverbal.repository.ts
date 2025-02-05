import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaIntraverbalDocument, AbaIntraverbal } from 'src/entities/AbaIntraverbal.entity';
import { CreateAbaIntraverbalDto } from './dto/createAbaIntraverbal.dto';
import { UpdateAbaIntraverbalDto } from './dto/updateAbaIntraverbal.dto';
import { QueryAbaIntraverbalDto } from './dto/queryAbaIntraverbal.dto';

@Injectable()
export class AbaIntraverbalRepository {
  constructor(
    @InjectModel(AbaIntraverbal.name)
    private readonly abaIntraverbal: Model<AbaIntraverbalDocument>,
  ) {}

  async create(createAbaIntraverbalDto: CreateAbaIntraverbalDto): Promise<AbaIntraverbalDocument> {
    const createAbaIntraverbal = new this.abaIntraverbal(createAbaIntraverbalDto);
    return createAbaIntraverbal.save();
  }

  async findAll(queryDto: QueryAbaIntraverbalDto): Promise<{ data: AbaIntraverbalDocument[]; total: number }> {
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
    const data = await this.abaIntraverbal
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaIntraverbal.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaIntraverbalDocument> {
    return this.abaIntraverbal.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaIntraverbalDto: UpdateAbaIntraverbalDto): Promise<AbaIntraverbalDocument> {
    return this.abaIntraverbal
      .findByIdAndUpdate(id, updateAbaIntraverbalDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaIntraverbalDocument> {
    return this.abaIntraverbal.findByIdAndDelete(id).exec();
  }
}