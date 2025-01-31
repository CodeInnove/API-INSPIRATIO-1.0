import { Module } from '@nestjs/common';
import { SessionSummaryAtService } from './session-summary-at.service';
import { SessionSummaryAtController } from './session-summary-at.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSummaryAtSchema } from 'src/entities/session-summary-at.entity';
import { SessionSummaryATRepository } from './session-summary-at.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'SessionSummaryAT', schema: SessionSummaryAtSchema}
    ])
  ],
  providers: [SessionSummaryAtService, SessionSummaryATRepository],
  controllers: [SessionSummaryAtController],
})
export class SessionSummaryAtModule {}
