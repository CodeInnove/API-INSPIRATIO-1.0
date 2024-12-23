import { PartialType } from '@nestjs/swagger';
import { CreateIncomeTableDto } from './incomeTableCreate.dto';

export class UpdateIncomeTableDto extends PartialType(CreateIncomeTableDto) {}
