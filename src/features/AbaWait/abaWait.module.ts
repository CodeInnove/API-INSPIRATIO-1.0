import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaWaitService } from './abaWait.service';
import { AbaWaitController } from './abaWait.controller';
import { AbaWait, AbaWaitSchema } from 'src/entities/AbaWait.entity';
import { AbaWaitRepository } from './abaWait.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaWait.name, schema: AbaWaitSchema }]),
  ],
  controllers: [AbaWaitController],
  providers: [AbaWaitService, AbaWaitRepository],
  exports: [AbaWaitService]
})
export class AbaWaitModule {}