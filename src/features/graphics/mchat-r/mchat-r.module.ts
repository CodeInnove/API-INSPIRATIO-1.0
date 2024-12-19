import { Module } from '@nestjs/common';
import { MchatRService } from './mchat-r.service';
import { MchatRController } from './mchat-r.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { mchatRSchema } from 'src/entities/mchat-R.entity';
import { MchatRRepository } from './mchar-r.repository';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: 'Mchat-R', schema: mchatRSchema }]),
    ],
  controllers: [MchatRController],
  providers: [MchatRService, MchatRRepository],
})
export class MchatRModule {}
