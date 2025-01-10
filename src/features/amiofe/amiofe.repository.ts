import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAmiofeDto } from "./dto/create-amiofe.dto";
import { IAmiofeEntity } from "src/entities/amiofe.entity";
import { UpdateAmiofeDto } from "./dto/update-amiofe.dto";
import { QueryAmiofeDto } from "./dto/query-amiofe.dto";

@Injectable()
export class AmiofeRepository {
  constructor(
    @InjectModel('Amiofe') private readonly amiofeModel: Model<IAmiofeEntity>,
  ) { }

  async createAmiofe(data: CreateAmiofeDto ): Promise<IAmiofeEntity> {
    return this.amiofeModel.create(data);
  }

  async findAll(options: QueryAmiofeDto) {
    const {
      dateEnd = null,
      dateInit = null,
      role = '',
    } = options;

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

    const data = await this.amiofeModel
      .find(query)
      .populate('patients')
      .populate('doctors')
      .lean()
      .exec();

    const total = await this.amiofeModel.countDocuments(query).exec();

    return { data, total};
  }

  async findById(id: string): Promise<IAmiofeEntity> {
    return this.amiofeModel.findById(id)
      .populate('patients')
      .populate('doctors')
      .lean()
      .exec();
  }

  async update(id: string, data: UpdateAmiofeDto): Promise<IAmiofeEntity> {
    return this.amiofeModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();
  }


  async delete(id: string): Promise<IAmiofeEntity> {
    return this.amiofeModel.findByIdAndDelete(id).exec();
  }
}