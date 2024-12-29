import { Module } from '@nestjs/common';
import { OccupationalTherapyAnamnesisService } from './occupationalTherapyAnamnesis.service';
import { OccupationalTherapyAnamnesisController } from './occupationalTherapyAnamnesis.controller';

@Module({
  controllers: [OccupationalTherapyAnamnesisController],
  providers: [OccupationalTherapyAnamnesisService],
})
export class OccupationalTherapyAnamnesisModule {}
