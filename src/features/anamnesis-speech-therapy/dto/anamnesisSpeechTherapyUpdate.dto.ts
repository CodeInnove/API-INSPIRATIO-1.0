import { PartialType } from '@nestjs/swagger';
import { CreateAnamnesisSpeechTherapyDto } from './anamnesisSpeechTherapyCreate.dto';

export class UpdateAnamnesisSpeechTherapyDto extends PartialType(CreateAnamnesisSpeechTherapyDto) {}
