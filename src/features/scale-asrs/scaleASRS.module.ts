import { Module } from '@nestjs/common';
import { ScaleAsrsService } from './scaleASRS.service';
import { ScaleAsrsController } from './scaleASRS.controller';

@Module({
  controllers: [ScaleAsrsController],
  providers: [ScaleAsrsService],
})
export class ScaleAsrsModule {}
