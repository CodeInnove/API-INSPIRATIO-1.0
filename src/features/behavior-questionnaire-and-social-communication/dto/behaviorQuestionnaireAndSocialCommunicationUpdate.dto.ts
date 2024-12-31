import { PartialType } from '@nestjs/swagger';
import { CreateBehaviorQuestionDto } from './behaviorQuestionnaireAndSocialCommunicationCreate.dto';

export class UpdateBehaviorQuestionnaireAndSocialCommunicationDto extends PartialType(CreateBehaviorQuestionDto) {}
