import { Module } from '@nestjs/common';
import { AnamnesisForCerebralPalsyService } from './anamnesis-for-cerebral-palsy.service';
import { AfcpController } from './anamnesis-for-cerebral-palsy.controller'; 
import { AfcpRepository } from './afcp.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { AnamneseCerebralSchema } from 'src/entities/anamnesis-for-cerebral-palsy.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'afcp', schema: AnamneseCerebralSchema }])],
  controllers: [AfcpController],
  providers: [AnamnesisForCerebralPalsyService, AfcpRepository],
})
export class AnamnesisForCerebralPalsyModule {}
