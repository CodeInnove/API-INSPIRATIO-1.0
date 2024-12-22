import { Module } from '@nestjs/common';
import { IncomeTableService } from './incomeTable.service';
import { IncomeTableController } from './incomeTable.controller';

@Module({
  controllers: [IncomeTableController],
  providers: [IncomeTableService],
})
export class IncomeTableModule {}
