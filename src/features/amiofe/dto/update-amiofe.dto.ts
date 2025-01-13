import { PartialType } from '@nestjs/swagger';
import { CreateAmiofeDto } from './create-amiofe.dto';

export class UpdateAmiofeDto extends PartialType(CreateAmiofeDto) {}
