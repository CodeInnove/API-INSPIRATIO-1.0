import { Module } from '@nestjs/common';
import { OccupationalTherapyAnamnesisService } from './occupationalTherapyAnamnesis.service';
import { OccupationalTherapyAnamnesisController } from './occupationalTherapyAnamnesis.controller';
import { OccupationalTherapyAnamnesisRepository } from './occupationalTherapyAnamnesis.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { OccupationalTherapyAnamnesisSchema } from 'src/entities/occupationalTherapyAnamnesis.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'OccupationalTherapyAnamnesis', schema: OccupationalTherapyAnamnesisSchema}
    ])
  ],
  providers: [OccupationalTherapyAnamnesisService, OccupationalTherapyAnamnesisRepository],
  controllers: [OccupationalTherapyAnamnesisController],
})
export class OccupationalTherapyAnamnesisModule {}
