import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IBehaviorQuestionnaireAndSocialCommunicationEntity } from "src/entities/behaviorQuestionnaireAndSocialCommunication.entity";
import { CreateBehaviorQuestionDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationCreate.dto";
import { UpdateBehaviorQuestionnaireAndSocialCommunicationDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationUpdate.dto";

@Injectable()
export class BehaviorQuestionnaireAndSocialCommunicationRepository {
  constructor(
    @InjectModel('behaviorQuestionnaireAndSocialCommunication') private readonly behaviorQuestionnaireAndSocialCommunicationModel: Model<IBehaviorQuestionnaireAndSocialCommunicationEntity>
  ) {}

  async create(data: CreateBehaviorQuestionDto): Promise<IBehaviorQuestionnaireAndSocialCommunicationEntity> {
    return this.behaviorQuestionnaireAndSocialCommunicationModel.create(data);
  }
  
  async findAll(): Promise<IBehaviorQuestionnaireAndSocialCommunicationEntity[]> {
    return this.behaviorQuestionnaireAndSocialCommunicationModel.find();
  }

  async findById(id: string): Promise<IBehaviorQuestionnaireAndSocialCommunicationEntity> {
    return this.behaviorQuestionnaireAndSocialCommunicationModel.findById(id);
  }

  async update(id: string, data: UpdateBehaviorQuestionnaireAndSocialCommunicationDto): Promise<IBehaviorQuestionnaireAndSocialCommunicationEntity> {
    return this.behaviorQuestionnaireAndSocialCommunicationModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IBehaviorQuestionnaireAndSocialCommunicationEntity> {
    return this.behaviorQuestionnaireAndSocialCommunicationModel.findByIdAndDelete(id);
  }
}