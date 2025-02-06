import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaMotorImitationService } from './abaMotorImitation.service';
import { AbaMotorImitationController } from './abaMotorImitation.controller';
import { AbaMotorImitation,  AbaMotorImitationSchema } from 'src/entities/AbaMotorImitation.entity';
import { AbaMotorImitationRepository } from './abaMotorImitation.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaMotorImitation.name, schema: AbaMotorImitationSchema }]),
  ],
  controllers: [AbaMotorImitationController],
  providers: [AbaMotorImitationService, AbaMotorImitationRepository],
  exports: [AbaMotorImitationService]
})
export class AbaMotorImitationModule {}