import { Injectable } from '@nestjs/common';
import { AssessmentOfFunctionalLivingSkillsRepository} from './assessment-of-functional-living-skills.repository';

@Injectable()
export class AssessmentOfFunctionalLivingSkillsService {
  constructor(
      private readonly assessmentOfFunctionalLivingSkillsRepository: AssessmentOfFunctionalLivingSkillsRepository
    ) {}
  
    async create(data: any) {
      return this.assessmentOfFunctionalLivingSkillsRepository.create(data);
    }
  
    async findAll() {
      return this.assessmentOfFunctionalLivingSkillsRepository.findAll();
    }
  
    async findById(id: string) {
      return this.assessmentOfFunctionalLivingSkillsRepository.findById(id);
    }
  
    async update(id: string, data: any) {
      return this.assessmentOfFunctionalLivingSkillsRepository.update(id, data);
    }
  
    async delete(id: string) {
      return this.assessmentOfFunctionalLivingSkillsRepository.delete(id);
    }
}
