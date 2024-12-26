import { PartialType } from '@nestjs/swagger';
import { CreateScaleMchatDto } from './scaleMchatCreate.dto';

export class UpdateScaleMchatDto extends PartialType(CreateScaleMchatDto) {}
