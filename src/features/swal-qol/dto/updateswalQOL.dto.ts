import { PartialType } from '@nestjs/swagger';
import { CreateSwalQolDto } from './create-swal-qol.dto';

export class UpdateSwalQolDto extends PartialType(CreateSwalQolDto) {}
