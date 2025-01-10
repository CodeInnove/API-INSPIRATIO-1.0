import { Module } from '@nestjs/common';
import { GmfmService } from './gmfm.service';
import { GmfmController } from './gmfm.controller';

@Module({
  controllers: [GmfmController],
  providers: [GmfmService],
})
export class GmfmModule {}
