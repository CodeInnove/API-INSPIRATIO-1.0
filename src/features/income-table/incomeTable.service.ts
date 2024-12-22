import { Injectable } from '@nestjs/common';
import { CreateIncomeTableDto } from './dto/incomeTableCreate.dto';
import { UpdateIncomeTableDto } from './dto/incomeTableUpdate.dto';

@Injectable()
export class IncomeTableService {
  create(createIncomeTableDto: CreateIncomeTableDto) {
    return 'This action adds a new incomeTable';
  }

  findAll() {
    return `This action returns all incomeTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomeTable`;
  }

  update(id: number, updateIncomeTableDto: UpdateIncomeTableDto) {
    return `This action updates a #${id} incomeTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} incomeTable`;
  }
}
