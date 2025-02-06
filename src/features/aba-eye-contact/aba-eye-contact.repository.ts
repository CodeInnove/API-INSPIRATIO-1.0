import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaEyeContactDocument, AbaEyeContact } from 'src/entities/aba-eye-contact.entity';
import { CreateAbaEyeContactDto } from './dto/create-aba-eye-contact.dto';
import { UpdateAbaEyeContactDto } from './dto/update-aba-eye-contact.dto';
import { QueryAbaEyeContactDto } from './dto/query-aba-eye-contact.dto';

@Injectable()
export class AbaEyeContactRepository {
  constructor(
    @InjectModel(AbaEyeContact.name)
    private readonly abaEyeContactModel: Model<AbaEyeContactDocument>,
  ) {}

  async create(createAbaEyeContactDto: CreateAbaEyeContactDto): Promise<AbaEyeContactDocument> {
    const createdAbaEyeContact = new this.abaEyeContactModel(createAbaEyeContactDto);
    return createdAbaEyeContact.save();
  }

  async findAll(queryDto: QueryAbaEyeContactDto): Promise<{ data: AbaEyeContactDocument[]; total: number }> {
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
    const data = await this.abaEyeContactModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaEyeContactModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaEyeContactDocument> {
    return this.abaEyeContactModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaEyeContactDto: UpdateAbaEyeContactDto): Promise<AbaEyeContactDocument> {
    return this.abaEyeContactModel
      .findByIdAndUpdate(id, updateAbaEyeContactDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaEyeContactDocument> {
    return this.abaEyeContactModel.findByIdAndDelete(id).exec();
  }
}