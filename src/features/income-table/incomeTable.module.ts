import { Module } from "@nestjs/common";
import { IncomeTablesService } from "./incomeTable.service";
import { IncomeTablesController } from "./incomeTable.controller";
import { IncomeTablesRepository } from "./incomeTables.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { IncomeTablesSchema } from "src/entities/incomeTable.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'IncomeTable', schema: IncomeTablesSchema }]),
  ],
  providers: [IncomeTablesService, IncomeTablesRepository],
  controllers: [IncomeTablesController],
  exports: [],
})
export class IncomeTablesModule {}
