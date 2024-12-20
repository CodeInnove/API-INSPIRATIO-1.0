import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseConnectionService } from './database/connection.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './core/auth/auth.module';
import { MailsModule } from './features/mails/mails.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { SpecialityModule } from './features/speciality/speciality.module';
import { ConsultationModule } from './features/consultation/consultation.module';
import { FunctionalIndependencyMetricsModule } from './features/graphics/functionalIndependencyMetrics/functionalIndependencyMetrics.module';
import { childhoodAutismRatingScaleModule } from './features/graphics/childhoodAutismRatingScale/childhoodAutismRatingScale.module';
import { AnamneseGeneralModule } from './features/reports/anamnese_general/anamnese_general.module';
import { MchatRModule } from './features/graphics/mchat-r/mchat-r.module';
import { AutismBehaviorChecklistModule } from './features/autism-behavior-checklist/autismBehaviorChecklist.module';
import { SociallySavvyChecklistModule } from './features/socially-savvy-checklist/sociallySavvyChecklist.module';
import { BehaviorQuestionnaireAndSocialCommunicationModule } from './features/behavior-questionnaire-and-social-communication/behaviorQuestionnaireAndSocialCommunication.module';
import { AssessmentOfFunctionalLivingSkillsModule } from './features/graphics/assessment-of-functional-living-skills/assessment-of-functional-living-skills.module';
import { VerbalBehaviorMilestonesAssessmentAndPlacementProgramModule } from './features/graphics/verbal-behavior-milestones-assessment-and-placement-program/verbal-behavior-milestones-assessment-and-placement-program.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (database: DatabaseConnectionService) => {
        try {
          console.log('Tentando conectar ao MongoDB...');
          const mongoUri = database.get();
          console.log('Conectado ao MongoDB Atlas com sucesso!');
          return <MongooseModuleOptions>{
            uri: mongoUri,
          };
        } catch (error) {
          console.error('Erro ao conectar ao MongoDB:', error);
          throw error;
        }
      },
      inject: [DatabaseConnectionService],
    }),

    // envio de email
    MailerModule.forRootAsync({
      useFactory: () => ({
        //Mailtrap's user and password
        transport: {
          host: 'codeinnove@gmail.com',
          port: 465,
          auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PASS,
          },
        },
        template: {
          dir: './src/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),

    AuthModule,
    UsersModule,
    MailsModule,
    SpecialityModule,
    ConsultationModule,
    FunctionalIndependencyMetricsModule,
    childhoodAutismRatingScaleModule,
    AnamneseGeneralModule,
    MchatRModule,
    AutismBehaviorChecklistModule,
    SociallySavvyChecklistModule,
    BehaviorQuestionnaireAndSocialCommunicationModule
    AssessmentOfFunctionalLivingSkillsModule,
    VerbalBehaviorMilestonesAssessmentAndPlacementProgramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}