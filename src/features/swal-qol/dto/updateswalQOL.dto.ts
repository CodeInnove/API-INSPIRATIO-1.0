import { PartialType } from '@nestjs/swagger';
import { CreateSwalQolDto } from './createswalQOL.dto';

export class UpdateSwalQolDto extends PartialType(CreateSwalQolDto) {}
