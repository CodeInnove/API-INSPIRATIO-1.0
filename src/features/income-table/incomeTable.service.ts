import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/incomeTableCreate.dto';
import { IncomeTableRepository } from './incomeTables.repository';
import { UpdateIncomeTableDto } from './dto/incomeTableUpdate.dto';
import { IIncomeTableEntity } from 'src/entities/incomeTable.entity';
import { QueryIncomeTableDto } from './dto/incomeTableCreateQuery.dto';

@Injectable()
export class IncomeTableService {
   constructor(
      private readonly incomeTableRepository: IncomeTableRepository
    ) {}

  async create(incometable: CreateTableDto): Promise<IIncomeTableEntity> {
      try {
        return await this.incomeTableRepository.create(incometable);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

  async findAll(query: QueryIncomeTableDto) {
      try {
        return await this.incomeTableRepository.findAll(query);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async findById(id: string) {
      try {
        return await this.incomeTableRepository.findById(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async update(id: string, afcp: UpdateIncomeTableDto) {
      try {
        return await this.incomeTableRepository.update(id, afcp);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  
    async delete(id: string){
      try {
        return await this.incomeTableRepository.delete(id);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }
  }
