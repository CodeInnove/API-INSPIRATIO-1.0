import { PartialType } from '@nestjs/swagger';
import { CreateScaleAsrsDto } from './scaleASRSCreate.dto';

export class UpdateScaleAsrDto extends PartialType(CreateScaleAsrsDto) {}

