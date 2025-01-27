import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateIncomeAssessmentDto } from './dto/createIncomeAssessment.dto';
import { UpdateIncomeAssessmentDto } from './dto/updateIncomeAssessment.dto';
import { QueryIncomeAssessmentDto } from './dto/queryincomeAssessment.dto';
import { IncomeAssessmentRepository } from './incomeAssessment.repository';
import { IIncomeAssessmentEntity } from 'src/entities/incomeAssessment.entity';

@Injectable()
export class IncomeAssessmentService {
   constructor(
      private readonly incomeAssessmentRepository: IncomeAssessmentRepository
    ) {}

  async create(incometable: CreateIncomeAssessmentDto): Promise<IIncomeAssessmentEntity> {
      try {
        return await this.incomeAssessmentRepository.create(incometable);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

  async findAll(query: QueryIncomeAssessmentDto) {
      try {
        return await this.incomeAssessmentRepository.findAll(query);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async findById(id: string) {
      try{
        return await this.incomeAssessmentRepository.findById(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async update(id: string, updateIncome: UpdateIncomeAssessmentDto) {
      try {
        return await this.incomeAssessmentRepository.update(id, updateIncome);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async delete(id: string){
      try {
        return await this.incomeAssessmentRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  }