import { PartialType } from '@nestjs/swagger';
import { CreatePsychopedagogicalAnamnesisDto } from './psychopedagogicalAnamnesisCreate.dto';

export class UpdatePsychopedagogicalAnamnesisDto extends PartialType(CreatePsychopedagogicalAnamnesisDto) {}
