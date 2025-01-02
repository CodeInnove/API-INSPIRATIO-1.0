import { Injectable } from '@nestjs/common';
import { CreateIncomeAssessmentDto } from './dto/createIncomeAssessment.dto';
import { UpdateIncomeAssessmentDto } from './dto/updateIncomeAssessment.dto';

@Injectable()
export class IncomeAssessmentService {
  create(createIncomeAssessmentDto: CreateIncomeAssessmentDto) {
    return 'This action adds a new incomeAssessment';
  }

  findAll() {
    return `This action returns all incomeAssessment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomeAssessment`;
  }

  update(id: number, updateIncomeAssessmentDto: UpdateIncomeAssessmentDto) {
    return `This action updates a #${id} incomeAssessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} incomeAssessment`;
  }
}
