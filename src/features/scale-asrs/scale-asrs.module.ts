import { Module } from '@nestjs/common';
import { ScaleAsrsService } from './scale-asrs.service';
import { ScaleAsrsController } from './scale-asrs.controller';

@Module({
  controllers: [ScaleAsrsController],
  providers: [ScaleAsrsService],
})
export class ScaleAsrsModule {}
