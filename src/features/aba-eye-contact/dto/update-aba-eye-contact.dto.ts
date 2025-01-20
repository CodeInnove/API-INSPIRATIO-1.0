import { PartialType } from '@nestjs/swagger';
import { CreateAbaEyeContactDto } from './create-aba-eye-contact.dto';

export class UpdateAbaEyeContactDto extends PartialType(CreateAbaEyeContactDto) {}
