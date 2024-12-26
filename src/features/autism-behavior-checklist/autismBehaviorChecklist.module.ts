import { Module } from '@nestjs/common';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';
import { AutismBehaviorChecklistController } from './autismBehaviorChecklist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { autismBehaviorChecklistSchema } from 'src/entities/autismBehaviorChecklist.entity';
import { AutismBehaviorChecklistRepository } from './autismBehavioChecklist.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'autismBehaviorChecklist', schema: autismBehaviorChecklistSchema }
    ])
  ],
  controllers: [AutismBehaviorChecklistController],
  providers: [AutismBehaviorChecklistService, AutismBehaviorChecklistRepository],
})
export class AutismBehaviorChecklistModule {}
