import { PartialType } from '@nestjs/swagger';
import {CreateAfcpDto} from '../dto/create-anamnesis-for-cerebral-palsy.dto';

export class UpdateAfcpDto extends PartialType(CreateAfcpDto) {}
