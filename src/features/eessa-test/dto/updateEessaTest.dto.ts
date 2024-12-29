import { PartialType } from '@nestjs/swagger';
import { CreateEessaTestDto } from './createEessaTest.dto';

export class UpdateEessaTestDto extends PartialType(CreateEessaTestDto) {}
