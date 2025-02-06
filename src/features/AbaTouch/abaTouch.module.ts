import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaTouchService } from './abaTouch.service';
import { AbaTouchController } from './abaTouch.controller';
import { AbaTouch, AbaTouchSchema } from 'src/entities/AbaTouch.entity';
import { AbaTouchRepository } from './abaTouch.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaTouch.name, schema: AbaTouchSchema }]),
  ],
  controllers: [AbaTouchController],
  providers: [AbaTouchService, AbaTouchRepository],
  exports: [AbaTouchService]
})
export class AbaTouchModule {}