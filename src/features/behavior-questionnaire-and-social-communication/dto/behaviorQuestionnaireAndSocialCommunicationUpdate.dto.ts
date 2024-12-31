import { PartialType } from '@nestjs/swagger';
import { QuestionsAsqDTO } from './behaviorQuestionnaireAndSocialCommunicationCreate.dto';

export class UpdateBehaviorQuestionnaireAndSocialCommunicationDto extends PartialType(QuestionsAsqDTO) {}
