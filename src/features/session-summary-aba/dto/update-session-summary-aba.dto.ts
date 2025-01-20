import { PartialType } from '@nestjs/swagger';
import { CreateSessionSummaryAbaDto } from './create-session-summary-aba.dto';

export class UpdateSessionSummaryAbaDto extends PartialType(CreateSessionSummaryAbaDto) {}
