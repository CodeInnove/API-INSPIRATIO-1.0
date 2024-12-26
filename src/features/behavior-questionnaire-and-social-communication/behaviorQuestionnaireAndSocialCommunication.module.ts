import { Module } from "@nestjs/common";
import { BehaviorQuestionnaireAndSocialCommunicationRepository } from "./behaviorQuestionnaireAndSocialCommunications.repository";
import { BehaviorQuestionnaireAndSocialCommunicationService } from "./behaviorQuestionnaireAndSocialCommunication.service";
import { BehaviorQuestionnaireAndSocialCommunicationController } from "./behaviorQuestionnaireAndSocialCommunication.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BehaviorQuestionnaireAndSocialCommunicationSchema } from "src/entities/behaviorQuestionnaireAndSocialCommunication.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BehaviorQuestionnaireAndSocialCommunication', schema: BehaviorQuestionnaireAndSocialCommunicationSchema }]),
  ],
  providers: [BehaviorQuestionnaireAndSocialCommunicationService, BehaviorQuestionnaireAndSocialCommunicationRepository],
  controllers: [BehaviorQuestionnaireAndSocialCommunicationController],
  exports: [],
})
export class BehaviorQuestionnaireAndSocialCommunicationModule {}
