import { PartialType } from '@nestjs/swagger';
import { CreatePortageGuidetoPreschoolEducationDto } from './create-portage-guideto-preschool-education.dto';

export class UpdatePortageGuidetoPreschoolEducationDto extends PartialType(CreatePortageGuidetoPreschoolEducationDto) {}
