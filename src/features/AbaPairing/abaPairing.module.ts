import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaPairingService } from './abaPairing.service';
import { AbaPairingController } from './abaPairing.controller';
import { AbaPairing, AbaPairingSchema } from 'src/entities/AbaPairing.entity';
import { AbaPairingRepository } from './abaPairing.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaPairing.name, schema: AbaPairingSchema }]),
  ],
  controllers: [AbaPairingController],
  providers: [AbaPairingService, AbaPairingRepository],
  exports: [AbaPairingService]
})
export class AbaPairingModule {}