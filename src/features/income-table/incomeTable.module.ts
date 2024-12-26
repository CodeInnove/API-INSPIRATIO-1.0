import { Module } from "@nestjs/common";
import { IncomeTableService } from "./incomeTable.service";
import { IncomeTableController } from "./incomeTable.controller";
import { IncomeTableRepository } from "./incomeTables.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { IncomeTableSchema } from "src/entities/incomeTable.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'IncomeTable', schema: IncomeTableSchema }]),
  ],
  providers: [IncomeTableService, IncomeTableRepository],
  controllers: [IncomeTableController],
  exports: [],
})
export class IncomeTablesModule {}
