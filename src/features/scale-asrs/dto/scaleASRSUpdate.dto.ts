import { PartialType } from '@nestjs/swagger';
import { CreateScaleAsrsDTO } from './scaleASRSCreate.dto';

export class UpdateScaleAsrDto extends PartialType(CreateScaleAsrsDTO) {}
