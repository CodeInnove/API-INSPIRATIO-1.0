import { PartialType } from '@nestjs/swagger';
import { CreateSessionSummaryAtDto } from './create-session-summary-at.dto';

export class UpdateSessionSummaryAtDto extends PartialType(CreateSessionSummaryAtDto) {}
