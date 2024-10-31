import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/types/User';
import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { IUserEntity } from 'src/entities/user.entity';
import { UpdateUserDto } from './dto/update_user.dto';
import { QueryDto } from './dto/query_user.dto';
import { ISpecialityEntity } from 'src/entities/speciality.entity';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class SpecialityRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<ISpecialityEntity>,
  ) {}

  async createSpeciality(data: CreateSpecialityDto): Promise<Speciality> {
    return this.userModel.create(data);
  }

  async findAll(options: QueryDto) {
    const {
      page = 1,
      limit = 10,
      name = '',
      cpf = '',
      dateEnd = null,
      dateInit = null,
      email = '',
      role = '',
    } = options;
    const skip = (page - 1) * limit;
    let query = {};

    if (name) {
      query = { ...query, name: { $regex: new RegExp(name, 'i') } };
    }

    if (email) {
      query = { ...query, email: { $regex: new RegExp(email, 'i') } };
    }

    if (cpf) {
      query = { ...query, cpf: { $regex: new RegExp(cpf, 'i') } };
    }

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

    const data = await this.userModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate('companies')
      .lean()
      .exec();

    const total = await this.userModel.countDocuments(query).exec();
    const pages = Math.ceil(total / limit);

    return { data, total, page: +page, pages };
  }

  async findByEmail(email: string): Promise<Speciality> {
    return this.userModel
      .findOne({ email })
      .select('+password')
      .select('+passwordResetToken')
      .select('+passwordResetExpires')
      .populate('companies')
      .lean()
      .exec();
  }

  async findByToken(token: string): Promise<Speciality> {
    return this.userModel.findOne({ passwordResetToken: token }).lean().exec();
  }

  async findById(id: string): Promise<Speciality> {
    return this.userModel.findById(id).populate('companies').lean().exec();
  }

  async update(id: string, data: UpdateUserDto): Promise<Speciality> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('companies')
      .lean()
      .exec();
  }


  async delete(id: string): Promise<Speciality> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}