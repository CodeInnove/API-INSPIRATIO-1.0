import { PartialType } from '@nestjs/swagger';
import { CreateChecklistDenverDto } from './create-checklist-denver.dto';

export class UpdateChecklistDenverDto extends PartialType(CreateChecklistDenverDto) {}
