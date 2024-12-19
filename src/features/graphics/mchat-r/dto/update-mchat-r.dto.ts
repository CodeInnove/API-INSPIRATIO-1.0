import { PartialType } from '@nestjs/swagger';
import { TotalDto } from './create-mchat-r.dto';

export class UpdateMchatRDto extends PartialType(TotalDto) {}
