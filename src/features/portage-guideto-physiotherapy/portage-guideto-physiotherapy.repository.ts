import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPortageGuidetoPhysiotherapyEntity } from "src/entities/portage-guideto-physiotherapy.entity";
import { CreatePortageGuidetoPhysiotherapyDto } from "./dto/create-portage-guideto-physiotherapy.dto";
import { UpdatePortageGuidetoPhysiotherapyDto } from "./dto/update-portage-guideto-physiotherapy.dto";
import { QueryPortageMotorPhysioDto } from "./dto/query-portage-guideto-physiotherapy.dto";

@Injectable()
export class PortageGuidetoPhysiotherapyRepository {
  constructor(
    @InjectModel('portageGuidetoPhysiotherapy') private readonly portagePhysiotherapyModel: Model<IPortageGuidetoPhysiotherapyEntity>
  ) {}

  async create(data: CreatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.create(data);
  }

 async findAll(options: QueryPortageMotorPhysioDto) {
     const {
       page = 1,
       limit = 10,
       name = '',
       cpf = '',
       dateEnd = null,
       dateInit = null,
       email = '',
       role = '',
       type = '',
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
 
     if (type) {
       query = { ...query, type: { $in: type } };
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
 
     const data = await this.portagePhysiotherapyModel
       .find(query)
       .skip(skip)
       .limit(limit)
       .populate('patients')
       .populate('doctors')
       .populate('responsible')
       .lean()
       .exec();
 
     const total = await this.portagePhysiotherapyModel.countDocuments(query).exec();
     const pages = Math.ceil(total / limit);
 
     return { data, total, page: +page, pages };
   }

  async findById(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return this.portagePhysiotherapyModel.findById(id)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .populate('speciality')
      .select('Consultation')
      .lean()
      .exec();
  }

  async update(id: string, data: UpdatePortageGuidetoPhysiotherapyDto): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IPortageGuidetoPhysiotherapyEntity> {
    return await this.portagePhysiotherapyModel.findByIdAndDelete(id).exec();
  }
}