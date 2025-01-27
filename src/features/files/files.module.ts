import { Module } from "@nestjs/common";
import { FilesController } from "./files.controller";
import { FilesRepository } from "./files.repository";
import { FilesService } from "./files.service";
import { MongooseModule } from "@nestjs/mongoose";
import { FileSchema } from "src/entities/file.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'File',
        schema: FileSchema
      }
    ])
  ],
  controllers: [FilesController],
  providers: [FilesService, FilesRepository],
})
export class FilesModule {}