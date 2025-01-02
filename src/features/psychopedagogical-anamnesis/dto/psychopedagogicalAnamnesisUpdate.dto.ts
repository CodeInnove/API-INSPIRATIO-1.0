import { PartialType } from '@nestjs/swagger';
import { PsychopedagogicalAnamnesisCreateDto } from './psychopedagogicalAnamnesisCreate.dto';

export class UpdatePsychopedagogicalAnamnesisDto extends PartialType(PsychopedagogicalAnamnesisCreateDto) {}
