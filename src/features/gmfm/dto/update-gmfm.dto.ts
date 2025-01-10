import { PartialType } from '@nestjs/swagger';
import { CreateGmfmDto } from './create-gmfm.dto';

export class UpdateGmfmDto extends PartialType(CreateGmfmDto) {}
