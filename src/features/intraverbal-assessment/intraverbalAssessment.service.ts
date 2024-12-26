import { Injectable } from "@nestjs/common";
import { IntraverbalAssessmentRepository } from "./intraverbalAssessment.repository";

@Injectable()
export class IntraverbalAssessmentService {
  constructor(
    private readonly intraverbalAssessmentRepository: IntraverbalAssessmentRepository
  ) {}

  async create(data: any) {
    return this.intraverbalAssessmentRepository.create(data);
  }

  async findAll() {
    return this.intraverbalAssessmentRepository.findAll();
  }

  async findById(id: string) {
    return this.intraverbalAssessmentRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.intraverbalAssessmentRepository.update(id, data);
  }

  async delete(id: string) {
    return this.intraverbalAssessmentRepository.delete(id);
  }
}