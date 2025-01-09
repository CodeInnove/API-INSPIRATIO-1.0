import { Module } from '@nestjs/common';
import { ChecklistDenverService } from './checklist-denver.service';
import { ChecklistDenverController } from './checklist-denver.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChecklistDenverSchema } from 'src/entities/checklist-denver.entity';
import { ChecklistDenverRepository } from './checklist-denver.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'checklistDenver', schema: ChecklistDenverSchema}
    ])
  ],
  providers: [ChecklistDenverService, ChecklistDenverRepository],
  controllers: [ChecklistDenverController],
})
export class ChecklistDenverModule {}
