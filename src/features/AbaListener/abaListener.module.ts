import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaListenerService } from './abaListener.service';
import { AbaListenerController } from './abaListener.controller';
import { AbaListener, AbaListenerSchema } from 'src/entities/AbaListener.entity';
import { AbaListenerRepository } from './abaListener.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaListener.name, schema: AbaListenerSchema }]),
  ],
  controllers: [AbaListenerController],
  providers: [AbaListenerService, AbaListenerRepository],
  exports: [AbaListenerService]
})
export class AbaListenerModule {}