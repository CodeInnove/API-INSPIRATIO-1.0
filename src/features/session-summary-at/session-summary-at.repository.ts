import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSessionSummaryAtDto } from "./dto/create-session-summary-at.dto";
import { UpdateSessionSummaryAtDto } from "./dto/update-session-summary-at.dto";
import { SessionSummaryAtEntity } from "src/entities/session-summary-at.entity";


@Injectable()
export class SessionSummaryATRepository {
  constructor(
    @InjectModel('SessionSummaryAT') private readonly sessionSummaryModel: Model<SessionSummaryAtEntity>
  ) {}

  async create(data: CreateSessionSummaryAtDto): Promise<SessionSummaryAtEntity> {
    return await this.sessionSummaryModel.create(data);
  }

  async findAll(): Promise<SessionSummaryAtEntity[]> {
    return await this.sessionSummaryModel.find().exec();
  }

  async findOne(id: string): Promise<SessionSummaryAtEntity> {
    return await this.sessionSummaryModel.findById(id).exec();
  }

  async update(id: string, data: UpdateSessionSummaryAtDto): Promise<SessionSummaryAtEntity> {
    return await this.sessionSummaryModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<SessionSummaryAtEntity> {
    return await this.sessionSummaryModel.findByIdAndDelete(id).exec();
  }
}