import { PartialType } from '@nestjs/swagger';
import { CreateTableDto } from './incomeTableCreate.dto';

export class UpdateIncomeTableDto extends PartialType(CreateTableDto) {}
