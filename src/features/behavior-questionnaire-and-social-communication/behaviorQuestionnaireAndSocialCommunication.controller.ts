import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { QuestionsAsqDTO } from "./dto/behaviorQuestionnaireAndSocialCommunicationCreate.dto";
import { UpdateBehaviorQuestionnaireAndSocialCommunicationDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationUpdate.dto";
import { BehaviorQuestionnaireAndSocialCommunicationService } from "./behaviorQuestionnaireAndSocialCommunication.service";
import { IBehaviorQuestionnaireAndSocialCommunicationEntity } from "src/entities/behaviorQuestionnaireAndSocialCommunication.entity";
import { IBehaviorQuestionnaireAndSocialCommunication } from "./types/behaviorQuestionnaireAndSocialCommunication";

@ApiTags('Behavior Questionnaire And Social Communication')
@Controller('Behavior-Questionnaire-And-Social-Communication')
export class BehaviorQuestionnaireAndSocialCommunicationController {
  constructor(private readonly behaviorQuestionnaireAndSocialCommunicationService: BehaviorQuestionnaireAndSocialCommunicationService) {}

  @Post()
    async create(@Body() data: QuestionsAsqDTO): Promise<IBehaviorQuestionnaireAndSocialCommunication> {
      return await this.behaviorQuestionnaireAndSocialCommunicationService.create(data);
    }
  
    @Get()
    async findAll() {
      return await this.behaviorQuestionnaireAndSocialCommunicationService.findAll();
    }
  
    @Get(':id')
    async findById(@Param() id: string) {
      return await this.behaviorQuestionnaireAndSocialCommunicationService.findById(id);
    }
  
    @Put(':id')
    async update(@Param() id: string, @Body() data: UpdateBehaviorQuestionnaireAndSocialCommunicationDto) {
      return await this.behaviorQuestionnaireAndSocialCommunicationService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param() id: string) {
      return await this.behaviorQuestionnaireAndSocialCommunicationService.delete(id);
    }
}