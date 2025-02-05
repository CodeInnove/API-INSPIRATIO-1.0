import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaIntraverbalService } from './abaIntraverbal.service';
import { AbaIntraverbalController } from './abaIntraverbal.controller';
import { AbaIntraverbal, AbaIntraverbalSchema } from 'src/entities/AbaIntraverbal.entity';
import { AbaIntraverbalRepository } from './abaIntraverbal.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaIntraverbal.name, schema: AbaIntraverbalSchema }]),
  ],
  controllers: [AbaIntraverbalController],
  providers: [AbaIntraverbalService, AbaIntraverbalRepository],
  exports: [AbaIntraverbalService]
})
export class AbaIntraverbalModule {}