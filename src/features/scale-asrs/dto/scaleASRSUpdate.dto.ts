import { PartialType } from '@nestjs/swagger';
import { CreateScaleAsrDto } from './scaleASRSCreate.dto';

export class UpdateScaleAsrDto extends PartialType(CreateScaleAsrDto) {}
