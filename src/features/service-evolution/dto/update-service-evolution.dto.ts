import { PartialType } from '@nestjs/swagger';
import { CreateServiceEvolutionDto } from './create-service-evolution.dto';

export class UpdateServiceEvolutionDto extends PartialType(CreateServiceEvolutionDto) {}
