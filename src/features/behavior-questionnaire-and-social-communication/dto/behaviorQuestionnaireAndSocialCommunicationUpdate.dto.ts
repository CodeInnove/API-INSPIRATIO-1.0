import { PartialType } from '@nestjs/swagger';
import { CreateBehaviorQuestionnaireAndSocialCommunicationDto } from './behaviorQuestionnaireAndSocialCommunicationCreate.dto';

export class UpdateBehaviorQuestionnaireAndSocialCommunicationDto extends PartialType(CreateBehaviorQuestionnaireAndSocialCommunicationDto) {}
