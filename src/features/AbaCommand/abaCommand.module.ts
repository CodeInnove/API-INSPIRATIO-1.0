import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaCommandService } from './abaCommand.service';
import { AbaCommandController } from './abaCommand.controller';
import { AbaCommand, AbaCommandSchema } from 'src/entities/AbaCommand.entity';
import { AbaCommandRepository } from './abaCommand.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaCommand.name, schema: AbaCommandSchema }]),
  ],
  controllers: [AbaCommandController],
  providers: [AbaCommandService, AbaCommandRepository],
  exports: [AbaCommandService]
})
export class AbaCommandModule {}