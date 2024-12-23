import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IMchatREntity } from "./types/assessment-of-functional-living-skill"; 

@Injectable()
export class AssessmentOfFunctionalLivingSkillsRepository {
  constructor(
    @InjectModel('AssessmentOfFunctionalLivingSkills') private readonly assessmentOfFunctionalLivingSkillsModel: Model<IMchatREntity>
  ) {}

  async create(data: IMchatREntity): Promise<IMchatREntity> {
    return this.assessmentOfFunctionalLivingSkillsModel.create(data);
  }

  async findAll(): Promise<IMchatREntity[]> {
    return this.assessmentOfFunctionalLivingSkillsModel.find();
  }

  async findById(id: string): Promise<IMchatREntity> {
    return this.assessmentOfFunctionalLivingSkillsModel.findById(id);
  }

  async update(id: string, data: IMchatREntity): Promise<IMchatREntity> {
    return this.assessmentOfFunctionalLivingSkillsModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<IMchatREntity> {
    return this.assessmentOfFunctionalLivingSkillsModel.findByIdAndDelete(id);
  }
}