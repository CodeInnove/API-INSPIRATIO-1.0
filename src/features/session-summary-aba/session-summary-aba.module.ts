import { Module } from '@nestjs/common';
import { SessionSummaryAbaService } from './session-summary-aba.service';
import { SessionSummaryAbaController } from './session-summary-aba.controller';
import { SessionSummaryABARepository } from './session-summary-aba.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSummaryABASchema } from 'src/entities/session-summary-aba.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Session Summary ABA', schema: SessionSummaryABASchema}
    ])
  ],
  providers: [SessionSummaryAbaService, SessionSummaryABARepository],
  controllers: [SessionSummaryAbaController],
})
export class SessionSummaryAbaModule {}
