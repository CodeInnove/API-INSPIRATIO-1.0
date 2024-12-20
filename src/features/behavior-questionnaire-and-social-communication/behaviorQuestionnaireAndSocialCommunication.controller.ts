import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateBehaviorQuestionnaireAndSocialCommunicationDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationCreate.dto";
import { UpdateBehaviorQuestionnaireAndSocialCommunicationDto } from "./dto/behaviorQuestionnaireAndSocialCommunicationUpdate.dto";
import { BehaviorQuestionnaireAndSocialCommunicationService } from "./behaviorQuestionnaireAndSocialCommunication.service";

@ApiTags('Behavior Questionnaire And Social Communication')
@Controller('Behavior-Questionnaire-And-Social-Communication')
export class BehaviorQuestionnaireAndSocialCommunicationController {
  constructor(private readonly behaviorQuestionnaireAndSocialCommunicationService: BehaviorQuestionnaireAndSocialCommunicationService) {}

  @Post()
  create(@Body() data: CreateBehaviorQuestionnaireAndSocialCommunicationDto) {
    return this.behaviorQuestionnaireAndSocialCommunicationService.create(data);
  }

  @Get()
  findAll() {
    return this.behaviorQuestionnaireAndSocialCommunicationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.behaviorQuestionnaireAndSocialCommunicationService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateBehaviorQuestionnaireAndSocialCommunicationDto) {
    return this.behaviorQuestionnaireAndSocialCommunicationService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.behaviorQuestionnaireAndSocialCommunicationService.delete(id);
  }
}