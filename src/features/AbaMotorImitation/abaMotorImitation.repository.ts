import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbaMotorImitationDocument, AbaMotorImitation } from 'src/entities/AbaMotorImitation.entity';
import { CreateAbaMotorImitationDto } from './dto/createAbaMotorImitation.dto';
import { UpdateAbaMotorImitationDto } from './dto/updateAbaMotorImitation.dto';
import { QueryAbaMotorImitationDto } from './dto/queryAbaMotorImitation.dto';

@Injectable()
export class AbaMotorImitationRepository {
  constructor(
    @InjectModel(AbaMotorImitation.name)
    private readonly abaMotorImitationModel: Model<AbaMotorImitationDocument>,
  ) {}

  async create(createAbaMotorImitationDto: CreateAbaMotorImitationDto): Promise<AbaMotorImitationDocument> {
    const createdAbaMotorImitation = new this.abaMotorImitationModel(createAbaMotorImitationDto);
    return createdAbaMotorImitation.save();
  }

  async findAll(queryDto: QueryAbaMotorImitationDto): Promise<{ data: AbaMotorImitationDocument[]; total: number }> {
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
    const data = await this.abaMotorImitationModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('patient')
      .populate('doctor')
      .exec();

    const total = await this.abaMotorImitationModel.countDocuments(filter).exec();

    return { data, total };
  }

  async findOne(id: string): Promise<AbaMotorImitationDocument> {
    return this.abaMotorImitationModel.findById(id).populate('patient').populate('doctor').exec();
  }

  async update(id: string, updateAbaMotorImitationDto: UpdateAbaMotorImitationDto): Promise<AbaMotorImitationDocument> {
    return this.abaMotorImitationModel
      .findByIdAndUpdate(id, updateAbaMotorImitationDto, { new: true })
      .populate('patient')
      .populate('doctor')
      .exec();
  }

  async remove(id: string): Promise<AbaMotorImitationDocument> {
    return this.abaMotorImitationModel.findByIdAndDelete(id).exec();
  }
}