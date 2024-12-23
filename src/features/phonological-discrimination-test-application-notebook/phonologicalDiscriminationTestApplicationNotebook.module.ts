import { Module } from "@nestjs/common";
import { PhonologicalDiscriminationTestApplicationNotebookService } from "./phonologicalDiscriminationTestApplicationNotebook.service";
import { PhonologicalDiscriminationTestApplicationNotebookController } from "./phonologicalDiscriminationTestApplicationNotebook.controller";
import { PhonologicalDiscriminationTestApplicationNotebookRepository } from "./phonologicalDiscriminationTestApplicationNotebook.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { PhonologicalDiscriminationTestApplicationNotebookSchema } from "src/entities/phonologicalDiscriminationTestApplicationNotebook.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PhonologicalDiscriminationTestApplicationNotebook', schema: PhonologicalDiscriminationTestApplicationNotebookSchema }]),
  ],
  providers: [PhonologicalDiscriminationTestApplicationNotebookService, PhonologicalDiscriminationTestApplicationNotebookRepository],
  controllers: [PhonologicalDiscriminationTestApplicationNotebookController],
  exports: [],
})
export class PhonologicalDiscriminationTestApplicationNotebookModule {}
