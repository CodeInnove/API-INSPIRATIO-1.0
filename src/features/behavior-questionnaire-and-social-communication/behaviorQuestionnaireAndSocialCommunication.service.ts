import { Injectable } from "@nestjs/common";
import { BehaviorQuestionnaireAndSocialCommunicationRepository } from "./behaviorQuestionnaireAndSocialCommunications.repository";
@Injectable()
export class BehaviorQuestionnaireAndSocialCommunicationService {
  constructor(
    private readonly behaviorQuestionnaireAndSocialCommunicationRepository: BehaviorQuestionnaireAndSocialCommunicationRepository
  ) {}

  async create(data: any) {
    return this.behaviorQuestionnaireAndSocialCommunicationRepository.create(data);
  }

  async findAll() {
    return this.behaviorQuestionnaireAndSocialCommunicationRepository.findAll();
  }

  async findById(id: string) {
    return this.behaviorQuestionnaireAndSocialCommunicationRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.behaviorQuestionnaireAndSocialCommunicationRepository.update(id, data);
  }

  async delete(id: string) {
    return this.behaviorQuestionnaireAndSocialCommunicationRepository.delete(id);
  }
}