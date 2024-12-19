import { PartialType } from '@nestjs/swagger';
import { AffiliationDto, complaintAndDuration } from './create-anamnese_general.dto';


export class UpdateAnamneseGeneralDto extends PartialType(AffiliationDto) {}
