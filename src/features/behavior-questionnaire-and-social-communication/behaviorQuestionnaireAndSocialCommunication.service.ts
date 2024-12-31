import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BehaviorQuestionnaireAndSocialCommunicationRepository } from "./behaviorQuestionnaireAndSocialCommunications.repository";
import { QuestionsAsqDTO } from "./dto/behaviorQuestionnaireAndSocialCommunicationCreate.dto";
import { IBehaviorQuestionnaireAndSocialCommunicationEntity } from "src/entities/behaviorQuestionnaireAndSocialCommunication.entity";
import { UpdateBehaviorQuestionnaireAndSocialCommunicationDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationUpdate.dto";
import { IBehaviorQuestionnaireAndSocialCommunication } from "./types/behaviorQuestionnaireAndSocialCommunication";

@Injectable()
export class BehaviorQuestionnaireAndSocialCommunicationService {
   constructor(
      private readonly bQASCRepository: BehaviorQuestionnaireAndSocialCommunicationRepository
    ) {}

  async create(bqasc: QuestionsAsqDTO): Promise<IBehaviorQuestionnaireAndSocialCommunication> {
      try {
        return await this.bQASCRepository.create(bqasc);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

  async findAll() {
      try {
        return await this.bQASCRepository.findAll();
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async findById(id: string) {
      try {
        return await this.bQASCRepository.findById(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async update(id: string, afcp: UpdateBehaviorQuestionnaireAndSocialCommunicationDto) {
      try {
        return await this.bQASCRepository.update(id, afcp);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async delete(id: string){
      try {
        return await this.bQASCRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  }
