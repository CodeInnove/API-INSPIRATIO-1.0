import { Module } from '@nestjs/common';
import { AutisticTraitScalesService } from './autisticTraitScales.service';
import { AutisticTraitScalesController } from './autisticTraitScales.controller';

@Module({
  controllers: [AutisticTraitScalesController],
  providers: [AutisticTraitScalesService],
})
export class AutisticTraitScalesModule {}
