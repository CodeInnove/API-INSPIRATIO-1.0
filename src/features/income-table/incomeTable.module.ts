import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeTableController } from './incomeTable.controller';
import { IncomeTableService } from './incomeTable.service';
import { IncomeTableRepository } from './incomeTables.repository';
import { IncomeTableSchema } from 'src/entities/incomeTable.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        { name: 'incometable', schema: IncomeTableSchema }
      ])
    ],
  controllers: [ IncomeTableController],
  providers: [ IncomeTableService, IncomeTableRepository],
})
export class IncomeTablesModule {}
