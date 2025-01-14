import { PartialType } from '@nestjs/swagger';
import { CreateVbmappPeiDto } from './create-vbmapp-pei.dto';

export class UpdateVbmappPeiDto extends PartialType(CreateVbmappPeiDto) {}
