import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAnamneseCerebralEntity } from 'src/entities/anamnesis-for-cerebral-palsy.entity';
import { CreateAfcpDto } from './dto/create-anamnesis-for-cerebral-palsy.dto';
import { UpdateAfcpDto } from './dto/update-anamnesis-for-cerebral-palsy.dto';
import { QueryAfcpDto } from './dto/query-anamnesis-for-cerebral-palsy.dto';
import { AnamnesisForCerebralPalsy } from './types/anamneseForCerebralPalsy';

@Injectable()
export class AfcpRepository {
  constructor(
    @InjectModel('afcp')
    private readonly afcpModel: Model<IAnamneseCerebralEntity>,
  ) {}

  async createAfcp(data: CreateAfcpDto): Promise<IAnamneseCerebralEntity> {
    return this.afcpModel.create(data);
  }

  async findAll(options: QueryAfcpDto) {
    const { dateEnd = null, dateInit = null, role = '' } = options;

    let query = {};

    if (role) {
      query = { ...query, roles: { $in: role } };
    }

    if (dateInit && dateEnd) {
      query = {
        ...query,
        createdAt: {
          $gte: new Date(dateInit),
          $lte: new Date(dateEnd),
        },
      };
    }

    const data = await this.afcpModel
      .find(query)
      .populate('doctor')
      .populate('patient')
      .populate('speciality')
      .lean()
      .exec();

    const total = await this.afcpModel.countDocuments(query).exec();

    return { data, total };
  }

  async findByToken(token: string): Promise<AnamnesisForCerebralPalsy> {
    return this.afcpModel.findOne({ passwordResetToken: token }).lean().exec();
  }

  async findById(id: string): Promise<AnamnesisForCerebralPalsy> {
    return this.afcpModel.findById(id);
  }

  async update(
    id: string,
    data: UpdateAfcpDto,
  ): Promise<AnamnesisForCerebralPalsy> {
    return this.afcpModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('consultation')
      .lean()
      .exec();
  }

  async delete(id: string): Promise<AnamnesisForCerebralPalsy> {
    return this.afcpModel.findByIdAndDelete(id).exec();
  }
}
