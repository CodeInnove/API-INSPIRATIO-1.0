import { PartialType } from '@nestjs/swagger';
import { CreateAnamneseGeneralDto } from './create-anamnese_general.dto';

export class UpdateAnamneseGeneralDto extends PartialType(CreateAnamneseGeneralDto) {}
