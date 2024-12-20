import { Module } from '@nestjs/common';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';
import { AutismBehaviorChecklistController } from './autismBehaviorChecklist.controller';

@Module({
  controllers: [AutismBehaviorChecklistController],
  providers: [AutismBehaviorChecklistService],
})
export class AutismBehaviorChecklistModule {}
