import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbaToSitService } from './abaToSit.service';
import { AbaToSitController } from './abaToSit.controller';
import { AbaToSit, AbaToSitSchema } from 'src/entities/AbaToSit.entity';
import { AbaToSitRepository } from './abaToSit.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AbaToSit.name, schema: AbaToSitSchema }]),
  ],
  controllers: [AbaToSitController],
  providers: [AbaToSitService, AbaToSitRepository],
  exports: [AbaToSitService]
})
export class AbaToSitModule {}