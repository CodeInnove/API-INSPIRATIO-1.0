import { Module } from '@nestjs/common';
import { AutismBehaviorChecklistService } from './autismBehaviorChecklist.service';
import { AutismBehaviorChecklistController } from './autismBehaviorChecklist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AutismBehaviorChecklistEntitySchema } from 'src/entities/autismBehaviorChecklist.entity';
import { AutismBehaviorChecklistRepository } from './autismBehavioChecklist.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'autismBehaviorChecklist', schema: AutismBehaviorChecklistEntitySchema }
    ])
  ],
  controllers: [AutismBehaviorChecklistController],
  providers: [AutismBehaviorChecklistService, AutismBehaviorChecklistRepository],
})
export class AutismBehaviorChecklistModule {}
