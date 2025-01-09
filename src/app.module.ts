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
import { FunctionalIndependencyMetricsModule } from './features/functionalIndependencyMetrics/functionalIndependencyMetrics.module';
import { AflsModule } from './features/afls/afls.module';
import { IncomeTablesModule } from './features/income-table/incomeTable.module';
import { IntraverbalAssessmentModule } from './features/intraverbal-assessment/intraverbalAssessment.module';
import { PsychopedagogicalAnamnesisModule } from './features/psychopedagogical-anamnesis/psychopedagogicalAnamnesis.module'; 
import { AnamnesisForCerebralPalsyModule } from './features/anamnesis-for-cerebral-palsy/anamnesis-for-cerebral-palsy.module';
import { PortageGuidetoPreschoolEducationModule } from './features/portage-guideto-preschool-education/portage-guideto-preschool-education.module';
import { AnamnesisSpeechTherapyModule } from './features/anamnesis-speech-therapy/anamnesisSpeechTherapy.module';
import { SensoryProcessingMeasureModule } from './features/sensory-processing-measure/sensoryProcessingMeasure.module';
import { SensoryProcessingMeasureSchoolModule } from './features/sensory-processing-measure-school/sensoryProcessingMeasureSchool.module';
import { SensoryProcessingMeasurePreschoolModule } from './features/sensory-processing-measure-preschool/sensoryProcessingMeasurePreschool.module';
import { SensoryProcessingMeasureSchoolPreschoolModule } from './features/sensory-processing-measure-school-preschool/sensoryProcessingMeasureSchoolPreSchool.module';
import { OccupationalTherapyAnamnesisModule } from './features/occupational-therapy-anamnesis/occupationalTherapyAnamnesis.module';
import { SpeechLanguagePathologyEvaluationForDysphagiaModule } from './features/speech-language-pathology-evaluation-for-dysphagia/speechLanguagePathologyEvaluationForDysphagia.module';
import { IncomeAssessmentModule } from './features/income-assessment/incomeAssessment.module';
import { ChecklistDenverModule } from './features/checklist-denver/checklist-denver.module';
import { PortageGuidetoPhysiotherapyModule } from './features/portage-guideto-physiotherapy/portage-guideto-physiotherapy.module';


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
    AflsModule,
    IncomeTablesModule,
    PsychopedagogicalAnamnesisModule,
    IntraverbalAssessmentModule,
    PsychopedagogicalAnamnesisModule,
    AnamnesisForCerebralPalsyModule,
    PortageGuidetoPreschoolEducationModule,
    AnamnesisSpeechTherapyModule,
    SensoryProcessingMeasureModule,
    SensoryProcessingMeasureSchoolModule,
    SensoryProcessingMeasurePreschoolModule,
    SensoryProcessingMeasureSchoolPreschoolModule,
    OccupationalTherapyAnamnesisModule,
    SpeechLanguagePathologyEvaluationForDysphagiaModule,
    IncomeAssessmentModule,
    ChecklistDenverModule,
    PortageGuidetoPhysiotherapyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}