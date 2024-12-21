import { PartialType } from '@nestjs/swagger';
import { CreateScaleAsrDto } from './create-scale-asr.dto';

export class UpdateScaleAsrDto extends PartialType(CreateScaleAsrDto) {}
