import { Module } from '@nestjs/common';
import { EessaTestService } from './eessaTest.service';
import { EessaTestController } from './eessaTest.controller';

@Module({
  controllers: [EessaTestController],
  providers: [EessaTestService],
})
export class EessaTestModule {}
