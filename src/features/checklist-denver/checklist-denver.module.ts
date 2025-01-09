import { Module } from '@nestjs/common';
import { ChecklistDenverService } from './checklist-denver.service';
import { ChecklistDenverController } from './checklist-denver.controller';

@Module({
  controllers: [ChecklistDenverController],
  providers: [ChecklistDenverService],
})
export class ChecklistDenverModule {}
