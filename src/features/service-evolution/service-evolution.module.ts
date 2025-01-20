import { Module } from '@nestjs/common';
import { ServiceEvolutionService } from './service-evolution.service';
import { ServiceEvolutionController } from './service-evolution.controller';
import { ServiceEvolutionRepository } from './service-evolution.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceEvolutionSchema } from 'src/entities/service-evolution.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Service Evolution', schema: ServiceEvolutionSchema },
    ])
  ],
  providers: [ServiceEvolutionService, ServiceEvolutionRepository],
  controllers: [ServiceEvolutionController],
})
export class ServiceEvolutionModule {}
