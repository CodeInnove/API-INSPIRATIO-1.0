import { PartialType } from '@nestjs/swagger';
import { CreateAutisticTraitScaleDto } from './createAutisticTraitScales.dto';

export class UpdateAutisticTraitScaleDto extends PartialType(CreateAutisticTraitScaleDto) {}
