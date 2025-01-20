import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSessionSummaryAbaDto } from "./dto/create-session-summary-aba.dto";
import { UpdateSessionSummaryAbaDto } from "./dto/update-session-summary-aba.dto";
import { ISessionSummaryABAEntity } from "src/entities/session-summary-aba.entity";

@Injectable()
export class SessionSummaryABARepository {
  constructor(
    @InjectModel('Session Summary ABA') private readonly sessionABAModel: Model<ISessionSummaryABAEntity>
  ) {}

  async create(data: CreateSessionSummaryAbaDto): Promise<ISessionSummaryABAEntity> {
    return await this.sessionABAModel.create(data);
  }

  async findAll(): Promise<ISessionSummaryABAEntity[]> {
    return await this.sessionABAModel.find().exec();
  }

  async findOne(id: string): Promise<ISessionSummaryABAEntity> {
    return await this.sessionABAModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSessionSummaryAbaDto): Promise<ISessionSummaryABAEntity> {
    return await this.sessionABAModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISessionSummaryABAEntity> {
    return await this.sessionABAModel.findByIdAndDelete(id).exec();
  }
}