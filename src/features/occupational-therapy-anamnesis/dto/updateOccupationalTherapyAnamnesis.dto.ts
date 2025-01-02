import { PartialType } from '@nestjs/swagger';
import { CreateOccupationalTherapyAnamnesisDto } from './createOccupationalTherapyAnamnesis.dto';

export class UpdateOccupationalTherapyAnamnesisDto extends PartialType(CreateOccupationalTherapyAnamnesisDto) {}
