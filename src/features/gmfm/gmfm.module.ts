import { Module } from '@nestjs/common';
import { GmfmService } from './gmfm.service';
import { GmfmController } from './gmfm.controller';
import { GmfmRepository } from './gmfm.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { GmfmSchema } from 'src/entities/gmfm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Gmfm', schema: GmfmSchema }
    ])
  ],
  providers: [GmfmService, GmfmRepository],
  controllers: [GmfmController],
})
export class GmfmModule {}
