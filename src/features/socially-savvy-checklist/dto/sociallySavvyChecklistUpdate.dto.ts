import { PartialType } from '@nestjs/swagger';
import { CreateSociallySavvyChecklistDto } from './sociallySavvyChecklistCreate.dto';

export class UpdateSociallySavvyChecklistDto extends PartialType(CreateSociallySavvyChecklistDto) {}
