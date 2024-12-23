import { PartialType } from '@nestjs/swagger';
import { CreateAutismBehaviorChecklistDto } from './autismBehaviorChecklistCreate.dto';

export class UpdateAutismBehaviorChecklistDto extends PartialType(CreateAutismBehaviorChecklistDto) {}
