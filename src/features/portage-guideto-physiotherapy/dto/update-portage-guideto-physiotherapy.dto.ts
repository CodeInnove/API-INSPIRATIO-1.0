import { PartialType } from '@nestjs/swagger';
import { CreatePortageGuidetoPhysiotherapyDto } from './create-portage-guideto-physiotherapy.dto';

export class UpdatePortageGuidetoPhysiotherapyDto extends PartialType(CreatePortageGuidetoPhysiotherapyDto) {}
